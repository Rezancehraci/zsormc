(function(){"use strict";var e={80:function(e,n,t){var r=t(9963),o=t(6252),a=t.p+"img/logo.001fbe8f.png";const i=(0,o.uE)('<div class="page_header"><div class="container-fluid"><div class="row"><div class="col-12 px-0 module_header-col"><a href="#" name="logo-home"><img class="img-fluid" src="'+a+'" alt="ZsőrMC" width="365"></a></div></div></div></div><nav class="navbar navbar-expand-lg bg-body-tertiary shadow"><div class="container-fluid"><ul class="navbar-nav mx-auto mb-2 mb-lg-0"><li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Kezdőlap</a></li><li class="nav-item"><a class="nav-link" href="/#/news/">Hírek</a></li><li class="nav-item"><a class="nav-link" href="https://store.zsormc.hu" target="_blank">Webshop</a></li><li class="nav-item"><a class="nav-link" href="/#/vote/">Szavazás</a></li><li class="nav-item"><a class="nav-link" href="#">Link</a></li></ul></div></nav>',2),c={class:"content"},s={class:"container-fluid content-container"},u={class:"row"},l={class:"col-md-8 col-12 content-col"},f=(0,o._)("div",{class:"col-md-3 col-12 content-col"},null,-1);function d(e,n){const t=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[i,(0,o._)("div",c,[(0,o._)("div",s,[(0,o._)("div",u,[(0,o._)("div",l,[(0,o.Wm)(t)]),f])])])],64)}var v=t(3744);const m={},p=(0,v.Z)(m,[["render",d]]);var h=p,g=t(2201);const b=[{path:"/",name:"home",component:()=>t.e(598).then(t.bind(t,4598))},{path:"/#/news",name:"news",component:()=>t.e(92).then(t.bind(t,9092))},{path:"/#/vote",name:"vote",component:()=>t.e(571).then(t.bind(t,9571))}],y=(0,g.p7)({history:(0,g.r5)("/zsormc/"),routes:b});var k=y,w=t(3907),C=(0,w.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});t(9909),t(2666);(0,r.ri)(h).use(C).use(k).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var c=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[s])}))?r.splice(s--,1):(c=!1,a<i&&(i=a));if(c){e.splice(l--,1);var u=o();void 0!==u&&(n=u)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{92:"38b1f89e",571:"32096ac7",598:"da1e0f17"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+".edaee638.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="zsormc:";t.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var c,s;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var f=u[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==n+a){c=f;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+a),c.src=r),e[r]=[o];var d=function(n,t){c.onerror=c.onload=null,clearTimeout(v);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(t)})),n)return n(t)},v=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/zsormc/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(t){if(a.onerror=a.onload=null,"load"===t.type)r();else{var i=t&&t.type,c=t&&t.target&&t.target.href||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+i+": "+c+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=c,a.parentNode&&a.parentNode.removeChild(a),o(s)}};return a.onerror=a.onload=i,a.href=n,t?t.parentNode.insertBefore(a,t.nextSibling):document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=function(r){return new Promise((function(o,a){var i=t.miniCssF(r),c=t.p+i;if(n(i,c))return o();e(r,c,null,o,a)}))},o={143:0};t.f.miniCss=function(e,n){var t={598:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=a);var i=t.p+t.u(n),c=new Error,s=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,o[1](c)}};t.l(i,s,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,i=r[0],c=r[1],s=r[2],u=0;if(i.some((function(n){return 0!==e[n]}))){for(o in c)t.o(c,o)&&(t.m[o]=c[o]);if(s)var l=s(t)}for(n&&n(r);u<i.length;u++)a=i[u],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},r=self["webpackChunkzsormc"]=self["webpackChunkzsormc"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(80)}));r=t.O(r)})();
//# sourceMappingURL=app.6bc0def2.js.map