function gh_updateDom(t,n){document.querySelectorAll(".github__tag_name").forEach(function(e){e.innerText=n[0].name}),document.querySelectorAll(".github__download").forEach(function(e){e.setAttribute("href","https://github.com/"+t+"/archive/"+n[0].name+".tar.gz")})}function gh_collect(t,e){axios.get(e).then(function(e){return e.data}).then(function(e){gh_updateDom(t,e)}).catch(function(e){console.log(e)})}function gh_init(){var e=document.querySelector("[data-github-repo]").getAttribute("data-github-repo");gh_collect(e,"https://api.github.com/repos/"+e+"/tags")}function simpleSwitcher_updateDom(){var e=document.querySelector(".simple-switcher"),t=document.querySelector(".simple-switcher__side--front").offsetWidth,n=e.getAttribute("data-multiplier");e.style.height=parseInt(t*n)+"px"}!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.axios=t():e.axios=t()}(this,function(){return function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={exports:{},id:e,loaded:!1};return n[e].call(t.exports,t,t.exports,o),t.loaded=!0,t.exports}return o.m=n,o.c=r,o.p="",o(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";var r=n(2),o=n(3),i=n(5),s=n(6);function u(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var a=u(s);a.Axios=i,a.create=function(e){return u(r.merge(s,e))},a.Cancel=n(23),a.CancelToken=n(24),a.isCancel=n(20),a.all=function(e){return Promise.all(e)},a.spread=n(25),e.exports=a,e.exports.default=a},function(e,t,n){"use strict";var o=n(3),r=n(4),i=Object.prototype.toString;function s(e){return"[object Array]"===i.call(e)}function u(e){return null!==e&&"object"==typeof e}function a(e){return"[object Function]"===i.call(e)}function c(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),s(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:r,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:u,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:a,isStream:function(e){return u(e)&&a(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:c,merge:function n(){var r={};function e(e,t){"object"==typeof r[t]&&"object"==typeof e?r[t]=n(r[t],e):r[t]=e}for(var t=0,o=arguments.length;t<o;t++)c(arguments[t],e);return r},extend:function(n,e,r){return c(e,function(e,t){n[t]=r&&"function"==typeof e?o(e,r):e}),n},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t){"use strict";e.exports=function(n,r){return function(){for(var e=new Array(arguments.length),t=0;t<e.length;t++)e[t]=arguments[t];return n.apply(r,e)}}},function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(n(e)||"function"==typeof(t=e).readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))||!!e._isBuffer);var t}},function(e,t,n){"use strict";var r=n(6),o=n(2),i=n(17),s=n(18);function u(e){this.defaults=e,this.interceptors={request:new i,response:new i}}u.prototype.request=function(e){"string"==typeof e&&(e=o.merge({url:e},arguments[1])),(e=o.merge(r,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},o.forEach(["delete","get","head","options"],function(n){u.prototype[n]=function(e,t){return this.request(o.merge(t||{},{method:n,url:e}))}}),o.forEach(["post","put","patch"],function(r){u.prototype[r]=function(e,t,n){return this.request(o.merge(n||{},{method:r,url:e,data:t}))}}),e.exports=u},function(e,t,n){"use strict";var r=n(2),o=n(7),i={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u,a={adapter:("undefined"!=typeof XMLHttpRequest?u=n(8):"undefined"!=typeof process&&(u=n(8)),u),transformRequest:[function(e,t){return o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return 200<=e&&e<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(e){a.headers[e]={}}),r.forEach(["post","put","patch"],function(e){a.headers[e]=r.merge(i)}),e.exports=a},function(e,t,n){"use strict";var o=n(2);e.exports=function(n,r){o.forEach(n,function(e,t){t!==r&&t.toUpperCase()===r.toUpperCase()&&(n[r]=e,delete n[t])})}},function(e,t,p){"use strict";var l=p(2),h=p(9),m=p(12),w=p(13),g=p(14),v=p(10),y="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||p(15);e.exports=function(d){return new Promise(function(n,r){var o=d.data,i=d.headers;l.isFormData(o)&&delete i["Content-Type"];var s=new XMLHttpRequest,e="onreadystatechange",u=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in s||g(d.url)||(s=new window.XDomainRequest,e="onload",u=!0,s.onprogress=function(){},s.ontimeout=function(){}),d.auth){var t=d.auth.username||"",a=d.auth.password||"";i.Authorization="Basic "+y(t+":"+a)}if(s.open(d.method.toUpperCase(),m(d.url,d.params,d.paramsSerializer),!0),s.timeout=d.timeout,s[e]=function(){if(s&&(4===s.readyState||u)&&(0!==s.status||s.responseURL&&0===s.responseURL.indexOf("file:"))){var e="getAllResponseHeaders"in s?w(s.getAllResponseHeaders()):null,t={data:d.responseType&&"text"!==d.responseType?s.response:s.responseText,status:1223===s.status?204:s.status,statusText:1223===s.status?"No Content":s.statusText,headers:e,config:d,request:s};h(n,r,t),s=null}},s.onerror=function(){r(v("Network Error",d,null,s)),s=null},s.ontimeout=function(){r(v("timeout of "+d.timeout+"ms exceeded",d,"ECONNABORTED",s)),s=null},l.isStandardBrowserEnv()){var c=p(16),f=(d.withCredentials||g(d.url))&&d.xsrfCookieName?c.read(d.xsrfCookieName):void 0;f&&(i[d.xsrfHeaderName]=f)}if("setRequestHeader"in s&&l.forEach(i,function(e,t){void 0===o&&"content-type"===t.toLowerCase()?delete i[t]:s.setRequestHeader(t,e)}),d.withCredentials&&(s.withCredentials=!0),d.responseType)try{s.responseType=d.responseType}catch(e){if("json"!==d.responseType)throw e}"function"==typeof d.onDownloadProgress&&s.addEventListener("progress",d.onDownloadProgress),"function"==typeof d.onUploadProgress&&s.upload&&s.upload.addEventListener("progress",d.onUploadProgress),d.cancelToken&&d.cancelToken.promise.then(function(e){s&&(s.abort(),r(e),s=null)}),void 0===o&&(o=null),s.send(o)})}},function(e,t,n){"use strict";var o=n(10);e.exports=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(o("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";var s=n(11);e.exports=function(e,t,n,r,o){var i=new Error(e);return s(i,t,n,r,o)}},function(e,t){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},function(e,t,n){"use strict";var i=n(2);function s(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(i.isURLSearchParams(t))r=t.toString();else{var o=[];i.forEach(t,function(e,t){null!=e&&(i.isArray(e)?t+="[]":e=[e],i.forEach(e,function(e){i.isDate(e)?e=e.toISOString():i.isObject(e)&&(e=JSON.stringify(e)),o.push(s(t)+"="+s(e))}))}),r=o.join("&")}return r&&(e+=(-1===e.indexOf("?")?"?":"&")+r),e}},function(e,t,n){"use strict";var i=n(2),s=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,r,o={};return e&&i.forEach(e.split("\n"),function(e){if(r=e.indexOf(":"),t=i.trim(e.substr(0,r)).toLowerCase(),n=i.trim(e.substr(r+1)),t){if(o[t]&&0<=s.indexOf(t))return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}}),o}},function(e,t,n){"use strict";var s=n(2);e.exports=s.isStandardBrowserEnv()?function(){var n,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");function i(e){var t=e;return r&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}return n=i(window.location.href),function(e){var t=s.isString(e)?i(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0}},function(e,t){"use strict";function u(){this.message="String contains an invalid character"}(u.prototype=new Error).code=5,u.prototype.name="InvalidCharacterError",e.exports=function(e){for(var t,n,r=String(e),o="",i=0,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.charAt(0|i)||(s="=",i%1);o+=s.charAt(63&t>>8-i%1*8)){if(255<(n=r.charCodeAt(i+=.75)))throw new u;t=t<<8|n}return o}},function(e,t,n){"use strict";var u=n(2);e.exports=u.isStandardBrowserEnv()?{write:function(e,t,n,r,o,i){var s=[];s.push(e+"="+encodeURIComponent(t)),u.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),u.isString(r)&&s.push("path="+r),u.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var r=n(2);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,function(e){null!==e&&t(e)})},e.exports=o},function(e,t,n){"use strict";var r=n(2),o=n(19),i=n(20),s=n(6),u=n(21),a=n(22);function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(t){return c(t),t.baseURL&&!u(t.url)&&(t.url=a(t.baseURL,t.url)),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||s.adapter)(t).then(function(e){return c(t),e.data=o(e.data,e.headers,t.transformResponse),e},function(e){return i(e)||(c(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(e,t,n){"use strict";var r=n(2);e.exports=function(t,n,e){return r.forEach(e,function(e){t=e(t,n)}),t}},function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,n){"use strict";var r=n(23);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t;return{token:new o(function(e){t=e}),cancel:t}},e.exports=o},function(e,t){"use strict";e.exports=function(t){return function(e){return t.apply(null,e)}}}])}),document.addEventListener("DOMContentLoaded",gh_init),window.addEventListener("load",simpleSwitcher_updateDom),window.addEventListener("resize",simpleSwitcher_updateDom),function(){"use strict";if("undefined"!=typeof window&&window.addEventListener){var e,t,n,m=Object.create(null),w=function(){clearTimeout(t),t=setTimeout(e,100)},g=function(){},v=function(e){function t(e){var t;return void 0!==e.protocol?t=e:(t=document.createElement("a")).href=e,t.protocol.replace(/:/g,"")+t.host}var n,r,o;return window.XMLHttpRequest&&(n=new XMLHttpRequest,r=t(location),o=t(e),n=void 0===n.withCredentials&&""!==o&&o!==r?XDomainRequest||void 0:XMLHttpRequest),n},y="http://www.w3.org/1999/xlink";e=function(){var e,t,n,r,o,i,s,u,a,c,f=0;function d(){var e;0===(f-=1)&&(g(),window.addEventListener("resize",w,!1),window.addEventListener("orientationchange",w,!1),window.MutationObserver?((e=new MutationObserver(w)).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),g=function(){try{e.disconnect(),window.removeEventListener("resize",w,!1),window.removeEventListener("orientationchange",w,!1)}catch(e){}}):(document.documentElement.addEventListener("DOMSubtreeModified",w,!1),g=function(){document.documentElement.removeEventListener("DOMSubtreeModified",w,!1),window.removeEventListener("resize",w,!1),window.removeEventListener("orientationchange",w,!1)}))}function p(e){return function(){!0!==m[e.base]&&(e.useEl.setAttributeNS(y,"xlink:href","#"+e.hash),e.useEl.hasAttribute("href")&&e.useEl.setAttribute("href","#"+e.hash))}}function l(r){return function(){var e,t=document.body,n=document.createElement("x");r.onload=null,n.innerHTML=r.responseText,(e=n.getElementsByTagName("svg")[0])&&(e.setAttribute("aria-hidden","true"),e.style.position="absolute",e.style.width=0,e.style.height=0,e.style.overflow="hidden",t.insertBefore(e,t.firstChild)),d()}}function h(e){return function(){e.onerror=null,e.ontimeout=null,d()}}for(g(),a=document.getElementsByTagName("use"),o=0;o<a.length;o+=1){try{t=a[o].getBoundingClientRect()}catch(e){t=!1}e=(u=(r=a[o].getAttribute("href")||a[o].getAttributeNS(y,"href")||a[o].getAttribute("xlink:href"))&&r.split?r.split("#"):["",""])[0],n=u[1],i=t&&0===t.left&&0===t.right&&0===t.top&&0===t.bottom,t&&0===t.width&&0===t.height&&!i?(a[o].hasAttribute("href")&&a[o].setAttributeNS(y,"xlink:href",r),e.length&&(!0!==(c=m[e])&&setTimeout(p({useEl:a[o],base:e,hash:n}),0),void 0===c&&void 0!==(s=v(e))&&(c=new s,(m[e]=c).onload=l(c),c.onerror=h(c),c.ontimeout=h(c),c.open("GET",e),c.send(),f+=1))):i?e.length&&m[e]&&setTimeout(p({useEl:a[o],base:e,hash:n}),0):void 0===m[e]?m[e]=!0:m[e].onload&&(m[e].abort(),delete m[e].onload,m[e]=!0)}a="",f+=1,d()},n=function(){window.removeEventListener("load",n,!1),t=setTimeout(e,0)},"complete"!==document.readyState?window.addEventListener("load",n,!1):n()}}();