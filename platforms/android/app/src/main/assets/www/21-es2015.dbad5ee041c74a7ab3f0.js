(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"vRU+":function(n,l,e){"use strict";e.r(l);var t=e("8Y7J");class i{}var o=e("pMnS"),a=e("MKJQ"),u=e("sZkV"),d=e("SVse"),r=e("s7LF"),s=e("mrSG"),c=e("kScs"),g=e("YCZo"),m=e("SPri"),p=e("HF2u"),f=e("E2f4"),h=e("nBjy"),v=e("xehS");class b{constructor(n,l,e,t,i,o,a,u,d){this.platform=n,this.fb=l,this.fcm=e,this.formBuilder=t,this.router=i,this.generalService=o,this.ionService=a,this.storageService=u,this.authAPI=d,this.email="",this.pwd="",this.readyForSubmit=!1,this.facebookReady=!1,this.invalidEmail=!1,this.invalidPassword=!1,this.validationMessages={email:[{type:"required",message:"Email is required."},{type:"pattern",message:"Please enter a valid email."}],password:[{type:"required",message:"Password is required."},{type:"minlength",message:"Password must be at least 6 characters long."}]},this.validateEmail=!1,this.validatePassword=!1}ngOnInit(){this.initForm(),this.getToken()}getToken(){this.platform.ready().then(()=>{this.fcm.subscribeToTopic("all"),this.fcm.getToken().then(n=>{console.log("Token=====================  ",n),this.deviceID=n,this.deviceType=n.split(":").length>1?"I":"A"}),this.fcm.onTokenRefresh().subscribe(n=>{this.deviceID=n,this.deviceType=n.split(":").length>1?"I":"A"})})}initForm(){this.validateSigninform=this.formBuilder.group({email:new r.c("",r.o.compose([r.o.required,r.o.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),password:new r.c("",r.o.compose([r.o.minLength(6),r.o.required]))})}setEmailValidation(n){this.validateEmail=n,!1===n&&(this.invalidEmail=!1)}setPasswordValidation(n){this.validatePassword=n,!1===n&&(this.invalidPassword=!1)}onSigninSubmit(){this.validateEmail=!0,this.validatePassword=!0,this.validateSigninform.valid&&this.DoSignIn()}openSignup(){this.router.navigate(["signup"])}openForgot(){this.generalService.openForgotPassword()}DoSignIn(){this.readyForSubmit=!0;const n=c.Md5.hashStr(this.pwd);console.log(this.deviceID),this.authAPI.login(this.email,n,this.deviceID,this.deviceType).subscribe(n=>{console.log(n),1===n.RESPONSECODE?0===(n=n.data).user.verified?(this.readyForSubmit=!1,this.router.navigate(["verifyemail"],{queryParams:{userID:n.user.id}})):this.storageService.setStorage(n).then(n=>{n&&this.generalService.defineInitialRoutering()}):"Couldn't find your mail Account"===n.RESPONSE?(this.extraError=n.RESPONSE,this.readyForSubmit=!1,this.invalidEmail=!0):"Wrong password. Try again"===n.RESPONSE?(this.readyForSubmit=!1,this.invalidPassword=!0):(this.extraError=n.RESPONSE,this.readyForSubmit=!1,this.invalidEmail=!0)},n=>{this.readyForSubmit=!1,this.ionService.presentToast("Log In Failed due to bad server"),this.readyForSubmit=!1,console.log(n)})}logInFB(){this.validateEmail=!1,this.validatePassword=!1,this.fb.getLoginStatus().then(n=>{"connected"===n.status?this.fb.logout().then(()=>{this.logInFBStep2()}):this.logInFBStep2()})}logInFBStep2(){this.fb.login(["public_profile","email"]).then(n=>{"connected"===n.status?this.getUserDetail(n.authResponse.userID):(this.ionService.presentToast("Facebook Login Failed"),this.facebookReady=!1)}).catch(n=>{this.facebookReady=!1})}getUserDetail(n){this.fb.api("/"+n+"/?fields=id,email,name,picture,gender",["public_profile"]).then(n=>{n?this.facebookSignUp(n.email,n.name):(this.ionService.presentToast("Your account might not be valid enough"),this.facebookReady=!1)}).catch(n=>{this.ionService.presentToast(JSON.stringify(n)),this.facebookReady=!1})}facebookSignUp(n,l){this.authAPI.facebookSignUp(n,l,this.deviceID).subscribe(l=>s.a(this,void 0,void 0,(function*(){this.facebookReady=!0,console.log(l),1===l.RESPONSECODE?this.facebookSignIn(n):"Email Already Exists"===l.RESPONSE?this.facebookSignIn(n):(this.facebookReady=!1,this.ionService.presentToast(l.RESPONSE))})),n=>{this.facebookReady=!1,this.ionService.presentToast("Server API Problem")})}facebookSignIn(n){this.authAPI.facebookLogIn(n,this.deviceID).subscribe(n=>{console.log(n),this.facebookReady=!1,1===n.RESPONSECODE?0===(n=n.data).user.verified?(this.readyForSubmit=!1,this.router.navigate(["verifymail"],{queryParams:{userID:n.user.id}})):this.storageService.setStorage(n).then(n=>{n&&this.generalService.defineInitialRoutering()}):this.ionService.presentToast("Sign In by Facebook Failed due to bad response")},n=>{this.facebookReady=!1,this.ionService.presentToast("Sign In by Facebook Failed due to bad server")})}}var C=e("iInd"),P=t["\u0275crt"]({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]{--background:transparent}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]{width:100%}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{background-image:url(login_header.8905e106ef689c9313c0.png)!important;background-size:100% 100%;background-repeat:no-repeat!important;width:100%;min-height:33vh;display:-webkit-box;display:flex;align-content:center!important;-webkit-box-align:center;align-items:center}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:77%;padding-bottom:2%;padding-right:2%;display:block;margin:auto}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.email-login[_ngcontent-%COMP%]{background-image:url(login_footer.b7ad487681981e97d954.png)!important;background-color:#fff;background-size:contain;background-repeat:no-repeat!important;background-position-y:bottom;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;justify-content:space-around;min-height:67vh;padding-left:5%;padding-right:5%;padding-bottom:15px}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.email-login[_ngcontent-%COMP%]   .pageName[_ngcontent-%COMP%]{display:block;font-size:24px;font-weight:700;padding-left:5%}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.email-login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:start;justify-content:flex-start}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.email-login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{--border-color:transparent;padding-top:3%}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.email-login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{margin-top:15px}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.email-login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin:0;color:#757575}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.email-login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{margin-left:3%;--border-color:transparent;border-left:.5px solid #c2c3c5;--padding-start:14px;height:48px;--padding-end:14px}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.email-login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-button.login[_ngcontent-%COMP%]{width:84%;height:53px;font-size:19px;margin:20px auto auto;display:block;--border-radius:30px;text-transform:none}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.email-login[_ngcontent-%COMP%]   div.social-login[_ngcontent-%COMP%]{width:100%;margin-top:2vh;text-align:center;display:block}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.email-login[_ngcontent-%COMP%]   div.social-login[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{padding-left:15%;padding-right:15%;display:-webkit-box;display:flex;align-content:center;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;margin-bottom:2vh}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.email-login[_ngcontent-%COMP%]   div.social-login[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]   .each[_ngcontent-%COMP%]{width:20%;height:1px;background-color:#000}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.email-login[_ngcontent-%COMP%]   div.social-login[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{width:60%;font-size:3.2vw}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.email-login[_ngcontent-%COMP%]   div.social-login[_ngcontent-%COMP%]   ion-button.facebook[_ngcontent-%COMP%]{width:47%;height:47px;display:block;margin:auto;--color-activated:white;--border-radius:30px;--background:#4064AD;--background-activated:rgb(87, 114, 168);--background-focused:rgb(87, 114, 168);--background-hover:rgb(87, 114, 168);text-transform:none;font-size:15px;font-weight:inherit}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.email-login[_ngcontent-%COMP%]   div.social-login[_ngcontent-%COMP%]   ion-icon.logo-facebook[_ngcontent-%COMP%]{background-image:url(facebook-logo.cc01044baf8daaf19773.svg);background-repeat:no-repeat;background-size:100% 100%}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.email-login[_ngcontent-%COMP%]   div.accident[_ngcontent-%COMP%]{text-align:center}ion-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%]   div.email-login[_ngcontent-%COMP%]   div.accident[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{display:block;padding-top:5%}"]],data:{}});function O(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,5,"div",[["class","error-message"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"ion-icon",[["class","error"]],null,null,null,a.gb,a.q)),t["\u0275did"](2,49152,null,0,u.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](3,0,null,null,2,"ion-label",[],null,null,null,a.mb,a.w)),t["\u0275did"](4,49152,null,0,u.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](5,0,["",""]))],null,(function(n,l){n(l,5,0,l.parent.context.$implicit.message)}))}function M(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,O)),t["\u0275did"](2,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](0,null,null,0))],(function(n,l){n(l,2,0,l.component.validateSigninform.get("email").hasError(l.context.$implicit.type))}),null)}function R(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","validation-errors"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,M)),t["\u0275did"](2,278528,null,0,d.j,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,2,0,l.component.validationMessages.email)}),null)}function _(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,7,"div",[["class","validation-errors"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,6,null,null,null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,5,"div",[["class","error-message"]],null,null,null,null,null)),(n()(),t["\u0275eld"](3,0,null,null,1,"ion-icon",[["class","error"]],null,null,null,a.gb,a.q)),t["\u0275did"](4,49152,null,0,u.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](5,0,null,null,2,"ion-label",[],null,null,null,a.mb,a.w)),t["\u0275did"](6,49152,null,0,u.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](7,0,["",""]))],null,(function(n,l){n(l,7,0,l.component.extraError)}))}function y(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,5,"div",[["class","error-message"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"ion-icon",[["class","error"]],null,null,null,a.gb,a.q)),t["\u0275did"](2,49152,null,0,u.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](3,0,null,null,2,"ion-label",[],null,null,null,a.mb,a.w)),t["\u0275did"](4,49152,null,0,u.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](5,0,["",""]))],null,(function(n,l){n(l,5,0,l.parent.context.$implicit.message)}))}function S(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,y)),t["\u0275did"](2,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](0,null,null,0))],(function(n,l){n(l,2,0,l.component.validateSigninform.get("password").hasError(l.context.$implicit.type))}),null)}function k(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","validation-errors"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,S)),t["\u0275did"](2,278528,null,0,d.j,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,2,0,l.component.validationMessages.password)}),null)}function w(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,7,"div",[["class","validation-errors"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,6,null,null,null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,5,"div",[["class","error-message"]],null,null,null,null,null)),(n()(),t["\u0275eld"](3,0,null,null,1,"ion-icon",[["class","error"]],null,null,null,a.gb,a.q)),t["\u0275did"](4,49152,null,0,u.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](5,0,null,null,2,"ion-label",[],null,null,null,a.mb,a.w)),t["\u0275did"](6,49152,null,0,u.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["Invalid Password"]))],null,null)}function E(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"ion-spinner",[["name","lines-small"]],null,null,null,a.yb,a.I)),t["\u0275did"](1,49152,null,0,u.pb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"lines-small")}),null)}function I(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"ion-label",[],null,null,null,a.mb,a.w)),t["\u0275did"](1,49152,null,0,u.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["Log In"]))],null,null)}function D(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,68,"ion-content",[],null,null,null,a.bb,a.l)),t["\u0275did"](1,49152,null,0,u.u,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](2,0,null,0,66,"div",[["class","content"]],null,null,null,null,null)),(n()(),t["\u0275eld"](3,0,null,null,1,"div",[["class","logo"],["id","logo"]],null,null,null,null,null)),(n()(),t["\u0275eld"](4,0,null,null,0,"img",[["alt",""],["src","assets/imgs/sub_logo.svg"]],null,null,null,null,null)),(n()(),t["\u0275eld"](5,0,null,null,63,"div",[["class","email-login"],["id","login"]],null,null,null,null,null)),(n()(),t["\u0275eld"](6,0,null,null,53,"form",[["class","custom-body"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,l,e){var i=!0,o=n.component;return"submit"===l&&(i=!1!==t["\u0275nov"](n,8).onSubmit(e)&&i),"reset"===l&&(i=!1!==t["\u0275nov"](n,8).onReset()&&i),"ngSubmit"===l&&(i=!1!==o.onSigninSubmit()&&i),i}),null,null)),t["\u0275did"](7,16384,null,0,r.s,[],null,null),t["\u0275did"](8,540672,null,0,r.e,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,r.a,null,[r.e]),t["\u0275did"](10,16384,null,0,r.l,[[4,r.a]],null,null),(n()(),t["\u0275eld"](11,0,null,null,2,"ion-label",[["class","pageName"]],null,null,null,a.mb,a.w)),t["\u0275did"](12,49152,null,0,u.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["Log In"])),(n()(),t["\u0275eld"](14,0,null,null,39,"ion-list",[["mode","ios"]],null,null,null,a.ob,a.x)),t["\u0275did"](15,49152,null,0,u.O,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"]},null),(n()(),t["\u0275eld"](16,0,null,0,15,"ion-item",[["class","item-input"],["lines","none"],["mode","ios"]],null,null,null,a.lb,a.s)),t["\u0275prd"](512,null,d.u,d.v,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](18,278528,null,0,d.i,[d.u],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275pod"](19,{"error-input":0}),t["\u0275did"](20,49152,null,0,u.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{disabled:[0,"disabled"],lines:[1,"lines"],mode:[2,"mode"]},null),(n()(),t["\u0275eld"](21,0,null,0,1,"ion-icon",[["class","email"],["slot","start"]],null,null,null,a.gb,a.q)),t["\u0275did"](22,49152,null,0,u.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](23,0,null,0,8,"ion-input",[["formControlName","email"],["minlength","6"],["mode","ios"],["name","email"],["placeholder","Email Address"],["type","email"]],[[1,"minlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionFocus"],[null,"ionChange"]],(function(n,l,e){var i=!0,o=n.component;return"ionBlur"===l&&(i=!1!==t["\u0275nov"](n,26)._handleBlurEvent(e.target)&&i),"ionChange"===l&&(i=!1!==t["\u0275nov"](n,26)._handleInputEvent(e.target)&&i),"ngModelChange"===l&&(i=!1!==(o.email=e)&&i),"ionBlur"===l&&(i=!1!==o.setEmailValidation(!0)&&i),"ionFocus"===l&&(i=!1!==o.setEmailValidation(!1)&&i),i}),a.hb,a.r)),t["\u0275did"](24,540672,null,0,r.g,[],{minlength:[0,"minlength"]},null),t["\u0275prd"](1024,null,r.h,(function(n){return[n]}),[r.g]),t["\u0275did"](26,16384,null,0,u.Mb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,r.i,(function(n){return[n]}),[u.Mb]),t["\u0275did"](28,671744,null,0,r.d,[[3,r.a],[6,r.h],[8,null],[6,r.i],[2,r.r]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,r.j,null,[r.d]),t["\u0275did"](30,16384,null,0,r.k,[[4,r.j]],null,null),t["\u0275did"](31,49152,null,0,u.G,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{minlength:[0,"minlength"],mode:[1,"mode"],name:[2,"name"],placeholder:[3,"placeholder"],type:[4,"type"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,R)),t["\u0275did"](33,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,_)),t["\u0275did"](35,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](36,0,null,0,13,"ion-item",[["class","item-input"],["mode","md"]],null,null,null,a.lb,a.s)),t["\u0275prd"](512,null,d.u,d.v,[t.IterableDiffers,t.KeyValueDiffers,t.ElementRef,t.Renderer2]),t["\u0275did"](38,278528,null,0,d.i,[d.u],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t["\u0275pod"](39,{"error-input":0}),t["\u0275did"](40,49152,null,0,u.H,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{disabled:[0,"disabled"],mode:[1,"mode"]},null),(n()(),t["\u0275eld"](41,0,null,0,1,"ion-icon",[["class","password"],["slot","start"]],null,null,null,a.gb,a.q)),t["\u0275did"](42,49152,null,0,u.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275eld"](43,0,null,0,6,"ion-input",[["formControlName","password"],["mode","md"],["name","password"],["placeholder","Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionFocus"],[null,"ionChange"]],(function(n,l,e){var i=!0,o=n.component;return"ionBlur"===l&&(i=!1!==t["\u0275nov"](n,44)._handleBlurEvent(e.target)&&i),"ionChange"===l&&(i=!1!==t["\u0275nov"](n,44)._handleInputEvent(e.target)&&i),"ngModelChange"===l&&(i=!1!==(o.pwd=e)&&i),"ionBlur"===l&&(i=!1!==o.setPasswordValidation(!0)&&i),"ionFocus"===l&&(i=!1!==o.setPasswordValidation(!1)&&i),i}),a.hb,a.r)),t["\u0275did"](44,16384,null,0,u.Mb,[t.ElementRef],null,null),t["\u0275prd"](1024,null,r.i,(function(n){return[n]}),[u.Mb]),t["\u0275did"](46,671744,null,0,r.d,[[3,r.a],[8,null],[8,null],[6,r.i],[2,r.r]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t["\u0275prd"](2048,null,r.j,null,[r.d]),t["\u0275did"](48,16384,null,0,r.k,[[4,r.j]],null,null),t["\u0275did"](49,49152,null,0,u.G,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{mode:[0,"mode"],name:[1,"name"],placeholder:[2,"placeholder"],type:[3,"type"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,k)),t["\u0275did"](51,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,w)),t["\u0275did"](53,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](54,0,null,null,5,"ion-button",[["class","red login"],["mode","md"],["size","large"],["type","submit"]],null,null,null,a.S,a.c)),t["\u0275did"](55,49152,null,0,u.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{disabled:[0,"disabled"],mode:[1,"mode"],size:[2,"size"],type:[3,"type"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,E)),t["\u0275did"](57,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,0,1,null,I)),t["\u0275did"](59,16384,null,0,d.k,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](60,0,null,null,8,"div",[["class","accident"]],null,null,null,null,null)),(n()(),t["\u0275eld"](61,0,null,null,2,"ion-label",[],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.openForgot()&&t),t}),a.mb,a.w)),t["\u0275did"](62,49152,null,0,u.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,["Forgot your password?"])),(n()(),t["\u0275eld"](64,0,null,null,4,"ion-label",[],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.openSignup()&&t),t}),a.mb,a.w)),t["\u0275did"](65,49152,null,0,u.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(n()(),t["\u0275ted"](-1,0,['Don"t have an account? '])),(n()(),t["\u0275eld"](67,0,null,0,1,"b",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,[" Create"]))],(function(n,l){var e=l.component;n(l,8,0,e.validateSigninform),n(l,15,0,"ios");var t=n(l,19,0,e.validateEmail&&e.validateSigninform.get("email").hasError("pattern"));n(l,18,0,"item-input",t),n(l,20,0,e.readyForSubmit||e.facebookReady,"none","ios"),n(l,24,0,"6"),n(l,28,0,"email",e.email),n(l,31,0,"6","ios","email","Email Address","email"),n(l,33,0,e.validateEmail),n(l,35,0,e.invalidEmail);var i=n(l,39,0,e.validatePassword&&(e.validateSigninform.get("password").hasError("pattern")||e.validateSigninform.get("password").hasError("minlength")));n(l,38,0,"item-input",i),n(l,40,0,e.readyForSubmit||e.facebookReady,"md"),n(l,46,0,"password",e.pwd),n(l,49,0,"md","password","Password","password"),n(l,51,0,e.validatePassword),n(l,53,0,e.invalidPassword),n(l,55,0,e.readyForSubmit||e.facebookReady,"md","large","submit"),n(l,57,0,e.readyForSubmit),n(l,59,0,!e.readyForSubmit)}),(function(n,l){n(l,6,0,t["\u0275nov"](l,10).ngClassUntouched,t["\u0275nov"](l,10).ngClassTouched,t["\u0275nov"](l,10).ngClassPristine,t["\u0275nov"](l,10).ngClassDirty,t["\u0275nov"](l,10).ngClassValid,t["\u0275nov"](l,10).ngClassInvalid,t["\u0275nov"](l,10).ngClassPending),n(l,23,0,t["\u0275nov"](l,24).minlength?t["\u0275nov"](l,24).minlength:null,t["\u0275nov"](l,30).ngClassUntouched,t["\u0275nov"](l,30).ngClassTouched,t["\u0275nov"](l,30).ngClassPristine,t["\u0275nov"](l,30).ngClassDirty,t["\u0275nov"](l,30).ngClassValid,t["\u0275nov"](l,30).ngClassInvalid,t["\u0275nov"](l,30).ngClassPending),n(l,43,0,t["\u0275nov"](l,48).ngClassUntouched,t["\u0275nov"](l,48).ngClassTouched,t["\u0275nov"](l,48).ngClassPristine,t["\u0275nov"](l,48).ngClassDirty,t["\u0275nov"](l,48).ngClassValid,t["\u0275nov"](l,48).ngClassInvalid,t["\u0275nov"](l,48).ngClassPending)}))}function x(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-login",[],null,null,null,D,P)),t["\u0275did"](1,114688,null,0,b,[u.Ib,m.a,g.a,r.b,C.m,p.a,v.a,f.a,h.a],null,null)],(function(n,l){n(l,1,0)}),null)}var F=t["\u0275ccf"]("app-login",b,x,{},{},[]);class N{}e.d(l,"LoginPageModuleNgFactory",(function(){return T}));var T=t["\u0275cmf"](i,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,F]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,d.m,d.l,[t.LOCALE_ID,[2,d.x]]),t["\u0275mpd"](4608,r.q,r.q,[]),t["\u0275mpd"](4608,r.b,r.b,[]),t["\u0275mpd"](4608,u.c,u.c,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,u.Fb,u.Fb,[u.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,u.Jb,u.Jb,[u.c,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](1073742336,d.b,d.b,[]),t["\u0275mpd"](1073742336,r.p,r.p,[]),t["\u0275mpd"](1073742336,r.f,r.f,[]),t["\u0275mpd"](1073742336,r.n,r.n,[]),t["\u0275mpd"](1073742336,u.Bb,u.Bb,[]),t["\u0275mpd"](1073742336,C.q,C.q,[[2,C.v],[2,C.m]]),t["\u0275mpd"](1073742336,N,N,[]),t["\u0275mpd"](1073742336,i,i,[]),t["\u0275mpd"](1024,C.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);