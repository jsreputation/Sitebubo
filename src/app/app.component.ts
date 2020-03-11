import { Component, ChangeDetectorRef } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// modules
import { Storage } from '@ionic/storage';
import { FCM } from '@ionic-native/fcm/ngx';
import { Router } from '@angular/router';
// api
import { AuthApiService } from './apis/auth/auth-api.service';
// services
import { GeneralService } from './services/generalComponents/general.service';
import { StorageService } from './services/storage/storage.service';
import { IongadgetService } from './services/ionGadgets/iongadget.service';
import { NetworkService } from './services/network/network.service';
import { Events } from './services/events/events.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  email: string;
  plan: string;
  domainCount: number;
  showMenu = false;
  newUser: boolean;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private storage: Storage,
    private authAPI: AuthApiService,
    private generalService: GeneralService,
    private events: Events,
    private cdr: ChangeDetectorRef,
    private ionService: IongadgetService,
    private storageService: StorageService,
    private network: NetworkService
  ) {
      this.network.initNetwork();
      this.listenEvents();
      this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.veryifyToken().then((result) => {
            if (result) {
                console.log(result);
                this.storageService.setStorage(result).then(() => {
                    this.generalService.defineInitialRoutering();
                });
            }
        }).catch((err) => {
        });
    });
  }

  veryifyToken() {
        return new Promise((resolve, reject) => {
            this.storage.get('userInfo').then((user) => {
                if (user) {
                    this.authAPI.verifyToken(user.token).subscribe((result) => {
                        if (result.RESPONSECODE === 1) {
                            this.newUser = result.data.user.new_user;
                            this.email = result.data.user.email;
                            this.domainCount = result.data.domain.current_domains;
                            resolve(result.data);
                        } else {
                            this.generalService.logOut();
                            this.router.navigate(['welcome'], {replaceUrl: true});
                            reject('error');
                        }
                    });
                } else {
                    this.generalService.logOut();
                    this.router.navigate(['welcome'], { replaceUrl: true });
                    reject('error');
                }
            });
        });
    }

    listenEvents() {
        this.events.subscribe('denied_token', () => {
            this.ionService.closeLoading();
        });

        this.events.subscribe('userInfo_set', (user) => {
            console.log('userInfo set', user);
            this.email = user.email;
            this.newUser = user.new_user;
            this.storage.set('userInfo', user);
            this.cdr.detectChanges();
        });

        this.events.subscribe('planInfo_set', (info) => {
            console.log('planInfo set', info);
            this.storage.set('planInfo', info);
            this.cdr.detectChanges();
        });

        this.events.subscribe('domainInfo_set', (info) => {
            this.domainCount = info.current_domains;
            console.log('domainInfo set', info);
            this.storage.set('domainInfo', info);
            this.cdr.detectChanges();
        });

        this.events.subscribe('log_out', () => {
            this.showMenu = false;
            this.cdr.detectChanges();
        });

    }

    openDomainList() {
        this.router.navigate(['domain-list']);
    }

    openMembership() {
        this.router.navigate(['view-membership']);
    }

    openMyProfile() {
        this.generalService.openMyProfile();
    }

    openNotificationSettings() {
        this.router.navigate(['notification-setting']);
    }

    openFeedback() {
        this.generalService.openFeedback();
    }

    openRating() {
        this.generalService.openRating();
    }

    logout() {
        this.generalService.logOut();
        this.events.publish('log_out', true);
    }

    ChangePlan() {
        this.router.navigate(['plans']);
    }
}