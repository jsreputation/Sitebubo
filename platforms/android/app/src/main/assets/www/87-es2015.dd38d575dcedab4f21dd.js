(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{RODS:function(e,t,r){"use strict";r.r(t),r.d(t,"ion_refresher",(function(){return b})),r.d(t,"ion_refresher_content",(function(){return y}));var s=r("imtE"),i=r("AfW+"),n=r("aiEM"),o=r("1ym9"),a=r("0AIG"),l=(r("AzGJ"),r("MTcp"),r("kBU6"),r("EV1M"),r("g/Nq"),r("7TZ+"),r("YtD4")),h=r("TMBv");const c={getEngine(){const e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const t=this.getEngine();if(!t)return;const r=this.isCapacitor()?e.style.toUpperCase():e.style;t.impact({style:r})},notification(e){const t=this.getEngine();if(!t)return;const r=this.isCapacitor()?e.style.toUpperCase():e.style;t.notification({style:r})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())}},f=e=>{const t=e.querySelector("ion-spinner"),r=t.shadowRoot.querySelector("circle"),s=e.querySelector(".spinner-arrow-container"),i=e.querySelector(".arrow-container"),n=i?i.querySelector("ion-icon"):null,a=Object(o.a)().duration(1e3).easing("ease-out"),l=Object(o.a)().addElement(s).keyframes([{offset:0,opacity:"0.3"},{offset:.45,opacity:"0.3"},{offset:.55,opacity:"1"},{offset:1,opacity:"1"}]),h=Object(o.a)().addElement(r).keyframes([{offset:0,strokeDasharray:"1px, 200px"},{offset:.2,strokeDasharray:"1px, 200px"},{offset:.55,strokeDasharray:"100px, 200px"},{offset:1,strokeDasharray:"100px, 200px"}]),c=Object(o.a)().addElement(t).keyframes([{offset:0,transform:"rotate(-90deg)"},{offset:1,transform:"rotate(210deg)"}]);if(i&&n){const e=Object(o.a)().addElement(i).keyframes([{offset:0,transform:"rotate(0deg)"},{offset:.3,transform:"rotate(0deg)"},{offset:.55,transform:"rotate(280deg)"},{offset:1,transform:"rotate(400deg)"}]),t=Object(o.a)().addElement(n).keyframes([{offset:0,transform:"translateX(2px) scale(0)"},{offset:.3,transform:"translateX(2px) scale(0)"},{offset:.55,transform:"translateX(-1.5px) scale(1)"},{offset:1,transform:"translateX(-1.5px) scale(1)"}]);a.addAnimation([e,t])}return a.addAnimation([l,h,c])},d=(e,t)=>{e.style.setProperty("opacity",t.toString())},p=(e,t)=>{if(!e)return Promise.resolve();const r=u(e);return Object(s.l)(()=>{e.style.setProperty("transition","0.2s all ease-out"),void 0===t?e.style.removeProperty("transform"):e.style.setProperty("transform",`translate3d(0px, ${t}, 0px)`)}),r},g=(e,t)=>{const r=e.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),s=e.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");return null!==r&&null!==s&&("ios"===t&&Object(i.f)("mobile")&&void 0!==e.style.webkitOverflowScrolling||"md"===t)},u=e=>new Promise(t=>{m(e,t)}),m=(e,t)=>{let r;const s={passive:!0},i=()=>{r&&r()},n=r=>{e===r.target&&(i(),t(r))};return e&&(e.addEventListener("webkitTransitionEnd",n,s),e.addEventListener("transitionend",n,s),r=()=>{e.removeEventListener("webkitTransitionEnd",n,s),e.removeEventListener("transitionend",n,s)}),i},b=class{constructor(e){Object(s.k)(this,e),this.appliedStyles=!1,this.didStart=!1,this.progress=0,this.pointerDown=!1,this.needsCompletion=!1,this.didRefresh=!1,this.lastVelocityY=0,this.animations=[],this.nativeRefresher=!1,this.state=1,this.pullMin=60,this.pullMax=this.pullMin+60,this.closeDuration="280ms",this.snapbackDuration="280ms",this.pullFactor=1,this.disabled=!1,this.ionRefresh=Object(s.e)(this,"ionRefresh",7),this.ionPull=Object(s.e)(this,"ionPull",7),this.ionStart=Object(s.e)(this,"ionStart",7)}disabledChanged(){this.gesture&&this.gesture.enable(!this.disabled)}checkNativeRefresher(){const e=g(this.el,Object(s.d)(this));if(e&&!this.nativeRefresher){const e=this.el.closest("ion-content");this.setupNativeRefresher(e)}else e||this.destroyNativeRefresher()}destroyNativeRefresher(){this.scrollEl&&this.scrollListenerCallback&&(this.scrollEl.removeEventListener("scroll",this.scrollListenerCallback),this.scrollListenerCallback=void 0),this.nativeRefresher=!1}async resetNativeRefresher(e,t){this.state=t,"ios"===Object(s.d)(this)?await p(e,void 0):await u(this.el.querySelector(".refresher-refreshing-icon")),this.didRefresh=!1,this.needsCompletion=!1,this.pointerDown=!1,this.animations.forEach(e=>e.destroy()),this.animations=[],this.progress=0,this.state=1}async setupiOSNativeRefresher(e,t){this.elementToTransform=this.scrollEl;const i=e.shadowRoot.querySelectorAll("svg"),o=.16*this.scrollEl.clientHeight,a=i.length;Object(s.l)(()=>i.forEach(e=>e.style.setProperty("animation","none"))),this.scrollListenerCallback=()=>{(this.pointerDown||1!==this.state)&&Object(s.g)(()=>{const r=this.scrollEl.scrollTop,l=this.el.clientHeight;if(r>0){if(8===this.state){const e=Object(n.c)(0,r/(.5*l),1);return void Object(s.l)(()=>d(t,1-e))}return void Object(s.l)(()=>d(e,0))}this.pointerDown&&(this.didStart||(this.didStart=!0,this.ionStart.emit()),this.pointerDown&&this.ionPull.emit());const h=Object(n.c)(0,Math.abs(r)/l,.99),f=this.progress=Object(n.c)(0,(Math.abs(r)-30)/o,1),g=Object(n.c)(0,Math.floor(f*a),a-1);var u,m;8===this.state||g===a-1?(this.pointerDown&&(u=t,m=this.lastVelocityY,Object(s.l)(()=>{u.style.setProperty("--refreshing-rotation-duration",m>=1?"0.5s":"2s"),u.style.setProperty("opacity","1")})),this.didRefresh||(this.beginRefresh(),this.didRefresh=!0,c.impact({style:"light"}),this.pointerDown||p(this.elementToTransform,`${l}px`))):(this.state=2,((e,t,r,i)=>{Object(s.l)(()=>{d(e,r),t.forEach((e,t)=>e.style.setProperty("opacity",t<=i?"0.99":"0"))})})(e,i,h,g))})},this.scrollEl.addEventListener("scroll",this.scrollListenerCallback),this.gesture=(await Promise.resolve().then(r.bind(null,"AzGJ"))).createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:10,direction:"y",threshold:5,onStart:()=>{this.pointerDown=!0,this.didRefresh||p(this.elementToTransform,"0px")},onMove:e=>{this.lastVelocityY=e.velocityY},onEnd:()=>{this.pointerDown=!1,this.didStart=!1,this.needsCompletion?(this.resetNativeRefresher(this.elementToTransform,32),this.needsCompletion=!1):this.didRefresh&&Object(s.g)(()=>p(this.elementToTransform,`${this.el.clientHeight}px`))}}),this.disabledChanged()}async setupMDNativeRefresher(e,t,i){const l=t.shadowRoot.querySelector("circle"),h=this.el.querySelector("ion-refresher-content .refresher-pulling-icon"),c=i.shadowRoot.querySelector("circle");null!==l&&null!==c&&Object(s.l)(()=>{l.style.setProperty("animation","none"),i.style.setProperty("animation-delay","-655ms"),c.style.setProperty("animation-delay","-655ms")}),this.gesture=(await Promise.resolve().then(r.bind(null,"AzGJ"))).createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:10,direction:"y",threshold:5,canStart:()=>8!==this.state&&32!==this.state&&0===this.scrollEl.scrollTop,onStart:e=>{e.data={animation:void 0,didStart:!1,cancelled:!1}},onMove:t=>{if(t.velocityY<0&&0===this.progress&&!t.data.didStart||t.data.cancelled)t.data.cancelled=!0;else{if(!t.data.didStart)return t.data.didStart=!0,this.state=2,void Object(s.l)(()=>{const r=((e,t)=>"scale"===e?(e=>{const t=e.clientHeight,r=Object(o.a)().addElement(e).keyframes([{offset:0,transform:`scale(0) translateY(-${t+20}px)`},{offset:1,transform:"scale(1) translateY(100px)"}]);return f(e).addAnimation([r])})(t):(e=>{const t=e.clientHeight,r=Object(o.a)().addElement(e).keyframes([{offset:0,transform:`translateY(-${t+20}px)`},{offset:1,transform:"translateY(100px)"}]);return f(e).addAnimation([r])})(t))((e=>{const t=e.previousElementSibling;return null!==t&&"ION-HEADER"===t.tagName?"translate":"scale"})(e),h);t.data.animation=r,this.scrollEl.style.setProperty("--overflow","hidden"),r.progressStart(!1,0),this.ionStart.emit(),this.animations.push(r)});this.progress=Object(n.c)(0,t.deltaY/180*.5,1),t.data.animation.progressStep(this.progress),this.ionPull.emit()}},onEnd:e=>{if(!e.data.didStart)return;if(Object(s.l)(()=>this.scrollEl.style.removeProperty("--overflow")),this.progress<=.4)return this.gesture.enable(!1),void e.data.animation.progressEnd(0,this.progress,500).onFinish(()=>{this.animations.forEach(e=>e.destroy()),this.animations=[],this.gesture.enable(!0),this.state=1});const t=Object(a.a)([0,0],[0,0],[1,1],[1,1],this.progress)[0],r=(e=>Object(o.a)().duration(125).addElement(e).fromTo("transform","translateY(var(--ion-pulling-refresher-translate, 100px))","translateY(0px)"))(h);this.animations.push(r),Object(s.l)(async()=>{h.style.setProperty("--ion-pulling-refresher-translate",`${100*t}px`),e.data.animation.progressEnd(),await r.play(),this.beginRefresh(),e.data.animation.destroy()})}}),this.disabledChanged()}async setupNativeRefresher(e){if(this.scrollListenerCallback||!e||this.nativeRefresher||!this.scrollEl)return;this.nativeRefresher=!0;const t=this.el.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),r=this.el.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");"ios"===Object(s.d)(this)?this.setupiOSNativeRefresher(t,r):this.setupMDNativeRefresher(e,t,r)}componentDidUpdate(){this.checkNativeRefresher()}async connectedCallback(){if("fixed"!==this.el.getAttribute("slot"))return void console.error('Make sure you use: <ion-refresher slot="fixed">');const e=this.el.closest("ion-content");e?(this.scrollEl=await e.getScrollElement(),this.backgroundContentEl=e.shadowRoot.querySelector("#background-content"),g(this.el,Object(s.d)(this))?this.setupNativeRefresher(e):(this.gesture=(await Promise.resolve().then(r.bind(null,"AzGJ"))).createGesture({el:e,gestureName:"refresher",gesturePriority:10,direction:"y",threshold:20,passive:!1,canStart:()=>this.canStart(),onStart:()=>this.onStart(),onMove:e=>this.onMove(e),onEnd:()=>this.onEnd()}),this.disabledChanged())):console.error("<ion-refresher> must be used inside an <ion-content>")}disconnectedCallback(){this.destroyNativeRefresher(),this.scrollEl=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}async complete(){this.nativeRefresher?(this.needsCompletion=!0,this.pointerDown||this.resetNativeRefresher(this.elementToTransform,32)):this.close(32,"120ms")}async cancel(){this.nativeRefresher?this.pointerDown||this.resetNativeRefresher(this.elementToTransform,16):this.close(16,"")}getProgress(){return Promise.resolve(this.progress)}canStart(){return!(!this.scrollEl||1!==this.state||this.scrollEl.scrollTop>0)}onStart(){this.progress=0,this.state=1}onMove(e){if(!this.scrollEl)return;const t=e.event;if(t.touches&&t.touches.length>1)return;if(0!=(56&this.state))return;const r=Number.isNaN(this.pullFactor)||this.pullFactor<0?1:this.pullFactor,s=e.deltaY*r;if(s<=0)return this.progress=0,this.state=1,this.appliedStyles?void this.setCss(0,"",!1,""):void 0;if(1===this.state){if(this.scrollEl.scrollTop>0)return void(this.progress=0);this.state=2}if(t.cancelable&&t.preventDefault(),this.setCss(s,"0ms",!0,""),0===s)return void(this.progress=0);const i=this.pullMin;this.progress=s/i,this.didStart||(this.didStart=!0,this.ionStart.emit()),this.ionPull.emit(),s<i?this.state=2:s>this.pullMax?this.beginRefresh():this.state=4}onEnd(){4===this.state?this.beginRefresh():2===this.state&&this.cancel()}beginRefresh(){this.state=8,this.setCss(this.pullMin,this.snapbackDuration,!0,""),this.ionRefresh.emit({complete:this.complete.bind(this)})}close(e,t){setTimeout(()=>{this.state=1,this.progress=0,this.didStart=!1,this.setCss(0,"0ms",!1,"")},600),this.state=e,this.setCss(0,this.closeDuration,!0,t)}setCss(e,t,r,i){this.nativeRefresher||(this.appliedStyles=e>0,Object(s.l)(()=>{if(this.scrollEl&&this.backgroundContentEl){const s=this.scrollEl.style,n=this.backgroundContentEl.style;s.transform=n.transform=e>0?`translateY(${e}px) translateZ(0px)`:"",s.transitionDuration=n.transitionDuration=t,s.transitionDelay=n.transitionDelay=i,s.overflow=r?"hidden":""}}))}render(){const e=Object(s.d)(this);return Object(s.i)(s.a,{slot:"fixed",class:{[e]:!0,[`refresher-${e}`]:!0,"refresher-native":this.nativeRefresher,"refresher-active":1!==this.state,"refresher-pulling":2===this.state,"refresher-ready":4===this.state,"refresher-refreshing":8===this.state,"refresher-cancelling":16===this.state,"refresher-completing":32===this.state}})}get el(){return Object(s.f)(this)}static get watchers(){return{disabled:["disabledChanged"]}}static get style(){return"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}:host-context([dir=rtl]) ion-refresher,[dir=rtl] ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:.2s;transition:.2s;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon,[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling,.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-cancelling ion-refresher-content .refresher-pulling,.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-icon,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color,#000)}.refresher-md .refresher-refreshing .spinner-crescent circle,.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line{stroke:var(--ion-text-color,#000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color,#000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary,#3880ff)}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary,#3880ff);font-size:12px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){ion-refresher.refresher-native .arrow-container ion-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;border-radius:100%;padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid #ececec;background:#fff;-webkit-box-shadow:0 1px 6px rgba(0,0,0,.1);box-shadow:0 1px 6px rgba(0,0,0,.1)}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}"}},y=class{constructor(e){Object(s.k)(this,e)}componentWillLoad(){if(void 0===this.pullingIcon){const e=Object(s.d)(this),t=void 0!==this.el.style.webkitOverflowScrolling?"lines":"arrow-down";this.pullingIcon=i.b.get("refreshingIcon","ios"===e&&Object(i.f)("mobile")?i.b.get("spinner",t):"circular")}if(void 0===this.refreshingSpinner){const e=Object(s.d)(this);this.refreshingSpinner=i.b.get("refreshingSpinner",i.b.get("spinner","ios"===e?"lines":"circular"))}}render(){const e=this.pullingIcon,t=null!=e&&void 0!==h.a[e],r=Object(s.d)(this);return Object(s.i)(s.a,{class:r},Object(s.i)("div",{class:"refresher-pulling"},this.pullingIcon&&t&&Object(s.i)("div",{class:"refresher-pulling-icon"},Object(s.i)("div",{class:"spinner-arrow-container"},Object(s.i)("ion-spinner",{name:this.pullingIcon,paused:!0}),"md"===r&&"circular"===this.pullingIcon&&Object(s.i)("div",{class:"arrow-container"},Object(s.i)("ion-icon",{name:"caret-back-sharp"})))),this.pullingIcon&&!t&&Object(s.i)("div",{class:"refresher-pulling-icon"},Object(s.i)("ion-icon",{icon:this.pullingIcon,lazy:!1})),this.pullingText&&Object(s.i)("div",{class:"refresher-pulling-text",innerHTML:Object(l.a)(this.pullingText)})),Object(s.i)("div",{class:"refresher-refreshing"},this.refreshingSpinner&&Object(s.i)("div",{class:"refresher-refreshing-icon"},Object(s.i)("ion-spinner",{name:this.refreshingSpinner})),this.refreshingText&&Object(s.i)("div",{class:"refresher-refreshing-text",innerHTML:Object(l.a)(this.refreshingText)})))}get el(){return Object(s.f)(this)}}}}]);