!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t,n){e.exports=n(4)()},function(e,t){e.exports=n(0)},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n,r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var i=(n=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),a=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[r].concat(a).concat([i]).join("\n")}return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),l=null,c=0,u=[],p=n(8);function f(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(b(r.parts[a],t))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(b(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:s}}}}function d(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function g(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),u.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertAt.before,n);n.insertBefore(t,o)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function h(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=n.nc;r&&(e.attrs.nonce=r)}return y(t,e.attrs),g(e,t),t}function y(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var a=c++;n=l||(l=h(t)),r=k.bind(null,n,a,!1),o=k.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),g(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=p(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,t),o=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(t),r=function(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){m(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=d(e,t);return f(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(s=i[a.id]).refs--,r.push(s)}for(e&&f(d(e,t),t),o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var v,w=(v=[],function(e,t){return v[e]=t,v.filter(Boolean).join("\n")});function k(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t,n){"use strict";var r=n(5);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){var r=n(7);"string"==typeof r&&(r=[[e.i,r,""]]);n(3)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,".sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative;\n}\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n}\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  -ms-transform: rotate(30deg);\n  transform: rotate(30deg);\n}\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  -ms-transform: rotate(60deg);\n  transform: rotate(60deg);\n}\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  -ms-transform: rotate(120deg);\n  transform: rotate(120deg);\n}\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  -ms-transform: rotate(150deg);\n  transform: rotate(150deg);\n}\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  -ms-transform: rotate(210deg);\n  transform: rotate(210deg);\n}\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  -ms-transform: rotate(240deg);\n  transform: rotate(240deg);\n}\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  -ms-transform: rotate(300deg);\n  transform: rotate(300deg);\n}\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  -ms-transform: rotate(330deg);\n  transform: rotate(330deg);\n}\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n}\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s;\n}\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s;\n}\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s;\n}\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s;\n}\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s;\n}\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s;\n}\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s;\n}\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n}\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n}\n",""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){var r=n(10);"string"==typeof r&&(r=[[e.i,r,""]]);n(3)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(2)(!1)).push([e.i,".login {\n  max-width: 300px;\n  margin: 1em auto;\n}\n\n.login .hidden {\n  display: none;\n}\n\n.login label,\n.login label span {\n  display: block;\n}\n\n.login label,\n.login input[type=checkbox],\n.login input[type=submit] {\n  margin: 0 0 1em;\n  cursor: pointer;\n}\n\n.login-center {\n  text-align: center;\n}\n\n.login input:disabled {\n  cursor: not-allowed;\n}\n",""])},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=n(0),a=n.n(i),s={method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer"},l={OK:200,CREATED:201,UNAUTHORIZED:401,NOT_FOUND:404,RUNTIME_ERROR:500};function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,p(t).apply(this,arguments))}var n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o.a.Component),n=t,(r=[{key:"handleChange",value:function(e){"function"==typeof this.props.onValueChange&&this.props.onValueChange(e.target.value)}},{key:"render",value:function(){var e=this;return o.a.createElement("label",null,o.a.createElement("span",null,this.props.label),o.a.createElement("input",{type:this.props.type,defaultValue:this.props.value,autoComplete:this.props.autoComplete,name:this.props.name,required:this.props.required,placeholder:this.props.placeholder,onChange:function(t){return e.handleChange(t)}}))}}])&&u(n.prototype,r),t}();d.defaultProps={type:"text",label:"Full name",placeholder:"John Smith"},d.propTypes={type:a.a.string,onValueChange:a.a.func,label:a.a.string,value:a.a.string,autoComplete:a.a.string,name:a.a.string,required:a.a.bool,placeholder:a.a.string};var g=d,m=function(e){var t=e.name,n=e.label,r=e.disabled;return o.a.createElement("input",{type:"submit",name:t,value:"".concat(n),disabled:r})};m.defaultProps={disabled:!0},m.propTypes={name:a.a.string.isRequired,label:a.a.string.isRequired,disabled:a.a.bool};var h=m;function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,v(t).apply(this,arguments))}var n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,o.a.Component),n=t,(r=[{key:"handleChange",value:function(e){"function"==typeof this.props.onValueChange&&this.props.onValueChange(e.target.checked)}},{key:"render",value:function(){var e=this;return o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",defaultChecked:this.props.checked,onChange:function(t){return e.handleChange(t)}})," ",this.props.label)}}])&&b(n.prototype,r),t}();k.defaultProps={checked:!1,label:"I agree with the terms and conditions."},k.propTypes={onValueChange:a.a.func,checked:a.a.bool,label:a.a.string};var S=k;function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,O(t).apply(this,arguments))}var n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(t,o.a.Component),n=t,(r=[{key:"handleClick",value:function(e,t){this.props.switchTo(e,t)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:{color:this.props.errorTextColor}},o.a.createElement("h1",{style:{fontSize:this.props.errorHeaderFontSize}},this.props.error),this.props.errorHelpText?o.a.createElement("h2",{style:{fontSize:this.props.errorSubHeaderFontSize}},this.props.errorHelpText):null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"#".concat(this.props.loginHash),onClick:function(t){return e.handleClick(t,"login-form")}},this.props.loginLink)),o.a.createElement("li",null,o.a.createElement("a",{href:"#".concat(this.props.forgottenHash),onClick:function(t){return e.handleClick(t,"forgotten-form")}},this.props.forgottenLink)),o.a.createElement("li",null,o.a.createElement("a",{href:"#".concat(this.props.signupHash),onClick:function(t){return e.handleClick(t,"signup-form")}},this.props.signupLink))))}}])&&L(n.prototype,r),t}();C.defaultProps={error:"An error occured"},C.propTypes={error:a.a.string,errorHelpText:a.a.string,loginHash:a.a.string,forgottenHash:a.a.string,signupHash:a.a.string,loginLink:a.a.string,forgottenLink:a.a.string,signupLink:a.a.string,switchTo:a.a.func,errorTextColor:a.a.string,errorHeaderFontSize:a.a.string,errorSubHeaderFontSize:a.a.string};var x=C,j=(n(6),function(){return o.a.createElement("div",{className:"sk-fading-circle"},o.a.createElement("div",{className:"sk-circle1 sk-circle"}),o.a.createElement("div",{className:"sk-circle2 sk-circle"}),o.a.createElement("div",{className:"sk-circle3 sk-circle"}),o.a.createElement("div",{className:"sk-circle4 sk-circle"}),o.a.createElement("div",{className:"sk-circle5 sk-circle"}),o.a.createElement("div",{className:"sk-circle6 sk-circle"}),o.a.createElement("div",{className:"sk-circle7 sk-circle"}),o.a.createElement("div",{className:"sk-circle8 sk-circle"}),o.a.createElement("div",{className:"sk-circle9 sk-circle"}),o.a.createElement("div",{className:"sk-circle10 sk-circle"}),o.a.createElement("div",{className:"sk-circle11 sk-circle"}),o.a.createElement("div",{className:"sk-circle12 sk-circle"}))});function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){F(e,t,n[t])})}return e}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n(9);var N=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=(n=function(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,H(t).call(this,e))).props,o=r.username,i=r.password,a=r.email,s=r.stayLogged,l=r.displayLogin,c=r.displayForgotten,u=r.displaySignup,p=r.displayLoading,f=r.displayError,d=r.validLoginForm,g=r.validForgottenForm,m=r.validSignupForm,h=r.error;return n.state={username:o,password:i,email:a,stayLogged:s,displayLogin:l,displayForgotten:c,displaySignup:u,displayLoading:p,displayError:f,validLoginForm:d,validForgottenForm:g,validSignupForm:m,error:h},n}var n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,o.a.Component),n=t,(r=[{key:"handleLogin",value:function(e){var t=this;e.preventDefault();var n=this.state,r=n.username,o=n.password,i=n.stayLogged,a={username:r,password:o,stayLogged:i};i&&(a.stayLoggedDuration=this.props.stayLoggedDuration,a.stayLoggedUnit=this.props.stayLoggedUnit),this.switchTo(e,"loading"),fetch(this.props.loginEndpoint,_({},s,{body:JSON.stringify(a)})).then(function(e){e.json().then(function(n){if(e.status!==l.OK)return t.setState({error:"Login failed"}),void t.switchTo(null,"error");window.dispatchEvent(new window.CustomEvent("login-successful",{detail:n}))})}).catch(function(n){t.setState({error:n.message}),t.switchTo(e,"error")})}},{key:"handleForgotten",value:function(e){var t=this;e.preventDefault();var n={email:this.state.email};this.switchTo(e,"loading"),fetch(this.props.forgottenEndpoint,_({},s,{body:JSON.stringify(n)})).then(function(n){n.json().then(function(r){if(n.status!==l.OK)return t.setState({error:"Password reset failed"}),void t.switchTo(null,"error");window.dispatchEvent(new window.CustomEvent("forgotten-successful",{detail:r})),t.props.afterResetDisplayLogin&&t.switchTo(e,"login-form")})}).catch(function(n){t.setState({error:n.message}),t.switchTo(e,"error")})}},{key:"handleSignup",value:function(e){var t=this;e.preventDefault();var n=this.state,r={username:n.username,password:n.password,email:n.email};this.switchTo(e,"loading"),fetch(this.props.signupEndpoint,_({},s,{body:JSON.stringify(r)})).then(function(n){n.json().then(function(r){if(n.status!==l.CREATED&&n.status!==l.OK)return t.setState({error:"Signup failed"}),void t.switchTo(null,"error");window.dispatchEvent(new window.CustomEvent("signup-successful",{detail:r})),t.props.afterSignupDisplayLogin&&t.switchTo(e,"login-form")})}).catch(function(n){t.setState({error:n.message}),t.switchTo(e,"error")})}},{key:"switchTo",value:function(e,t){var n=this;if(this.setState({displayLogin:"login-form"===t,displayForgotten:"forgotten-form"===t,displaySignup:"signup-form"===t,displayLoading:"loading"===t,displayError:"error"===t}),"loading"!==t&&"error"!==t){var r=window.setTimeout(function(){n.checkValidity(t)},300);this.setState({switchTimeoutId:r})}}},{key:"componentDidMount",value:function(){var e=this,t=window.setTimeout(function(){e.checkValidity("login-form")},300);this.setState({mountTimeoutId:t})}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.state.switchTimeoutId),window.clearTimeout(this.state.mountTimeoutId)}},{key:"checkValidity",value:function(e){var t=document.querySelector(".".concat(e));if(t){var n=t.checkValidity();switch(e){case"login-form":this.setState({validLoginForm:n});break;case"forgotten-form":this.setState({validForgottenForm:n});break;case"signup-form":this.setState({validSignupForm:n});break;default:throw new Error("Unexpected formId ".concat(e))}}}},{key:"handleUsernameChange",value:function(e,t){this.setState({username:e}),this.checkValidity(t)}},{key:"handlePasswordChange",value:function(e,t){this.setState({password:e}),this.checkValidity(t)}},{key:"handleEmailChange",value:function(e,t){this.setState({email:e}),this.checkValidity(t)}},{key:"handleStayLoggedChange",value:function(e){this.setState({stayLogged:e})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"login"},this.state.displayLogin?o.a.createElement("form",{className:"login-form",onSubmit:function(t){return e.handleLogin(t)},onChange:function(){return e.checkValidity("login-form")},action:"#".concat(this.props.loginHash),method:"POST"},o.a.createElement(g,{value:this.state.username,autoComplete:"username",name:"username",required:!0,placeholder:this.props.usernamePlaceholder,onValueChange:function(t){return e.handleUsernameChange(t,"login-form")},label:this.props.usernameLabel}),o.a.createElement(g,{type:"password",value:this.state.password,autoComplete:"password",name:"password",required:!0,placeholder:this.props.passwordPlaceholder,onValueChange:function(t){return e.handlePasswordChange(t,"login-form")},label:this.props.passwordLabel}),o.a.createElement(h,{name:"login-button",disabled:!this.state.validLoginForm,label:this.props.loginButtonText}),o.a.createElement(S,{checked:this.state.stayLogged,label:"".concat(this.props.stayLoggedLabel," ").concat(this.props.stayLoggedDurationDescription),onValueChange:function(t){return e.handleStayLoggedChange(t,"login-form")}}),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"#".concat(this.props.forgottenHash),onClick:function(t){return e.switchTo(t,"forgotten-form")}},this.props.forgottenLink)),o.a.createElement("li",null,o.a.createElement("a",{href:"#".concat(this.props.signupHash),onClick:function(t){return e.switchTo(t,"signup-form")}},this.props.signupLink)))):null,this.state.displayForgotten?o.a.createElement("form",{className:"forgotten-form",onSubmit:function(t){return e.handleForgotten(t)},onChange:function(){return e.checkValidity("forgotten-form")},action:"#".concat(this.props.forgottenHash),method:"POST"},o.a.createElement(g,{type:"email",value:this.state.email,autoComplete:"email",name:"email",required:!0,placeholder:this.props.emailPlaceholder,onValueChange:function(t){return e.handleEmailChange(t,"forgotten-form")},label:this.props.emailLabel}),o.a.createElement(h,{name:"forgotten-button",disabled:!this.state.validForgottenForm,label:this.props.forgottenButtonText})):null,this.state.displayLoading?o.a.createElement("div",{className:"loading"},o.a.createElement(j,null),o.a.createElement("p",{className:"login-center"},this.props.pleaseWait)):null,this.state.displayError?o.a.createElement(x,{error:this.state.error,errorHelpText:this.props.errorHelpText,loginHash:this.props.loginHash,forgottenHash:this.props.forgottenHash,signupHash:this.props.signupHash,loginLink:this.props.loginLink,forgottenLink:this.props.forgottenLink,signupLink:this.props.signupLink,switchTo:this.switchTo.bind(this),errorTextColor:this.props.errorTextColor,errorHeaderFontSize:this.props.errorHeaderFontSize,errorSubHeaderFontSize:this.props.errorSubHeaderFontSize}):null,this.state.displaySignup?o.a.createElement("form",{className:"signup-form",onSubmit:function(t){return e.handleSignup(t)},onChange:function(){return e.checkValidity("signup-form")},action:"#".concat(this.props.signupHash),method:"POST"},o.a.createElement(g,{value:this.state.username,autoComplete:"username",name:"username",required:!0,placeholder:this.props.usernamePlaceholder,onValueChange:function(t){return e.handleUsernameChange(t,"signup-form")},label:this.props.usernameLabel}),o.a.createElement(g,{type:"password",value:this.state.password,autoComplete:"new-password",name:"new-password",required:!0,placeholder:this.props.passwordPlaceholder,onValueChange:function(t){return e.handlePasswordChange(t,"signup-form")},label:this.props.passwordLabel}),o.a.createElement(g,{type:"email",value:this.state.email,autoComplete:"email",name:"email",required:!0,placeholder:this.props.emailPlaceholder,onValueChange:function(t){return e.handleEmailChange(t,"signup-form")},label:this.props.emailLabel}),o.a.createElement("p",{className:"email-policy"},this.props.emailPolicy),o.a.createElement(h,{name:"signup-button",disabled:!this.state.validSignupForm,label:this.props.signupButtonText})):null)}}])&&R(n.prototype,r),t}();N.defaultProps={username:"",password:"",email:"",stayLogged:!1,usernameLabel:"Username",usernamePlaceholder:"johnsmith or john.smith@company.eu",stayLoggedDuration:14,stayLoggedUnit:"days",stayLoggedLabel:"Stay logged-in",stayLoggedDurationDescription:"for 2 weeks",loginLink:"Login",forgottenLink:"Forgotten password?",signupLink:"Need to signup for an account?",displayLogin:!0,displayForgotten:!1,displaySignup:!1,displayLoading:!1,displayError:!1,loginHash:"login",forgottenHash:"forgotten",signupHash:"signup",loginButtonText:"Login",forgottenButtonText:"Reset your password",signupButtonText:"Signup",validLoginForm:!1,validForgottenForm:!1,validSignupForm:!1,loginEndpoint:"https://jsonplaceholder.typicode.com/posts",forgottenEndpoint:"https://jsonplaceholder.typicode.com/posts",signupEndpoint:"https://jsonplaceholder.typicode.com/posts",pleaseWait:"Please wait...",error:null,emailPolicy:"Your e-mail is required because you might need it to reset your password in case you forget it. Your e-mail will not be used for any other purpose.",errorHelpText:"What would you like to do next?",afterResetDisplayLogin:!1,afterSignupDisplayLogin:!1,errorTextColor:"#d80b0b",errorHeaderFontSize:"1.5em",errorSubHeaderFontSize:"1.25em"},N.propTypes={username:a.a.string,usernamePlaceholder:a.a.string,usernameLabel:a.a.string,password:a.a.string,passwordPlaceholder:a.a.string,passwordLabel:a.a.string,email:a.a.string,emailPlaceholder:a.a.string,emailLabel:a.a.string,stayLogged:a.a.bool,stayLoggedDuration:a.a.number,stayLoggedUnit:a.a.string,stayLoggedLabel:a.a.string,stayLoggedDurationDescription:a.a.string,loginHash:a.a.string,forgottenHash:a.a.string,signupHash:a.a.string,loginButtonText:a.a.string,loginLink:a.a.string,forgottenLink:a.a.string,signupLink:a.a.string,forgottenButtonText:a.a.string,signupButtonText:a.a.string,displayLogin:a.a.bool,displayForgotten:a.a.bool,displaySignup:a.a.bool,displayLoading:a.a.bool,displayError:a.a.bool,validLoginForm:a.a.bool,validForgottenForm:a.a.bool,validSignupForm:a.a.bool,loginEndpoint:a.a.string,forgottenEndpoint:a.a.string,signupEndpoint:a.a.string,pleaseWait:a.a.string,error:a.a.string,emailPolicy:a.a.string,errorHelpText:a.a.string,afterResetDisplayLogin:a.a.bool,afterSignupDisplayLogin:a.a.bool,errorTextColor:a.a.string,errorHeaderFontSize:a.a.string,errorSubHeaderFontSize:a.a.string},t.default=N}])},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(1),a=n.n(i),s=n(2),l=n.n(s);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=p(this,f(t).call(this,e)),window.addEventListener("login-successful",function(e){var t=e.detail,r=t.authenticationToken,o=t.loginSuccessful;n.setState({authenticationToken:r,loginSuccessful:o}),r&&o&&n.setState({displayReactLogin:!1,displayDashboard:!0,displayPasswordReset:!1,displayAccountCreated:!1})}),window.addEventListener("forgotten-successful",function(e){e.detail.passwordReset&&n.setState({displayReactLogin:!1,displayDashboard:!1,displayPasswordReset:!0,displayAccountCreated:!1})}),window.addEventListener("signup-successful",function(e){e.detail.accountCreated&&n.setState({displayReactLogin:!1,displayDashboard:!1,displayPasswordReset:!1,displayAccountCreated:!0})}),n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,o.a.Component),n=t,(r=[{key:"componentWillMount",value:function(){this.setState({displayReactLogin:!0,displayDashboard:!1,displayPasswordReset:!1,displayAccountCreated:!1})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("login-successful"),window.removeEventListener("forgotten-successful"),window.removeEventListener("signup-successful")}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},this.state.displayReactLogin?o.a.createElement(l.a,{loginEndpoint:"/api/login",forgottenEndpoint:"/api/password",signupEndpoint:"/api/signup",usernameLabel:"Nom d'utilisateur",usernamePlaceholder:"rémi-martin",passwordLabel:"Mot de passe",passwordPlaceholder:"s013ilVert",loginButtonText:"Se connecter",stayLoggedLabel:"Rester connecté",stayLoggedDurationDescription:"pour 2 semaines",loginLink:"S'identifier",forgottenLink:"Mot de passe oublié?",signupLink:"Voulez-vous créer un compte?",loginHash:"s'identifier",forgottenHash:"réinitialiser-le-mot-de-passe",signupHash:"créer-un-nouveau-compte",emailLabel:"Votre email",emailPlaceholder:"rémi-martin@tv.fr",forgottenButtonText:"Réinitialisation du mot de passe",signupButtonText:"Créer votre compte",pleaseWait:"Merci de patienter…",emailPolicy:"Votre email est nécessaire si vous oubliez votre mot de passe et souhaitez le réinitialiser. Votre adresse email ne sera pas utilisée à d'autres fins.",errorHelpText:"Que voulez-vous faire?",afterResetDisplayLogin:!1,afterSignupDisplayLogin:!1,errorTextColor:"#cc0033",errorHeaderFontSize:"1.75em",errorSubHeaderFontSize:"1.5em"}):null,this.state.displayDashboard?o.a.createElement("div",{className:"dashboard"},o.a.createElement("p",null,"You are successfully logged in to this application dashboard.")):null,this.state.displayPasswordReset?o.a.createElement("div",{className:"password-reset"},o.a.createElement("p",null,"An link has been e-mailed to you. Please follow that link to complete resetting your password.")):null,this.state.displayAccountCreated?o.a.createElement("div",{className:"account-created"},o.a.createElement("p",null,"Your account has been created. To enable it, please check your e-mail and follow the link that has been sent to you.")):null)}}])&&u(n.prototype,r),i&&u(n,i),t}();a.a.render(o.a.createElement(g,null),document.getElementById("root"))}])});
//# sourceMappingURL=demo.js.map