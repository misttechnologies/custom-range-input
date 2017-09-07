/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*!
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

var _customrangeinput = __webpack_require__(1);

var _customrangeinput2 = _interopRequireDefault(_customrangeinput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Actually CustomRangeInput extends HTMLInputElement (<input> element) but
 * it seems not to work on current browser implementations.
 * Thus we define CustomRangeInput from scratch, extending "plain" HTMLElement
 */

// Expecting a polyfill to be loaded
if ("object" === (typeof customElements === "undefined" ? "undefined" : _typeof(customElements))) {
  if (!window.customElements.get('custom-range-input')) window.customElements.define('custom-range-input', window.CustomRangeInput);
} else {
  window.addEventListener('WebComponentsReady', function () {
    if (!window.customElements.get('custom-range-input')) window.customElements.define('custom-range-input', window.CustomRangeInput);
  });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global require, ShadyCSS */
/**
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

/**
 * Actually CustomRangeInput extends HTMLInputElement (<input> element) but
 * it seems not to work on current browser implementations.
 * Thus we define CustomRangeInput from scratch, extending "plain" HTMLElement
 */
var CustomRangeInput = function (_HTMLElement) {
  _inherits(CustomRangeInput, _HTMLElement);

  function CustomRangeInput() {
    _classCallCheck(this, CustomRangeInput);

    // Though native shadow DOM spec allows elements to be inserted
    // directly into shadowRoot using innerHTML (without <template>),
    // creating shadow DOM via <template> is required by ShadyCSS to
    // prepare / convert styles so that they can 'shim'.
    var _this = _possibleConstructorReturn(this, (CustomRangeInput.__proto__ || Object.getPrototypeOf(CustomRangeInput)).call(this));

    var template = document.createElement("template");
    template.innerHTML = "\n      <style>" + __webpack_require__(2) + "</style>\n      <div class=\"bar\">\n      <div class=\"loaded\"></div>\n      <div class=\"passed\"></div>\n      <div class=\"handle\"></div>\n      </div>\n      ";
    if (window.ShadyCSS) {
      // Here styles (e.g. `:host`) go converted
      ShadyCSS.prepareTemplate(template, "custom-range-input");
    }

    // ShadowDOM construction
    _this.attachShadow({ mode: "open" });
    _this.shadowRoot.appendChild(document.importNode(template.content, true));
    _this._bar = _this.shadowRoot.querySelector(".bar");
    _this._loaded = _this.shadowRoot.querySelector(".loaded");
    _this._passed = _this.shadowRoot.querySelector(".passed");
    _this._handle = _this.shadowRoot.querySelector(".handle");

    _this._setupListeners();
    return _this;
  }

  /**
   * @method connectedCallback
   * called when the element is appended to a document.
   * One of the Lifecycle Callbacks of customElements
   */


  _createClass(CustomRangeInput, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      // NOTE: we need to reassign and release unmanaged props which were set
      // before the element was upgraded.
      this.setAttribute("min", this.min || 0);
      delete this.min;
      this.setAttribute("max", this.max || 100);
      delete this.max;
      this.setAttribute("step", this.step || 0.1);
      delete this.step;
      this.setAttribute("value", this.value || 0);
      delete this.value;
      this.setAttribute("subvalue", this.subvalue || 0);
      delete this.subvalue;
    }
    /**
     * @method disconnectedCallback
     * called when the element is removed from a document.
     * One of the Lifecycle Callbacks of customElements
     */

  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {}
  }, {
    key: "_setupListeners",
    value: function _setupListeners() {
      var _this2 = this;

      var _onmd = function _onmd(e) {
        document.addEventListener("mousemove", _onmm, false);
        document.addEventListener("mouseup", _onmu, false);
        document.addEventListener("touchmove", _onmm, false);
        document.addEventListener("touchend", _onmu, false);
        _onmm(e);
      };
      this.addEventListener("mousedown", _onmd);
      this.addEventListener("touchstart", _onmd);

      var _onmm = function _onmm(e) {
        var x = "touches" in e ? e.touches[0].pageX : e.pageX;
        var rect = _this2._bar.getBoundingClientRect();
        window.console.assert(rect.right - rect.left > 0);

        _this2.value = (x - rect.left) / (rect.right - rect.left) * (_this2.max - _this2.min) + _this2.min;

        /**
         * @event changing
         * dispatched when the value is about to changing
         */
        _this2.dispatchEvent(new CustomEvent("changing"));
        e.preventDefault();
      };

      var _onmu = function _onmu() {
        document.removeEventListener("mousemove", _onmm, false);
        document.removeEventListener("mouseup", _onmu, false);
        document.removeEventListener("touchmove", _onmm, false);
        document.removeEventListener("touchend", _onmu, false);

        /**
         * @event changed
         * dispatched when a series of value update is ended
         */
        _this2.dispatchEvent(new CustomEvent("changed"));
      };
    }

    /*********************************************************************
     * Here are attributes and properties managements below.
     * Synchronizing attrs with props.
     *********************************************************************/

  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(prop, oldValue, newValue) {
      if (oldValue != newValue) {
        this[prop] = Number(newValue);
        this.dispatchEvent(new CustomEvent("change"));
      }
    }

    /**
     * @private
     * @method _value
     * @params v {number|string}
     * Regulates the given value `v` to make it stay between `min` and `max`.
     */

  }, {
    key: "_value",
    value: function _value(v) {
      var k = Math.pow(10, String(this.step).split(".")[1].length);
      return Math.min(Math.max(Math.round(v * k) * 1.0 / k, this.min), this.max);
    }
  }, {
    key: "_percentage",
    value: function _percentage(v) {
      return 100.0 * (v - this.min) / (this.max - this.min);
    }
  }, {
    key: "value",
    get: function get() {
      return Number(this.getAttribute("value") || 0.0);
    },
    set: function set(v) {
      this.setAttribute("value", this._value(v));
      this._passed.style.width = this._handle.style.left = this._percentage(this.value) + "%";
    }
  }, {
    key: "subvalue",
    get: function get() {
      return Number(this.getAttribute("subvalue") || 0.0);
    },
    set: function set(v) {
      this.setAttribute("subvalue", this._value(v));
      this._loaded.style.width = this._percentage(this.subvalue) + "%";
    }
  }, {
    key: "min",
    get: function get() {
      return Number(this.getAttribute("min") || 0.0);
    },
    set: function set(v) {
      this.setAttribute("min", v);
    }
  }, {
    key: "max",
    get: function get() {
      return Number(this.getAttribute("max") || 100.0);
    },
    set: function set(v) {
      this.setAttribute("max", v);
    }
  }, {
    key: "step",
    get: function get() {
      return Number(this.getAttribute("step") || 0.1);
    },
    set: function set(v) {
      this.setAttribute("step", v);
    }
  }, {
    key: "type",
    get: function get() {
      return "range";
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ["value", "subvalue", "min", "max", "step"];
    }
  }]);

  return CustomRangeInput;
}(HTMLElement);

CustomRangeInput.version = __webpack_require__(4).version;
window.CustomRangeInput = CustomRangeInput;

exports.default = CustomRangeInput;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ":host {\n  display: flex;\n  align-items: center;\n  font-size: 20px;\n  max-width: 100%;\n  height: 2em;\n  overflow: hidden;\n  -webkit-tap-highlight-color: transparent; }\n\n.bar, .bar .loaded, .bar .passed {\n  font-size: 0.5em;\n  width: calc(100% - 2em);\n  height: 0.6em;\n  margin: 0 1em;\n  border-radius: 0.6em;\n  border: none;\n  background-color: rgba(255, 255, 255, 0.2);\n  cursor: pointer;\n  position: relative;\n  -webkit-touch-callout: none;\n  /* Disable Android and iOS callouts*/\n  -webkit-user-select: none; }\n  .bar .loaded, .bar .passed {\n    position: absolute;\n    background-color: rgba(255, 255, 255, 0.2);\n    margin: 0;\n    width: 0;\n    height: 100%; }\n  .bar .passed {\n    background-color: rgba(255, 255, 255, 0.7);\n    width: 0; }\n  .bar .handle {\n    display: block;\n    background-color: rgba(255, 255, 255, 0.85);\n    width: 2em;\n    height: 2em;\n    border: 1px solid gray;\n    border-radius: 2em;\n    cursor: inherit;\n    position: relative;\n    transform: translate(-50%, -50%);\n    top: 50%;\n    left: 0; }\n    .bar .handle:hover, .bar .handle:active {\n      background-color: white; }\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {"name":"custom-range-input","version":"0.2.0","license":"BSD-3-Clause","main":"dist/customrangeinput.js","description":"Provides CustomRangeInput custom element in ES2015 modules and in a ES5 script","keywords":["HTML5","ES6 ES2015","WebComponents","CustomElements","Range","Input","Element"],"repository":{"type":"git","url":"git+https://github.com/misttechnologies/custom-range-input.git"},"author":"Shintaro Tanaka <qpshinqp@mist-t.co.jp> (https://github.com/qpSHiNqp)","scripts":{"postinstall":"npm run submodule && npm run build","submodule":"git submodule update --init --recursive","clean":"rm -r ./dist || exit 0","test":"wct --plugin local","build":"npm run lint && webpack","lint":"eslint src/js/","watch":"webpack --watch","serve":"serve ./"},"devDependencies":{"babel-core":"^6.26.0","babel-loader":"^7.1.2","babel-preset-es2015":"^6.24.1","css-loader":"^0.28.7","eslint":"^4.6.1","node-sass":"^4.5.3","sass-loader":"^6.0.6","selenium-standalone":"3.0.1","serve":"^6.0.6","uglify-save-license":"^0.4.1","web-component-tester":"^5.0.0","webpack":"^3.5.6"},"bugs":{"url":"https://github.com/misttechnologies/custom-range-input/issues"},"homepage":"https://github.com/misttechnologies/custom-range-input#readme","dependencies":{}}

/***/ })
/******/ ]);