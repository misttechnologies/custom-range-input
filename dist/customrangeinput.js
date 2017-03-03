/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Actually CustomRangeInput extends HTMLInputElement (<input> element) but
 * it seems not to work on current browser implementations.
 * Thus we define CustomRangeInput from scratch, extending "plain" HTMLElement
 */
class CustomRangeInput extends HTMLElement {
  constructor() {
    super();

    const ELEMENTS = __webpack_require__(3);
    const STYLES = __webpack_require__(1);

    // ShadowDOM construction
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = "<style>" + STYLES + "</style>" + ELEMENTS;

    this._loaded = this.shadowRoot.querySelector(".loaded");
    this._passed = this.shadowRoot.querySelector(".passed");
    this._handle = this.shadowRoot.querySelector(".handle");
  }

  /****************************************************************************
   *
   * Here are attributes and properties managements below
   *
   ****************************************************************************/
  static get observedAttributes() {
    return ["value", "subvalue", "min", "max", "step"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }
    switch (name) {
      case "value":
        this.value = newValue;break;
      case "subvalue":
        this.subvalue = newValue;break;
      case "min":
        this.min = newValue;break;
      case "max":
        this.max = newValue;break;
      case "step":
        this.step = newValue;break;
    }
  }
  get value() {
    return this.getAttribute("value") || 0;
  }
  set value(v) {
    this.setAttribute("value", v);
    // TODO Update css properties
    this._passed.style.width = this._handle.style.left = 100 * (this.value - this.min) / (this.max - this.min) + "%";
  }
  get subvalue() {
    return this.getAttribute("subvalue") || 0;
  }
  set subvalue(v) {
    this.setAttribute("subvalue", v);
    // TODO Update css properties
    this._loaded.style.width = 100 * (this.subvalue - this.min) / (this.max - this.min) + "%";
  }
  get min() {
    return this.getAttribute("min") || 0;
  }
  set min(v) {
    this.setAttribute("min", v);
  }
  get max() {
    return this.getAttribute("max") || 100;
  }
  set max(v) {
    this.setAttribute("max", v);
  }
  get step() {
    return this.getAttribute("step") || 0.1;
  }
  set step(v) {
    this.setAttribute("step", v);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CustomRangeInput;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ":host {\n  display: flex;\n  align-items: center;\n  font-size: 20px;\n  max-width: 100%;\n  height: 2em;\n  overflow: hidden; }\n\n.bar, .bar .loaded, .bar .passed {\n  font-size: 0.5em;\n  width: calc(100% - 0.8em);\n  height: 0.6em;\n  margin: 0 calc(1em + 1em);\n  border-radius: 0.6em;\n  border: none;\n  background-color: rgba(255, 255, 255, 0.2);\n  cursor: pointer;\n  position: relative; }\n  .bar .loaded, .bar .passed {\n    position: absolute;\n    background-color: rgba(255, 255, 255, 0.2);\n    margin: 0;\n    width: 0; }\n  .bar .passed {\n    background-color: rgba(255, 255, 255, 0.4);\n    width: 60%; }\n  .bar .handle {\n    display: block;\n    background-color: rgba(255, 255, 255, 0.8);\n    width: 2em;\n    height: 2em;\n    border: 1px solid gray;\n    border-radius: 2em;\n    cursor: inherit;\n    position: relative;\n    transform: translate(-50%, -50%);\n    top: 50%;\n    left: 0; }\n    .bar .handle:hover {\n      background-color: rgba(255, 255, 255, 0.9); }\n", ""]);

// exports


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
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


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "<div class=\"bar\">\n  <div class=\"loaded\"></div>\n  <div class=\"passed\"></div>\n  <div class=\"handle\"></div>\n</div>\n";

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_js_customrangeinput__ = __webpack_require__(0);

/**
 * Actually CustomRangeInput extends HTMLInputElement (<input> element) but
 * it seems not to work on current browser implementations.
 * Thus we define CustomRangeInput from scratch, extending "plain" HTMLElement
 */
customElements.define("custom-range-input", __WEBPACK_IMPORTED_MODULE_0__src_js_customrangeinput__["a" /* default */]);

/***/ })
/******/ ]);