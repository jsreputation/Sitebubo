import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, of } from 'rxjs';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
// services
import { TempService } from './../../../services/temp/temp.service';
import { AdmobService } from 'src/app/services/admob/admob.service';
import { SocketService } from 'src/app/services/socket/socket.service';
import { delay, takeUntil, concatMap } from 'rxjs/operators';
import { IntparsePipe } from 'src/app/pipes/intparse/intparse.pipe';

@Component({
  selector: 'app-domain-scan',
  templateUrl: './domain-scan.page.html',
  styleUrls: ['./domain-scan.page.scss'],
  providers: [IntparsePipe]
})
export class DomainScanPage implements OnInit, OnDestroy {
  @ViewChild('results', { static: false }) results: ElementRef<any>;
  userID: number;
  planID: number;
  action: any;
  token: any;
  domainName: any;
  percentage = 0;
  progresShow = 0;  completed = false;
  tempResult: any;
  status = {
    started: false,
    process: false,
    finished: false
  };
  pushes = [];
  currentMonitor: string;
  title: string;
  private dataStream: Subject<any> = new Subject();
  private unsubscribeAll: Subject<any> = new Subject();

  constructor(
    private storage: Storage,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tempService: TempService,
    private admobservice: AdmobService,
    private socketService: SocketService,
    private backgroundmode: BackgroundMode,
    private intparse: IntparsePipe
    ) {
      this.admobservice.removeBanner();
      this.backgroundmode.enable();
      this.initData();
    }

  ngOnInit() {
    this.fnHandler = this.fnHandler.bind(this);
    this.dataStream.pipe(
      takeUntil(this.unsubscribeAll),
      concatMap(x => {
        if (x.monitor === 'Web Site Scanning' && x.status === 'Started') {
          return of(x);
        } else {
          return of(x).pipe(
            concatMap((data) => of(data).pipe(delay(800)))
          );
        }
      })
    ).subscribe(data => {
      console.log(data);
      if (data.monitor === 'Web Site Scanning' && data.status === 'Finished') {
        setTimeout(() => {
          this.defineRoutering();
        }, 1500);
      } else {
        if (data.monitor === 'Web Site Scanning' && data.status === 'Started' ) {
          this.status.started = true;
        } else {
          this.tempResult = data;
          this.status.process = true;
          this.doTricksWithUI();
        }
      }
    });
  }

  doTricksWithUI() {
      let interval: number;
      if (this.action === 'addDomain') {
        interval = 0.01724;
      } else if (this.action === 'security-scan') {
        interval = 0.071423;
      } else if (this.action === 'speed-scan') {
        interval = 0.07692;
      } else if (this.action === 'seo-scan') {
        interval = 0.041666;
      }
      this.percentage  = this.percentage + interval;
      this.progresShow = this.intparse.transform(this.percentage * 100);
      this.addNewMonitor();
  }

  ngOnDestroy() {
    this.socketService.removeHandler('web-scanning');
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  initData() {
    this.storage.get('userInfo').then((user) => {
      if ( user ) {
        this.userID = user.id;
        this.token = user.token;
        this.storage.get('planInfo').then((info) => {
          this.planID = info.id;
        });
        this.activatedRoute.queryParams.subscribe(params => {
          if (params) {
            this.action = params.action;
            if (params.action === 'addDomain') {
              const parameter = {
                user_id: this.userID,
                domain_name: params.domainName,
                domain_id: parseInt(params.domain_id, 10)
              };
              this.title = 'Web Scan';
              this.domainName = params.domainName;
              this.startWebSocket(parameter, 'full-scan');
            } else {
              const parameter = {
                user_id: this.userID,
                domain_name: this.tempService.dashboardParams.domainName,
                domain_id: this.tempService.dashboardParams.domainID
              };
              this.domainName = this.tempService.dashboardParams.domainName;
              if (params.action === 'seo-scan') {
                this.title = 'SEO Scan';
                this.startWebSocket(parameter, 'seo-scan');
              } else if (params.action === 'speed-scan') {
                this.title = 'Speed Scan';
                this.startWebSocket(parameter, 'speed-scan');
              } else if (params.action === 'security-scan') {
                this.title = 'Security Scan';
                this.startWebSocket(parameter, 'security-scan');
              }
            }
          }
        });
      }
    });
  }


  changelabelOfCurrentMonitor() {
    setTimeout(() => {
      this.tempResult.status = 'in Progress';
    }, 1000);
  }

  addNewMonitor() {
    let ele = `<div class='special'><ion-label class="slide-in-bottom">${ this.tempResult.status } ...`;
    ele += `</ion-label>`;
    // tslint:disable-next-line: max-line-length
    ele += `<ion-label class="slide-in-bottom">${ this.tempResult.result }<ion-label><svg  xmlns="http://www.w3.org/2000/svg" class="check" width="166" height="151" viewBox="0 0 166 150.9">`;
    ele += `<path d="M0.3 96l62.4 54.1L165.6 0.3"/></svg></div>`;
    this.results.nativeElement.insertAdjacentHTML('beforeend', ele);
  }

  fnHandler(data) {
    this.dataStream.next(data);
  }

  startWebSocket(parameter, action) {
    if (action === 'full-scan') {
      this.socketService.defineEventHandlers('web-scanning', this.fnHandler);
      this.socketService.websiteScan(parameter);
    } else if (action === 'security-scan') {
      this.socketService.emitSecurityScan(parameter, this.fnHandler);
    } else if (action === 'seo-scan') {
      this.socketService.emitSeoScanning(parameter, this.fnHandler);
    } else if (action === 'speed-scan') {
      this.socketService.emitPageSpeed(parameter, this.fnHandler);
    }
  }

  defineRoutering() {
    this.completed = true;
    this.progresShow = 100;
    this.percentage = 1;
    let route: string;
    if (this.action === 'addDomain') {
      route = 'domain-list';
    } else if (this.action === 'speed-scan') {
      route = 'tabs/speed';
    } else if (this.action === 'security-scan') {
      route = 'tabs/security';
    } else if (this.action === 'seo-scan') {
      route = 'tabs/seo';
    }
    if (this.planID === 1) {
      this.admobservice.showInterstitial().then(() => {
        setTimeout(() => {
          this.router.navigate([route], { replaceUrl: true, queryParams: { reload: true } });
        }, 2000);
      });
    } else {
      setTimeout(() => {
        this.router.navigate([route], { replaceUrl: true, queryParams: { reload: true } });
      }, 2000);
    }
  }
}
