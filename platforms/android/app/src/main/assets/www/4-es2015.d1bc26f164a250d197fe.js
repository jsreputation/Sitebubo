(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"58qO":function(n,t,o){"use strict";o.d(t,"a",(function(){return l}));var e=o("8Y7J"),i=o("RH9n");let l=(()=>{class n{constructor(n){this.socket=n}defineEventHandlers(n,t){this.socket.on(n,n=>{t(n)})}emitPageSpeed(n,t){this.socket.on("speed-scanning",n=>{t(n)}),this.socket.emit("request-speed-scanning",n)}emitSecurityScan(n,t){this.socket.on("security-scanning",n=>{t(n)}),this.socket.emit("request-security-scanning",n)}emitSeoScanning(n,t){this.socket.on("seo-scanning",n=>{t(n)}),this.socket.emit("request-seo-scanning",n)}watchChanges(n,t,o){this.socket.on(`/domain/${t}/monitor/${n}`,t=>{console.log(t),"realtime"===n&&(o.realtime.score=t.result)})}removeHandler(n){this.socket.removeAllListeners(n)}websiteScan(n){this.socket.emit("request-web-scanning",n)}defineDashboardEvents(n,t){console.log(t),this.socket.on(`/domain/${n}/monitor/uptime`,n=>{t.uptime.status=n.result}),this.socket.on(`/domain/${n}/monitor/security`,n=>{t.security.desc=n.result}),this.socket.on(`/domain/${n}/monitor/pagespeed`,n=>{t["site-speed"].speedindex=n.result}),this.socket.on(`/domain/${n}/monitor/seomonitor`,n=>{t["seo-score"].seoscore=n.result}),this.socket.on(`/domain/${n}/monitor/brokenlink`,n=>{t["broken-links"].count=n.result}),this.socket.on(`/domain/${n}/monitor/googleanalytics`,n=>{t.analytics.conversion=n.conversionrate,t.analytics.visitors=n.users}),this.socket.on(`/domain/${n}/monitor/domainexpire`,n=>{t["domain-expiry"].expiry=n.result})}removeAllDashboardHandlers(n){this.socket.removeAllListeners(`/domain/${n}/monitor/uptime`),this.socket.removeAllListeners(`/domain/${n}/monitor/security`),this.socket.removeAllListeners(`/domain/${n}/monitor/pagespeed`),this.socket.removeAllListeners(`/domain/${n}/monitor/seomonitor`),this.socket.removeAllListeners(`/domain/${n}/monitor/brokenlink`),this.socket.removeAllListeners(`/domain/${n}/monitor/googleanalytics`),this.socket.removeAllListeners(`/domain/${n}/monitor/domainexpire`)}}return n.ngInjectableDef=e["\u0275\u0275defineInjectable"]({factory:function(){return new n(e["\u0275\u0275inject"](i.a))},token:n,providedIn:"root"}),n})()},ITXy:function(n,t,o){"use strict";o.d(t,"a",(function(){return l})),o.d(t,"b",(function(){return k}));var e=o("8Y7J"),i=(o("B0QU"),o("SVse")),l=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function c(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,":svg:linearGradient",[],[[1,"id",0]],null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,0,":svg:stop",[["offset","5%"]],[[1,"stop-color",0],[1,"stop-opacity",0]],null,null,null,null)),(n()(),e["\u0275eld"](2,0,null,null,0,":svg:stop",[["offset","95%"]],[[1,"stop-color",0],[1,"stop-opacity",0]],null,null,null,null))],null,(function(n,t){var o=t.component;n(t,0,0,o.svg.outerLinearGradient.id),n(t,1,0,o.svg.outerLinearGradient.colorStop1,1),n(t,2,0,o.svg.outerLinearGradient.colorStop2,1)}))}function r(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,":svg:radialGradient",[],[[1,"id",0]],null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,0,":svg:stop",[["offset","5%"]],[[1,"stop-color",0],[1,"stop-opacity",0]],null,null,null,null)),(n()(),e["\u0275eld"](2,0,null,null,0,":svg:stop",[["offset","95%"]],[[1,"stop-color",0],[1,"stop-opacity",0]],null,null,null,null))],null,(function(n,t){var o=t.component;n(t,0,0,o.svg.radialGradient.id),n(t,1,0,o.svg.radialGradient.colorStop1,1),n(t,2,0,o.svg.radialGradient.colorStop2,1)}))}function g(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,0,":svg:circle",[],[[1,"cx",0],[1,"cy",0],[1,"r",0],[1,"fill",0],[1,"fill-opacity",0],[1,"stroke",0],[1,"stroke-width",0]],null,null,null,null))],null,(function(n,t){var o=t.component;n(t,0,0,o.svg.backgroundCircle.cx,o.svg.backgroundCircle.cy,o.svg.backgroundCircle.r,o.svg.backgroundCircle.fill,o.svg.backgroundCircle.fillOpacity,o.svg.backgroundCircle.stroke,o.svg.backgroundCircle.strokeWidth)}))}function s(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,0,":svg:circle",[],[[1,"cx",0],[1,"cy",0],[1,"r",0],[1,"fill",0],[1,"fill-opacity",0],[1,"stroke",0],[1,"stroke-width",0]],null,null,null,null))],null,(function(n,t){var o=t.component;n(t,0,0,o.svg.backgroundCircle.cx,o.svg.backgroundCircle.cy,o.svg.backgroundCircle.r,e["\u0275inlineInterpolate"](1,"url(#",o.svg.radialGradient.id,")"),o.svg.backgroundCircle.fillOpacity,o.svg.backgroundCircle.stroke,o.svg.backgroundCircle.strokeWidth)}))}function a(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,4,null,null,null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,g)),e["\u0275did"](2,16384,null,0,i.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,s)),e["\u0275did"](4,16384,null,0,i.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](0,null,null,0))],(function(n,t){var o=t.component;n(t,2,0,!o.options.backgroundGradient),n(t,4,0,o.options.backgroundGradient)}),null)}function u(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,0,":svg:circle",[],[[1,"cx",0],[1,"cy",0],[1,"r",0],[1,"fill",0],[1,"stroke",0],[1,"stroke-width",0]],null,null,null,null))],null,(function(n,t){var o=t.component;n(t,0,0,o.svg.circle.cx,o.svg.circle.cy,o.svg.circle.r,o.svg.circle.fill,o.svg.circle.stroke,o.svg.circle.strokeWidth)}))}function d(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,0,":svg:path",[],[[1,"d",0],[1,"stroke",0],[1,"stroke-width",0],[1,"stroke-linecap",0],[1,"fill",0]],null,null,null,null))],null,(function(n,t){var o=t.component;n(t,0,0,o.svg.path.d,o.svg.path.stroke,o.svg.path.strokeWidth,o.svg.path.strokeLinecap,o.svg.path.fill)}))}function C(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,0,":svg:path",[],[[1,"d",0],[1,"stroke",0],[1,"stroke-width",0],[1,"stroke-linecap",0],[1,"fill",0]],null,null,null,null))],null,(function(n,t){var o=t.component;n(t,0,0,o.svg.path.d,e["\u0275inlineInterpolate"](1,"url(#",o.svg.outerLinearGradient.id,")"),o.svg.path.strokeWidth,o.svg.path.strokeLinecap,o.svg.path.fill)}))}function O(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,4,null,null,null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,d)),e["\u0275did"](2,16384,null,0,i.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,C)),e["\u0275did"](4,16384,null,0,i.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](0,null,null,0))],(function(n,t){var o=t.component;n(t,2,0,!o.options.outerStrokeGradient),n(t,4,0,o.options.outerStrokeGradient)}),null)}function _(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,":svg:tspan",[],[[1,"x",0],[1,"y",0],[1,"dy",0],[1,"font-size",0],[1,"font-weight",0],[1,"fill",0]],null,null,null,null)),(n()(),e["\u0275ted"](1,null,["",""]))],null,(function(n,t){var o=t.component;n(t,0,0,o.svg.title.x,o.svg.title.y,t.context.$implicit.dy,o.svg.title.fontSize,o.svg.title.fontWeight,o.svg.title.color),n(t,1,0,t.context.$implicit.span)}))}function M(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,_)),e["\u0275did"](2,278528,null,0,i.j,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),e["\u0275and"](0,null,null,0))],(function(n,t){n(t,2,0,t.component.svg.title.tspans)}),null)}function P(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,":svg:tspan",[],[[1,"font-size",0],[1,"font-weight",0],[1,"fill",0]],null,null,null,null)),(n()(),e["\u0275ted"](1,null,["",""]))],null,(function(n,t){var o=t.component;n(t,0,0,o.svg.units.fontSize,o.svg.units.fontWeight,o.svg.units.color),n(t,1,0,o.svg.units.text)}))}function p(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,":svg:tspan",[],[[1,"x",0],[1,"y",0],[1,"dy",0],[1,"font-size",0],[1,"font-weight",0],[1,"fill",0]],null,null,null,null)),(n()(),e["\u0275ted"](1,null,["",""]))],null,(function(n,t){var o=t.component;n(t,0,0,o.svg.subtitle.x,o.svg.subtitle.y,t.context.$implicit.dy,o.svg.subtitle.fontSize,o.svg.subtitle.fontWeight,o.svg.subtitle.color),n(t,1,0,t.context.$implicit.span)}))}function f(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,p)),e["\u0275did"](2,278528,null,0,i.j,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),e["\u0275and"](0,null,null,0))],(function(n,t){n(t,2,0,t.component.svg.subtitle.tspans)}),null)}function m(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,6,":svg:text",[["alignment-baseline","baseline"]],[[1,"x",0],[1,"y",0],[1,"text-anchor",0]],null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,M)),e["\u0275did"](2,16384,null,0,i.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,P)),e["\u0275did"](4,16384,null,0,i.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,f)),e["\u0275did"](6,16384,null,0,i.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,t){var o=t.component;n(t,2,0,o.options.showTitle),n(t,4,0,o.options.showUnits),n(t,6,0,o.options.showSubtitle)}),(function(n,t){var o=t.component;n(t,0,0,o.svg.circle.cx,o.svg.circle.cy,o.svg.title.textAnchor)}))}function b(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,0,":svg:image",[["preserveAspectRatio","none"]],[[1,"height",0],[1,"width",0],[1,":xlink:href",0],[1,"x",0],[1,"y",0]],null,null,null,null))],null,(function(n,t){var o=t.component;n(t,0,0,o.svg.image.height,o.svg.image.width,o.svg.image.src,o.svg.image.x,o.svg.image.y)}))}function v(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,15,":svg:svg",[["preserveAspectRatio","xMidYMid meet"],["xmlns","http://www.w3.org/2000/svg"]],[[1,"viewBox",0],[1,"height",0],[1,"width",0],[1,"class",0]],[[null,"click"]],(function(n,t,o){var e=!0;return"click"===t&&(e=!1!==n.component.emitClickEvent(o)&&e),e}),null,null)),(n()(),e["\u0275eld"](1,0,null,null,4,":svg:defs",[],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,c)),e["\u0275did"](3,16384,null,0,i.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,r)),e["\u0275did"](5,16384,null,0,i.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,a)),e["\u0275did"](7,16384,null,0,i.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,u)),e["\u0275did"](9,16384,null,0,i.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,O)),e["\u0275did"](11,16384,null,0,i.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,m)),e["\u0275did"](13,16384,null,0,i.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275and"](16777216,null,null,1,null,b)),e["\u0275did"](15,16384,null,0,i.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,t){var o=t.component;n(t,3,0,o.options.outerStrokeGradient),n(t,5,0,o.options.backgroundGradient),n(t,7,0,o.options.showBackground),n(t,9,0,o.options.showInnerStroke),n(t,11,0,o.options.percent-0!=0||o.options.showZeroOuterStroke),n(t,13,0,!o.options.showImage&&(o.options.showTitle||o.options.showUnits||o.options.showSubtitle)),n(t,15,0,o.options.showImage)}),(function(n,t){var o=t.component;n(t,0,0,o.svg.viewBox,o.svg.height,o.svg.width,o.options.class)}))}function k(n){return e["\u0275vid"](0,[(n()(),e["\u0275and"](16777216,null,null,1,null,v)),e["\u0275did"](1,16384,null,0,i.k,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,t){n(t,1,0,t.component.svg)}),null)}},J98r:function(n,t,o){"use strict";o.d(t,"a",(function(){return e}));var e=["ion-header[_ngcontent-%COMP%]   ion-toolbar.upper-toolbar[_ngcontent-%COMP%]{padding-top:5px}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]{height:40px}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-title.domain-name[_ngcontent-%COMP%]{text-transform:uppercase}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{position:absolute}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button.back[_ngcontent-%COMP%]{left:0}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button.menu[_ngcontent-%COMP%]{right:0}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button.bell[_ngcontent-%COMP%]{right:35px}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button.settings[_ngcontent-%COMP%]{left:0}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button.user_settings[_ngcontent-%COMP%]{right:0}.hide[_ngcontent-%COMP%]{display:none}ion-card.server-monitor[_ngcontent-%COMP%]{margin-bottom:20px!important}ion-card.server-monitor[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{font-size:14px;font-weight:700;color:#000;text-align:center}ion-card.server-monitor[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{padding-top:0}ion-card.server-monitor[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-label.server-lastcheck[_ngcontent-%COMP%]{color:#000;font-size:13px;display:block;text-align:center}ion-card.server-monitor[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{position:relative}ion-card.server-monitor[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   circle-progress[_ngcontent-%COMP%]{display:block;text-align:center}ion-card.server-monitor[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-label.server-label[_ngcontent-%COMP%]{display:block;text-align:center;color:#000;font-size:13px;font-weight:700}ion-card.server-monitor[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   div.status[_ngcontent-%COMP%]{position:absolute;display:block;margin:auto;width:94%;top:49px}ion-card.server-monitor[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   div.status[_ngcontent-%COMP%]   ion-label.used[_ngcontent-%COMP%]{font-size:13px;color:#000;display:block;text-align:center;margin-top:-6px}ion-card.server-monitor[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   div.status[_ngcontent-%COMP%]   div.percent[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:baseline;align-items:baseline;font-weight:700}ion-card.server-monitor[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   div.status[_ngcontent-%COMP%]   div.percent[_ngcontent-%COMP%]   ion-label.number[_ngcontent-%COMP%]{font-size:25px}ion-card.server-monitor[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   div.status[_ngcontent-%COMP%]   div.percent[_ngcontent-%COMP%]   ion-label.unit[_ngcontent-%COMP%]{font-size:13px}ion-content[_ngcontent-%COMP%]{--padding-start:5%;--padding-end:5%!important;--padding-top:20px;--padding-bottom:10%}ion-content[_ngcontent-%COMP%]   ion-reorder-group[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{color:#fff;margin:0;border-radius:13px;z-index:1}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-label.highlighted[_ngcontent-%COMP%]{font-weight:700}ion-content[_ngcontent-%COMP%]   .priority[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;margin-bottom:5px}ion-content[_ngcontent-%COMP%]   .priority[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{padding:15px;background-color:#fff;width:48%;color:#000;text-align:center}ion-content[_ngcontent-%COMP%]   .priority[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:13px;font-weight:200;height:20px}ion-content[_ngcontent-%COMP%]   .priority[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{padding:5px;height:80px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}ion-content[_ngcontent-%COMP%]   .priority[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{padding:0;height:30px}ion-content[_ngcontent-%COMP%]   .priority[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{display:block;font-size:12px}ion-content[_ngcontent-%COMP%]   .priority[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-label.lower[_ngcontent-%COMP%]{text-transform:lowercase}.secondary[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{margin-top:15px;padding:10px;height:87px;border-radius:13px;background-repeat:no-repeat;background-size:105% 105%;background-position:center}.secondary[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-reorder[_ngcontent-%COMP%]{color:#f9f9f9;position:absolute;top:0;left:0;z-index:2}.secondary[_ngcontent-%COMP%]   ion-card.conversion-rate[_ngcontent-%COMP%]{background-color:#fff;color:#000}.secondary[_ngcontent-%COMP%]   ion-card.visitors[_ngcontent-%COMP%]{color:#000;background-color:#fff}.secondary[_ngcontent-%COMP%]   ion-card.seo[_ngcontent-%COMP%]{background-image:url(seo_card.551a1491c61e20bb185c.png)}.secondary[_ngcontent-%COMP%]   ion-card.site-score[_ngcontent-%COMP%]{background-image:url(sitescore_card.261b1d27f309176bd760.png)}.secondary[_ngcontent-%COMP%]   ion-card.broken-links[_ngcontent-%COMP%]{background-image:url(brokenlinks_card.02dade4d30f17ad7ac81.png)}.secondary[_ngcontent-%COMP%]   ion-card.domain-expire[_ngcontent-%COMP%]{background-image:url(domainexpire_card.a9ce6112738af5da984f.png)}.secondary[_ngcontent-%COMP%]   ion-card.full-report[_ngcontent-%COMP%]{background-image:url(fullreport_card.1297a44fd91e49c2c78d.png)}.secondary[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{height:100%;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;padding:0 12px}.secondary[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-row.white-row[_ngcontent-%COMP%]{padding:0}.secondary[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-row.last-checked[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:gray!important}.secondary[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{display:block}.secondary[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col.flex-col[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:end;align-items:flex-end}.secondary[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{display:block}.secondary[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-label.more[_ngcontent-%COMP%]{color:#fff!important}.secondary[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-label.big-font[_ngcontent-%COMP%]{font-size:21px;margin-bottom:2px}.secondary[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-label.bigger-font[_ngcontent-%COMP%]{font-size:29px}.secondary[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-label.heavy-font[_ngcontent-%COMP%]{padding-left:10px;font-size:13px;font-weight:700;color:#000}.secondary[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-label.small-font[_ngcontent-%COMP%]{font-size:16px}.secondary[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-label.conversion-rate[_ngcontent-%COMP%]{padding-left:10px;color:#00bbc6;font-size:19px;font-weight:700}.secondary[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-label.visitors-cnt[_ngcontent-%COMP%]{padding-left:10px;color:#4daeef;font-size:19px;font-weight:700}.secondary[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col.last-checked[_ngcontent-%COMP%]{display:block;text-transform:none;color:#000;font-size:11px;padding:0}.secondary[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]{width:30px;height:30px;border-radius:50%;font-size:16px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;color:#000;background-color:#fff}ion-menu[_ngcontent-%COMP%]{position:fixed;top:calc(75px + env(safe-area-inset-top))}ion-menu[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   .monitor[_ngcontent-%COMP%]{display:-webkit-box;display:flex;width:100%;-webkit-box-align:center;align-items:center;position:absolute;-webkit-box-pack:center;justify-content:center}ion-menu[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   .monitor[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:16px;font-weight:500;padding-left:10px}ion-menu[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{position:absolute}ion-menu[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-button.close[_ngcontent-%COMP%]{right:10px!important;z-index:1}ion-menu[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-button.invite[_ngcontent-%COMP%]{font-size:17px;left:10px;color:#fe7a80;--color-activated:rgb(197, 81, 81);z-index:1}ion-menu[_ngcontent-%COMP%]   ion-header[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{font-size:16px;text-align:center;font-weight:500}ion-menu.userSetting[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   .errorMessage[_ngcontent-%COMP%]{display:block;text-align:center;font-size:18px}ion-menu.userSetting[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{--border-color:transparent}ion-menu.userSetting[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]{border-radius:16px;box-shadow:0 3px 6px #d1d0d0;margin-bottom:20px}ion-menu.userSetting[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item-option[_ngcontent-%COMP%]{width:72px}ion-menu.userSetting[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item-option.report[_ngcontent-%COMP%]{--background:#FF9947}ion-menu.userSetting[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item-option.delete[_ngcontent-%COMP%]{--background:#FF3F3F}ion-menu.userSetting[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item-option.email[_ngcontent-%COMP%]{--background:#03C5CF}ion-menu.userSetting[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item-option[_ngcontent-%COMP%]   .end-point[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center}ion-menu.userSetting[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item-option[_ngcontent-%COMP%]   .end-point.left[_ngcontent-%COMP%]{padding-left:3.5px!important}ion-menu.userSetting[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item-option[_ngcontent-%COMP%]   .end-point.right[_ngcontent-%COMP%]{padding-right:3.5px!important}ion-menu.userSetting[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item-option[_ngcontent-%COMP%]   .end-point[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:11px}ion-menu.userSetting[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item-option[_ngcontent-%COMP%]   .end-point[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:26px!important}ion-menu.userSetting[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item-option[_ngcontent-%COMP%]   .end-point[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]{--background:white;--background-checked:white;--border-color:none;--border-color-checked:none;--checkmark-color:#FF9947;--border-radius:3px;margin-bottom:3px;--size:22px}ion-menu.userSetting[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--min-height:75px;--background:white;--inner-border-width:0;--padding-start:0px!important;--padding-end:0px!important}ion-menu.userSetting[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-left:16px}ion-menu.userSetting[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{display:block;padding-left:10px}ion-menu.userSetting[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label.name[_ngcontent-%COMP%]{font-size:20px}ion-menu.userSetting[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label.url[_ngcontent-%COMP%]{font-size:14px;color:gray}ion-menu.userSetting[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   div.border[_ngcontent-%COMP%]{height:100%;width:7px;position:absolute}ion-menu.userSetting[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   div.border.report[_ngcontent-%COMP%]{left:0;background:#ff9947}ion-menu.userSetting[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   div.border.right[_ngcontent-%COMP%]{right:0;background:#ff3f3f}ion-menu.userSetting[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item-sliding[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   div.border.email[_ngcontent-%COMP%]{left:0;background:#03c5cf}ion-menu.monitorSetting[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]{--padding-start:0px;--padding-end:0px!important}ion-menu.monitorSetting[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--padding-start:0px;--padding-end:0px;--min-height:50px;--border-color:#f0eded}ion-menu.monitorSetting[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-left:15px}ion-menu.monitorSetting[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label.pluginName[_ngcontent-%COMP%]{padding-left:20px;font-size:16px;white-space:unset!important}ion-menu.monitorSetting[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{font-size:15px;height:34px;--padding-start:11px;--padding-end:11px;font-weight:300}ion-menu.monitorSetting[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-button.disconnected[_ngcontent-%COMP%]{--background:#02A351}ion-menu.monitorSetting[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-button.connected[_ngcontent-%COMP%]{--background:#F62F70}ion-menu.monitorSetting[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] + ion-item[_ngcontent-%COMP%]{margin-top:20px}"]},LIUN:function(n,t,o){"use strict";o.d(t,"a",(function(){return e}));class e{transform(n){return Math.round(n)}}},Qskf:function(n,t,o){"use strict";o.d(t,"a",(function(){return e}));class e{transform(n){return n.toLowerCase()}}},zU6L:function(n,t,o){"use strict";o.d(t,"a",(function(){return i}));var e=o("8Y7J");let i=(()=>{class n{constructor(){this.colors={red:"#fd4e43",yellow:"#fba602",green:"#0dce68"},this.dangerStatus={outline:"#fd4e43",inline:"#fd4e43"},this.warningStatus={outline:"#fba602",inline:"#fba602"},this.safeStatus={outline:"#0dce68",inline:"#0dce68"}}}return n.ngInjectableDef=e["\u0275\u0275defineInjectable"]({factory:function(){return new n},token:n,providedIn:"root"}),n})()}}]);