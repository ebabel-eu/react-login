module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=13)}([function(e,t,n){e.exports=n(5)()},function(e,t){e.exports=require("react")},function(e,t,n){(function(e){e.export={POST:{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"}}}).call(this,n(7)(e))},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),a=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(a).concat([o]).join("\n")}var i;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];null!=i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){var r,o,a={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),l=null,c=0,u=[],p=n(10);function f(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=a[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(b(r.parts[i],t))}else{var s=[];for(i=0;i<r.parts.length;i++)s.push(b(r.parts[i],t));a[r.id]={id:r.id,refs:1,parts:s}}}}function d(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}function h(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertAt.before,n);n.insertBefore(t,o)}}function g(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function m(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return y(t,e.attrs),h(e,t),t}function y(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,r,o,a;if(t.transform&&e.css){if(!(a="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=a}if(t.singleton){var i=c++;n=l||(l=m(t)),r=w.bind(null,n,i,!1),o=w.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(r=p(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){g(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return f(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var i=n[o];(s=a[i.id]).refs--,r.push(s)}e&&f(d(e,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete a[s.id]}}}};var v,k=(v=[],function(e,t){return v[e]=t,v.filter(Boolean).join("\n")});function w(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=k(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}},function(e,t,n){"use strict";var r=n(6);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){var r=n(9);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative;\n}\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n}\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  -ms-transform: rotate(30deg);\n  transform: rotate(30deg);\n}\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  -ms-transform: rotate(60deg);\n  transform: rotate(60deg);\n}\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  -ms-transform: rotate(120deg);\n  transform: rotate(120deg);\n}\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  -ms-transform: rotate(150deg);\n  transform: rotate(150deg);\n}\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  -ms-transform: rotate(210deg);\n  transform: rotate(210deg);\n}\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  -ms-transform: rotate(240deg);\n  transform: rotate(240deg);\n}\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  -ms-transform: rotate(300deg);\n  transform: rotate(300deg);\n}\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  -ms-transform: rotate(330deg);\n  transform: rotate(330deg);\n}\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n}\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s;\n}\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s;\n}\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s;\n}\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s;\n}\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s;\n}\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s;\n}\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s;\n}\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n}\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n}\n",""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){var r=n(12);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".login {\n  max-width: 300px;\n  margin: 1em auto;\n}\n\n.login .hidden {\n  display: none;\n}\n\n.login label,\n.login label span {\n  display: block;\n}\n\n.login label,\n.login input[type=checkbox],\n.login input[type=submit] {\n  margin: 0 0 1em;\n  cursor: pointer;\n}\n\n.login-center {\n  text-align: center;\n}\n",""])},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(0),i=n.n(a),s=n(2);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,p(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o.a.Component),n=t,(r=[{key:"handleChange",value:function(e){"function"==typeof this.props.onValueChange&&this.props.onValueChange(e.target.value)}},{key:"render",value:function(){var e=this;return o.a.createElement("label",null,o.a.createElement("span",null,this.props.label),o.a.createElement("input",{type:"text",defaultValue:this.props.value,autoComplete:this.props.autoComplete,name:this.props.name,required:this.props.required,placeholder:this.props.placeholder,onChange:function(t){return e.handleChange(t)}}))}}])&&c(n.prototype,r),a&&c(n,a),t}();d.defaultProps={label:"Full name",placeholder:"John Smith"},d.propTypes={onValueChange:i.a.func,label:i.a.string,value:i.a.string,autoComplete:i.a.string,name:i.a.string,required:i.a.bool,placeholder:i.a.string};var h=d;function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,b(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,o.a.Component),n=t,(r=[{key:"handleChange",value:function(e){"function"==typeof this.props.onValueChange&&this.props.onValueChange(e.target.value)}},{key:"render",value:function(){var e=this;return o.a.createElement("label",null,o.a.createElement("span",null,this.props.label),o.a.createElement("input",{type:"password",defaultValue:this.props.value,autoComplete:this.props.autoComplete,name:this.props.name,required:this.props.required,placeholder:this.props.placeholder,onChange:function(t){return e.handleChange(t)}}))}}])&&m(n.prototype,r),a&&m(n,a),t}();k.defaultProps={label:"Password",placeholder:"Blanch3dalm0nd"},k.propTypes={onValueChange:i.a.func,label:i.a.string,value:i.a.string,autoComplete:i.a.string,name:i.a.string,required:i.a.bool,placeholder:i.a.string};var w=k;function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var T=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),O(this,C(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,o.a.Component),n=t,(r=[{key:"handleChange",value:function(e){"function"==typeof this.props.onValueChange&&this.props.onValueChange(e.target.value)}},{key:"render",value:function(){var e=this;return o.a.createElement("label",null,o.a.createElement("span",null,this.props.label),o.a.createElement("input",{type:"email",defaultValue:this.props.value,autoComplete:this.props.autoComplete,name:this.props.name,required:this.props.required,placeholder:this.props.placeholder,onChange:function(t){return e.handleChange(t)}}))}}])&&E(n.prototype,r),a&&E(n,a),t}();T.defaultProps={label:"E-mail",placeholder:"john.smith@company.eu"},T.propTypes={onValueChange:i.a.func,label:i.a.string,value:i.a.string,autoComplete:i.a.string,name:i.a.string,required:i.a.bool,placeholder:i.a.string};var j=T,P=function(e){var t=e.name,n=e.label,r=e.disabled;return o.a.createElement("input",{type:"submit",name:t,value:"".concat(n),disabled:r})};P.defaultProps={disabled:!0},P.propTypes={name:i.a.string.isRequired,label:i.a.string.isRequired,disabled:i.a.bool};var x=P;function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var V=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),H(this,R(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(t,o.a.Component),n=t,(r=[{key:"handleChange",value:function(e){"function"==typeof this.props.onValueChange&&this.props.onValueChange(e.target.checked)}},{key:"render",value:function(){var e=this;return o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",defaultChecked:this.props.checked,onChange:function(t){return e.handleChange(t)}})," ",this.props.label)}}])&&F(n.prototype,r),a&&F(n,a),t}();V.defaultProps={checked:!1,label:"I agree with the terms and conditions."},V.propTypes={onValueChange:i.a.func,checked:i.a.bool,label:i.a.string};var D=V;function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var M=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),I(this,B(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,o.a.Component),n=t,(r=[{key:"handleClick",value:function(e,t){this.props.switchTo(e,t)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:{color:this.props.errorTextColor}},o.a.createElement("h1",{style:{fontSize:this.props.errorHeaderFontSize}},this.props.error),this.props.errorHelpText?o.a.createElement("h2",{style:{fontSize:this.props.errorSubHeaderFontSize}},this.props.errorHelpText):null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"#".concat(this.props.loginHash),onClick:function(t){return e.handleClick(t,"login")}},this.props.loginLink)),o.a.createElement("li",null,o.a.createElement("a",{href:"#".concat(this.props.forgottenHash),onClick:function(t){return e.handleClick(t,"forgotten")}},this.props.forgottenLink)),o.a.createElement("li",null,o.a.createElement("a",{href:"#".concat(this.props.signupHash),onClick:function(t){return e.handleClick(t,"signup")}},this.props.signupLink))))}}])&&q(n.prototype,r),a&&q(n,a),t}();M.defaultProps={error:"An error occured"},M.propTypes={error:i.a.string,errorHelpText:i.a.string,loginHash:i.a.string,forgottenHash:i.a.string,signupHash:i.a.string,loginLink:i.a.string,forgottenLink:i.a.string,signupLink:i.a.string,switchTo:i.a.func,errorTextColor:i.a.string,errorHeaderFontSize:i.a.string,errorSubHeaderFontSize:i.a.string};var z=M,W=(n(8),function(){return o.a.createElement("div",{className:"sk-fading-circle"},o.a.createElement("div",{className:"sk-circle1 sk-circle"}),o.a.createElement("div",{className:"sk-circle2 sk-circle"}),o.a.createElement("div",{className:"sk-circle3 sk-circle"}),o.a.createElement("div",{className:"sk-circle4 sk-circle"}),o.a.createElement("div",{className:"sk-circle5 sk-circle"}),o.a.createElement("div",{className:"sk-circle6 sk-circle"}),o.a.createElement("div",{className:"sk-circle7 sk-circle"}),o.a.createElement("div",{className:"sk-circle8 sk-circle"}),o.a.createElement("div",{className:"sk-circle9 sk-circle"}),o.a.createElement("div",{className:"sk-circle10 sk-circle"}),o.a.createElement("div",{className:"sk-circle11 sk-circle"}),o.a.createElement("div",{className:"sk-circle12 sk-circle"}))});n(11);function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){Y(e,t,n[t])})}return e}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(e,t){return!t||"object"!==J(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Q(e){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function X(e,t){return(X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Z=200,ee=201,te=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=(n=K(this,Q(t).call(this,e))).props,o=r.username,a=r.password,i=r.email,s=r.stayLogged,l=r.displayLogin,c=r.displayForgotten,u=r.displaySignup,p=r.displayLoading,f=r.displayError,d=r.validLoginForm,h=r.validForgottenForm,g=r.validSignupForm,m=r.error;return n.state={username:o,password:a,email:i,stayLogged:s,displayLogin:l,displayForgotten:c,displaySignup:u,displayLoading:p,displayError:f,validLoginForm:d,validForgottenForm:h,validSignupForm:g,error:m},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&X(e,t)}(t,o.a.Component),n=t,(r=[{key:"handleLogin",value:function(e){var t=this;e.preventDefault();var n=this.state,r=n.username,o=n.password,a=n.stayLogged,i={username:r,password:o,stayLogged:a};a&&(i.stayLoggedDuration=this.props.stayLoggedDuration,i.stayLoggedUnit=this.props.stayLoggedUnit),this.switchTo(e,"loading"),fetch(this.props.loginEndpoint,$({},s.POST,{body:JSON.stringify(i)})).then(function(e){e.json().then(function(n){if(e.status!==Z)return t.setState({error:"Login failed"}),void t.switchTo(null,"error");window.dispatchEvent(new window.CustomEvent("login-successful",{detail:n}))})}).catch(function(n){t.setState({error:n.message}),t.switchTo(e,"error")})}},{key:"handleForgotten",value:function(e){var t=this;e.preventDefault();var n={email:this.state.email};this.switchTo(e,"loading"),fetch(this.props.forgottenEndpoint,$({},s.POST,{body:JSON.stringify(n)})).then(function(n){n.json().then(function(r){if(n.status!==Z)return t.setState({error:"Password reset failed"}),void t.switchTo(null,"error");window.dispatchEvent(new window.CustomEvent("forgotten-successful",{detail:r})),t.props.afterResetDisplayLogin&&t.switchTo(e,"login")})}).catch(function(n){t.setState({error:n.message}),t.switchTo(e,"error")})}},{key:"handleSignup",value:function(e){var t=this;e.preventDefault();var n=this.state,r={username:n.username,password:n.password,email:n.email};this.switchTo(e,"loading"),fetch(this.props.signupEndpoint,$({},s.POST,{body:JSON.stringify(r)})).then(function(n){n.json().then(function(r){if(n.status!==ee&&n.status!==Z)return t.setState({error:"Signup failed"}),void t.switchTo(null,"error");window.dispatchEvent(new window.CustomEvent("signup-successful",{detail:r})),t.props.afterSignupDisplayLogin&&t.switchTo(e,"login")})}).catch(function(n){t.setState({error:n.message}),t.switchTo(e,"error")})}},{key:"switchTo",value:function(e,t){var n=this;if(this.setState({displayLogin:"login"===t,displayForgotten:"forgotten"===t,displaySignup:"signup"===t,displayLoading:"loading"===t,displayError:"error"===t}),"loading"!==t&&"error"!==t){var r=window.setTimeout(function(){n.checkValidity(t)},300);this.setState({switchTimeoutId:r})}}},{key:"componentDidMount",value:function(){var e=this,t=window.setTimeout(function(){e.checkValidity("login")},300);this.setState({mountTimeoutId:t})}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.state.switchTimeoutId),window.clearTimeout(this.state.mountTimeoutId)}},{key:"checkValidity",value:function(e){var t=document.getElementById(e);if(t){var n=t.checkValidity();switch(e){case"login":this.setState({validLoginForm:n});break;case"forgotten":this.setState({validForgottenForm:n});break;case"signup":this.setState({validSignupForm:n});break;default:throw new Error("Unexpected formId ".concat(e))}}}},{key:"handleUsernameChange",value:function(e,t){this.setState({username:e}),this.checkValidity(t)}},{key:"handlePasswordChange",value:function(e,t){this.setState({password:e}),this.checkValidity(t)}},{key:"handleEmailChange",value:function(e,t){this.setState({email:e}),this.checkValidity(t)}},{key:"handleStayLoggedChange",value:function(e){this.setState({stayLogged:e})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"login"},this.state.displayLogin?o.a.createElement("form",{id:"login",onSubmit:function(t){return e.handleLogin(t)},onChange:function(){return e.checkValidity("login")},action:"#".concat(this.props.loginHash),method:"POST"},o.a.createElement(h,{value:this.state.username,autoComplete:"username",name:"username",required:!0,placeholder:this.props.usernamePlaceholder,onValueChange:function(t){return e.handleUsernameChange(t,"login")},label:this.props.usernameLabel}),o.a.createElement(w,{value:this.state.password,autoComplete:"password",name:"password",required:!0,placeholder:this.props.passwordPlaceholder,onValueChange:function(t){return e.handlePasswordChange(t,"login")},label:this.props.passwordLabel}),o.a.createElement(x,{name:"login-button",disabled:!this.state.validLoginForm,label:this.props.loginButtonText}),o.a.createElement(D,{checked:this.state.stayLogged,label:"".concat(this.props.stayLoggedLabel," ").concat(this.props.stayLoggedDurationDescription),onValueChange:function(t){return e.handleStayLoggedChange(t,"login")}}),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"#".concat(this.props.forgottenHash),onClick:function(t){return e.switchTo(t,"forgotten")}},this.props.forgottenLink)),o.a.createElement("li",null,o.a.createElement("a",{href:"#".concat(this.props.signupHash),onClick:function(t){return e.switchTo(t,"signup")}},this.props.signupLink)))):null,this.state.displayForgotten?o.a.createElement("form",{id:"forgotten",onSubmit:function(t){return e.handleForgotten(t)},onChange:function(){return e.checkValidity("forgotten")},action:"#".concat(this.props.forgottenHash),method:"POST"},o.a.createElement(j,{value:this.state.email,autoComplete:"email",name:"email",required:!0,placeholder:this.props.emailPlaceholder,onValueChange:function(t){return e.handleEmailChange(t,"forgotten")},label:this.props.emailLabel}),o.a.createElement(x,{name:"forgotten-button",disabled:!this.state.validForgottenForm,label:this.props.forgottenButtonText})):null,this.state.displayLoading?o.a.createElement("div",{id:"loading"},o.a.createElement(W,null),o.a.createElement("p",{className:"login-center"},this.props.pleaseWait)):null,this.state.displayError?o.a.createElement(z,{error:this.state.error,errorHelpText:this.props.errorHelpText,loginHash:this.props.loginHash,forgottenHash:this.props.forgottenHash,signupHash:this.props.signupHash,loginLink:this.props.loginLink,forgottenLink:this.props.forgottenLink,signupLink:this.props.signupLink,switchTo:this.switchTo.bind(this),errorTextColor:this.props.errorTextColor,errorHeaderFontSize:this.props.errorHeaderFontSize,errorSubHeaderFontSize:this.props.errorSubHeaderFontSize}):null,this.state.displaySignup?o.a.createElement("form",{id:"signup",onSubmit:function(t){return e.handleSignup(t)},onChange:function(){return e.checkValidity("signup")},action:"#".concat(this.props.signupHash),method:"POST"},o.a.createElement(h,{value:this.state.username,autoComplete:"username",name:"username",required:!0,placeholder:this.props.usernamePlaceholder,onValueChange:function(t){return e.handleUsernameChange(t,"signup")},label:this.props.usernameLabel}),o.a.createElement(w,{value:this.state.password,autoComplete:"new-password",name:"new-password",required:!0,placeholder:this.props.passwordPlaceholder,onValueChange:function(t){return e.handlePasswordChange(t,"signup")},label:this.props.passwordLabel}),o.a.createElement(j,{value:this.state.email,autoComplete:"email",name:"email",required:!0,placeholder:this.props.emailPlaceholder,onValueChange:function(t){return e.handleEmailChange(t,"signup")},label:this.props.emailLabel}),o.a.createElement("p",{className:"email-policy"},this.props.emailPolicy),o.a.createElement(x,{name:"signup-button",disabled:!this.state.validSignupForm,label:this.props.signupButtonText})):null)}}])&&G(n.prototype,r),a&&G(n,a),t}();te.defaultProps={username:"",password:"",email:"",stayLogged:!1,usernameLabel:"Username",usernamePlaceholder:"johnsmith or john.smith@company.eu",stayLoggedDuration:14,stayLoggedUnit:"days",stayLoggedLabel:"Stay logged-in",stayLoggedDurationDescription:"for 2 weeks",loginLink:"Login",forgottenLink:"Forgotten password?",signupLink:"Need to signup for an account?",displayLogin:!0,displayForgotten:!1,displaySignup:!1,displayLoading:!1,displayError:!1,loginHash:"login",forgottenHash:"forgotten",signupHash:"signup",loginButtonText:"Login",forgottenButtonText:"Reset your password",signupButtonText:"Signup",validLoginForm:!1,validForgottenForm:!1,validSignupForm:!1,loginEndpoint:"https://jsonplaceholder.typicode.com/posts",forgottenEndpoint:"https://jsonplaceholder.typicode.com/posts",signupEndpoint:"https://jsonplaceholder.typicode.com/posts",pleaseWait:"Please wait...",error:null,emailPolicy:"Your e-mail is required because you might need it to reset your password in case you forget it. Your e-mail will not be used for any other purpose.",errorHelpText:"What would you like to do next?",afterResetDisplayLogin:!1,afterSignupDisplayLogin:!1,errorTextColor:"#d80b0b",errorHeaderFontSize:"1.5em",errorSubHeaderFontSize:"1.25em"},te.propTypes={username:i.a.string,usernamePlaceholder:i.a.string,usernameLabel:i.a.string,password:i.a.string,passwordPlaceholder:i.a.string,passwordLabel:i.a.string,email:i.a.string,emailPlaceholder:i.a.string,emailLabel:i.a.string,stayLogged:i.a.bool,stayLoggedDuration:i.a.number,stayLoggedUnit:i.a.string,stayLoggedLabel:i.a.string,stayLoggedDurationDescription:i.a.string,loginHash:i.a.string,forgottenHash:i.a.string,signupHash:i.a.string,loginButtonText:i.a.string,loginLink:i.a.string,forgottenLink:i.a.string,signupLink:i.a.string,forgottenButtonText:i.a.string,signupButtonText:i.a.string,displayLogin:i.a.bool,displayForgotten:i.a.bool,displaySignup:i.a.bool,displayLoading:i.a.bool,displayError:i.a.bool,validLoginForm:i.a.bool,validForgottenForm:i.a.bool,validSignupForm:i.a.bool,loginEndpoint:i.a.string,forgottenEndpoint:i.a.string,signupEndpoint:i.a.string,pleaseWait:i.a.string,error:i.a.string,emailPolicy:i.a.string,errorHelpText:i.a.string,afterResetDisplayLogin:i.a.bool,afterSignupDisplayLogin:i.a.bool,errorTextColor:i.a.string,errorHeaderFontSize:i.a.string,errorSubHeaderFontSize:i.a.string};t.default=te}]);