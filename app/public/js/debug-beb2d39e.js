!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/public/",t(t.s=182)}({18:function(e,t){e.exports=function(e,t,n,i,r){var o,s=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,s=e.default);var c="function"==typeof s?s.options:s;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns),i&&(c._scopeId=i);var l;if(r?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=l):n&&(l=n),l){var u=c.functional,d=u?c.render:c.beforeCreate;u?c.render=function(e,t){return l.call(t),d(e,t)}:c.beforeCreate=d?[].concat(d,l):[l]}return{esModule:o,exports:s,options:c}}},182:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(183),r=n.n(i),o=n(194);n.n(o);window.__debugEditor__={install:function(e,t){var n=new t({render:function(e){return e(r.a)}}).$mount(e);return{app:n,show:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var t in e)Object.prototype.hasOwnProperty.call(n.$children[0],t)&&(n.$children[0][t]=e[t]);n.$children[0].visible=!0},hide:function(){n.$children[0].visible=!1},off:function(){var e;return(e=n.$children[0]).$off.apply(e,arguments),this},on:function(){var e;return(e=n.$children[0]).$on.apply(e,arguments),this}}}}},183:function(e,t,n){function i(e){r||n(184)}var r=!1,o=n(18)(n(185),n(193),i,"data-v-d2c2b4fe",null);o.options.__file="C:\\srv\\code\\lego_manage\\app\\web\\pages\\debug\\app.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},184:function(e,t){},185:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(186),r=n(187),o=n.n(r),s=n(191),a=n(192),c=n.n(a);t.default={components:{AceEditor:o.a},data:function(){return{visible:!1,editorVar:{},frameUrl:"",userInfo:window.userInfo||{},codeHtmlString:"",codeStyleString:"/* css */\n",codeScriptString:"(function() {\n  // do something\n})();"}},watch:{visible:function(e){e&&(this.setDefaultCodeValue(),this.frameReload())}},methods:{setDefaultCodeValue:function(){this.codeStyleString||(this.codeStyleString="/* css */\n"),this.codeScriptString||(this.codeScriptString="(function() {\n  // do something\n})();")},initVariable:function(e){var t=[],n={};Object(s.b)(c.a,t),t.forEach(function(e){var t=Object(s.c)(e.type);n[t.getKey(e)]={value:t.getValue(e),desc:t.getLabel(e)}}),Array.isArray(e)&&e.forEach(function(e){n[e.uid]={value:e.uid,desc:"组件"+e.name+"，ID为"+e.uid},Object(s.a)(e).forEach(function(e){n[e.name+"."+e.propName]={value:e.propName,desc:e.type+"类型"}})}),this.editorVar=n},frameReload:function(){this.childAPI?(this.childAPI.destroy(),this.childAPI=null,this.createPostmate()):this.createPostmate()},handleFullScreen:function(e){switch(e){case"html":this.$refs.codeHtmlString.fullScreen();break;case"style":this.$refs.codeStyleString.fullScreen();break;case"script":this.$refs.codeScriptString.fullScreen()}},handleLoadIframe:function(){this.frameReload()},handleLoadPage:function(){var e=this,t=window.LegoEditor||{};t.preview&&"function"==typeof t.preview.saveAndCreatePage&&t.preview.saveAndCreatePage(function(){e.frameReload()},"debug")},handleEditorHtmlChange:function(e){this.codeHtmlString=e},handleEditorScriptChange:function(e){this.codeScriptString=e},handleEditorStyleChange:function(e){this.codeStyleString=e},handleClose:function(){this.visible=!1},handleDebug:function(e){this.childAPI&&(this.childAPI.call("injectStyle",{code:this.codeStyleString}),this.childAPI.call("injectString",{content:this.codeHtmlString}),this.childAPI.call("evalFunc",{code:this.codeScriptString}))},handleRefresh:function(){this.childAPI&&this.childAPI.call("refresh")},handleSave:function(){this.$emit("save",{html:this.codeHtmlString||"",style:this.codeStyleString||"",script:this.codeScriptString||""}),this.visible=!1},removeChild:function(e){e.children&&e.children.length>0&&[].slice.call(e.children,0).forEach(function(t){return e.removeChild(t)})},createPostmate:function(){var e=this,t=document.getElementById("js-preview");if(t&&this.frameUrl){this.removeChild(t);new i.a({container:t,url:this.frameUrl}).then(function(t){e.childAPI=t,e.listenEvent()})}},listenEvent:function(){var e=this;this.childAPI.on("get-component-config",function(t){try{var n=JSON.parse(t);e.initVariable(n)}catch(e){}})}},mounted:function(){this.createPostmate()}}},186:function(e,t,n){"use strict";(function(e){var n="application/x-postmate-v1+json",i=0,r=function(){return++i},o=function(){var e;return p.debug?(e=console).log.apply(e,arguments):null},s=function(e){var t=document.createElement("a");t.href=e;var n=t.protocol.length>4?t.protocol:window.location.protocol,i=t.host.length?"80"===t.port||"443"===t.port?t.hostname:t.host:window.location.host;return t.origin||n+"//"+i},a={handshake:1,"handshake-reply":1,call:1,emit:1,reply:1,request:1},c=function(e,t){return("string"!=typeof t||e.origin===t)&&(!!e.data&&("postmate"in e.data&&(e.data.type===n&&!!a[e.data.postmate])))},l=function(e,t){var n="function"==typeof e[t]?e[t]():e[t];return p.Promise.resolve(n)},u=function(){function t(t){var n=this;this.parent=t.parent,this.frame=t.frame,this.child=t.child,this.childOrigin=t.childOrigin,this.events={},"production"!==e.env.NODE_ENV&&(o("Parent: Registering API"),o("Parent: Awaiting messages...")),this.listener=function(t){if(!c(t,n.childOrigin))return!1;var i=((t||{}).data||{}).value||{},r=i.data,s=i.name;"emit"===t.data.postmate&&("production"!==e.env.NODE_ENV&&o("Parent: Received event emission: "+s),s in n.events&&n.events[s].call(n,r))},this.parent.addEventListener("message",this.listener,!1),"production"!==e.env.NODE_ENV&&o("Parent: Awaiting event emissions from Child")}var i=t.prototype;return i.get=function(e){var t=this;return new p.Promise(function(i){var o=r(),s=function e(n){n.data.uid===o&&"reply"===n.data.postmate&&(t.parent.removeEventListener("message",e,!1),i(n.data.value))};t.parent.addEventListener("message",s,!1),t.child.postMessage({postmate:"request",type:n,property:e,uid:o},t.childOrigin)})},i.call=function(e,t){this.child.postMessage({postmate:"call",type:n,property:e,data:t},this.childOrigin)},i.on=function(e,t){this.events[e]=t},i.destroy=function(){"production"!==e.env.NODE_ENV&&o("Parent: Destroying Postmate instance"),window.removeEventListener("message",this.listener,!1),this.frame.parentNode.removeChild(this.frame)},t}(),d=function(){function t(t){var i=this;this.model=t.model,this.parent=t.parent,this.parentOrigin=t.parentOrigin,this.child=t.child,"production"!==e.env.NODE_ENV&&(o("Child: Registering API"),o("Child: Awaiting messages...")),this.child.addEventListener("message",function(t){if(c(t,i.parentOrigin)){"production"!==e.env.NODE_ENV&&o("Child: Received request",t.data);var r=t.data,s=r.property,a=r.uid,u=r.data;if("call"===t.data.postmate)return void(s in i.model&&"function"==typeof i.model[s]&&i.model[s].call(i,u));l(i.model,s).then(function(e){return t.source.postMessage({property:s,postmate:"reply",type:n,uid:a,value:e},t.origin)})}})}return t.prototype.emit=function(t,i){"production"!==e.env.NODE_ENV&&o('Child: Emitting Event "'+t+'"',i),this.parent.postMessage({postmate:"emit",type:n,value:{name:t,data:i}},this.parentOrigin)},t}(),p=function(){function t(e){var t=e.container,n=void 0===t?void 0!==n?n:document.body:t,i=e.model,r=e.url,o=e.classListArray,s=void 0===o?[]:o;return this.parent=window,this.frame=document.createElement("iframe"),this.frame.classList.add.apply(this.frame.classList,s),n.appendChild(this.frame),this.child=this.frame.contentWindow||this.frame.contentDocument.parentWindow,this.model=i||{},this.sendHandshake(r)}return t.prototype.sendHandshake=function(i){var r,a=this,l=s(i),d=0;return new t.Promise(function(t,s){var p=function n(i){return!!c(i,l)&&("handshake-reply"===i.data.postmate?(clearInterval(r),"production"!==e.env.NODE_ENV&&o("Parent: Received handshake reply from Child"),a.parent.removeEventListener("message",n,!1),a.childOrigin=i.origin,"production"!==e.env.NODE_ENV&&o("Parent: Saving Child origin",a.childOrigin),t(new u(a))):("production"!==e.env.NODE_ENV&&o("Parent: Invalid handshake reply"),s("Failed handshake")))};a.parent.addEventListener("message",p,!1);var f=function(){d++,"production"!==e.env.NODE_ENV&&o("Parent: Sending handshake attempt "+d,{childOrigin:l}),a.child.postMessage({postmate:"handshake",type:n,model:a.model},l),5===d&&clearInterval(r)},h=function(){f(),r=setInterval(f,500)};a.frame.attachEvent?a.frame.attachEvent("onload",h):a.frame.onload=h,"production"!==e.env.NODE_ENV&&o("Parent: Loading frame",{url:i}),a.frame.src=i})},t}();p.debug=!1,p.Promise=function(){try{return window?window.Promise:Promise}catch(e){return null}}(),p.Model=function(){function t(e){return this.child=window,this.model=e,this.parent=this.child.parent,this.sendHandshakeReply()}return t.prototype.sendHandshakeReply=function(){var t=this;return new p.Promise(function(i,r){var s=function s(a){if(a.data.postmate){if("handshake"===a.data.postmate){"production"!==e.env.NODE_ENV&&o("Child: Received handshake from Parent"),t.child.removeEventListener("message",s,!1),"production"!==e.env.NODE_ENV&&o("Child: Sending handshake reply to Parent"),a.source.postMessage({postmate:"handshake-reply",type:n},a.origin),t.parentOrigin=a.origin;var c=a.data.model;return c&&(Object.keys(c).forEach(function(e){t.model[e]=c[e]}),"production"!==e.env.NODE_ENV&&o("Child: Inherited and extended model from Parent")),"production"!==e.env.NODE_ENV&&o("Child: Saving Parent origin",t.parentOrigin),i(new d(t))}return r("Handshake Reply Failed")}};t.child.addEventListener("message",s,!1)})},t}(),t.a=p}).call(t,n(5))},187:function(e,t,n){function i(e){r||n(188)}var r=!1,o=n(18)(n(189),n(190),i,null,null);o.options.__file="C:\\srv\\code\\lego_manage\\app\\web\\components\\ace-editor.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] ace-editor.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},188:function(e,t){},189:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"AceEditor",props:{editorId:{type:String,required:!0},content:{type:String,default:""},variable:{type:Object,default:function(){}},lang:{type:String,default:"text"},theme:{type:String,default:"github"},width:{type:String,default:"100%"},height:{type:String,default:"100%"}},data:function(){return{editor:null,langTools:null,beforeContent:"",isFullScreen:!1}},watch:{content:function(e){this.beforeContent!==e&&this.editor.setValue(e,1)},variable:function(e){this.setCompleter(e)}},methods:{setCompleter:function(e){e=e||{};var t=[];for(var n in e)t.push({caption:n,value:e[n].value||n,meta:e[n].desc});var i={getCompletions:function(e,n,i,r,o){if(0===r.length)return o(null,[]);o(null,t)}};this.langTools.setCompleters([i,this.langTools.keyWordCompleter])},fullScreen:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.editor&&(this.isFullScreen=!!e,this.editor.container.classList[this.isFullScreen?"add":"remove"]("ui-full-screen"),this.editor.setAutoScrollEditorIntoView(!this.isFullScreen),this.editor.resize())},exitFullScreen:function(){this.fullScreen(!1)}},beforeDestroy:function(){this.editor.destroy(),this.editor.container.remove()},mounted:function(){var e=this;this.editor=window.ace.edit(this.editorId),this.langTools=ace.require("ace/ext/language_tools"),this.editor.setOptions({enableLiveAutocompletion:!0}),this.setCompleter(this.variable),this.editor.setValue(this.content,1),this.editor.getSession().setMode("ace/mode/"+this.lang),this.editor.setTheme("ace/theme/"+this.theme),this.editor.on("change",function(){e.beforeContent=e.editor.getValue(),e.$emit("change",e.beforeContent)})}}},190:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{style:{width:e.width,height:e.height},attrs:{id:e.editorId}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isFullScreen,expression:"isFullScreen"}],staticClass:"ui-close-btn",on:{click:e.exitFullScreen}})])},staticRenderFns:[]},e.exports.render._withStripped=!0},191:function(e,t,n){"use strict";function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.limit||4,o=n.prefix||"LegoUtil",a=o.split(".").length;if(!(a>=r))for(var c in e)"function"==typeof e[c]||a===r-1?t.push({key:o+"."+c,type:e[c]&&e[c].type||s(e[c]),label:e[c]&&e[c].label||""}):"object"===s(e[c])&&i(e[c],t,{prefix:o+"."+c})}function r(e){var t={function:{getKey:function(e){return e.key},getValue:function(e){return e.key+"()"},getLabel:function(e){return e.key}},default:{getKey:function(e){return e.key},getValue:function(e){return e.key},getLabel:function(e){return e.key}}};return t[e]||t.default||{}}function o(e){var t=[],n=["styleKey","didTrigger","didFinish","lazyLoad","isShowNpmVersions","npmversion","npmversionArr","npmname","extend","fnObj","_itemList"];if(!e.data)return t;for(var i in e.data)-1===n.indexOf(i)&&t.push({name:e.name,propName:i,type:s(e.data[i])});return t}t.b=i,t.c=r,t.a=o;var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}},192:function(e,t,n){!function(t,n){e.exports=n()}("undefined"!=typeof self&&self,function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,n){"use strict";function i(){Array.isArray(window._componentConfig)&&(r={},window._componentConfig.forEach(function(e){e.uid&&(r[e.uid]=e)}))}var r={};i(),t.a={init:i,get:function(e){return Object.prototype.hasOwnProperty.call(r,e)?r[e]:{}}}},function(e,t,n){var i;void 0!==(i=function(e,t,n){function i(){this.tipsHtml,this.config={msg:"",isLoading:!1,autoHide:!0,hideTime:1200},this.iconConf={loading:'<span class="rotate-icon"></span>',none:""},this.tipTemplate='<div id="bubble"><div class="mod-spinner"><div class="spinner-wrap">{{icon}}<p class="text" id="bubble-text">{{text}}</p></div></div></div>',this.tipRegisterSuccess='<div class="overlay"></div>    <div class="mod-dialog">        <div class="dialog-title ui-bb-n">感谢您对加油宝的支持<span class="close-wrap" id="registerCloseDialog">&#10005;</span></div>        <div class="dialog-content ui-ov-h">            <div class="coupon-wrap ui-ta-c ui-p-r">                <img src="https://images.jyblife.com/tuiguang/huafei/couponbg.png" width="80%">                <div class="ui-p-a f-15 text">                    <dd class="color-333">{{tipsdesc1}}</dd>                    <dd class="color-red">{{tipsdesc2}}</dd>                </div>            </div>            <dd class="color-333 ui-pt-10 ui-pb-20">{{tipsdesc3}}</dd>            <div class="ui-ml-20 ui-mr-20 ui-pl-20 ui-pr-20 ui-pb-20 ui-mb-20">                <a class="mod-btn f-15 hover" href="{{jumpurl}}">{{tipsdesc4}}</a>            </div>        </div>    </div>',this.tipRegisterSuccessEvent='<div class="overlay"></div>    <div class="mod-dialog">        <div class="dialog-title ui-bb-n">感谢您对加油宝的支持<span class="close-wrap" id="registerCloseDialog">&#10005;</span></div>        <div class="dialog-content ui-ov-h">            <div class="coupon-wrap ui-ta-c ui-p-r">                <img src="https://images.jyblife.com/tuiguang/huafei/couponbg.png" width="80%">                <div class="ui-p-a f-15 text">                    <dd class="color-333">{{tipsdesc1}}</dd>                    <dd class="color-red">{{tipsdesc2}}</dd>                </div>            </div>            <dd class="color-333 ui-pt-10 ui-pb-20">{{tipsdesc3}}</dd>            <div class="ui-ml-20 ui-mr-20 ui-pl-20 ui-pr-20 ui-pb-20 ui-mb-20" id="confirm_btn">                <div class="mod-btn f-15 hover" >{{tipsdesc4}}</div>            </div>        </div>    </div>'}$.extend(i.prototype,{showTips:function(e){var t=this;if(!t.tipsHtml){var n=$.extend({},this.config,e),i=this.tipTemplate.replace(/{{icon}}/,n.isLoading?this.iconConf.loading:"").replace(/{{text}}/,n.msg);this.tipsHtml=$(i),$("body").append(this.tipsHtml),n.autoHide&&setTimeout(function(){t.closeTips()},n.hideTime),this.lock=!0}},showRegisterSuccess:function(e){this.tipRegisterSuccess=this.tipRegisterSuccess.replace("{{tipsdesc1}}",e.tipsdesc1).replace("{{tipsdesc2}}",e.tipsdesc2).replace("{{tipsdesc3}}",e.tipsdesc3).replace("{{tipsdesc4}}",e.tipsdesc4).replace("{{jumpurl}}",e.jumpurl),$("#layer").append(this.tipRegisterSuccess),$("#registerCloseDialog").on("click",function(e){$("#layer").html("")})},showRegisterSuccessEvent:function(e,t,n){this.tipRegisterSuccessEvent=this.tipRegisterSuccessEvent.replace("{{tipsdesc1}}",e.tipsdesc1).replace("{{tipsdesc2}}",e.tipsdesc2).replace("{{tipsdesc3}}",e.tipsdesc3).replace("{{tipsdesc4}}",e.tipsdesc4).replace("{{jumpurl}}",e.jumpurl),$("#layer").append(this.tipRegisterSuccessEvent),$("#registerCloseDialog").on("click",function(e){$("#layer").html("")});var i=this;$("#confirm_btn").on("click",function(e){n&&n(),i.showLoading(),setTimeout(function(){t&&t(e)},3e3)})},showLoading:function(e){this.showTips({msg:e||"努力加载中...",isLoading:!0,autoHide:!1})},showError:function(e){var t=this;clearInterval(t.ptr),t.ptr=setInterval(function(){t.tipsHtml||(t.showTips({msg:e}),clearInterval(t.ptr))},200)},closeTips:function(){var e=this;return e.tipsHtml?(e.tipsHtml.remove(),e.tipsHtml=null,e.lock=!1,e):e}}),n.exports=new i}.call(t,n,t,e))&&(e.exports=i)},function(e,t,n){e.exports=n(3)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),r=(n.n(i),n(5)),o=(n.n(r),n(6)),s=n(7),a=n(0),c=n(8),l={};l.$base=c.a,l.$dom=o.a,l.$util=i,l.$data=s.a,l.$config=a.a,t.default=l},function(e,t,n){!function(e,n){!function(e){"use strict";function t(e,t){var n=t||window.location.search.replace("&amp;","&"),i=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),r=n.substr(n.indexOf("?")+1).match(i);return null!=r?r[2]:""}function n(e){var t=new RegExp("(^| )"+e+"(?:=([^;]*))?(;|$)"),n=document.cookie.match(t);return n?n[2]?unescape(n[2]):"":null}function i(e,t,i,r){if(null!=n(e)){var o=new Date;o.setMinutes(o.getMinutes()-1e3),t=t||"/",document.cookie=e+"=;expires="+o.toGMTString()+(t?";path="+t:"")+(i?";domain="+i:"")+(r?";secure":"")}}function r(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"/",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],s=new Date;n&&s.setTime(s.getTime()+24*n*3600*1e3),document.cookie=e+"="+escape(t)+(n?";expires="+s.toGMTString():"")+(i?";path="+i:"")+(r?";domain="+r:"")+(o?";secure":"")}function o(){try{return sessionStorage.setItem("testSafariPrivate",!0),!0}catch(e){return!1}}function s(e){return String(e).replace(/(\d{1,3})(?=(\d{3})+(\.\d*)?$)/g,"$1,")}function a(e){return e.replace(/(\d{4})(\d{2})(\d{2})?/g,function(e,t,n,i){return i?t+"-"+n+"-"+i:t+"-"+n})}function c(e,t){return t?(e/100).toFixed(2):e/100}e.getQuery=t,e.getCookie=n,e.delCookie=i,e.setCookie=r,e.supportStorage=o,e.getFormatPrice=s,e.formatDate=a,e.getYuan=c,Object.defineProperty(e,"__esModule",{value:!0})}(t)}()},function(e,t){"undefined"==typeof $&&(window.$={extend:function(e,t){for(var n in t)e[n]=t[n]}})},function(e,t,n){"use strict";t.a={get:function(e){return document.querySelector('[uid="'+e+'"]')}}},function(e,t,n){"use strict";var i=n(0);t.a={get:function(e){return i.a.get(e).data||{}}}},function(e,t,n){"use strict";var i=n(9),r=n.n(i),o=n(10),s=n.n(o),a=n(11),c=n.n(a),l=n(14),u=n.n(l),d=n(1),p=n.n(d);t.a={detect:r.a,env:r()(),EventEmit:s.a,event:s.a.instance,request:c.a,tips:p.a,dialog:u.a}},function(e,t,n){!function(t,n){e.exports=function(){"use strict";function e(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!e&&t)return t;t={},n=n||window.navigator.userAgent;var i=n.toLowerCase(),r=n.match(/(Android);?[\s\/]+([\d.]+)?/),o=n.match(/(iPad).*OS\s([\d_]+)/),s=n.match(/(iPod)(.*OS\s([\d_]+))?/),a=!o&&n.match(/(iPhone\sOS)\s([\d_]+)/),c=/jiayoubao/.test(i),l=/micromessenger/.test(i),u=/qq\//.test(i);return t.jyb=c,t.weixin=l,t.qq=u,r&&(t.android=!0,t.version=r[2]),a&&!s&&(t.ios=t.iphone=!0,t.version=a[2].replace(/_/g,".")),o&&(t.ios=t.ipad=!0,t.version=o[2].replace(/_/g,".")),s&&(t.ios=t.ipod=!0,t.version=s[3]?s[3].replace(/_/g,"."):null),t}var t=null;return e}()}()},function(e,t,n){!function(t,n){e.exports=function(){"use strict";var e=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},t=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),n=function(){function n(){e(this,n),this.listeners={}}return t(n,[{key:"on",value:function(e,t,n){var i=this.listeners[e];i||(i=this.listeners[e]=[]),i.push(t),n&&(i.once=!0)}},{key:"has",value:function(e){return this.listeners[e]}},{key:"once",value:function(e,t){this.on(e,t,!0)}},{key:"emit",value:function(e){var t=this.listeners[e];if(t){for(var n=arguments.length,i=Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];for(var o=0,s=t.length;o<s;o++)t[o].apply(this,i);t.once&&delete this.listeners[e]}}},{key:"off",value:function(e){delete this.listeners[e]}},{key:"offAll",value:function(){this.listeners={}}}]),n}();return n.instance=new n,n}()}()},function(e,t,n){function i(e,t,n,i,a){"object"==typeof e&&(n=t,t=e,e="/act/index"),u&&!t.serialFlag||(void 0!==t.userStatus&&1!=t.userStatus||(t.userid=o.getQuery("userid")||o.getCookie("userid")||"",t.token=o.getQuery("token")||o.getCookie("token")||""),delete t.userStatus,delete t.serialFlag,a||r.showLoading(),"copy"==l&&(t.visit="copy"),t.from=d,u=!0,s({url:window.interface_env+e+"?ts="+ +new Date,data:JSON.stringify(t),type:"post",dataType:"json",timeout:6e4},function(e){r.closeTips(),u=!1,n(e)},function(e){u=!1,a?r.showError("网络错误<br/>错误码"+e):r.closeTips().showError("网络错误<br/>错误码"+e)}))}var r=n(1),o=n(12),s=n(13),a=o.getQuery("userid")||"",c=o.getQuery("token")||"",l=o.getQuery("visit")||"",u=!1;a&&c&&(o.setCookie("userid",a,10),o.setCookie("token",c,10));var d=o.isJyb()?"app":"h5";e.exports=i},function(e,t,n){var i;void 0!==(i=function(e,t,n){return{isJyb:function(){return/jiayoubao/.test(window.navigator.userAgent.toLowerCase())},getQuery:function(e,t){var n=arguments[1]||window.location.search.replace("&amp;","&"),i=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),r=n.substr(n.indexOf("?")+1).match(i);return null!=r?r[2]:""},getUserid:function(){return this.getQuery("userid")||this.getCookie("userid")||""},getToken:function(){return this.getQuery("token")||this.getCookie("token")||""},addUrlPara:function(e,t,n){var i=n.split("#")[0],r=new RegExp(e+"=[-\\w]{1,1000}","g");return/\?/g.test(i)?r.test(i)?i=i.replace(r,e+"="+t):i+="&"+e+"="+t:i+="?"+e+"="+t,n=n.split("#")[1]?i+"#"+n.split("#")[1]:i},getCookie:function(e){var t=new RegExp("(^| )"+e+"(?:=([^;]*))?(;|$)"),n=document.cookie.match(t);return n?n[2]?unescape(n[2]):"":null},delCookie:function(e,t,n,i){if(null!=this.getCookie(e)){var r=new Date;r.setMinutes(r.getMinutes()-1e3),t=t||"/",document.cookie=e+"=;expires="+r.toGMTString()+(t?";path="+t:"")+(n?";domain="+n:"")+(i?";secure":"")}},setCookie:function(e,t,n,i,r,o){var s=new Date,n=arguments[2]||null,i=arguments[3]||"/",r=arguments[4]||null,o=arguments[5]||!1;n&&s.setTime(s.getTime()+24*n*3600*1e3),document.cookie=e+"="+escape(t)+(n?";expires="+s.toGMTString():"")+(i?";path="+i:"")+(r?";domain="+r:"")+(o?";secure":"")},setLogin:function(e,t){this.setCookie("userid",e,10),this.setCookie("token",t,10)},supportStorage:function(){try{return sessionStorage.setItem("testSafariPrivate",!0),!0}catch(e){return!1}},getFormatPrice:function(e){return String(e).replace(/(\d{1,3})(?=(\d{3})+(\.\d*)?$)/g,"$1,")},formatDate:function(e){return e.replace(/(\d{4})(\d{2})(\d{2})?/g,function(e,t,n,i){return i?t+"-"+n+"-"+i:t+"-"+n})},getYuan:function(e,t){return t?(e/100).toFixed(2):e/100},getJybUrl:function(e){var t=this.getQuery("userid")||this.getCookie("userid")||"",n=this.getQuery("token")||this.getCookie("token")||"";return e.indexOf("http")>-1&&(e=this.addUrlPara("userid",t,e),e=this.addUrlPara("token",n,e)),e},toThousands:function(e){for(var e=(e||0).toString(),t="";e.length>3;)t=","+e.slice(-3)+t,e=e.slice(0,e.length-3);return e&&(t=e+t),t},formatPrice:function(e){if(+(e=+e)<0||isNaN(e))return"--";e=(e/100).toFixed(2);var t=e.split(".");return[this.toThousands(t[0]),t[1]].join(".")},timeFormat:function(e,t){var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));for(var i in n)new RegExp("("+i+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?n[i]:("00"+n[i]).substr((""+n[i]).length)));return e},parseDate:function(e){var t=new Date(1e3*e),n=function(e){return e>9?e+"":"0"+e};return{year:n(t.getFullYear()),month:n(t.getMonth()+1),day:n(t.getDate()),hour:n(t.getHours()),min:n(t.getMinutes()),second:n(t.getSeconds()),weekDay:t.getDay()+"",monthLastDay:function(){return t.setDate(32),t.setDate(0),t.getDate()+""}()}},escape:function(e){var t={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&apos;"};return e.replace(/[\<\>\&\"\']/g,function(e){return t[e]})},flog:function(e){console.log(JSON.stringify(e,null,4))},testPhone:function(e){return/^1[34578]\d{9}$/.test(e)},testVerifyCode:function(e){return/^\d{6}$/.test(e)},delUrlParam:function(e,t){e=e||location.href;var n="",i="",r="",o="";n=e.indexOf("?")>-1?e.substr(0,e.indexOf("?")):e,e.indexOf("?")>-1&&(i=e.indexOf("#")>-1?e.slice(e.indexOf("?")+1,e.indexOf("#")):e.slice(e.indexOf("?")+1,e.length)),e.indexOf("#")>-1&&(r=e.substr(e.indexOf("#")));var s=new Array;if(""!=i)for(var a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");l[0]!=t&&s.push(a[c])}return s.length>0&&(o="?"+s.join("&")),e=n+o+r},callLogin:function(){if(this.isJyb()){var e=this;wv.ready(function(){wv.login({phoneNo:"",complete:function(t){e.setLogin(t.userId,t.token);var n=location.href;n=e.addUrlPara("userid",t.userId,n),n=e.addUrlPara("token",t.token,n),window.location.replace(n)}})})}else{var t=this.delUrlParam(location.href,"userid");t=this.delUrlParam(t,"token");var n=window.location.origin,i=this.getQuery("origin");i&&(n=i),window.location.href=n+"/act/unionlogin/pages/index.html?redirect="+encodeURIComponent(t)}},openUrl:function(e){if(this.isJyb()&&-1==e.indexOf("jtjr"))window.wv.ready(function(){window.wv.open({url:e})});else{var t=this;setTimeout(function(){e=t.addUrlPara("userid",t.getUserid(),e),e=t.addUrlPara("token",t.getToken(),e),window.location.href=e},0)}},detect:function(){var e={},t=t||window.navigator.userAgent,n=t.toLowerCase(),i=t.match(/(Android);?[\s\/]+([\d.]+)?/),r=t.match(/(iPad).*OS\s([\d_]+)/),o=t.match(/(iPod)(.*OS\s([\d_]+))?/),s=!r&&t.match(/(iPhone\sOS)\s([\d_]+)/),a=/jiayoubao/.test(n),c=/micromessenger/.test(n),l=/qq\//.test(n);return e.jyb=a,e.weixin=c,e.qq=l,i&&(e.android=!0,e.version=i[2]),s&&!o&&(e.ios=e.iphone=!0,e.version=s[2].replace(/_/g,".")),r&&(e.ios=e.ipad=!0,e.version=r[2].replace(/_/g,".")),o&&(e.ios=e.ipod=!0,e.version=o[3]?o[3].replace(/_/g,"."):null),e}}}.call(t,n,t,e))&&(e.exports=i)},function(e,t,n){var i;void 0!==(i=function(e,t,n){n.exports=function(e,t,n){var i=new XMLHttpRequest;i.onreadystatechange=function(){1==i.readyState&&e.beforeSend&&e.beforeSend();var r=setTimeout(function(){4!==i.readyState&&(n&&n(),i.abort())},e.timeout||1e4);4===i.readyState&&(clearTimeout(r),200===i.status?t.call(i,"json"==e.dataType.toLowerCase()?JSON.parse(i.responseText):i.responseText):n&&n.apply(i,[i.status,i.responseText]))},e.type=e.type.toUpperCase();var r=e.data;(void 0===e.processData||e.processData)&&(r=function(e){if("object"==typeof e&&null!=e){var t=[];for(var n in e)t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")}return e}(e.data)),"GET"===e.type&&(e.url=e.url+(e.url.indexOf("?")>0?"&":"?")+r,r=null),i.open(e.type,e.url),i.withCredentials=!0,("POST"==e.type&&void 0===e.contentType||e.contentType)&&i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.send(r)}}.call(t,n,t,e))&&(e.exports=i)},function(e,t,n){var i;void 0!==(i=function(e,t){function n(e){if(s={titleBorder:!1,title:"",showClose:!1,content:"",btnFn:[],mask:!1,selfAction:"",onClose:function(){},onShow:function(){}},!a){$.extend(s,e);var t,n=[],r=[],o="",g="",m=window.pageYOffset,y=window.innerHeight;$.each(s.btnFn,function(e,t){n.push(h.replace(/{{text}}/,t.text).replace(/{{index}}/,e).replace(/{{css}}/,t.css?t.css:"")),v["btnCallback"+e]=t.callback}),c=s.btnFn.length,s.title&&(g=u.replace(/{{title}}/,s.title).replace(/{{close}}/,s.showClose?d:"").replace(/{{titleBorder}}/,s.titleBorder?"":"ui-bb-n")),t=p.replace(/{{content}}/,s.content),c&&(o=f.replace(/{{btnList}}/,n.join(""))),r.push("<div id='dialogNode' class='ui-vh'>"),s.mask&&r.push(l),r.push('<div class="mod-dialog ui-mb-20" style="position:absolute;top:'+(m+.2*window.innerHeight)+'px;">'),r.push(g+t+o),r.push("</div></div>"),a=$(r.join("")),$("body").append(a);var b=$(".mod-dialog");b[0].scrollHeight<y&&b.css({position:"fixed",top:"50%",left:"50%",transform:"translateX(-50%) translateY(-50%)","-webkit-transform":"translateX(-50%) translateY(-50%)"}),a.removeClass("ui-vh"),s.onShow(a),i()}}function i(){a.on("click",v.handleEvent)}function r(e){a.find(".dialog-content").html(e)}function o(){v.closeDialog()}var s,a,c,l='<div class="overlay"></div>',u='<div class="dialog-title {{titleBorder}}">{{title}}{{close}}</div>',d='<span class="close-wrap" et="click:closeDialog">&#10005;</span>',p='<div class="dialog-content ui-ov-h">{{content}}</div>',f='<div class="dialog-btn-wrap">{{btnList}}</div>',h='<span class="dialog-btn ui-d-b {{css}}" et="click:btnCallback{{index}}">{{text}}</span>',v={};v.handleEvent=function(e){e=e||window.event;var t=e.target.tagName,n=$(e.target),i=n.attr("et");if(!i){for(;n[0]!=this&&!i;)n=n.parent(),i=n.attr("et");if(!i)return}"A"!=t&&e.stopPropagation(),0==i.indexOf(e.type)&&v[i.split(":")[1]](n,e)},v.closeDialog=function(){a&&(a.remove(),a=null,s.onClose(),$.each(c,function(e){delete v["btnCallback"+e]}))},v.selfDefineAction=function(e,t){s.selfAction&&s.selfAction(e,t)},t.show=n,t.close=o,t.updateContent=r}.call(t,n,t,e))&&(e.exports=i)}]).default})},193:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"debug-wrap"},[n("div",{staticClass:"ui-close-btn close-btn",on:{click:e.handleClose}}),e._v(" "),n("div",{staticClass:"debug-main"},[n("div",{staticClass:"url-box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.frameUrl,expression:"frameUrl"}],staticClass:"url-box__input",attrs:{type:"text"},domProps:{value:e.frameUrl},on:{input:function(t){t.target.composing||(e.frameUrl=t.target.value)}}}),e._v(" "),n("a",{staticClass:"btn-save",attrs:{href:"javascript:;"},on:{click:e.handleLoadIframe}},[e._v("加载")]),e._v(" "),n("div",{staticClass:"operate-btn-box"},[n("a",{staticClass:"btn-save",attrs:{href:"javascript:;"},on:{click:e.handleLoadPage}},[e._v("重新加载页面")]),e._v(" "),n("a",{staticClass:"btn-save",attrs:{href:"javascript:;"},on:{click:e.handleRefresh}},[e._v("刷新页面")]),e._v(" "),n("a",{staticClass:"btn-save",attrs:{href:"javascript:;"},on:{click:e.handleDebug}},[e._v("调试")]),e._v(" "),n("a",{staticClass:"btn-save",attrs:{href:"javascript:;"},on:{click:e.handleSave}},[e._v("保存")])])]),e._v(" "),n("div",{staticClass:"debug-box"},[e._m(0),e._v(" "),n("div",{staticClass:"debug-editor-box"},[n("h6",{staticClass:"debug-editor__title"},[e._v("html代码："),n("a",{staticClass:"full-screen",attrs:{href:"javascript:;"},on:{click:function(t){return e.handleFullScreen("html")}}},[e._v("全屏")])]),e._v(" "),n("ace-editor",{ref:"codeHtmlString",staticClass:"debug-editor",attrs:{editorId:"codeHtmlString",height:"180px",content:e.codeHtmlString,lang:"html"},on:{change:function(t){return e.handleEditorHtmlChange(t)}}}),e._v(" "),n("h6",{staticClass:"debug-editor__title"},[e._v("样式代码："),n("a",{staticClass:"full-screen",attrs:{href:"javascript:;"},on:{click:function(t){return e.handleFullScreen("style")}}},[e._v("全屏")])]),e._v(" "),n("ace-editor",{ref:"codeStyleString",staticClass:"debug-editor",attrs:{editorId:"codeStyleString",height:"180px",content:e.codeStyleString,lang:"css"},on:{change:function(t){return e.handleEditorStyleChange(t)}}}),e._v(" "),n("h6",{staticClass:"debug-editor__title"},[e._v("脚本代码（只支持es5语法）："),n("a",{staticClass:"full-screen",attrs:{href:"javascript:;"},on:{click:function(t){return e.handleFullScreen("script")}}},[e._v("全屏")])]),e._v(" "),n("ace-editor",{ref:"codeScriptString",staticClass:"debug-editor",attrs:{editorId:"codeScriptString",height:"180px",variable:e.editorVar,content:e.codeScriptString,lang:"javascript"},on:{change:function(t){return e.handleEditorScriptChange(t)}}})],1)])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"preview-wrapper"},[n("div",{staticClass:"preview-box",attrs:{id:"js-preview"}})])}]},e.exports.render._withStripped=!0},194:function(e,t){},5:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function r(e){if(u===setTimeout)return setTimeout(e,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(e,0);try{return u(e,0)}catch(t){try{return u.call(null,e,0)}catch(t){return u.call(this,e,0)}}}function o(e){if(d===clearTimeout)return clearTimeout(e);if((d===i||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function s(){v&&f&&(v=!1,f.length?h=f.concat(h):g=-1,h.length&&a())}function a(){if(!v){var e=r(s);v=!0;for(var t=h.length;t;){for(f=h,h=[];++g<t;)f&&f[g].run();g=-1,t=h.length}f=null,v=!1,o(e)}}function c(e,t){this.fun=e,this.array=t}function l(){}var u,d,p=e.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(e){u=n}try{d="function"==typeof clearTimeout?clearTimeout:i}catch(e){d=i}}();var f,h=[],v=!1,g=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new c(e,t)),1!==h.length||v||r(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=l,p.addListener=l,p.once=l,p.off=l,p.removeListener=l,p.removeAllListeners=l,p.emit=l,p.prependListener=l,p.prependOnceListener=l,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}}});