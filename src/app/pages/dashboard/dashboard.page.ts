import { Component, OnInit, ViewChild, ChangeDetectorRef, ViewChildren, OnDestroy, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { IonMenu, MenuController, NavController, ActionSheetController, AlertController } from '@ionic/angular';
import { GeneralService } from './../../services/generalComponents/general.service';
import { TempService } from './../../services/temp/temp.service';
import { AdmobService } from 'src/app/services/admob/admob.service';
import { SocketService } from 'src/app/services/socket/socket.service';
import { IongadgetService } from 'src/app/services/ionGadgets/iongadget.service';
import { PluginsApiService } from 'src/app/apis/plugins/plugins-api.service';
import { MonitorApiService } from 'src/app/apis/monitor/monitor-api.service';
import { DomainApiService } from 'src/app/apis/domain/domain-api.service';
import { UserApiService } from 'src/app/apis/user/user-api.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { IntparsePipe } from 'src/app/pipes/intparse/intparse.pipe';
import { ConstantsService } from 'src/app/constants/constants.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  providers: [IntparsePipe]
})
export class DashboardPage implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('userSetting', { static: false }) userMenu: IonMenu;
  @ViewChild('monitorSetting', { static: false }) monitorMenu: IonMenu;
  @ViewChildren('group') group: HTMLElement;
  @ViewChild('cpuTitle', { static: false }) cpuTitle: ElementRef<any>;
  @ViewChild('ramTitle', { static: false }) ramTitle: ElementRef<any>;
  @ViewChild('diskTitle', { static: false }) diskTitle: ElementRef<any>;
  orders = [];
  loading: any;
  userID: any;
  token: any;
  domainData: any;
  domainName: any;
  domainUserID: number;
  domainID: number;
  invitedUserList = [];
  invitableUsers: number;
  invitedErroMessage: string;
  notifications = [];
  countos = {
    seo: 0,
    conversion: 0,
    visitors: 0,
    speed: 0.0,
    brokens: 0
  };
  pluginData = [];
  fullReport: string;
  unreadCount: number;
  status: any = {};
  constructor(
    private storage: Storage,
    private router: Router,
    private domainAPI: DomainApiService,
    private ionService: IongadgetService,
    private menuCtrl: MenuController,
    private navCtrl: NavController,
    private userAPI: UserApiService,
    private generalService: GeneralService,
    private actionCtrl: ActionSheetController,
    private cdr: ChangeDetectorRef,
    private tempService: TempService,
    private monitorAPI: MonitorApiService,
    private admobservice: AdmobService,
    private pluginsAPI: PluginsApiService,
    private socketService: SocketService,
    private iab: InAppBrowser,
    private alertCtrl: AlertController,
    private intParse: IntparsePipe,
    private options: ConstantsService
  ) { }

  ngOnInit() {}

  ngOnDestroy() {
    this.socketService.removeAllDashboardHandlers(this.domainName);
  }

  ngAfterViewInit() {
    this.userMenu.ionWillOpen.subscribe(() => {
      this.getInvitedUserList();
    });
    this.monitorMenu.ionWillOpen.subscribe(() => {
      this.getAnalyticsInfo();
    });
  }

  ionViewWillEnter() {
    this.initData();
  }

  initData() {
      const params = this.tempService.dashboardParams;
      console.log(params);
      if (params) {
        this.domainName = params.domainName;
        this.domainUserID = params.domainUserID;
        this.domainID = params.domainID;
        this.storage.get('userInfo').then((user) => {
          if (user) {
            this.userID = user.id;
            this.token = user.token;
            this.defineAdmob();
            this.getDomainDetails();
            this.getNotifications();
          } else {
            this.router.navigate(['welcome'], { replaceUrl: true });
          }
        });
      } else {
        this.router.navigate(['domain-list'], { replaceUrl: true });
      }
  }

  defineAdmob() {
    this.storage.get('planInfo').then((info) => {
      if (info.id === 1) {
        this.admobservice.showAdmobBanner();
      }
    });
  }

  getDomainDetails() {
    this.domainAPI.detailedDomain(this.domainName, this.domainUserID, this.userID, this.token).subscribe((result) => {
      console.log(result);
      if (result.RESPONSECODE === 1) {
        result.data['seo-score'].seoscore = parseInt(result.data['seo-score'].seoscore, 10);
        this.domainData = result.data;
        this.orders = result.data['monitor-orders'];
        this.cdr.detectChanges();
        this.fullReport = result.data['full-report'].fullreport;
        if (result.data['broken-links']) {
          this.tempService.saveBrokenLinksCount(result.data['broken-links'].count);
        } else {
          this.tempService.saveBrokenLinksCount(0);
        }
        if (result.data.server) {
          this.changeStatusBarColor(result.data.server);
        }
        // Socket Setting
        this.socketService.defineDashboardEvents(this.domainName, this.domainData);
      } else {
        this.ionService.presentToast(result.RESPONSE);
      }
    }, err => {
      this.ionService.presentToast('Fetching Domain Data Failed');
    });
  }

  changeStatusBarColor(display) {
    this.status.cpu = this.selectColor(this.intParse.transform(display.cpu));
    this.cpuTitle.nativeElement.style.color = this.selectColor(this.intParse.transform(display.cpu));
    this.status.ram = this.selectColor(this.intParse.transform(display.ram_used));
    this.ramTitle.nativeElement.style.color = this.selectColor(this.intParse.transform(display.ram_used));
    this.status.disk = this.selectColor(this.intParse.transform(display.disk));
    this.diskTitle.nativeElement.style.color = this.selectColor(this.intParse.transform(display.disk));
  }

  selectColor(score) {
    if (score < 30) {
      return this.options.safeStatus.outline;
    } else if (score >= 30 && score < 80) {
      return this.options.warningStatus.outline;
    } else {
      return this.options.dangerStatus.outline;
    }
  }

  getNotifications() {
    this.generalService.getNotifications(this.domainName, this.domainUserID, this.userID, this.token).then((result) => {
      console.log(result);
      if (result) {
        this.notifications = result.notifications;
        this.countUnreadCounts().then(async (count) => {
          await this.tempService.saveUnreadCount(count).then((res) => {
            this.unreadCount = count;
          });
        });
        this.cdr.detectChanges();
      } else {
        this.notifications = [];
        this.unreadCount = 0;
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  countUnreadCounts(): Promise<number> {
    return new Promise((resolve, reject) => {
      let count = 0;
      this.notifications.forEach((element) => {
        if (element.view) {
          count ++;
        }
      });
      resolve(count);
    });
  }

  openNotificationModal() {
      this.generalService.openNotifications(this.notifications, 0).then((result) => {
        if (result) {
          this.generalService.updateNotifications(this.domainName, this.userID, this.token).then((res) => {
            if (res) {
              this.unreadCount = 0;
              this.cdr.detectChanges();
            }
          });
        }
      }).catch(err => {
        console.log(err);
    });
  }

  getAnalyticsInfo() {
    this.pluginsAPI.listplugins(this.userID, this.domainUserID, this.domainID, this.token).subscribe((result) => {
      console.log(result);
      if (result.RESPONSECODE === 1) {
        this.pluginData = result.data.plugins;
      } else {
        this.ionService.presentToast('No Result from Server');
      }
    }, err => {
      this.ionService.presentToast('Server API Erroron Google Analytics');
    });
  }

  getInvitedUserList() {
    this.userAPI.listeInvitedUser(this.domainName, this.userID, this.token).subscribe((result) => {
      console.log(result);
      if (result.RESPONSECODE === 1 && result.RESPONSE !== 'There is no user added') {
        if (result.data) {
          this.invitedUserList = result.data;
        } else {
          this.invitedUserList = [];
        }
        this.invitableUsers = result['invitable-users'];
        this.cdr.detectChanges();
      } else {
        if (result.RESPONSE === 'There is no user added') {
          this.invitableUsers = result['invitable-users'];
          this.invitedErroMessage = 'You have no invited users for this domain.';
        } else {
          this.ionService.presentToast(result.RESPONSE);
        }
      }
    });
  }

  inviteUser() {
    if (this.invitedUserList.length >= this.invitableUsers) {
      // tslint:disable-next-line: max-line-length
      const question = `Sorry. You are allowed to add only ${this.invitableUsers} members. Please upgrade your current plan to add more users.`;
      this.generalService.askToUpgrade(question);
    } else {
      this.generalService.showInviteUserModal(this.domainUserID, this.domainName).then((result) => {
        if (result) {
          this.getInvitedUserList();
          this.ionService.presentToast('Member has been invited');
        }
      });
    }
  }

  gotoUpgrade() {
    this.router.navigate(['plans']);
  }

  async deleteUser(inviteID, inviteName ) {
    const action = await this.actionCtrl.create({
      header: 'Are you sure you want to remove this member?',
      buttons: [
        {
          text: 'Yes',
          icon: 'checkmark',
          handler: () => {
            this.ionService.showLoading();
            this.userAPI.deleteInviteUser(inviteID, this.userID, this.token).subscribe((result) => {
              // console.log(result);
              this.ionService.closeLoading();
              if (result.RESPONSECODE === 1) {
                this.getInvitedUserList();
                this.ionService.presentToast('Member successfully removed');
                this.cdr.detectChanges();
              } else {
                this.ionService.presentToast(result.REPONSE);
              }
            }, err => {
              this.ionService.closeLoading();
              this.ionService.presentToast('Error occured while deleting the invited user');
            });
          }
        },
        {
          text: 'No',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });
    await action.present();
  }

  resendInvitation(email) {
    this.userAPI.resendInvitationEmail(email, this.domainName, this.domainUserID, this.userID, this.token).subscribe((result) => {
      console.log(result);
      if (result.RESPONSECODE === 1) {
        this.ionService.presentToast('Resent invitation email successfully');
      } else {
        this.ionService.presentToast(result.RESPONSE);
      }
    }, err => {
      this.ionService.presentToast('Error from server API');
    });
  }

  toogleUserMenu() {
    this.userMenu.toggle();
    this.closeAllMenu();
  }

  toggleMainMenu() {
    this.monitorMenu.disabled = true;
    this.menuCtrl.enable(true, 'totalMenu');
    this.ionService.toggleMenu();
  }

  toogleMonitorMenu() {
    this.monitorMenu.disabled = false;
    this.monitorMenu.toggle();
    this.menuCtrl.enable(false, 'totalMenu');
    this.closeAllMenu();
  }

  ionViewWillLeave() {
    this.monitorMenu.disabled = true;
    this.menuCtrl.enable(true, 'totalMenu');
    this.admobservice.removeBanner();
  }

  closeAllMenu(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.monitorMenu.close();
      this.userMenu.close();
      this.menuCtrl.close('totalMenu');
      resolve(true);
    });
  }

  openFullReport() {
    // console.log(this.fullReport);
    this.iab.create(this.fullReport, '_blank', 'closebuttoncaption=back');
    // window.open(this.fullReport, '_blank');
  }

  dismissUserSetting() {
   this.userMenu.close();
  }

  dismissMonitorSetting() {
    this.monitorMenu.close();
  }

  goback() {
    this.navCtrl.back();
  }

  jumpToTabs(page) {
    console.log(this.domainData);
    this.tempService.saveDashboardData(this.domainData).then((result) => {
      if (result) {
        if (page === 'expire' || page === 'link' || page === 'overview' || page === 'analytics') {
          this.router.navigate(['tabs/more'], { queryParams: {
            pageName: page
          } });
        } else {
          this.router.navigate(['tabs/' + page]);
        }
      }
    });
  }

  onRenderItems(event) {
    const temp1 = this.orders[event.detail.from];
    const temp2 = this.orders[event.detail.to];
    this.orders[event.detail.to] = temp1;
    this.orders[event.detail.from] = temp2;
    event.detail.complete();
    this.updateCardOrders().then((result) => {
      if (result) {
      }
    }).catch(err => {
    });
  }

  updateCardOrders() {
    return new Promise((resolve, reject) => {
      this.monitorAPI.updateMonitorOrders(JSON.stringify(this.orders), this.domainID, this.userID, this.token).subscribe((result) => {
        console.log(result);
        if (result.RESPONSECODE === 1) {
          resolve(true);
        } else {
          this.ionService.presentToast(result.RESPONSE);
          reject(false);
        }
      }, err => {
        this.ionService.presentToast('Updating Error from the server');
        reject(false);
      });
    });
  }

 updateReportInfo(event, id, username) {
    console.log(event.detail.checked);
    let emailReport: number;
    if (event.detail.checked) {
      emailReport = 1;
    } else {
      emailReport = 0;
    }
    this.userAPI.updateInvitedUser(emailReport, id, this.userID, this.token).subscribe((result) => {
      if (result.RESPONSECODE === 1) {
        if (emailReport) {
          this.ionService.presentToast('You have activated ' + username + '\'s report');
        } else {
          this.ionService.presentToast('You have deactivated ' + username + '\'seport');
        }
      } else {
        this.ionService.presentToast('Error occured while changing ' + username + '\'s report');
      }
    });
  }

  connectPlugin(monitor, name, connection) {
    if (connection) {
      this.generalService.confirmDisconnect(name).then((result) => {
        console.log(result);
        if (result) {
          this.disconnectPlugin('google-analytics');
        }
      });
    } else {
      if (monitor === 'google-analytics') {
        this.generalService.connectGoogleAnalytics(monitor, this.domainID, this.domainUserID, this.userID, this.token).then((result) => {
          this.getAnalyticsInfo();
          this.getDomainDetails();
        });
      }
    }
  }

  disconnectPlugin(monitor) {
    this.pluginsAPI.disconnectPlugin(monitor, this.userID, this.domainID, this.domainUserID, this.token).subscribe((res) => {
      if (res.RESPONSECODE === 1) {
        if (monitor === 'google-analytics') {
          this.ionService.presentToast('Google Analytics monitor has been disconnected');
        } else if (monitor === 'server-monitor') {
          this.ionService.presentToast('Server monitor has been disconnected');
        }
        this.getAnalyticsInfo();
        this.getDomainDetails();
      } else {
        this.ionService.presentToast(res.RESPONSE);
      }
    }, err => {
      this.ionService.presentToast('Server API Problem');
    });
  }

  connectServerMonitor(connection, verified) {
    console.log(connection , verified);
    if (!connection && !verified) {
      this.confirmKeyForServerMonitor();
    } else if (connection && !verified) {
      this.generalService.showSeverMonitorConnectionModal().then(res => {
        if (res) {
          this.getAnalyticsInfo();
          this.getDomainDetails();
        }
      });
    } else {
      this.disconnectPlugin('server-monitor');
    }
  }

  async confirmKeyForServerMonitor() {
    const alert = await this.alertCtrl.create({
      header: 'Select Platform',
      mode: 'ios',
      inputs: [
        {
          type: 'radio',
          label: 'Linux',
          value: 'Linux',
          checked: true
        },
        {
          type: 'radio',
          label: 'Windows',
          value: 'Windows'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Okay'
        }
      ]
    });
    alert.onDidDismiss().then((res) => {
      console.log(res.data.values);
      this.generalService.connectServerMonitor(this.userID, this.token, res.data.values).then((res) => {
        this.getAnalyticsInfo();
        this.getDomainDetails();
      });
    });
    await alert.present();
  }
}
