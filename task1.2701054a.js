parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"sz9L":[function(require,module,exports) {
"use strict";require("../../sass/main.scss");const t=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"],e=document.querySelector('[data-action="start"]');console.log(e);const n=document.querySelector('[data-action="stop"]');console.log(n);let o=null;function c(){l(),a(),o=setInterval(()=>{document.body.style.backgroundColor=t[i(0,5)]},1e3)}function s(){d(),r(),clearInterval(o)}e.addEventListener("click",c),n.addEventListener("click",s),r();const i=(t,e)=>Math.floor(Math.random()*(e-t+1)+t);function r(){n.setAttribute("disabled",!0)}function a(){n.removeAttribute("disabled")}function l(){e.setAttribute("disabled",!0)}function d(){e.removeAttribute("disabled")}
},{"../../sass/main.scss":"clu1"}]},{},["sz9L"], null)
//# sourceMappingURL=/goit-js-hw-11/task1.2701054a.js.map