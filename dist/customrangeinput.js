!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}/**
 * @license
 * Copyright (c) 2017 Mist Technologies, Inc. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * * Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
function s(){if(customElements&&!customElements.get("custom-range-input")){var e=function(e){function t(){o(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),i=document.createElement("template");return i.innerHTML="\n        <style>"+n(1)+'</style>\n        <div class="bar">\n        <div class="loaded"></div>\n        <div class="passed"></div>\n        <div class="handle"></div>\n        </div>\n        ',window.ShadyCSS&&ShadyCSS.prepareTemplate(i,"custom-range-input"),e.attachShadow({mode:"open"}),e.shadowRoot.appendChild(document.importNode(i.content,!0)),e._bar=e.shadowRoot.querySelector(".bar"),e._loaded=e.shadowRoot.querySelector(".loaded"),e._passed=e.shadowRoot.querySelector(".passed"),e._handle=e.shadowRoot.querySelector(".handle"),e._setupListeners(),e}return i(t,e),u(t,[{key:"_setupListeners",value:function(){var e=this,t=function(e){document.addEventListener("mousemove",n,!1),document.addEventListener("mouseup",o,!1),document.addEventListener("touchmove",n,!1),document.addEventListener("touchend",o,!1),n(e)};this.addEventListener("mousedown",t),this.addEventListener("touchstart",t);var n=function(t){var n="changedTouches"in t?t.changedTouches[0].pageX:t.pageX,o=e._bar.getBoundingClientRect();window.console.assert(o.right-o.left>0),e.value=(n-o.left)/(o.right-o.left)*(e.max-e.min)+e.min,e.dispatchEvent(new Event("changing"))},o=function t(){document.removeEventListener("mousemove",n,!1),document.removeEventListener("mouseup",t,!1),document.removeEventListener("touchmove",n,!1),document.removeEventListener("touchend",t,!1),e.dispatchEvent(new Event("changed"))}}},{key:"attributeChangedCallback",value:function(e,t,n){t!=n&&(this[e]=Number(n),this.dispatchEvent(new Event("change")))}},{key:"_value",value:function(e){var t=Math.pow(10,String(this.step).split(".")[1].length);return Math.min(Math.max(1*Math.round(e*t)/t,this.min),this.max)}},{key:"value",get:function(){return Number(this.getAttribute("value")||0)},set:function(e){this.setAttribute("value",this._value(e)),this._passed.style.width=this._handle.style.left=100*(this.value-this.min)/(this.max-this.min)+"%"}},{key:"subvalue",get:function(){return Number(this.getAttribute("subvalue")||0)},set:function(e){this.setAttribute("subvalue",this._value(e)),this._loaded.style.width=100*(this.subvalue-this.min)/(this.max-this.min)+"%"}},{key:"min",get:function(){return Number(this.getAttribute("min")||0)},set:function(e){this.setAttribute("min",e)}},{key:"max",get:function(){return Number(this.getAttribute("max")||100)},set:function(e){this.setAttribute("max",e)}},{key:"step",get:function(){return Number(this.getAttribute("step")||.1)},set:function(e){this.setAttribute("step",e)}},{key:"type",get:function(){return"range"}}],[{key:"observedAttributes",get:function(){return["value","subvalue","min","max","step"]}}]),t}(HTMLElement);e.version=n(3).version,customElements.define("custom-range-input",e),window.CustomRangeInput=e}}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();t.default=s},function(e,t,n){t=e.exports=n(2)(),t.push([e.i,":host {\n  display: flex;\n  align-items: center;\n  font-size: 20px;\n  max-width: 100%;\n  height: 2em;\n  overflow: hidden;\n  -webkit-tap-highlight-color: transparent; }\n\n.bar, .bar .loaded, .bar .passed {\n  font-size: 0.5em;\n  width: calc(100% - 0.8em);\n  height: 0.6em;\n  margin: 0 calc(1em + 1em);\n  border-radius: 0.6em;\n  border: none;\n  background-color: rgba(255, 255, 255, 0.2);\n  cursor: pointer;\n  position: relative;\n  -webkit-touch-callout: none;\n  /* Disable Android and iOS callouts*/\n  -webkit-user-select: none; }\n  .bar .loaded, .bar .passed {\n    position: absolute;\n    background-color: rgba(255, 255, 255, 0.2);\n    margin: 0;\n    width: 0;\n    height: 100%; }\n  .bar .passed {\n    background-color: rgba(255, 255, 255, 0.7);\n    width: 0; }\n  .bar .handle {\n    display: block;\n    background-color: rgba(255, 255, 255, 0.85);\n    width: 2em;\n    height: 2em;\n    border: 1px solid gray;\n    border-radius: 2em;\n    cursor: inherit;\n    position: relative;\n    transform: translate(-50%, -50%);\n    top: 50%;\n    left: 0; }\n    .bar .handle:hover, .bar .handle:active {\n      background-color: white; }\n",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(e,t){e.exports={name:"custom-range-input",version:"0.1.1",license:"BSD-3-Clause",main:"dist/customrangeinput.js",description:"Provides CustomRangeInput custom element in ES2015 modules and in a ES5 script",keywords:["HTML5","ES6 ES2015","WebComponents","CustomElements","Range","Input","Element"],repository:{type:"git",url:"git+https://github.com/misttechnologies/custom-range-input.git"},author:"Shintaro Tanaka <qpshinqp@mist-t.co.jp> (https://github.com/qpSHiNqp)",scripts:{postinstall:"npm run submodule && npm run build",submodule:"git submodule update --init --recursive",clean:"rm -r ./dist || exit 0",test:"wct --plugin local",build:"webpack",lint:"eslint src/js/",watch:"webpack --watch",serve:"serve ./"},devDependencies:{"babel-core":"^6.23.1","babel-loader":"^6.4.0","babel-preset-es2015":"^6.22.0","css-loader":"^0.26.2",eslint:"^3.17.1","node-sass":"^4.5.0","sass-loader":"^6.0.3","selenium-standalone":"3.0.1",serve:"^5.0.2","web-component-tester":"^5.0.0",webpack:"^2.2.1"},bugs:{url:"https://github.com/misttechnologies/custom-range-input/issues"},homepage:"https://github.com/misttechnologies/custom-range-input#readme",dependencies:{}}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=n(0),s=o(i);"object"===("undefined"==typeof customElements?"undefined":r(customElements))?(0,s.default)():window.addEventListener("WebComponentsReady",function(){(0,s.default)()})}]);