webpackJsonp([10],{14:function(e,t,r){"use strict";function n(e){return"[object Array]"===D.call(e)}function o(e){return"[object ArrayBuffer]"===D.call(e)}function a(e){return"undefined"!=typeof FormData&&e instanceof FormData}function i(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function s(e){return"string"==typeof e}function u(e){return"number"==typeof e}function c(e){return void 0===e}function l(e){return null!==e&&"object"==typeof e}function p(e){return"[object Date]"===D.call(e)}function f(e){return"[object File]"===D.call(e)}function d(e){return"[object Blob]"===D.call(e)}function m(e){return"[object Function]"===D.call(e)}function h(e){return l(e)&&m(e.pipe)}function g(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function y(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function v(){return"undefined"!=typeof window&&"undefined"!=typeof document&&"function"==typeof document.createElement}function b(e,t){if(null!==e&&void 0!==e)if("object"==typeof e||n(e)||(e=[e]),n(e))for(var r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}function w(){function e(e,r){"object"==typeof t[r]&&"object"==typeof e?t[r]=w(t[r],e):t[r]=e}for(var t={},r=0,n=arguments.length;r<n;r++)b(arguments[r],e);return t}function _(e,t,r){return b(t,function(t,n){e[n]=r&&"function"==typeof t?x(t,r):t}),e}var x=r(154),D=Object.prototype.toString;e.exports={isArray:n,isArrayBuffer:o,isFormData:a,isArrayBufferView:i,isString:s,isNumber:u,isObject:l,isUndefined:c,isDate:p,isFile:f,isBlob:d,isFunction:m,isStream:h,isURLSearchParams:g,isStandardBrowserEnv:v,forEach:b,merge:w,extend:_,trim:y}},153:function(e,t,r){"use strict";function n(e,t){if(0===arguments.length)return null;var r=t||"{y}-{m}-{d} {h}:{i}:{s}",n=void 0;"object"==(void 0===e?"undefined":u(e))?n=e:(10===(""+e).length&&(e=1e3*parseInt(e)),n=new Date(e));var o={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()};return r.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var r=o[t];return"a"===t?["一","二","三","四","五","六","日"][r-1]:(e.length>0&&r<10&&(r="0"+r),r||0)})}function o(e){return e.replace(/\s*/g,"")}function a(e,t){var r=arguments[1]||window.location.search.replace("&amp;","&"),n=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),o=r.substr(r.indexOf("?")+1).match(n);return null!=o?o[2]:""}function i(e,t){for(var r=0;r<e.length;r++)if(e[r]==t)return!0;return!1}function s(e){var t=new RegExp("(^| )"+e+"(?:=([^;]*))?(;|$)"),r=document.cookie.match(t);return r?r[2]?unescape(r[2]):"":null}t.d=n,t.e=o,t.c=a,t.a=i,t.b=s;var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.prototype.hasOwnProperty},154:function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},155:function(e,t,r){"use strict";(function(t){var n=r(14),o=r(165),a=r(167),i=r(168),s=r(169),u=r(156),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||r(170);e.exports=function(e){return new Promise(function(l,p){var f=e.data,d=e.headers;n.isFormData(f)&&delete d["Content-Type"];var m=new XMLHttpRequest,h="onreadystatechange",g=!1;if("test"===t.env.NODE_ENV||"undefined"==typeof window||!window.XDomainRequest||"withCredentials"in m||s(e.url)||(m=new window.XDomainRequest,h="onload",g=!0,m.onprogress=function(){},m.ontimeout=function(){}),e.auth){var y=e.auth.username||"",v=e.auth.password||"";d.Authorization="Basic "+c(y+":"+v)}if(m.open(e.method.toUpperCase(),a(e.url,e.params,e.paramsSerializer),!0),m.timeout=e.timeout,m[h]=function(){if(m&&(4===m.readyState||g)&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))){var t="getAllResponseHeaders"in m?i(m.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?m.response:m.responseText,n={data:r,status:1223===m.status?204:m.status,statusText:1223===m.status?"No Content":m.statusText,headers:t,config:e,request:m};o(l,p,n),m=null}},m.onerror=function(){p(u("Network Error",e)),m=null},m.ontimeout=function(){p(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED")),m=null},n.isStandardBrowserEnv()){var b=r(171),w=(e.withCredentials||s(e.url))&&e.xsrfCookieName?b.read(e.xsrfCookieName):void 0;w&&(d[e.xsrfHeaderName]=w)}if("setRequestHeader"in m&&n.forEach(d,function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete d[t]:m.setRequestHeader(t,e)}),e.withCredentials&&(m.withCredentials=!0),e.responseType)try{m.responseType=e.responseType}catch(e){if("json"!==m.responseType)throw e}"function"==typeof e.onDownloadProgress&&m.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&m.upload&&m.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){m&&(m.abort(),p(e),m=null)}),void 0===f&&(f=null),m.send(f)})}}).call(t,r(5))},156:function(e,t,r){"use strict";var n=r(166);e.exports=function(e,t,r,o){var a=new Error(e);return n(a,t,r,o)}},157:function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},158:function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},160:function(e,t,r){"use strict";(function(e){var n=r(161),o=r.n(n),a=r(69),i=(r.n(a),r(153)),s=o.a.create({baseURL:e.env.BASE_API,timeout:6e4,headers:{"Content-Type":"application/x-www-form-urlencoded"}});s.interceptors.request.use(function(e){return e.headers["x-csrf-token"]=i.b("csrfToken"),e},function(e){console.log(e),Promise.reject(e)}),s.interceptors.response.use(function(e){var t=e.data.code;return"1601000014"==t||"1601000013"==t?(Object(a.Message)({message:e.data.msg,type:"error",duration:3e3}),location.replace("/login"),Promise.reject()):0!=t?(Object(a.Message)({message:e.data.msg,type:"error",duration:3e3}),e.data):e.data},function(e){return console.log("err"+e),Object(a.Message)({message:e.message,type:"error",duration:5e3}),Promise.reject(e)}),t.a=s}).call(t,r(5))},161:function(e,t,r){e.exports=r(162)},162:function(e,t,r){"use strict";function n(e){var t=new i(e),r=a(i.prototype.request,t);return o.extend(r,i.prototype,t),o.extend(r,t),r}var o=r(14),a=r(154),i=r(163),s=r(70),u=n(s);u.Axios=i,u.create=function(e){return n(o.merge(s,e))},u.Cancel=r(158),u.CancelToken=r(177),u.isCancel=r(157),u.all=function(e){return Promise.all(e)},u.spread=r(178),e.exports=u,e.exports.default=u},163:function(e,t,r){"use strict";function n(e){this.defaults=e,this.interceptors={request:new i,response:new i}}var o=r(70),a=r(14),i=r(172),s=r(173),u=r(175),c=r(176);n.prototype.request=function(e){"string"==typeof e&&(e=a.merge({url:arguments[0]},arguments[1])),e=a.merge(o,this.defaults,{method:"get"},e),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url));var t=[s,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},a.forEach(["delete","get","head"],function(e){n.prototype[e]=function(t,r){return this.request(a.merge(r||{},{method:e,url:t}))}}),a.forEach(["post","put","patch"],function(e){n.prototype[e]=function(t,r,n){return this.request(a.merge(n||{},{method:e,url:t,data:r}))}}),e.exports=n},164:function(e,t,r){"use strict";var n=r(14);e.exports=function(e,t){n.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})}},165:function(e,t,r){"use strict";var n=r(156);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r)):e(r)}},166:function(e,t,r){"use strict";e.exports=function(e,t,r,n){return e.config=t,r&&(e.code=r),e.response=n,e}},167:function(e,t,r){"use strict";function n(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=r(14);e.exports=function(e,t,r){if(!t)return e;var a;if(r)a=r(t);else if(o.isURLSearchParams(t))a=t.toString();else{var i=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),i.push(n(t)+"="+n(e))}))}),a=i.join("&")}return a&&(e+=(-1===e.indexOf("?")?"?":"&")+a),e}},168:function(e,t,r){"use strict";var n=r(14);e.exports=function(e){var t,r,o,a={};return e?(n.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),r=n.trim(e.substr(o+1)),t&&(a[t]=a[t]?a[t]+", "+r:r)}),a):a}},169:function(e,t,r){"use strict";var n=r(14);e.exports=n.isStandardBrowserEnv()?function(){function e(e){var t=e;return r&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(r){var o=n.isString(r)?e(r):r;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},170:function(e,t,r){"use strict";function n(){this.message="String contains an invalid character"}function o(e){for(var t,r,o=String(e),i="",s=0,u=a;o.charAt(0|s)||(u="=",s%1);i+=u.charAt(63&t>>8-s%1*8)){if((r=o.charCodeAt(s+=.75))>255)throw new n;t=t<<8|r}return i}var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",e.exports=o},171:function(e,t,r){"use strict";var n=r(14);e.exports=n.isStandardBrowserEnv()?function(){return{write:function(e,t,r,o,a,i){var s=[];s.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(o)&&s.push("path="+o),n.isString(a)&&s.push("domain="+a),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},172:function(e,t,r){"use strict";function n(){this.handlers=[]}var o=r(14);n.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=n},173:function(e,t,r){"use strict";function n(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=r(14),a=r(174),i=r(157),s=r(70);e.exports=function(e){return n(e),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return n(e),t.data=a(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(n(e),t&&t.response&&(t.response.data=a(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},174:function(e,t,r){"use strict";var n=r(14);e.exports=function(e,t,r){return n.forEach(r,function(r){e=r(e,t)}),e}},175:function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},176:function(e,t,r){"use strict";e.exports=function(e,t){return e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,"")}},177:function(e,t,r){"use strict";function n(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new o(e),t(r.reason))})}var o=r(158);n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var e;return{token:new n(function(t){e=t}),cancel:e}},e.exports=n},178:function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},233:function(e,t,r){var n=r(18)(r(363),r(364),null,null,null);n.options.__file="/Users/zsl/zhaoshali/work/git/lego_manage/app/web/pages/lego/cstyles/listApp.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] listApp.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},271:function(e,t,r){"use strict";function n(e){return Object(c.a)({url:"/lego/getComponentList",method:"post",data:e})}function o(e){return Object(c.a)({url:"/lego/saveComponent",method:"post",data:e})}function a(e){return Object(c.a)({url:"/lego/updateComponent",method:"post",data:e})}function i(e){return Object(c.a)({url:"/lego/getSelectedComponentStyles",method:"post",data:{comid:e}})}function s(e){return Object(c.a)({url:"/lego/saveComponentStyle",method:"post",data:e})}function u(e){return Object(c.a)({url:"/lego/updateComponentStyle",method:"post",data:e})}t.a=n,t.c=o,t.e=a,t.b=i,t.d=s,t.f=u;var c=r(160)},363:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(271);r(153);t.default={data:function(){return{listLoading:!1,dialogVisible:!1,dialogLoading:!1,tableData:[],comid:"",queryData:{page_size:20,page:1,order:"",orderby:"",name:""},comTypeMap:{0:"隐藏",1:"外部注册",2:"活动组件",3:"通用注册"},total:0,templateData:{image:"",tpl_url:"",com_desc:"",id:"",priority:""},rules:{image:[{required:!0,message:"请输入demo图片地址",trigger:"blur"}],tpl_url:[{required:!0,message:"请输入样式模板地址",trigger:"blur"}],com_desc:[{required:!0,message:"请输入样式描述",trigger:"blur"}]}}},created:function(){this.comid=this.$route.params.componentId,this.queryFilterList(!1)},methods:{queryFilterList:function(e){var t=this;this.listLoading=!0,n.b(this.comid).then(function(e){t.listLoading=!1,t.tableData=e.data})},handleCurrentChange:function(e){this.queryData.page=e,this.queryFilterList(!1)},editCom:function(e){this.templateData.id=e.id,this.templateData.com_desc=e.com_desc,this.templateData.image=e.image,this.templateData.priority=e.priority,this.templateData.tpl_url=e.tpl_url,this.templateData.component_id=e.component_id,this.dialogVisible=!0},addNewCom:function(){this.templateData.id="",this.templateData.com_desc="",this.templateData.image="",this.templateData.priority=100,this.templateData.tpl_url="/template/new/组件key/show.1.html",this.templateData.component_id=this.comid,this.dialogVisible=!0},cancleAddCom:function(){this.dialogVisible=!1},confirmAddCom:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;var r=!!t.templateData.id;(r?n.f:n.d)(t.templateData).then(function(e){0==e.code?(t.$message({message:r?"更新组件样式成功，正在刷新页面内容":"新增组件样式成功，正在刷新页面内容",type:"success"}),t.queryFilterList(!0),t.dialogVisible=!1):t.$message.error(e.msg)})})}}}},364:function(e,t,r){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-button",{attrs:{type:"success"},on:{click:function(t){e.addNewCom("rule")}}},[r("i",{staticClass:"glyphicon glyphicon-plus"}),e._v("新增样式")]),e._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticClass:"martop10",attrs:{data:e.tableData,stripe:"",border:"","highlight-current-row":""}},[r("el-table-column",{attrs:{label:"demo图片","min-width":"200"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("img",{attrs:{width:"200px",src:e.row.image}})]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"component_id",label:"组件ID",width:"90"}}),e._v(" "),r("el-table-column",{attrs:{prop:"tpl_url",label:"样式模板地址","min-width":"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(t.row.tpl_url.replace("http://act.jtjr.com/martpagemaker","")))])]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"priority",label:"优先级",width:"100"}}),e._v(" "),r("el-table-column",{attrs:{prop:"com_desc",label:"组件描述","min-width":"140"}}),e._v(" "),r("el-table-column",{attrs:{prop:"create_date",label:"创建时间","min-width":"140"}}),e._v(" "),r("el-table-column",{attrs:{prop:"edit_date",label:"编辑时间","min-width":"140"}}),e._v(" "),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){e.editCom(t.row)}}},[e._v("修改样式")])]}}])})],1),e._v(" "),r("el-dialog",{attrs:{"lock-scroll":"","close-on-click-modal":!1,title:"新增/编辑组件样式",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[e.dialogVisible?r("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.dialogLoading,expression:"dialogLoading"}],ref:"templateData",attrs:{"label-width":"130px",rules:e.rules,model:e.templateData}},[r("el-form-item",{attrs:{label:"模板地址",required:"",prop:"tpl_url"}},[r("el-input",{attrs:{placeholder:"/template/new/组件key/show.1.html"},model:{value:e.templateData.tpl_url,callback:function(t){e.$set(e.templateData,"tpl_url",t)},expression:"templateData.tpl_url"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"demo图地址",required:"",prop:"image"}},[r("el-input",{attrs:{placeholder:"demo图片地址"},model:{value:e.templateData.image,callback:function(t){e.$set(e.templateData,"image",t)},expression:"templateData.image"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"描述",required:"",prop:"com_desc"}},[r("el-input",{attrs:{placeholder:"组件样式功能概要"},model:{value:e.templateData.com_desc,callback:function(t){e.$set(e.templateData,"com_desc",t)},expression:"templateData.com_desc"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"优先级"}},[r("el-input",{attrs:{placeholder:"默认100,越小越靠前"},model:{value:e.templateData.priority,callback:function(t){e.$set(e.templateData,"priority",t)},expression:"templateData.priority"}})],1),e._v(" "),r("el-form-item",[r("el-button",{on:{click:e.cancleAddCom}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.confirmAddCom("templateData")}}},[e._v("确 定")])],1)],1):e._e()],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},70:function(e,t,r){"use strict";(function(t){function n(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=r(14),a=r(164),i=/^\)\]\}',?\n/,s={"Content-Type":"application/x-www-form-urlencoded"},u={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=r(155):void 0!==t&&(e=r(155)),e}(),transformRequest:[function(e,t){return a(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(n(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(n(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e){e=e.replace(i,"");try{e=JSON.parse(e)}catch(e){}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){u.headers[e]={}}),o.forEach(["post","put","patch"],function(e){u.headers[e]=o.merge(s)}),e.exports=u}).call(t,r(5))}});