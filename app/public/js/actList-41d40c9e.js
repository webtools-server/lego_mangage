webpackJsonp([6],{14:function(t,e,r){"use strict";function n(t){return"[object Array]"===R.call(t)}function o(t){return"[object ArrayBuffer]"===R.call(t)}function a(t){return"undefined"!=typeof FormData&&t instanceof FormData}function s(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function i(t){return"string"==typeof t}function u(t){return"number"==typeof t}function c(t){return void 0===t}function l(t){return null!==t&&"object"==typeof t}function p(t){return"[object Date]"===R.call(t)}function d(t){return"[object File]"===R.call(t)}function f(t){return"[object Blob]"===R.call(t)}function m(t){return"[object Function]"===R.call(t)}function h(t){return l(t)&&m(t.pipe)}function v(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function g(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function _(){return"undefined"!=typeof window&&"undefined"!=typeof document&&"function"==typeof document.createElement}function w(t,e){if(null!==t&&void 0!==t)if("object"==typeof t||n(t)||(t=[t]),n(t))for(var r=0,o=t.length;r<o;r++)e.call(null,t[r],r,t);else for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.call(null,t[a],a,t)}function b(){function t(t,r){"object"==typeof e[r]&&"object"==typeof t?e[r]=b(e[r],t):e[r]=t}for(var e={},r=0,n=arguments.length;r<n;r++)w(arguments[r],t);return e}function y(t,e,r){return w(e,function(e,n){t[n]=r&&"function"==typeof e?x(e,r):e}),t}var x=r(153),R=Object.prototype.toString;t.exports={isArray:n,isArrayBuffer:o,isFormData:a,isArrayBufferView:s,isString:i,isNumber:u,isObject:l,isUndefined:c,isDate:p,isFile:d,isBlob:f,isFunction:m,isStream:h,isURLSearchParams:v,isStandardBrowserEnv:_,forEach:w,merge:b,extend:y,trim:g}},152:function(t,e,r){"use strict";function n(t,e){if(0===arguments.length)return null;var r=e||"{y}-{m}-{d} {h}:{i}:{s}",n=void 0;"object"==(void 0===t?"undefined":u(t))?n=t:(10===(""+t).length&&(t=1e3*parseInt(t)),n=new Date(t));var o={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()};return r.replace(/{(y|m|d|h|i|s|a)+}/g,function(t,e){var r=o[e];return"a"===e?["一","二","三","四","五","六","日"][r-1]:(t.length>0&&r<10&&(r="0"+r),r||0)})}function o(t){return t.replace(/\s*/g,"")}function a(t,e){var r=arguments[1]||window.location.search.replace("&amp;","&"),n=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),o=r.substr(r.indexOf("?")+1).match(n);return null!=o?o[2]:""}function s(t,e){for(var r=0;r<t.length;r++)if(t[r]==e)return!0;return!1}function i(t){var e=new RegExp("(^| )"+t+"(?:=([^;]*))?(;|$)"),r=document.cookie.match(e);return r?r[2]?unescape(r[2]):"":null}e.d=n,e.e=o,e.c=a,e.a=s,e.b=i;var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}},153:function(t,e,r){"use strict";t.exports=function(t,e){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return t.apply(e,r)}}},154:function(t,e,r){"use strict";(function(e){var n=r(14),o=r(164),a=r(166),s=r(167),i=r(168),u=r(155),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||r(169);t.exports=function(t){return new Promise(function(l,p){var d=t.data,f=t.headers;n.isFormData(d)&&delete f["Content-Type"];var m=new XMLHttpRequest,h="onreadystatechange",v=!1;if("test"===e.env.NODE_ENV||"undefined"==typeof window||!window.XDomainRequest||"withCredentials"in m||i(t.url)||(m=new window.XDomainRequest,h="onload",v=!0,m.onprogress=function(){},m.ontimeout=function(){}),t.auth){var g=t.auth.username||"",_=t.auth.password||"";f.Authorization="Basic "+c(g+":"+_)}if(m.open(t.method.toUpperCase(),a(t.url,t.params,t.paramsSerializer),!0),m.timeout=t.timeout,m[h]=function(){if(m&&(4===m.readyState||v)&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))){var e="getAllResponseHeaders"in m?s(m.getAllResponseHeaders()):null,r=t.responseType&&"text"!==t.responseType?m.response:m.responseText,n={data:r,status:1223===m.status?204:m.status,statusText:1223===m.status?"No Content":m.statusText,headers:e,config:t,request:m};o(l,p,n),m=null}},m.onerror=function(){p(u("Network Error",t)),m=null},m.ontimeout=function(){p(u("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED")),m=null},n.isStandardBrowserEnv()){var w=r(170),b=(t.withCredentials||i(t.url))&&t.xsrfCookieName?w.read(t.xsrfCookieName):void 0;b&&(f[t.xsrfHeaderName]=b)}if("setRequestHeader"in m&&n.forEach(f,function(t,e){void 0===d&&"content-type"===e.toLowerCase()?delete f[e]:m.setRequestHeader(e,t)}),t.withCredentials&&(m.withCredentials=!0),t.responseType)try{m.responseType=t.responseType}catch(t){if("json"!==m.responseType)throw t}"function"==typeof t.onDownloadProgress&&m.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&m.upload&&m.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){m&&(m.abort(),p(t),m=null)}),void 0===d&&(d=null),m.send(d)})}}).call(e,r(7))},155:function(t,e,r){"use strict";var n=r(165);t.exports=function(t,e,r,o){var a=new Error(t);return n(a,e,r,o)}},156:function(t,e,r){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},157:function(t,e,r){"use strict";function n(t){this.message=t}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,t.exports=n},159:function(t,e,r){"use strict";(function(t){var n=r(160),o=r.n(n),a=r(68),s=(r.n(a),r(152)),i=o.a.create({baseURL:t.env.BASE_API,timeout:6e4,headers:{"Content-Type":"application/x-www-form-urlencoded"}});i.interceptors.request.use(function(t){return t.headers["x-csrf-token"]=s.b("csrfToken"),t},function(t){console.log(t),Promise.reject(t)}),i.interceptors.response.use(function(t){var e=t.data.code;return"1601000014"==e||"1601000013"==e?(Object(a.Message)({message:t.data.msg,type:"error",duration:3e3}),location.replace("/login"),Promise.reject()):0!=e?(Object(a.Message)({message:t.data.msg,type:"error",duration:3e3}),t.data):t.data},function(t){return console.log("err"+t),Object(a.Message)({message:t.message,type:"error",duration:5e3}),Promise.reject(t)}),e.a=i}).call(e,r(7))},160:function(t,e,r){t.exports=r(161)},161:function(t,e,r){"use strict";function n(t){var e=new s(t),r=a(s.prototype.request,e);return o.extend(r,s.prototype,e),o.extend(r,e),r}var o=r(14),a=r(153),s=r(162),i=r(69),u=n(i);u.Axios=s,u.create=function(t){return n(o.merge(i,t))},u.Cancel=r(157),u.CancelToken=r(176),u.isCancel=r(156),u.all=function(t){return Promise.all(t)},u.spread=r(177),t.exports=u,t.exports.default=u},162:function(t,e,r){"use strict";function n(t){this.defaults=t,this.interceptors={request:new s,response:new s}}var o=r(69),a=r(14),s=r(171),i=r(172),u=r(174),c=r(175);n.prototype.request=function(t){"string"==typeof t&&(t=a.merge({url:arguments[0]},arguments[1])),t=a.merge(o,this.defaults,{method:"get"},t),t.baseURL&&!u(t.url)&&(t.url=c(t.baseURL,t.url));var e=[i,void 0],r=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)r=r.then(e.shift(),e.shift());return r},a.forEach(["delete","get","head"],function(t){n.prototype[t]=function(e,r){return this.request(a.merge(r||{},{method:t,url:e}))}}),a.forEach(["post","put","patch"],function(t){n.prototype[t]=function(e,r,n){return this.request(a.merge(n||{},{method:t,url:e,data:r}))}}),t.exports=n},163:function(t,e,r){"use strict";var n=r(14);t.exports=function(t,e){n.forEach(t,function(r,n){n!==e&&n.toUpperCase()===e.toUpperCase()&&(t[e]=r,delete t[n])})}},164:function(t,e,r){"use strict";var n=r(155);t.exports=function(t,e,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?e(n("Request failed with status code "+r.status,r.config,null,r)):t(r)}},165:function(t,e,r){"use strict";t.exports=function(t,e,r,n){return t.config=e,r&&(t.code=r),t.response=n,t}},166:function(t,e,r){"use strict";function n(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=r(14);t.exports=function(t,e,r){if(!e)return t;var a;if(r)a=r(e);else if(o.isURLSearchParams(e))a=e.toString();else{var s=[];o.forEach(e,function(t,e){null!==t&&void 0!==t&&(o.isArray(t)&&(e+="[]"),o.isArray(t)||(t=[t]),o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),s.push(n(e)+"="+n(t))}))}),a=s.join("&")}return a&&(t+=(-1===t.indexOf("?")?"?":"&")+a),t}},167:function(t,e,r){"use strict";var n=r(14);t.exports=function(t){var e,r,o,a={};return t?(n.forEach(t.split("\n"),function(t){o=t.indexOf(":"),e=n.trim(t.substr(0,o)).toLowerCase(),r=n.trim(t.substr(o+1)),e&&(a[e]=a[e]?a[e]+", "+r:r)}),a):a}},168:function(t,e,r){"use strict";var n=r(14);t.exports=n.isStandardBrowserEnv()?function(){function t(t){var e=t;return r&&(o.setAttribute("href",e),e=o.href),o.setAttribute("href",e),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var e,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return e=t(window.location.href),function(r){var o=n.isString(r)?t(r):r;return o.protocol===e.protocol&&o.host===e.host}}():function(){return function(){return!0}}()},169:function(t,e,r){"use strict";function n(){this.message="String contains an invalid character"}function o(t){for(var e,r,o=String(t),s="",i=0,u=a;o.charAt(0|i)||(u="=",i%1);s+=u.charAt(63&e>>8-i%1*8)){if((r=o.charCodeAt(i+=.75))>255)throw new n;e=e<<8|r}return s}var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",t.exports=o},170:function(t,e,r){"use strict";var n=r(14);t.exports=n.isStandardBrowserEnv()?function(){return{write:function(t,e,r,o,a,s){var i=[];i.push(t+"="+encodeURIComponent(e)),n.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),n.isString(o)&&i.push("path="+o),n.isString(a)&&i.push("domain="+a),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},171:function(t,e,r){"use strict";function n(){this.handlers=[]}var o=r(14);n.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},n.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},n.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=n},172:function(t,e,r){"use strict";function n(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var o=r(14),a=r(173),s=r(156),i=r(69);t.exports=function(t){return n(t),t.headers=t.headers||{},t.data=a(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||i.adapter)(t).then(function(e){return n(t),e.data=a(e.data,e.headers,t.transformResponse),e},function(e){return s(e)||(n(t),e&&e.response&&(e.response.data=a(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},173:function(t,e,r){"use strict";var n=r(14);t.exports=function(t,e,r){return n.forEach(r,function(r){t=r(t,e)}),t}},174:function(t,e,r){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},175:function(t,e,r){"use strict";t.exports=function(t,e){return t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,"")}},176:function(t,e,r){"use strict";function n(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var r=this;t(function(t){r.reason||(r.reason=new o(t),e(r.reason))})}var o=r(157);n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var t;return{token:new n(function(e){t=e}),cancel:t}},t.exports=n},177:function(t,e,r){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},207:function(t,e,r){var n=r(46)(r(258),r(260),null,null,null);n.options.__file="C:\\jyb\\jyb_git\\lego_manage\\app\\web\\pages\\act\\list\\listApp.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] listApp.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},253:function(t,e,r){"use strict";function n(){return Object(p.a)({url:"/common/getTestEngineer",method:"post"})}function o(t){return Object(p.a)({url:"/act/getActDetail",method:"post",data:t})}function a(t){return Object(p.a)({url:"/act/postAct",method:"post",data:t})}function s(){return Object(p.a)({url:"/common/coupons",method:"post"})}function i(){return Object(p.a)({url:"/common/users",method:"post"})}function u(){return Object(p.a)({url:"/act/GetChannels",method:"post"})}function c(t){return Object(p.a)({url:"/act/PostChannel",method:"post",data:t})}function l(t){return Object(p.a)({url:"/act/GetActivityDraftConfig",method:"post",data:t})}e.f=n,e.b=o,e.g=a,e.e=s,e.d=i,e.c=u,e.h=c,e.a=l;var p=r(159)},258:function(t,e,r){"use strict";function n(t){var e=(new Date).getTime(),r=e-t;if(!(r<0)){var n=r/2592e6,o=r/6048e5,a=r/864e5,s=r/36e5,i=r/6e4;return n>=1?parseInt(n)+"月前":o>=1?parseInt(o)+"周前":a>=1?parseInt(a)+"天前":s>=1?parseInt(s)+"小时前":i>=1?parseInt(i)+"分钟前":"刚刚"}}function o(t){return Date.parse(t.replace(/-/gi,"/"))}Object.defineProperty(e,"__esModule",{value:!0});var a=r(259),s=r(253),i=r(152);e.default={data:function(){return{queryData:{act_id:"",act_name:"",act_channel:"",start_time:"",end_time:"",page:1,page_size:20,expire_time:""},deploy:"prod"==window.currentEnv||"uat"==window.currentEnv,opsLogsData:{source_id:"",type:0,user_id:""},dialogTestResultVisible:!1,tempActInfo:"",testResult:{results:"",remark:""},rules:{results:[{required:!0,message:"请选择测试结果",trigger:"change"}]},showSubRoute:!1,statusMapNew:{0:"待测试",1:"测试中",2:"待审批",3:"审批中",4:"待发布",5:"已发布",6:"测试未通过"},isAdmin:"",isTester:"",isOperator:"",isDev:"",userIds:"",tableData:[],logData:{},listLoading:!0,total:0}},watch:{$route:function(t){this.showSubRoute="actList"!=t.name}},created:function(){this.showSubRoute="actList"!=this.$route.name,this.showSubRoute||this.queryFilterList(!0),this.initUserInfo()},methods:{initUserInfo:function(){this.isAdmin=window.userInfo.isAdmin,this.isTester=window.userInfo.isTester,this.isOperator=window.userInfo.isOperator,this.isDev=window.userInfo.isDev,this.userIds=window.userInfo.userid},queryFilterList:function(t){var e=this;this.listLoading=!0,a.a(this.queryData).then(function(r){e.listLoading=!1;var n=e;if(0==r.code){r.data.data.forEach(function(t){t.isTestOwner=i.a(t.tests,n.userIds),t.isRevisability=i.a(t.revisability,n.userIds),t.pageids=t.page_ids?t.page_ids.join("-"):""}),e.tableData=r.data.data,e.timestamp=new Date(1e3*r.data.timestamp),t&&(e.total=1*r.data.sum,e.queryData.page=1)}})},editPageLink:function(t,e,r){var n=this;if(t>0)window.open("/lego/editPage?page_id="+(r[0]||"")+"&act_id="+e,"_blank");else{var o=window.open("/lego/homePage?act_id="+e,"_blank");s.b({act_id:e}).then(function(t){0==t.code?t.data.page_ids.length>0?o.location.href="/lego/editPage?page_id="+(t.data.page_ids[0]||"")+"&act_id="+e:o.location.href="/lego/homePage?act_id="+e:n.$message.error(t.msg)})}},getOpsLogs:function(t,e){var r=this;return this.opsLogsData.source_id=t.act_id,!!e.some(function(e,r){return e.act_id==t.act_id})&&(!this.logData[t.act_id]&&(a.b(this.opsLogsData).then(function(e){0==e.code&&r.$set(r.logData,t.act_id,e.data),r.logData[t.act_id].forEach(function(e,a){r.logData[t.act_id][a].changeTime=n(o(e.opt_time))})}),void a.c({act_id:t.act_id}).then(function(e){0==e.code&&r.$set(t,"showList",e.data)})))},manual:function(t){var e=this;a.d({act_id:t.act_id,page_id:t.page_ids}).then(function(t){0==t.code?e.$alert("同步到集成环境成功"):e.$message.error(json.msg)})},handleCurrentChange:function(t){this.queryData.page=t,this.queryFilterList(!1)},filterStatusText:function(t){return this.statusMapNew[t.status]},deadlineNotify:function(t){var e=new Date(t.expire_time);return e-this.timestamp<864e5&&e-this.timestamp>0?t.expire_time+"&nbsp;&nbsp;<span class='textcenter' style='color: #ff2200;'>即将过期</span>":e-this.timestamp<0?t.expire_time+"&nbsp;&nbsp;<span class='textcenter' style='color: #ff2200;'>已过期</span>":t.expire_time},submitTest:function(t){var e=this;a.e({act_id:t.row.act_id,action:"initiateTest"}).then(function(t){0==t.code&&e.$message({message:"转测成功，请通知相关人员测试！",type:"success"})})},showTestResultDialog:function(t){this.dialogTestResultVisible=!0,this.tempActInfo=t},toPublish:function(t){var e=this;a.e({act_id:t.row.act_id,action:"publish"}).then(function(t){0==t.code&&e.$message({message:"发布成功！",type:"success"})})},submitApprove:function(t){var e=this;a.e({act_id:t.row.act_id,action:"initiateApprove"}).then(function(t){0==t.code&&e.$message({message:"提交审批成功，请通知相关人员审批！",type:"success"})})},submitTestResult:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;var r="";r=0==e.testResult.results?"passTest":"refuseTest",a.e({act_id:e.tempActInfo.row.act_id,action:r,remark:e.testResult.remark}).then(function(t){0==t.code&&e.$message({message:"测试结果提交成功！",type:"success"})}),e.dialogTestResultVisible=!1})},resetTestResut:function(t){this.$refs[t].resetFields(),this.dialogTestResultVisible=!1}}}},259:function(t,e,r){"use strict";function n(t){return Object(u.a)({url:"/act/getActs",method:"post",data:t})}function o(t){return Object(u.a)({url:"/act/UpdateActStatus",method:"post",data:t})}function a(t){return Object(u.a)({url:"/common/GetOptLogs",method:"post",data:t})}function s(t){return Object(u.a)({url:"/ActivitySynConf/manual",method:"post",data:t})}function i(t){return Object(u.a)({url:"/ActShowParam/do",method:"post",data:t})}e.a=n,e.e=o,e.b=a,e.d=s,e.c=i;var u=r(159)},260:function(t,e,r){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.showSubRoute?r("router-view"):r("div",{staticClass:"martop20"},[r("el-form",{attrs:{inline:!0,"label-width":"90px"}},[r("el-form-item",{attrs:{label:"活动名："}},[r("el-input",{attrs:{placeholder:"按活动名查询"},model:{value:t.queryData.act_name,callback:function(e){t.$set(t.queryData,"act_name",e)},expression:"queryData.act_name"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"活动渠道："}},[r("el-input",{attrs:{placeholder:"按活动渠道查询"},model:{value:t.queryData.act_channel,callback:function(e){t.$set(t.queryData,"act_channel",e)},expression:"queryData.act_channel"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"活动号："}},[r("el-input",{attrs:{placeholder:"按活动号查询"},model:{value:t.queryData.act_id,callback:function(e){t.$set(t.queryData,"act_id",e)},expression:"queryData.act_id"}})],1),t._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(e){t.queryFilterList(!0)}}},[t._v("查询")]),t._v(" "),r("el-button",{attrs:{type:"success"}},[r("router-link",{attrs:{to:{name:"newAct"}}},[r("i",{staticClass:"glyphicon glyphicon-plus"}),t._v("新增活动")])],1)],1)],1),t._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.tableData,stripe:"",border:"","highlight-current-row":""},on:{"expand-change":t.getOpsLogs}},[r("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.is_lego||1==e.row.is_lego&&t.isAdmin?r("el-button",{attrs:{type:"primary"}},[r("router-link",{attrs:{to:{name:"chainEdit",params:{act_id:e.row.act_id,status:e.row.status,is_draft:"1"}}}},[t._v("副本模板"),r("i",{staticClass:"el-icon-arrow-right"})])],1):t._e(),t._v(" "),0==e.row.is_lego||1==e.row.is_lego&&t.isAdmin?r("el-button",{attrs:{type:"primary"}},[r("router-link",{attrs:{to:{name:"chainEdit",params:{act_id:e.row.act_id,status:e.row.status,is_draft:"0"}}}},[t._v("正式模板 "),r("i",{staticClass:"el-icon-arrow-right"})])],1):t._e(),t._v(" "),r("p",{staticClass:"ui-mt-20 ui-ta-c",staticStyle:{"font-size":"16px"}},[t._v("更多活动配置信息")]),t._v(" "),r("el-table",{attrs:{data:[e.row],stripe:"",border:"","highlight-current-row":""}},[r("el-table-column",{attrs:{prop:"business_channel",label:"活动投放渠道","show-overflow-tooltip":""}}),t._v(" "),r("el-table-column",{attrs:{prop:"act_url",label:"活动地址","show-overflow-tooltip":"","min-width":"200"}}),t._v(" "),r("el-table-column",{attrs:{prop:"create_time",label:"创建时间"}}),t._v(" "),r("el-table-column",{attrs:{prop:"creator_name",label:"创建人"}})],1),t._v(" "),r("p",{staticClass:"ui-mt-20 ui-ta-c",staticStyle:{"font-size":"16px"}},[t._v("关键配置项展示(副本)")]),t._v(" "),e.row.showList?r("el-table",{attrs:{data:e.row.showList.copy,stripe:"",border:"","highlight-current-row":""}},[r("el-table-column",{attrs:{prop:"cmd",label:"命令字"}}),t._v(" "),r("el-table-column",{attrs:{prop:"code",label:"逻辑码"}}),t._v(" "),r("el-table-column",{attrs:{prop:"name",label:"逻辑名"}}),t._v(" "),r("el-table-column",{attrs:{prop:"p_code",label:"参数码"}}),t._v(" "),r("el-table-column",{attrs:{prop:"type",label:"逻辑类型"}}),t._v(" "),r("el-table-column",{attrs:{prop:"p_name",label:"参数名"}}),t._v(" "),r("el-table-column",{attrs:{prop:"p_value",label:"参数值"}})],1):t._e(),t._v(" "),r("p",{staticClass:"ui-mt-20 ui-ta-c",staticStyle:{"font-size":"16px"}},[t._v("关键配置项展示(正式)")]),t._v(" "),e.row.showList?r("el-table",{attrs:{data:e.row.showList.live,stripe:"",border:"","highlight-current-row":""}},[r("el-table-column",{attrs:{prop:"cmd",label:"命令字"}}),t._v(" "),r("el-table-column",{attrs:{prop:"code",label:"逻辑码"}}),t._v(" "),r("el-table-column",{attrs:{prop:"name",label:"逻辑名"}}),t._v(" "),r("el-table-column",{attrs:{prop:"p_code",label:"参数码"}}),t._v(" "),r("el-table-column",{attrs:{prop:"type",label:"逻辑类型"}}),t._v(" "),r("el-table-column",{attrs:{prop:"p_name",label:"参数名"}}),t._v(" "),r("el-table-column",{attrs:{prop:"p_value",label:"参数值"}})],1):t._e(),t._v(" "),r("div",{staticStyle:{"margin-top":"30px"}},[r("el-steps",{attrs:{direction:"vertical",space:"80px",active:1}},t._l(t.logData[e.row.act_id],function(e,n){return r("el-step",{key:n,attrs:{size:"small",icon:"el-icon-info"}},[r("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.changeTime+"  "+e.user_name+"  "+e.opt_time))]),t._v(" "),r("span",{attrs:{slot:"description"},slot:"description"},[t._v(t._s(e.description))])])}))],1)]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"act_id",label:"活动号",width:"120"}}),t._v(" "),r("el-table-column",{attrs:{prop:"crypt",label:"加密号",width:"120"}}),t._v(" "),r("el-table-column",{attrs:{prop:"act_title","show-overflow-tooltip":"",label:"活动名"}}),t._v(" "),r("el-table-column",{attrs:{prop:"effect_time",label:"生效时间"}}),t._v(" "),r("el-table-column",{attrs:{label:"过期时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",{domProps:{innerHTML:t._s(t.deadlineNotify(e.row))}})]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"status",label:"活动状态",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("b",{staticClass:"color-success"},[t._v(t._s(t.filterStatusText(e.row)))])]}}])}),t._v(" "),r("el-table-column",{attrs:{width:"130",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-dropdown",{attrs:{size:"small"}},[r("span",{staticClass:"el-dropdown-link color-primary",staticStyle:{"font-size":"12px"}},[t._v("\n              操作菜单"),r("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",[r("router-link",{attrs:{to:{name:"actEdit",params:{act_id:e.row.act_id,status:e.row.status}}}},[t._v("编辑活动")])],1),t._v(" "),0==e.row.is_lego||1==e.row.is_lego&&t.isAdmin?r("el-dropdown-item",{attrs:{divided:""}},[r("router-link",{attrs:{to:{name:"chainEdit",params:{act_id:e.row.act_id,status:e.row.status,is_draft:1}}}},[t._v("规则配置")])],1):t._e(),t._v(" "),t.deploy?r("el-dropdown-item",{attrs:{divided:""}},[r("div",{on:{click:function(r){t.manual(e.row)}}},[t._v("同步配置")])]):t._e(),t._v(" "),"1"==e.row.is_lego?r("el-dropdown-item",{attrs:{divided:""}},[r("a",{attrs:{target:"_blank",href:"javascript:;"},on:{click:function(r){t.editPageLink(e.row.pageids.length,e.row.crypt,e.row.page_ids)}}},[t._v("编辑页面")])]):t._e(),t._v(" "),0==e.row.status&&(e.row.creator==t.userIds||t.isAdmin||e.row.isRevisability)?r("el-dropdown-item",{attrs:{divided:""}},[r("el-button",{attrs:{type:"primary"},on:{click:function(r){t.submitTest(e)}}},[t._v("转测试")])],1):t._e(),t._v(" "),1==e.row.status&&t.isTester&&e.row.isTestOwner?r("el-dropdown-item",{attrs:{divided:""}},[r("el-button",{attrs:{type:"primary"},on:{click:function(r){t.showTestResultDialog(e)}}},[t._v("提交测试结果")])],1):t._e(),t._v(" "),2==e.row.status&&(e.row.creator==t.userIds||t.isAdmin||e.row.isRevisability)?r("el-dropdown-item",{attrs:{divided:""}},[r("el-button",{attrs:{type:"primary"},on:{click:function(r){t.submitApprove(e)}}},[t._v("提交审批")])],1):t._e(),t._v(" "),4==e.row.status&&(e.row.creator==t.userIds||t.isAdmin||e.row.isRevisability)?r("el-dropdown-item",{attrs:{divided:""}},[r("el-button",{attrs:{type:"primary"},on:{click:function(r){t.toPublish(e)}}},[t._v("发布")])],1):t._e()],1)],1)]}}])})],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.listLoading,expression:"!listLoading"}],staticClass:"ui-mt-20 ui-ta-r"},[r("el-pagination",{attrs:{"current-page":t.queryData.page,"page-size":t.queryData.page_size,div:"total, prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.$set(t.queryData,"page",e)}}})],1),t._v(" "),r("el-dialog",{attrs:{title:"测试结果",visible:t.dialogTestResultVisible},on:{"update:visible":function(e){t.dialogTestResultVisible=e}}},[r("el-form",{ref:"testResult",attrs:{model:t.testResult,rules:t.rules}},[r("el-form-item",{attrs:{label:"选择测试结果:",required:"",prop:"results"}},[r("el-radio-group",{model:{value:t.testResult.results,callback:function(e){t.$set(t.testResult,"results",e)},expression:"testResult.results"}},[r("el-radio",{attrs:{label:"0"}},[t._v("测试通过")]),t._v(" "),r("el-radio",{attrs:{label:"1"}},[t._v("测试不通过")])],1)],1),t._v(" "),r("el-form-item",{attrs:{label:"测试结果说明:"}},[r("el-input",{model:{value:t.testResult.remark,callback:function(e){t.$set(t.testResult,"remark",e)},expression:"testResult.remark"}})],1)],1),t._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.resetTestResut("testResult")}}},[t._v("暂不提交")]),t._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitTestResult("testResult")}}},[t._v("确认提交")])],1)],1)],1)],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},69:function(t,e,r){"use strict";(function(e){function n(t,e){!o.isUndefined(t)&&o.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var o=r(14),a=r(163),s=/^\)\]\}',?\n/,i={"Content-Type":"application/x-www-form-urlencoded"},u={adapter:function(){var t;return"undefined"!=typeof XMLHttpRequest?t=r(154):void 0!==e&&(t=r(154)),t}(),transformRequest:[function(t,e){return a(e,"Content-Type"),o.isFormData(t)||o.isArrayBuffer(t)||o.isStream(t)||o.isFile(t)||o.isBlob(t)?t:o.isArrayBufferView(t)?t.buffer:o.isURLSearchParams(t)?(n(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):o.isObject(t)?(n(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t){t=t.replace(s,"");try{t=JSON.parse(t)}catch(t){}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(t){u.headers[t]={}}),o.forEach(["post","put","patch"],function(t){u.headers[t]=o.merge(i)}),t.exports=u}).call(e,r(7))}});