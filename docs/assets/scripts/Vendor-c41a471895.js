!function(n){var s={};function r(e){if(s[e])return s[e].exports;var t=s[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=s,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=8)}([,,,,,,,,function(e,t,n){"use strict";n(9),n(10),n(11)},function(e,t,n){"use strict";function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e,t,n){var o=[],s={_version:"3.7.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){o.push({name:e,fn:t,options:n})},addAsyncTest:function(e){o.push({name:null,fn:e})}},c=function(){};c.prototype=s,c=new c;var l=[],r=t.documentElement,i="svg"===r.nodeName.toLowerCase();c.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),function(){var e,t,n,s,r,i;for(var a in o)if(o.hasOwnProperty(a)){if(e=[],(t=o[a]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(s="function"===u(t.fn)?t.fn():t.fn,r=0;r<e.length;r++)1===(i=e[r].split(".")).length?c[i[0]]=s:(!c[i[0]]||c[i[0]]instanceof Boolean||(c[i[0]]=new Boolean(c[i[0]])),c[i[0]][i[1]]=s),l.push((s?"":"no-")+i.join("-"))}}(),function(e){var t=r.className,n=c._config.classPrefix||"";if(i&&(t=t.baseVal),c._config.enableJSClass){var s=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(s,"$1"+n+"js$2")}c._config.enableClasses&&(0<e.length&&(t+=" "+n+e.join(" "+n)),i?r.className.baseVal=t:r.className=t)}(l),delete s.addTest,delete s.addAsyncTest;for(var a=0;a<c._q.length;a++)c._q[a]();e.Modernizr=c}(window,document)},function(oe,ce,le){var ue,e,t,r,n,s,i,a,o,c;e=window,c=navigator.userAgent,e.HTMLPictureElement&&/ecko/.test(c)&&c.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(r=document.createElement("source"),n=function(e){var t,n,s=e.parentNode;"PICTURE"===s.nodeName.toUpperCase()?(t=r.cloneNode(),s.insertBefore(t,s.firstElementChild),setTimeout(function(){s.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,n=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=n}))},s=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)n(t[e])},i=function(){clearTimeout(t),t=setTimeout(s,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),o=function(){i(),a&&a.addListener&&a.addListener(i)},r.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?o():document.addEventListener("DOMContentLoaded",o),i)),function(e,i,t){"use strict";var r,l,c;i.createElement("picture");var E={},a=!1,n=function(){},s=i.createElement("img"),u=s.getAttribute,d=s.setAttribute,f=s.removeAttribute,o=i.documentElement,p={},S={algorithm:""},m=navigator.userAgent,C=/rident/.test(m)||/ecko/.test(m)&&m.match(/rv\:(\d+)/)&&35<RegExp.$1,x="currentSrc",h=/\s+\+?\d+(e\d+)?w/,g=/(\([^)]+\))?\s*(.+)/,A=e.picturefillCFG,v="font-size:100%!important;",y=!0,b={},z={},w=e.devicePixelRatio,T={px:1,in:96},M=i.createElement("a"),L=!1,R=/^[ \t\n\r\u000c]+/,P=/^[, \t\n\r\u000c]+/,_=/^[^ \t\n\r\u000c]+/,B=/[,]+$/,N=/^\d+$/,W=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,$=function(e,t,n,s){e.addEventListener?e.addEventListener(t,n,s||!1):e.attachEvent&&e.attachEvent("on"+t,n)},D=function(t){var n={};return function(e){return e in n||(n[e]=t(e)),n[e]}};function k(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}var O,I,F,U,j,H,Q,q,G,V,J,K,X,Y,Z,ee,te,ne=(O=/^([\d\.]+)(em|vw|px)$/,I=D(function(e){return"return "+function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"}),function(e,t){var n;if(!(e in b))if(b[e]=!1,t&&(n=e.match(O)))b[e]=n[1]*T[n[2]];else try{b[e]=new Function("e",I(e))(T)}catch(e){}return b[e]}),se=function(e,t){return e.w?(e.cWidth=E.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},re=function(e){if(a){var t,n,s,r=e||{};if(r.elements&&1===r.elements.nodeType&&("IMG"===r.elements.nodeName.toUpperCase()?r.elements=[r.elements]:(r.context=r.elements,r.elements=null)),s=(t=r.elements||E.qsa(r.context||i,r.reevaluate||r.reselect?E.sel:E.selShort)).length){for(E.setupRun(r),L=!0,n=0;n<s;n++)E.fillImg(t[n],r);E.teardownRun(r)}}};function ie(e,t){return e.res-t.res}function ae(e,t){var n,s,r;if(e&&t)for(r=E.parseSet(t),e=E.makeUrl(e),n=0;n<r.length;n++)if(e===E.makeUrl(r[n].url)){s=r[n];break}return s}e.console&&console.warn,x in s||(x="src"),p["image/jpeg"]=!0,p["image/gif"]=!0,p["image/png"]=!0,p["image/svg+xml"]=i.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),E.ns=("pf"+(new Date).getTime()).substr(0,9),E.supSrcset="srcset"in s,E.supSizes="sizes"in s,E.supPicture=!!e.HTMLPictureElement,E.supSrcset&&E.supPicture&&!E.supSizes&&(F=i.createElement("img"),s.srcset="data:,a",F.src="data:,a",E.supSrcset=s.complete===F.complete,E.supPicture=E.supSrcset&&E.supPicture),E.supSrcset&&!E.supSizes?(U="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",H=function(){2===j.width&&(E.supSizes=!0),l=E.supSrcset&&!E.supSizes,a=!0,setTimeout(re)},(j=i.createElement("img")).onload=H,j.onerror=H,j.setAttribute("sizes","9px"),j.srcset=U+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",j.src=U):a=!0,E.selShort="picture>img,img[srcset]",E.sel=E.selShort,E.cfg=S,E.DPR=w||1,E.u=T,E.types=p,E.setSize=n,E.makeUrl=D(function(e){return M.href=e,M.href}),E.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},E.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?E.matchesMedia=function(e){return!e||matchMedia(e).matches}:E.matchesMedia=E.mMQ,E.matchesMedia.apply(this,arguments)},E.mMQ=function(e){return!e||ne(e)},E.calcLength=function(e){var t=ne(e,!0)||!1;return t<0&&(t=!1),t},E.supportsType=function(e){return!e||p[e]},E.parseSize=D(function(e){var t=(e||"").match(g);return{media:t&&t[1],length:t&&t[2]}}),E.parseSet=function(e){return e.cands||(e.cands=function(s,d){function e(e){var t,n=e.exec(s.substring(a));if(n)return t=n[0],a+=t.length,t}var f,p,t,n,r,i=s.length,a=0,m=[];function o(){var e,t,n,s,r,i,a,o,c,l=!1,u={};for(s=0;s<p.length;s++)i=(r=p[s])[r.length-1],a=r.substring(0,r.length-1),o=parseInt(a,10),c=parseFloat(a),N.test(a)&&"w"===i?((e||t)&&(l=!0),0===o?l=!0:e=o):W.test(a)&&"x"===i?((e||t||n)&&(l=!0),c<0?l=!0:t=c):N.test(a)&&"h"===i?((n||t)&&(l=!0),0===o?l=!0:n=o):l=!0;l||(u.url=f,e&&(u.w=e),t&&(u.d=t),n&&(u.h=n),n||t||e||(u.d=1),1===u.d&&(d.has1x=!0),u.set=d,m.push(u))}function c(){for(e(R),t="",n="in descriptor";;){if(r=s.charAt(a),"in descriptor"===n)if(k(r))t&&(p.push(t),t="",n="after descriptor");else{if(","===r)return a+=1,t&&p.push(t),void o();if("("===r)t+=r,n="in parens";else{if(""===r)return t&&p.push(t),void o();t+=r}}else if("in parens"===n)if(")"===r)t+=r,n="in descriptor";else{if(""===r)return p.push(t),void o();t+=r}else if("after descriptor"===n)if(k(r));else{if(""===r)return void o();n="in descriptor",a-=1}a+=1}}for(;;){if(e(P),i<=a)return m;f=e(_),p=[],","===f.slice(-1)?(f=f.replace(B,""),o()):c()}}(e.srcset,e)),e.cands},E.getEmValue=function(){var e;if(!r&&(e=i.body)){var t=i.createElement("div"),n=o.style.cssText,s=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",o.style.cssText=v,e.style.cssText=v,e.appendChild(t),r=t.offsetWidth,e.removeChild(t),r=parseFloat(r,10),o.style.cssText=n,e.style.cssText=s}return r||16},E.calcListLength=function(u){if(!(u in z)||S.uT){var e=E.calcLength(function(e){var t,n,s,r,i,a,o,c=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,l=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(s=(n=function(e){var t,n="",s=[],r=[],i=0,a=0,o=!1;function c(){n&&(s.push(n),n="")}function l(){s[0]&&(r.push(s),s=[])}for(;;){if(""===(t=e.charAt(a)))return c(),l(),r;if(o){if("*"===t&&"/"===e[a+1]){o=!1,a+=2,c();continue}a+=1}else{if(k(t)){if(e.charAt(a-1)&&k(e.charAt(a-1))||!n){a+=1;continue}if(0===i){c(),a+=1;continue}t=" "}else if("("===t)i+=1;else if(")"===t)i-=1;else{if(","===t){c(),l(),a+=1;continue}if("/"===t&&"*"===e.charAt(a+1)){o=!0,a+=2;continue}}n+=t,a+=1}}}(u)).length,t=0;t<s;t++)if(o=i=(r=n[t])[r.length-1],c.test(o)&&0<=parseFloat(o)||l.test(o)||"0"===o||"-0"===o||"+0"===o){if(a=i,r.pop(),0===r.length)return a;if(r=r.join(" "),E.matchesMedia(r))return a}return"100vw"}());z[u]=e||T.width}return z[u]},E.setRes=function(e){var t;if(e)for(var n=0,s=(t=E.parseSet(e)).length;n<s;n++)se(t[n],e.sizes);return t},E.setRes.res=se,E.applySetCandidate=function(e,t){if(e.length){var n,s,r,i,a,o,c,l,u,d,f,p,m,h,g,A=t[E.ns],v=E.DPR;if(o=A.curSrc||t[x],(c=A.curCan||(y=t,b=o,!(z=e[0].set)&&b&&(z=(z=y[E.ns].sets)&&z[z.length-1]),(w=ae(b,z))&&(b=E.makeUrl(b),y[E.ns].curSrc=b,(y[E.ns].curCan=w).res||se(w,w.set.sizes)),w))&&c.set===e[0].set&&((u=C&&!t.complete&&c.res-.1>v)||(c.cached=!0,c.res>=v&&(a=c))),!a)for(e.sort(ie),a=e[(i=e.length)-1],s=0;s<i;s++)if((n=e[s]).res>=v){a=e[r=s-1]&&(u||o!==E.makeUrl(n.url))&&(d=e[r].res,f=n.res,p=v,m=e[r].cached,g=h=void 0,p<("saveData"===S.algorithm?2.7<d?p+1:(g=(f-p)*(h=Math.pow(d-.6,1.5)),m&&(g+=.1*h),d+g):1<p?Math.sqrt(d*f):d))?e[r]:n;break}a&&(l=E.makeUrl(a.url),A.curSrc=l,A.curCan=a,l!==o&&E.setSrc(t,a),E.setSize(t))}var y,b,z,w},E.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},E.getSet=function(e){var t,n,s,r=!1,i=e[E.ns].sets;for(t=0;t<i.length&&!r;t++)if((n=i[t]).srcset&&E.matchesMedia(n.media)&&(s=E.supportsType(n.type))){"pending"===s&&(n=s),r=n;break}return r},E.parseSets=function(e,t,n){var s,r,i,a,o=t&&"PICTURE"===t.nodeName.toUpperCase(),c=e[E.ns];(void 0===c.src||n.src)&&(c.src=u.call(e,"src"),c.src?d.call(e,"data-pfsrc",c.src):f.call(e,"data-pfsrc")),(void 0===c.srcset||n.srcset||!E.supSrcset||e.srcset)&&(s=u.call(e,"srcset"),c.srcset=s,a=!0),c.sets=[],o&&(c.pic=!0,function(e,t){var n,s,r,i,a=e.getElementsByTagName("source");for(n=0,s=a.length;n<s;n++)(r=a[n])[E.ns]=!0,(i=r.getAttribute("srcset"))&&t.push({srcset:i,media:r.getAttribute("media"),type:r.getAttribute("type"),sizes:r.getAttribute("sizes")})}(t,c.sets)),c.srcset?(r={srcset:c.srcset,sizes:u.call(e,"sizes")},c.sets.push(r),(i=(l||c.src)&&h.test(c.srcset||""))||!c.src||ae(c.src,r)||r.has1x||(r.srcset+=", "+c.src,r.cands.push({url:c.src,d:1,set:r}))):c.src&&c.sets.push({srcset:c.src,sizes:null}),c.curCan=null,c.curSrc=void 0,c.supported=!(o||r&&!E.supSrcset||i&&!E.supSizes),a&&E.supSrcset&&!c.supported&&(s?(d.call(e,"data-pfsrcset",s),e.srcset=""):f.call(e,"data-pfsrcset")),c.supported&&!c.srcset&&(!c.src&&e.src||e.src!==E.makeUrl(c.src))&&(null===c.src?e.removeAttribute("src"):e.src=c.src),c.parsed=!0},E.fillImg=function(e,t){var n,s,r,i,a,o=t.reselect||t.reevaluate;e[E.ns]||(e[E.ns]={}),n=e[E.ns],(o||n.evaled!==c)&&(n.parsed&&!t.reevaluate||E.parseSets(e,e.parentNode,t),n.supported?n.evaled=c:(s=e,a=!1,"pending"!==(i=E.getSet(s))&&(a=c,i&&(r=E.setRes(i),E.applySetCandidate(r,s))),s[E.ns].evaled=a))},E.setupRun=function(){L&&!y&&w===e.devicePixelRatio||(y=!1,w=e.devicePixelRatio,b={},z={},E.DPR=w||1,T.width=Math.max(e.innerWidth||0,o.clientWidth),T.height=Math.max(e.innerHeight||0,o.clientHeight),T.vw=T.width/100,T.vh=T.height/100,c=[T.height,T.width,w].join("-"),T.em=E.getEmValue(),T.rem=T.em)},E.supPicture?(re=n,E.fillImg=n):(K=e.attachEvent?/d$|^c/:/d$|^c|^i/,X=function(){var e=i.readyState||"";Y=setTimeout(X,"loading"===e?200:999),i.body&&(E.fillImgs(),(Q=Q||K.test(e))&&clearTimeout(Y))},Y=setTimeout(X,i.body?9:99),Z=o.clientHeight,$(e,"resize",(q=function(){y=Math.max(e.innerWidth||0,o.clientWidth)!==T.width||o.clientHeight!==Z,Z=o.clientHeight,y&&E.fillImgs()},99,J=function(){var e=new Date-V;e<99?G=setTimeout(J,99-e):(G=null,q())},function(){V=new Date,G||(G=setTimeout(J,99))})),$(i,"readystatechange",X)),E.picturefill=re,E.fillImgs=re,E.teardownRun=n,re._=E,e.picturefillCFG={pf:E,push:function(e){var t=e.shift();"function"==typeof E[t]?E[t].apply(E,e):(S[t]=e[0],L&&E.fillImgs({reselect:!0}))}};for(;A&&A.length;)e.picturefillCFG.push(A.shift());e.picturefill=re,"object"==typeof oe.exports?oe.exports=re:void 0===(ue=function(){return re}.call(ce,le,ce,oe))||(oe.exports=ue),E.supPicture||(p["image/webp"]=(ee="image/webp",(te=new e.Image).onerror=function(){p[ee]=!1,re()},te.onload=function(){p[ee]=1===te.width,re()},te.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==","pending"))}(window,document)},function(e,t,n){var s,r;s=window,r=function(s,u){"use strict";if(u.getElementsByClassName){var d,f,n,r,t,i,a,o,e,p=u.documentElement,c=s.Date,l=s.HTMLPictureElement,m=s.addEventListener,h=s.setTimeout,g=s.requestAnimationFrame||h,A=s.requestIdleCallback,v=/^picture$/i,y=["load","error","lazyincluded","_lazyloaded"],b={},z=Array.prototype.forEach,w=function(e,t){return b[t]||(b[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),b[t].test(e.getAttribute("class")||"")&&b[t]},E=function(e,t){w(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},S=function(e,t){var n;(n=w(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},C=function(t,n,e){var s=e?"addEventListener":"removeEventListener";e&&C(t,n),y.forEach(function(e){t[s](e,n)})},x=function(e,t,n,s,r){var i=u.createEvent("CustomEvent");return n||(n={}),n.instance=d,i.initCustomEvent(t,!s,!r,n),e.dispatchEvent(i),i},T=function(e,t){var n;!l&&(n=s.picturefill||f.pf)?n({reevaluate:!0,elements:[e]}):t&&t.src&&(e.src=t.src)},M=function(e,t){return(getComputedStyle(e,null)||{})[t]},L=function(e,t,n){for(n=n||e.offsetWidth;n<f.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},R=(i=[],a=t=[],(e=function(e,t){n&&!t?e.apply(this,arguments):(a.push(e),r||(r=!0,(u.hidden?h:g)(o)))})._lsFlush=o=function(){var e=a;for(a=t.length?i:t,r=!(n=!0);e.length;)e.shift()();n=!1},e),P=function(n,e){return e?function(){R(n)}:function(){var e=this,t=arguments;R(function(){n.apply(e,t)})}},_=function(e){var t,n,s=function(){t=null,e()},r=function(){var e=c.now()-n;e<99?h(r,99-e):(A||s)(s)};return function(){n=c.now(),t||(t=h(r,99))}};!function(){var e,t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:300};for(e in f=s.lazySizesConfig||s.lazysizesConfig||{},t)e in f||(f[e]=t[e]);s.lazySizesConfig=f,h(function(){f.init&&we()})}();var B,N,W,$,D,k,O,I,F,U,j,H,Q,q,G,V,J,K,X,Y,Z,ee,te,ne,se,re,ie,ae,oe,ce,le,ue,de,fe,pe,me,he,ge,Ae,ve,ye,be=(Z=/^img$/i,ee=/^iframe$/i,te="onscroll"in s&&!/glebot/.test(navigator.userAgent),re=-1,ie=function(e){se--,e&&e.target&&C(e.target,ie),(!e||se<0||!e.target)&&(se=0)},ae=function(e,t){var n,s=e,r="hidden"==M(u.body,"visibility")||"hidden"!=M(e,"visibility");for(I-=t,j+=t,F-=t,U+=t;r&&(s=s.offsetParent)&&s!=u.body&&s!=p;)(r=0<(M(s,"opacity")||1))&&"visible"!=M(s,"overflow")&&(n=s.getBoundingClientRect(),r=U>n.left&&F<n.right&&j>n.top-1&&I<n.bottom+1);return r},G=oe=function(){var e,t,n,s,r,i,a,o,c,l=d.elements;if(($=f.loadMode)&&se<8&&(e=l.length)){t=0,re++,null==Q&&("expand"in f||(f.expand=500<p.clientHeight&&500<p.clientWidth?500:370),H=f.expand,Q=H*f.expFactor),ne<Q&&se<1&&2<re&&2<$&&!u.hidden?(ne=Q,re=0):ne=1<$&&1<re&&se<6?H:0;for(;t<e;t++)if(l[t]&&!l[t]._lazyRace)if(te)if((o=l[t].getAttribute("data-expand"))&&(i=1*o)||(i=ne),c!==i&&(k=innerWidth+i*q,O=innerHeight+i,a=-1*i,c=i),n=l[t].getBoundingClientRect(),(j=n.bottom)>=a&&(I=n.top)<=O&&(U=n.right)>=a*q&&(F=n.left)<=k&&(j||U||F||I)&&(f.loadHidden||"hidden"!=M(l[t],"visibility"))&&(N&&se<3&&!o&&($<3||re<4)||ae(l[t],i))){if(me(l[t]),r=!0,9<se)break}else!r&&N&&!s&&se<4&&re<4&&2<$&&(B[0]||f.preloadAfterLoad)&&(B[0]||!o&&(j||U||F||I||"auto"!=l[t].getAttribute(f.sizesAttr)))&&(s=B[0]||l[t]);else me(l[t]);s&&!r&&me(s)}},J=se=ne=0,K=f.ricTimeout,X=function(){V=!1,J=c.now(),G()},Y=A&&f.ricTimeout?function(){A(X,{timeout:K}),K!==f.ricTimeout&&(K=f.ricTimeout)}:P(function(){h(X)},!0),ce=function(e){var t;(e=!0===e)&&(K=33),V||(V=!0,(t=125-(c.now()-J))<0&&(t=0),e||t<9&&A?Y():h(Y,t))},ue=P(le=function(e){E(e.target,f.loadedClass),S(e.target,f.loadingClass),C(e.target,de),x(e.target,"lazyloaded")}),de=function(e){ue({target:e.target})},fe=function(e){var t,n=e.getAttribute(f.srcsetAttr);(t=f.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},pe=P(function(e,t,n,s,r){var i,a,o,c,l,u;(l=x(e,"lazybeforeunveil",t)).defaultPrevented||(s&&(n?E(e,f.autosizesClass):e.setAttribute("sizes",s)),a=e.getAttribute(f.srcsetAttr),i=e.getAttribute(f.srcAttr),r&&(c=(o=e.parentNode)&&v.test(o.nodeName||"")),u=t.firesLoad||"src"in e&&(a||i||c),l={target:e},u&&(C(e,ie,!0),clearTimeout(W),W=h(ie,2500),E(e,f.loadingClass),C(e,de,!0)),c&&z.call(o.getElementsByTagName("source"),fe),a?e.setAttribute("srcset",a):i&&!c&&(ee.test(e.nodeName)?function(t,n){try{t.contentWindow.location.replace(n)}catch(e){t.src=n}}(e,i):e.src=i),r&&(a||c)&&T(e,{src:i})),e._lazyRace&&delete e._lazyRace,S(e,f.lazyClass),R(function(){(!u||e.complete&&1<e.naturalWidth)&&(u?ie(l):se--,le(l))},!0)}),he=function(){if(!N)if(c.now()-D<999)h(he,999);else{var e=_(function(){f.loadMode=3,ce()});N=!0,f.loadMode=3,ce(),m("scroll",function(){3==f.loadMode&&(f.loadMode=2),e()},!0)}},{_:function(){D=c.now(),d.elements=u.getElementsByClassName(f.lazyClass),B=u.getElementsByClassName(f.lazyClass+" "+f.preloadClass),q=f.hFac,m("scroll",ce,!0),m("resize",ce,!0),s.MutationObserver?new MutationObserver(ce).observe(p,{childList:!0,subtree:!0,attributes:!0}):(p.addEventListener("DOMNodeInserted",ce,!0),p.addEventListener("DOMAttrModified",ce,!0),setInterval(ce,999)),m("hashchange",ce,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){u.addEventListener(e,ce,!0)}),/d$|^c/.test(u.readyState)?he():(m("load",he),u.addEventListener("DOMContentLoaded",ce),h(he,2e4)),d.elements.length?(oe(),R._lsFlush()):ce()},checkElems:ce,unveil:me=function(e){var t,n=Z.test(e.nodeName),s=n&&(e.getAttribute(f.sizesAttr)||e.getAttribute("sizes")),r="auto"==s;(!r&&N||!n||!e.getAttribute("src")&&!e.srcset||e.complete||w(e,f.errorClass)||!w(e,f.lazyClass))&&(t=x(e,"lazyunveilread").detail,r&&ze.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,se++,pe(e,t,r,s,n))}}),ze=(Ae=P(function(e,t,n,s){var r,i,a;if(e._lazysizesWidth=s,s+="px",e.setAttribute("sizes",s),v.test(t.nodeName||""))for(i=0,a=(r=t.getElementsByTagName("source")).length;i<a;i++)r[i].setAttribute("sizes",s);n.detail.dataAttr||T(e,n.detail)}),ve=function(e,t,n){var s,r=e.parentNode;r&&(n=L(e,r,n),(s=x(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=s.detail.width)&&n!==e._lazysizesWidth&&Ae(e,r,s,n))},{_:function(){ge=u.getElementsByClassName(f.autosizesClass),m("resize",ye)},checkElems:ye=_(function(){var e,t=ge.length;if(t)for(e=0;e<t;e++)ve(ge[e])}),updateElem:ve}),we=function(){we.i||(we.i=!0,ze._(),be._())};return d={cfg:f,autoSizer:ze,loader:be,init:we,uP:T,aC:E,rC:S,hC:w,fire:x,gW:L,rAF:R}}}(s,s.document),s.lazySizes=r,e.exports&&(e.exports=r)}]);