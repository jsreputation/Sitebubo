import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Storage } from '@ionic/storage';
import { GeneralService } from './../../../services/generalComponents/general.service';
import { IongadgetService } from 'src/app/services/ionGadgets/iongadget.service';
import { SubscriptionApiService } from 'src/app/apis/subscription/subscription-api.service';
import { TransactionApiService } from 'src/app/apis/transaction/transaction-api.service';
import { Events } from 'src/app/services/events/events.service';
import { DomainApiService } from 'src/app/apis/domain/domain-api.service';
import { InAppPurchaseService } from 'src/app/services/in-app-purchase/in-app-purchase.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-subscription-welcome',
  templateUrl: './subscription-welcome.page.html',
  styleUrls: ['./subscription-welcome.page.scss'],
})
export class SubscriptionWelcomePage implements OnInit {
  newUser = false;
  subscriptionID: number;
  isFreeTrial: boolean;
  firstPay: boolean;
  displayValue: number;
  platform: string;
  status: string;
  details: any;
  oldPlan: string;
  newPlan: string;
  domainCounts: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private storage: Storage,
    private ionService: IongadgetService,
    private subscriptionAPI: SubscriptionApiService,
    private cdr: ChangeDetectorRef,
    private generalService: GeneralService,
    private transactionAPI: TransactionApiService,
    private router: Router,
    private purchaseService: InAppPurchaseService,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.initialize();
    this.getPlanInfo();
  }

  ionViewWillEnter() {
  }

  initialize() {
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log(params);
      if (params) {
        if (params.isNewUser !== undefined) {
          this.newUser = JSON.parse(params.isNewUser);
        }
        if (params.isFreeTrial !== undefined) {
          this.isFreeTrial = JSON.parse(params.isFreeTrial);
        }
        this.status = params.status;
        this.oldPlan = params.oldPlan;
        this.newPlan = params.newPlan;
      }
    });
  }

  getTransactionHistory(userID, token): any {
    let temp = []; let count = 0;
    return new Promise((resolve, reject) => {
      this.ionService.showLoading();
      this.transactionAPI.getTransactionHistory(userID, token).subscribe(result => {
        this.ionService.closeLoading();
        console.log(result);
        if (result.RESPONSECODE === 1) {
          if (result.data && result.data.length > 0) {
            this.details.invoice_pdf = result.data[0].invoice_pdf;
            this.details.lastpaymentAmount = result.data[0].amount;
            this.details.payment_method = result.data[0].payment_method;
            temp = result.data;
            temp.forEach((history) => {
                 count ++;
            });
          }
          resolve(count);
        } else {
          reject(null);
        }
      }, err => {
        this.ionService.closeLoading();
        this.ionService.presentToast('Error happened from server');
      });
    });

  }

  defineDisplay(): any {
    return new Promise((resolve) => {
      let temp: number;
      if (this.newUser && this.subscriptionID === 1) {
        temp = 1;
      } else if (this.subscriptionID > 1 && this.isFreeTrial) {
        temp = 4;
      } else if (!this.newUser && this.subscriptionID === 1) {
        temp = 2;
      } else {
        temp = 5;
      }
      resolve(temp);
    });
  }

  async getPlanInfo() {
    this.purchaseService.veryifyToken().then((res) => {
      this.storageService.setStorage(res);
      this.storage.get('userInfo').then((user) => {
        this.subscriptionAPI.currentSubscription(user.id, user.token).subscribe((result) => {
          console.log(result.data);
          if (result.RESPONSECODE === 1) {
              this.subscriptionID = result.data.id;
              this.newPlan = result.data.name + ' Plan';
              const temp = result.data;
              const arr = temp.price.toString().split('.');
              temp.bigprc = arr[0];
              temp.smallprc = arr[1];
              this.details = temp;
              console.log(this.details);
              this.getTransactionHistory(user.id, user.token).then((res) => {
                if (res === 1) {
                  this.firstPay = true;
                } else {
                  this.firstPay = false;
                }
                this.defineDisplay().then((another) => {
                  this.displayValue = another;
                  this.cdr.detectChanges();
                });
              });
          } else {
            this.ionService.showAlert('Error from Server', result.RESPONSE);
          }
        }, err => {
          this.ionService.showAlert('Error from Server', 'Unable to call Server API');
        });
      });
    });
  }

  toggleMenu() {
    this.ionService.toggleMenu();
  }

  openFeedback() {
    this.generalService.openFeedback();
  }

  gotoAddSite() {
    this.router.navigate(['add-site']);
  }

  gotoDomainList() {
    this.router.navigate(['domain-list']);
  }
}
