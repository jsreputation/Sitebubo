(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{E1z8:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class i{}var u=e("pMnS"),o=e("MKJQ"),a=e("sZkV"),d=e("SVse");class r{constructor(l){this.router=l}ngOnInit(){}addDomain(){this.router.navigate(["add-site"])}changePlan(){this.router.navigate(["plans"],{replaceUrl:!0,queryParams:{newUser:!0}})}}var s=e("iInd"),c=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function f(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,23,"div",[["class","c-content"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,2,"ion-label",[["class","c-header"]],null,null,null,o.mb,o.w)),t["\u0275did"](2,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,["Welcome, Friend! "])),(l()(),t["\u0275eld"](4,0,null,null,8,"ion-label",[["class","c-welcome"]],null,null,null,o.mb,o.w)),t["\u0275did"](5,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,[" We hope this is the begining of a "])),(l()(),t["\u0275eld"](7,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,0,["long and fruitful friendship where"])),(l()(),t["\u0275eld"](9,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,0,[" we hope to provide you enough"])),(l()(),t["\u0275eld"](11,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,0,[" peace of mind. "])),(l()(),t["\u0275eld"](13,0,null,null,2,"ion-label",[["class","c-freecls"]],null,null,null,o.mb,o.w)),t["\u0275did"](14,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,["FREE"])),(l()(),t["\u0275eld"](16,0,null,null,4,"ion-label",[["class","c-plancls"]],null,null,null,o.mb,o.w)),t["\u0275did"](17,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](18,0,[""," plan"])),(l()(),t["\u0275eld"](19,0,null,0,1,"a",[],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.changePlan()&&t),t}),null,null)),(l()(),t["\u0275ted"](-1,null,["change"])),(l()(),t["\u0275eld"](21,0,null,null,2,"ion-button",[["block",""],["class","c-greenButton red"],["id","paypal-checkout"],["mode","md"],["size","large"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.addDomain()&&t),t}),o.S,o.c)),t["\u0275did"](22,49152,null,0,a.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"],size:[1,"size"]},null),(l()(),t["\u0275ted"](-1,0,["Get Started"]))],(function(l,n){l(n,22,0,"md","large")}),(function(l,n){l(n,18,0,n.component.details.name)}))}function m(l){return t["\u0275vid"](0,[(l()(),t["\u0275and"](16777216,null,null,1,null,f)),t["\u0275did"](1,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,1,0,n.component.details)}),null)}var p=e("aqp7"),g=e("og9c"),h=e("5miV"),b=e("/Lbi"),w=e("UEOg"),R=e("Kzq5"),C=e("TGN4"),v=e("LtMM"),S=e("tVJU"),I=e("9B/o"),y=e("mrSG"),N=e("HF2u"),D=e("xehS"),E=e("Tddt"),k=e("HTWg"),P=e("uSrh");class U{constructor(l,n,e,t,i,u,o,a){this.activatedRoute=l,this.storage=n,this.ionService=e,this.subscriptionAPI=t,this.events=i,this.cdr=u,this.generalService=o,this.transactionAPI=a,this.newUser=!1}ngOnInit(){this.initialize(),this.getPlanInfo()}ionViewWillEnter(){}initialize(){this.activatedRoute.queryParams.subscribe(l=>{console.log(l),l&&(void 0!==l.isNewUser&&(this.newUser=JSON.parse(l.isNewUser)),void 0!==l.isFreeTrial&&(this.isFreeTrial=JSON.parse(l.isFreeTrial)),this.platform=l.platform,this.status=l.status)})}getTransactionHistory(l,n){let e=[],t=0;return this.ionService.showLoading(),new Promise((i,u)=>{this.transactionAPI.getTransactionHistory(l,n).subscribe(l=>{this.ionService.closeLoading(),console.log(l),1===l.RESPONSECODE?(l.data&&l.data.length>0&&(this.details.invoice_pdf=l.data[0].invoice_pdf,this.details.lastpaymentAmount=l.data[0].amount,this.details.payment_method=l.data[0].payment_method,e=l.data,e.forEach(l=>{l.free_trial_transaction&&t++})),i(t)):u(null)},l=>{this.ionService.closeLoading(),this.ionService.presentToast("Error happened from server")})})}defineDisplayAndroid(){return new Promise((l,n)=>{let e;this.newUser&&1===this.subscriptionID?(e=1,console.log("free")):this.newUser||1!==this.subscriptionID?this.subscriptionID>1&&this.isFreeTrial?(e=4,console.log("trial")):this.firstPay&&this.subscriptionID>1?(e=3,console.log("pay")):(e=5,console.log("no")):(e=2,console.log("old")),l(e)})}defineDisplayIOS(){return new Promise(l=>{let n;n=this.newUser&&1===this.subscriptionID?1:this.newUser&&this.subscriptionID>1?5:this.newUser||1!==this.subscriptionID?5:2})}getPlanInfo(){return y.a(this,void 0,void 0,(function*(){this.storage.get("userInfo").then(l=>{this.subscriptionAPI.currentSubscription(l.id,l.token).subscribe(n=>{console.log(n.data),1===n.RESPONSECODE?this.storage.set("planInfo",n.data).then(()=>{this.events.publish("planInfo_set",n.data),this.subscriptionID=n.data.id;const e=n.data,t=e.price.toString().split(".");e.bigprc=t[0],e.smallprc=t[1],this.details=e,console.log(this.details),this.getTransactionHistory(l.id,l.token).then(l=>{this.firstPay=1===l,"ios"===this.details.platform?this.defineDisplayIOS().then(l=>{this.displayValue=l,this.cdr.detectChanges()}):this.defineDisplayAndroid().then(l=>{this.displayValue=l,this.cdr.detectChanges()})})}):this.ionService.showAlert("Error from Server",n.RESPONSE)},l=>{this.ionService.showAlert("Error from Server","Unable to call Server API")})})}))}toggleMenu(){this.ionService.toggleMenu()}openFeedback(){this.generalService.openFeedback()}}var T=e("xgBC"),Z=t["\u0275crt"]({encapsulation:0,styles:[["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{position:absolute;z-index:1}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-button.menu[_ngcontent-%COMP%]{right:0}ion-content[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{display:block}ion-content[_ngcontent-%COMP%]   ion-label.c-header[_ngcontent-%COMP%]{font-size:22px;font-weight:500;margin-bottom:20px}ion-content[_ngcontent-%COMP%]   ion-label.c-welcome[_ngcontent-%COMP%]{font-size:18px;margin-bottom:20px}"]],data:{}});function O(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,3,"ion-button",[["class","menu"],["mode","md"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.toggleMenu()&&t),t}),o.S,o.c)),t["\u0275did"](1,49152,null,0,a.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"]},null),(l()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["class","menu"],["slot","icon-only"]],null,null,null,o.gb,o.q)),t["\u0275did"](3,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null)],(function(l,n){l(n,1,0,"md")}),null)}function V(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,10,"ion-header",[["class","small-header"]],null,null,null,o.fb,o.p)),t["\u0275did"](1,49152,null,0,a.B,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](2,0,null,0,8,"ion-toolbar",[["class","toolbar"],["mode","md"]],null,null,null,o.Fb,o.P)),t["\u0275did"](3,49152,null,0,a.zb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"]},null),(l()(),t["\u0275eld"](4,0,null,0,6,"ion-buttons",[],null,null,null,o.T,o.d)),t["\u0275did"](5,49152,null,0,a.l,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](6,0,null,0,2,"ion-title",[],null,null,null,o.Db,o.N)),t["\u0275did"](7,49152,null,0,a.xb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,["Your membership"])),(l()(),t["\u0275and"](16777216,null,0,1,null,O)),t["\u0275did"](10,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,3,0,"md"),l(n,10,0,!e.newUser)}),null)}function M(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"ion-label",[["class","c-header"]],null,null,null,o.mb,o.w)),t["\u0275did"](1,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,["Welcome Friend!"]))],null,null)}function F(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"ion-label",[["class","c-welcome"],["style","margin:15px"]],null,null,null,o.mb,o.w)),t["\u0275did"](1,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,[" We hope this is the begining of a long and fruitful friendship where we hope to provide you enough peace of mind. "]))],null,null)}function _(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"ion-label",[["class","c-header"]],null,null,null,o.mb,o.w)),t["\u0275did"](1,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,["Successfully Downgraded!"]))],null,null)}function z(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"ion-label",[["class","c-welcome"],["style","margin:15px"]],null,null,null,o.mb,o.w)),t["\u0275did"](1,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,[" You have now been switched to your new plan "]))],null,null)}function A(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"ion-label",[["class","c-header"]],null,null,null,o.mb,o.w)),t["\u0275did"](1,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,["Successfully Upgraded"]))],null,null)}function x(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"ion-label",[["class","c-welcome"],["style","margin:15px"]],null,null,null,o.mb,o.w)),t["\u0275did"](1,49152,null,0,a.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,[" You can now start enjoying the benefilts on your new plan. "]))],null,null)}function L(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-first-free",[],null,null,null,m,c)),t["\u0275did"](1,114688,null,0,r,[s.m],{details:[0,"details"]},null)],(function(l,n){l(n,1,0,n.component.details)}),null)}function q(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-old-free",[],null,null,null,p.b,p.a)),t["\u0275did"](1,114688,null,0,g.a,[s.m,h.a],{details:[0,"details"]},null)],(function(l,n){l(n,1,0,n.component.details)}),null)}function W(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-first-pay",[],null,null,null,b.b,b.a)),t["\u0275did"](1,114688,null,0,w.a,[s.m],{details:[0,"details"]},null)],(function(l,n){l(n,1,0,n.component.details)}),null)}function B(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-free-trial",[],null,null,null,R.b,R.a)),t["\u0275did"](1,114688,null,0,C.a,[s.m],{details:[0,"details"],newUser:[1,"newUser"]},null)],(function(l,n){var e=n.component;l(n,1,0,e.details,e.newUser)}),null)}function J(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-no-trial",[],null,null,null,v.b,v.a)),t["\u0275did"](1,114688,null,0,S.a,[s.m,I.a],{details:[0,"details"],newUser:[1,"newUser"]},null)],(function(l,n){var e=n.component;l(n,1,0,e.details,e.newUser)}),null)}function H(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,30,"ion-content",[],null,null,null,o.bb,o.l)),t["\u0275did"](1,16384,null,0,d.n,[],{ngSwitch:[0,"ngSwitch"]},null),t["\u0275did"](2,49152,null,0,a.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275and"](16777216,null,0,1,null,M)),t["\u0275did"](4,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,F)),t["\u0275did"](6,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,_)),t["\u0275did"](8,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,z)),t["\u0275did"](10,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,A)),t["\u0275did"](12,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,x)),t["\u0275did"](14,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,L)),t["\u0275did"](16,278528,null,0,d.o,[t.ViewContainerRef,t.TemplateRef,d.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,q)),t["\u0275did"](18,278528,null,0,d.o,[t.ViewContainerRef,t.TemplateRef,d.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,W)),t["\u0275did"](20,278528,null,0,d.o,[t.ViewContainerRef,t.TemplateRef,d.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,B)),t["\u0275did"](22,278528,null,0,d.o,[t.ViewContainerRef,t.TemplateRef,d.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,J)),t["\u0275did"](24,278528,null,0,d.o,[t.ViewContainerRef,t.TemplateRef,d.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),t["\u0275eld"](25,0,null,0,5,"ion-fab",[["class","feedback-fab"],["horizontal","start"],["slot","fixed"],["vertical","bottom"]],null,null,null,o.db,o.m)),t["\u0275did"](26,49152,null,0,a.w,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),t["\u0275eld"](27,0,null,0,3,"ion-fab-button",[["class","feedback"],["mode","md"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.openFeedback()&&t),t}),o.cb,o.n)),t["\u0275did"](28,49152,null,0,a.x,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"]},null),(l()(),t["\u0275eld"](29,0,null,0,1,"ion-icon",[["class","feedback"]],null,null,null,o.gb,o.q)),t["\u0275did"](30,49152,null,0,a.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null)],(function(l,n){var e=n.component;l(n,1,0,e.displayValue),l(n,4,0,e.newUser&&"ios"===e.platform),l(n,6,0,e.newUser&&"ios"===e.platform),l(n,8,0,!e.newUser&&"downgrade"===e.status&&!e.isFreeTrial),l(n,10,0,!e.newUser&&"downgrade"===e.status),l(n,12,0,!e.newUser&&"upgrade"===e.status),l(n,14,0,!e.newUser&&"upgrade"===e.status),l(n,16,0,1),l(n,18,0,2),l(n,20,0,3),l(n,22,0,4),l(n,24,0,5),l(n,26,0,"start","bottom"),l(n,28,0,"md")}),null)}function j(l){return t["\u0275vid"](0,[(l()(),t["\u0275and"](16777216,null,null,1,null,V)),t["\u0275did"](1,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,H)),t["\u0275did"](3,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,1,0,e.details),l(n,3,0,e.details)}),null)}function K(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-subscription-welcome",[],null,null,null,j,Z)),t["\u0275did"](1,114688,null,0,U,[s.a,T.b,D.a,E.a,P.a,t.ChangeDetectorRef,N.a,k.a],null,null)],(function(l,n){l(n,1,0)}),null)}var Y=t["\u0275ccf"]("app-subscription-welcome",U,K,{},{},[]),G=e("s7LF"),Q=e("HlEa"),X=e("B0QU"),$=e("LtGu"),ll=e("5Bek"),nl=e("zMNK"),el=e("c9fC"),tl=e("7++P"),il=e("j1ZV");class ul{}e.d(n,"SubscriptionWelcomePageModuleNgFactory",(function(){return ol}));var ol=t["\u0275cmf"](i,[],(function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,Y]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,d.m,d.l,[t.LOCALE_ID,[2,d.x]]),t["\u0275mpd"](4608,G.q,G.q,[]),t["\u0275mpd"](4608,a.c,a.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,a.Fb,a.Fb,[a.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,a.Jb,a.Jb,[a.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,Q.a,Q.a,[t.LOCALE_ID,[2,"googleChartsVersion"],[2,"mapsApiKey"]]),t["\u0275mpd"](1073742336,d.b,d.b,[]),t["\u0275mpd"](1073742336,G.p,G.p,[]),t["\u0275mpd"](1073742336,G.f,G.f,[]),t["\u0275mpd"](1073742336,a.Bb,a.Bb,[]),t["\u0275mpd"](1073742336,s.q,s.q,[[2,s.v],[2,s.m]]),t["\u0275mpd"](1073742336,X.c,X.c,[]),t["\u0275mpd"](1073742336,$.a,$.a,[]),t["\u0275mpd"](1073742336,ll.c,ll.c,[]),t["\u0275mpd"](1073742336,nl.b,nl.b,[]),t["\u0275mpd"](1073742336,el.d,el.d,[]),t["\u0275mpd"](1073742336,tl.CountoModule,tl.CountoModule,[]),t["\u0275mpd"](1073742336,il.a,il.a,[]),t["\u0275mpd"](1073742336,ul,ul,[]),t["\u0275mpd"](1073742336,i,i,[]),t["\u0275mpd"](256,"googleChartsVersion","46",[]),t["\u0275mpd"](256,"mapsApiKey","AIzaSyCHjrW83Zc1vwk4mzxztYbvk2by0PQZoIE",[]),t["\u0275mpd"](256,X.b,{radius:70,outerStrokeWidth:10,innerStrokeWidth:5,showTitle:!1,showSubtitle:!1,showUnits:!1,showBackground:!1,startFromZero:!1},[]),t["\u0275mpd"](1024,s.k,(function(){return[[{path:"",component:U}]]}),[])])}))}}]);