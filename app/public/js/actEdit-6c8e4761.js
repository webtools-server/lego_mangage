webpackJsonp([10],{14:function(e,t,n){"use strict";function r(e){return"[object Array]"===w.call(e)}function o(e){return"[object ArrayBuffer]"===w.call(e)}function a(e){return"undefined"!=typeof FormData&&e instanceof FormData}function s(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function i(e){return"string"==typeof e}function c(e){return"number"==typeof e}function l(e){return void 0===e}function u(e){return null!==e&&"object"==typeof e}function f(e){return"[object Date]"===w.call(e)}function p(e){return"[object File]"===w.call(e)}function d(e){return"[object Blob]"===w.call(e)}function _(e){return"[object Function]"===w.call(e)}function m(e){return u(e)&&_(e.pipe)}function h(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function v(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function g(){return"undefined"!=typeof window&&"undefined"!=typeof document&&"function"==typeof document.createElement}function y(e,t){if(null!==e&&void 0!==e)if("object"==typeof e||r(e)||(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}function b(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=b(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)y(arguments[n],e);return t}function x(e,t,n){return y(t,function(t,r){e[r]=n&&"function"==typeof t?I(t,n):t}),e}var I=n(147),w=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isFormData:a,isArrayBufferView:s,isString:i,isNumber:c,isObject:u,isUndefined:l,isDate:f,isFile:p,isBlob:d,isFunction:_,isStream:m,isURLSearchParams:h,isStandardBrowserEnv:g,forEach:y,merge:b,extend:x,trim:v}},146:function(e,t,n){"use strict";function r(e,t){if(0===arguments.length)return null;var n=t||"{y}-{m}-{d} {h}:{i}:{s}",r=void 0;"object"==(void 0===e?"undefined":c(e))?r=e:(10===(""+e).length&&(e=1e3*parseInt(e)),r=new Date(e));var o={y:r.getFullYear(),m:r.getMonth()+1,d:r.getDate(),h:r.getHours(),i:r.getMinutes(),s:r.getSeconds(),a:r.getDay()};return n.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var n=o[t];return"a"===t?["一","二","三","四","五","六","日"][n-1]:(e.length>0&&n<10&&(n="0"+n),n||0)})}function o(e){return e.replace(/\s*/g,"")}function a(e,t){var n=arguments[1]||window.location.search.replace("&amp;","&"),r=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),o=n.substr(n.indexOf("?")+1).match(r);return null!=o?o[2]:""}function s(e,t){for(var n=0;n<e.length;n++)if(e[n]==t)return!0;return!1}function i(e){var t=new RegExp("(^| )"+e+"(?:=([^;]*))?(;|$)"),n=document.cookie.match(t);return n?n[2]?unescape(n[2]):"":null}t.d=r,t.e=o,t.c=a,t.a=s,t.b=i;var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}},147:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},148:function(e,t,n){"use strict";(function(t){var r=n(14),o=n(158),a=n(160),s=n(161),i=n(162),c=n(149),l="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(163);e.exports=function(e){return new Promise(function(u,f){var p=e.data,d=e.headers;r.isFormData(p)&&delete d["Content-Type"];var _=new XMLHttpRequest,m="onreadystatechange",h=!1;if("test"===t.env.NODE_ENV||"undefined"==typeof window||!window.XDomainRequest||"withCredentials"in _||i(e.url)||(_=new window.XDomainRequest,m="onload",h=!0,_.onprogress=function(){},_.ontimeout=function(){}),e.auth){var v=e.auth.username||"",g=e.auth.password||"";d.Authorization="Basic "+l(v+":"+g)}if(_.open(e.method.toUpperCase(),a(e.url,e.params,e.paramsSerializer),!0),_.timeout=e.timeout,_[m]=function(){if(_&&(4===_.readyState||h)&&(0!==_.status||_.responseURL&&0===_.responseURL.indexOf("file:"))){var t="getAllResponseHeaders"in _?s(_.getAllResponseHeaders()):null,n=e.responseType&&"text"!==e.responseType?_.response:_.responseText,r={data:n,status:1223===_.status?204:_.status,statusText:1223===_.status?"No Content":_.statusText,headers:t,config:e,request:_};o(u,f,r),_=null}},_.onerror=function(){f(c("Network Error",e)),_=null},_.ontimeout=function(){f(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED")),_=null},r.isStandardBrowserEnv()){var y=n(164),b=(e.withCredentials||i(e.url))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;b&&(d[e.xsrfHeaderName]=b)}if("setRequestHeader"in _&&r.forEach(d,function(e,t){void 0===p&&"content-type"===t.toLowerCase()?delete d[t]:_.setRequestHeader(t,e)}),e.withCredentials&&(_.withCredentials=!0),e.responseType)try{_.responseType=e.responseType}catch(e){if("json"!==_.responseType)throw e}"function"==typeof e.onDownloadProgress&&_.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&_.upload&&_.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){_&&(_.abort(),f(e),_=null)}),void 0===p&&(p=null),_.send(p)})}}).call(t,n(7))},149:function(e,t,n){"use strict";var r=n(159);e.exports=function(e,t,n,o){var a=new Error(e);return r(a,t,n,o)}},150:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},151:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},153:function(e,t,n){"use strict";(function(e){var r=n(154),o=n.n(r),a=n(68),s=(n.n(a),n(146)),i=o.a.create({baseURL:e.env.BASE_API,timeout:6e4,headers:{"Content-Type":"application/x-www-form-urlencoded"}});i.interceptors.request.use(function(e){return e.headers["x-csrf-token"]=s.b("csrfToken"),e},function(e){console.log(e),Promise.reject(e)}),i.interceptors.response.use(function(e){var t=e.data.code;return"1601000014"==t||"1601000013"==t?(Object(a.Message)({message:e.data.msg,type:"error",duration:3e3}),location.replace("/login?redirect="+encodeURIComponent(location.href)),Promise.reject()):0!=t?(Object(a.Message)({message:e.data.msg,type:"error",duration:3e3}),e.data):e.data},function(e){return console.log("err"+e),Object(a.Message)({message:e.message,type:"error",duration:5e3}),Promise.reject(e)}),t.a=i}).call(t,n(7))},154:function(e,t,n){e.exports=n(155)},155:function(e,t,n){"use strict";function r(e){var t=new s(e),n=a(s.prototype.request,t);return o.extend(n,s.prototype,t),o.extend(n,t),n}var o=n(14),a=n(147),s=n(156),i=n(69),c=r(i);c.Axios=s,c.create=function(e){return r(o.merge(i,e))},c.Cancel=n(151),c.CancelToken=n(170),c.isCancel=n(150),c.all=function(e){return Promise.all(e)},c.spread=n(171),e.exports=c,e.exports.default=c},156:function(e,t,n){"use strict";function r(e){this.defaults=e,this.interceptors={request:new s,response:new s}}var o=n(69),a=n(14),s=n(165),i=n(166),c=n(168),l=n(169);r.prototype.request=function(e){"string"==typeof e&&(e=a.merge({url:arguments[0]},arguments[1])),e=a.merge(o,this.defaults,{method:"get"},e),e.baseURL&&!c(e.url)&&(e.url=l(e.baseURL,e.url));var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},a.forEach(["delete","get","head"],function(e){r.prototype[e]=function(t,n){return this.request(a.merge(n||{},{method:e,url:t}))}}),a.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(a.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},157:function(e,t,n){"use strict";var r=n(14);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},158:function(e,t,n){"use strict";var r=n(149);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n)):e(n)}},159:function(e,t,n){"use strict";e.exports=function(e,t,n,r){return e.config=t,n&&(e.code=n),e.response=r,e}},160:function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(14);e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(o.isURLSearchParams(t))a=t.toString();else{var s=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),s.push(r(t)+"="+r(e))}))}),a=s.join("&")}return a&&(e+=(-1===e.indexOf("?")?"?":"&")+a),e}},161:function(e,t,n){"use strict";var r=n(14);e.exports=function(e){var t,n,o,a={};return e?(r.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t&&(a[t]=a[t]?a[t]+", "+n:n)}),a):a}},162:function(e,t,n){"use strict";var r=n(14);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},163:function(e,t,n){"use strict";function r(){this.message="String contains an invalid character"}function o(e){for(var t,n,o=String(e),s="",i=0,c=a;o.charAt(0|i)||(c="=",i%1);s+=c.charAt(63&t>>8-i%1*8)){if((n=o.charCodeAt(i+=.75))>255)throw new r;t=t<<8|n}return s}var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",e.exports=o},164:function(e,t,n){"use strict";var r=n(14);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,a,s){var i=[];i.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),r.isString(o)&&i.push("path="+o),r.isString(a)&&i.push("domain="+a),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},165:function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(14);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},166:function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(14),a=n(167),s=n(150),i=n(69);e.exports=function(e){return r(e),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||i.adapter)(e).then(function(t){return r(e),t.data=a(t.data,t.headers,e.transformResponse),t},function(t){return s(t)||(r(e),t&&t.response&&(t.response.data=a(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},167:function(e,t,n){"use strict";var r=n(14);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},168:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},169:function(e,t,n){"use strict";e.exports=function(e,t){return e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,"")}},170:function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(151);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e;return{token:new r(function(t){e=t}),cancel:e}},e.exports=r},171:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},202:function(e,t,n){var r=n(45)(n(249),n(251),null,null,null);r.options.__file="/Users/chenchao/Documents/git_workspace/lego_manage/app/web/pages/act/edit/editApp.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] editApp.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},249:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0_api_api_act_edit__=__webpack_require__(250),__WEBPACK_IMPORTED_MODULE_1_assets_js_util__=__webpack_require__(146);__webpack_exports__.default={data:function(){return{validateOptions:[{key:"图形验证码",value:"1"},{key:"短信验证码",value:"2"},{key:"签名",value:"3"},{key:"登录",value:"4"},{key:"不校验",value:"5"}],costTypeOptions:[{key:"合作方采购活动",value:"1"},{key:"合作方非采购活动",value:"2"},{key:"内部拉新活动",value:"3"},{key:"运营活动",value:"4"},{key:"运营自动化",value:"5"},{key:"产品成本",value:"6"},{key:"客服活动",value:"7"},{key:"其他活动",value:"8"}],userCostType:[{key:"按新增付费用户人数计算",value:"1"},{key:"按红包领取人数计算",value:"2"},{key:"按新注册用户人数计算",value:"3"}],channelList:[],editLoading:!1,relatedCoupons:[],enableEditUsers:[],testersList:[],countResult:"",isAddChannel:!1,ajaxLock:!1,channelAdd:{channel:""},actInfo:{is_inner:"1",is_lego:"",act_title:"",effect_time:"",expire_time:"",code_type:"",act_url:"",act_content:"",cost_type:"",user_cost_type:"",per_user_cost:"",business_channel:"",optor:"",act_id:"",revisability:"",tests:[],coupons:"",pageids:""},actInfoRule:{act_title:[{required:!0,message:"请输入活动名",trigger:"blur"}],effect_time:[{type:"date",required:!0,message:"请选择开始时间",trigger:"change"}],expire_time:[{type:"date",required:!0,message:"请选择结束时间",trigger:"change"}],code_type:[{required:!0,message:"请选择活动校验规则",trigger:"blur"}],is_lego:[{required:!0,message:"请确认是否由乐高搭建页面",trigger:"change"}],business_channel:[{required:!0,message:"请选择活动渠道",trigger:"change"}]}}},created:function(){var e=this.$route.params.act_id||"";e&&this.getActDetail(e),this.getCouponList().getUserList().getChannelList().getTestEngineer()},methods:{getActDetail:function(e){var t=this;this.editLoading=!0,__WEBPACK_IMPORTED_MODULE_0_api_api_act_edit__.a({act_id:e}).then(function(e){t.editLoading=!1,0==e.code?(t.actInfo=e.data,t.actInfo.expire_time=new Date(t.actInfo.expire_time),t.actInfo.effect_time=new Date(t.actInfo.effect_time),t.actInfo.pageids=e.data.page_ids&&e.data.page_ids.join("-")):t.$message.error(e.msg)}).catch(function(){t.editLoading=!1})},getCouponList:function(){var e=this;return __WEBPACK_IMPORTED_MODULE_0_api_api_act_edit__.d().then(function(t){0==t.code?e.relatedCoupons=t.data:e.$message.error(t.msg)}),this},getUserList:function(){var e=this;return __WEBPACK_IMPORTED_MODULE_0_api_api_act_edit__.c().then(function(t){0==t.code?e.enableEditUsers=t.data:e.$message.error(t.msg)}),this},getTestEngineer:function(){var e=this;return __WEBPACK_IMPORTED_MODULE_0_api_api_act_edit__.e().then(function(t){0==t.code?e.testersList=t.data:e.$message.error(t.msg)}),this},getChannelList:function(){var e=this;return __WEBPACK_IMPORTED_MODULE_0_api_api_act_edit__.b().then(function(t){0==t.code?e.channelList=t.data:e.$message.error(t.msg)}),this},saveEdit:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return console.log("error submit!!"),!1;if(!e.actInfo.business_channel)return void e.$message.error("请选择活动展示渠道");e.editLoading=!0;var n=Object.assign({},e.actInfo);n.expire_time=__WEBPACK_IMPORTED_MODULE_1_assets_js_util__.d(n.expire_time),n.effect_time=__WEBPACK_IMPORTED_MODULE_1_assets_js_util__.d(n.effect_time),n.page_ids=e.actInfo.pageids?e.actInfo.pageids.split("-"):[],delete n.pageids,__WEBPACK_IMPORTED_MODULE_0_api_api_act_edit__.f(n).then(function(t){e.editLoading=!1,0==t.code?e.$confirm("活动保存成功","提示").then(function(){location.href="list.html"}):e.$message.error(t.msg)}).catch(function(t){e.editLoading=!1})})},countCost:function countCost(){if(!this.actInfo.coupon_cost_rule||!this.actInfo.coupon_amount)return void this.$message.error("信息未填写完整");var rule=this.actInfo.coupon_cost_rule.replace(/#m#/g,this.actInfo.coupon_amount);this.countResult=rule+"="+eval(rule)},addNewChannel:function(){this.isAddChannel=!0},saveNewChannel:function(){var e=this;this.channelAdd.channel.replace(/\s*/g,"");if(!this.channelAdd.channel)return void this.$message.error("请输入渠道名称");this.ajaxLock||(this.ajaxLock=!0,__WEBPACK_IMPORTED_MODULE_0_api_api_act_edit__.g(this.channelAdd).then(function(t){e.ajaxLock=!1,0==t.code?(e.$message({message:"保存成功，已添加至列表",type:"success"}),e.channelList.unshift(e.channelAdd.channel),e.channelAdd.channel=""):e.$message.error(t.msg)}).catch(function(){e.ajaxLock=!1}))}}}},250:function(e,t,n){"use strict";function r(){return Object(u.a)({url:"/common/getTestEngineer",method:"post"})}function o(e){return Object(u.a)({url:"/act/getActDetail",method:"post",data:e})}function a(e){return Object(u.a)({url:"/act/postAct",method:"post",data:e})}function s(){return Object(u.a)({url:"/common/coupons",method:"post"})}function i(){return Object(u.a)({url:"/common/users",method:"post"})}function c(){return Object(u.a)({url:"/act/GetChannels",method:"post"})}function l(e){return Object(u.a)({url:"/act/PostChannel",method:"post",data:e})}t.e=r,t.a=o,t.f=a,t.d=s,t.c=i,t.b=c,t.g=l;var u=n(153)},251:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-row",{directives:[{name:"loading",rawName:"v-loading",value:e.editLoading,expression:"editLoading"}],staticClass:"martop20"},[n("el-col",{staticClass:"form-group-wrap",attrs:{xs:24,sm:24,md:12,lg:12}},[n("h3",{staticClass:"textcenter"},[e._v("活动基本信息")]),e._v(" "),n("el-form",{ref:"form",staticClass:"form-group",attrs:{rules:e.actInfoRule,"label-width":"110px",model:e.actInfo}},[n("el-form-item",{attrs:{label:"活动名称：",required:"",prop:"act_title"}},[n("el-input",{attrs:{placeholder:"请输入活动名称"},model:{value:e.actInfo.act_title,callback:function(t){e.$set(e.actInfo,"act_title",t)},expression:"actInfo.act_title"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"上线时间：",required:"",prop:"effect_time"}},[n("el-date-picker",{attrs:{type:"datetime",placeholder:"选择上线的日期时间"},model:{value:e.actInfo.effect_time,callback:function(t){e.$set(e.actInfo,"effect_time",t)},expression:"actInfo.effect_time"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"过期时间：",required:"",prop:"expire_time"}},[n("el-date-picker",{attrs:{type:"datetime",placeholder:"选择过期的日期时间"},model:{value:e.actInfo.expire_time,callback:function(t){e.$set(e.actInfo,"expire_time",t)},expression:"actInfo.expire_time"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"校验类型：",required:"",prop:"code_type"}},[n("el-select",{staticClass:"full-form-item",attrs:{placeholder:"请选择活动校验类型"},model:{value:e.actInfo.code_type,callback:function(t){e.$set(e.actInfo,"code_type",t)},expression:"actInfo.code_type"}},e._l(e.validateOptions,function(e){return n("el-option",{key:e.value,attrs:{label:e.key,value:e.value}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"活动类型：",required:""}},[n("el-radio-group",{model:{value:e.actInfo.is_inner,callback:function(t){e.$set(e.actInfo,"is_inner",t)},expression:"actInfo.is_inner"}},[n("el-radio",{attrs:{label:"1"}},[e._v("内部运营活动")]),e._v(" "),n("el-radio",{attrs:{label:"0"}},[e._v("外部推广活动")])],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"开发类型：",required:"",prop:"is_lego"}},[n("el-radio-group",{model:{value:e.actInfo.is_lego,callback:function(t){e.$set(e.actInfo,"is_lego",t)},expression:"actInfo.is_lego"}},[n("el-radio",{attrs:{label:"1"}},[e._v("乐高搭建")]),e._v(" "),n("el-radio",{attrs:{label:"0"}},[e._v("人工开发")])],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"测试负责人："}},[n("el-select",{staticClass:"full-form-item",attrs:{multiple:"",filterable:"",placeholder:"请选择该活动的测试人员,默认别少,可选多人"},model:{value:e.actInfo.tests,callback:function(t){e.$set(e.actInfo,"tests",t)},expression:"actInfo.tests"}},e._l(e.testersList,function(t,r){return n("el-option",{key:r,attrs:{label:t.user_name,value:t.user_id}},[n("span",{staticStyle:{float:"left"}},[e._v(e._s(t.user_name))]),e._v(" "),n("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px","padding-right":"25px"}},[e._v(e._s(t.user_account))])])}))],1),e._v(" "),n("el-form-item",{attrs:{label:"活动链接：",prop:"act_url"}},[n("el-input",{attrs:{placeholder:"请输入活动跳转链接"},model:{value:e.actInfo.act_url,callback:function(t){e.$set(e.actInfo,"act_url",t)},expression:"actInfo.act_url"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"活动关联红包："}},[n("el-select",{staticClass:"full-form-item",attrs:{multiple:"",filterable:"",placeholder:"请选择活动关联红包"},model:{value:e.actInfo.coupons,callback:function(t){e.$set(e.actInfo,"coupons",t)},expression:"actInfo.coupons"}},e._l(e.relatedCoupons,function(e){return n("el-option",{key:e.cid,attrs:{label:e.name,value:e.cid}})}))],1),e._v(" "),n("el-form-item",{attrs:{label:"可编辑的人："}},[n("el-select",{staticClass:"full-form-item",attrs:{multiple:"",filterable:"",placeholder:"请选择可修改此活动配置的用户"},model:{value:e.actInfo.revisability,callback:function(t){e.$set(e.actInfo,"revisability",t)},expression:"actInfo.revisability"}},e._l(e.enableEditUsers,function(t){return n("el-option",{key:t.user_id,attrs:{label:t.user_name,value:t.user_id}},[n("span",{staticStyle:{float:"left"}},[e._v(e._s(t.user_name))]),e._v(" "),n("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px","padding-right":"25px"}},[e._v(e._s(t.user_account))])])}))],1),e._v(" "),n("el-form-item",{attrs:{label:"活动描述："}},[n("el-input",{attrs:{type:"textarea",placeholder:"活动简要描述"},model:{value:e.actInfo.act_content,callback:function(t){e.$set(e.actInfo,"act_content",t)},expression:"actInfo.act_content"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"乐高pageID："}},[n("el-input",{attrs:{placeholder:"多个pageid以'-'隔开"},model:{value:e.actInfo.pageids,callback:function(t){e.$set(e.actInfo,"pageids",t)},expression:"actInfo.pageids"}})],1)],1)],1),e._v(" "),n("el-col",{staticClass:"form-group-wrap",attrs:{xs:24,sm:24,md:12,lg:12}},[n("h3",{staticClass:"textcenter"},[e._v("活动成本信息")]),e._v(" "),n("el-form",{ref:"costForm",staticClass:"form-group",attrs:{rules:e.actInfoRule,"label-width":"140px",model:e.actInfo}},[n("el-form-item",{attrs:{label:"成本计算类型："}},[n("el-select",{staticClass:"full-form-item",attrs:{placeholder:"请选择"},model:{value:e.actInfo.cost_type,callback:function(t){e.$set(e.actInfo,"cost_type",t)},expression:"actInfo.cost_type"}},e._l(e.costTypeOptions,function(e){return n("el-option",{key:e.value,attrs:{label:e.key,value:e.value}})}))],1),e._v(" "),1==e.actInfo.cost_type?n("el-form-item",{attrs:{label:"红包成本计算规则："}},[n("el-form",{attrs:{inline:!0}},[n("el-form-item",[n("el-input",{attrs:{placeholder:"请输入红包金额"},model:{value:e.actInfo.coupon_amount,callback:function(t){e.$set(e.actInfo,"coupon_amount",t)},expression:"actInfo.coupon_amount"}})],1),e._v(" "),n("el-form-item",[n("el-input",{attrs:{placeholder:"请输入红包计算公式"},model:{value:e.actInfo.coupon_cost_rule,callback:function(t){e.$set(e.actInfo,"coupon_cost_rule",t)},expression:"actInfo.coupon_cost_rule"}})],1)],1),e._v(" "),n("el-button",{staticClass:"martop10",attrs:{type:"primary",size:"small"},on:{click:e.countCost}},[e._v("计算成本")]),e._v(" "),n("span",[e._v(e._s(e.countResult))])],1):e._e(),e._v(" "),1==e.actInfo.cost_type||2==e.actInfo.cost_type?n("el-form-item",{attrs:{label:"用户成本计算类型："}},[n("el-select",{staticClass:"full-form-item",attrs:{placeholder:"请选择"},model:{value:e.actInfo.user_cost_type,callback:function(t){e.$set(e.actInfo,"user_cost_type",t)},expression:"actInfo.user_cost_type"}},e._l(e.userCostType,function(e){return n("el-option",{key:e.value,attrs:{label:e.key,value:e.value}})}))],1):e._e(),e._v(" "),1==e.actInfo.cost_type||2==e.actInfo.cost_type?n("el-form-item",{attrs:{label:"用户成本计算规则："}},[n("el-input",{attrs:{placeholder:"请输入用户成本计算规则"},model:{value:e.actInfo.per_user_cost,callback:function(t){e.$set(e.actInfo,"per_user_cost",t)},expression:"actInfo.per_user_cost"}})],1):e._e(),e._v(" "),n("el-form-item",{attrs:{label:"所属渠道：",required:"",prop:"business_channel"}},[n("el-select",{attrs:{filterable:"",placeholder:"请选择活动渠道"},model:{value:e.actInfo.business_channel,callback:function(t){e.$set(e.actInfo,"business_channel",t)},expression:"actInfo.business_channel"}},e._l(e.channelList,function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),e._v(" "),n("el-button",{attrs:{size:"small",type:"primary"},on:{click:e.addNewChannel}},[e._v("新增渠道")]),e._v(" "),e.isAddChannel?n("el-form",{staticClass:"martop10",attrs:{inline:!0}},[n("el-form-item",[n("el-input",{attrs:{placeholder:"请输入渠道名"},model:{value:e.channelAdd.channel,callback:function(t){e.$set(e.channelAdd,"channel",t)},expression:"channelAdd.channel"}})],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{size:"small",type:"success"},on:{click:e.saveNewChannel}},[e._v("保存")]),e._v(" "),n("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){e.isAddChannel=!1}}},[e._v("关闭")])],1)],1):e._e()],1),e._v(" "),n("el-form-item",{attrs:{label:"负责人："}},[n("el-input",{attrs:{placeholder:"请输入活动负责人"},model:{value:e.actInfo.optor,callback:function(t){e.$set(e.actInfo,"optor",t)},expression:"actInfo.optor"}})],1)],1)],1)],1),e._v(" "),n("div",{staticClass:"martop20 textcenter"},[n("el-button",{attrs:{type:"primary",size:"large"},on:{click:e.saveEdit}},[e._v("提交配置")])],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},69:function(e,t,n){"use strict";(function(t){function r(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=n(14),a=n(157),s=/^\)\]\}',?\n/,i={"Content-Type":"application/x-www-form-urlencoded"},c={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(148):void 0!==t&&(e=n(148)),e}(),transformRequest:[function(e,t){return a(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e){e=e.replace(s,"");try{e=JSON.parse(e)}catch(e){}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){c.headers[e]={}}),o.forEach(["post","put","patch"],function(e){c.headers[e]=o.merge(i)}),e.exports=c}).call(t,n(7))}});