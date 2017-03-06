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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = CustomRangeInputGenerator;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function CustomRangeInputGenerator() {
  /**
   * Actually CustomRangeInput extends HTMLInputElement (<input> element) but
   * it seems not to work on current browser implementations.
   * Thus we define CustomRangeInput from scratch, extending "plain" HTMLElement
   */
  return function (_HTMLElement) {
    _inherits(CustomRangeInput, _HTMLElement);

    function CustomRangeInput() {
      _classCallCheck(this, CustomRangeInput);

      var _this = _possibleConstructorReturn(this, (CustomRangeInput.__proto__ || Object.getPrototypeOf(CustomRangeInput)).call(this));

      var STYLES = __webpack_require__(1);

      // ShadowDOM construction
      _this.attachShadow({ mode: "open" });
      _this.shadowRoot.innerHTML = "\n      <style>" + STYLES + "</style>\n      <div class=\"bar\">\n        <div class=\"loaded\"></div>\n        <div class=\"passed\"></div>\n        <div class=\"handle\"></div>\n      </div>\n      ";

      _this._setup();
      return _this;
    }

    _createClass(CustomRangeInput, [{
      key: "_setup",
      value: function _setup() {
        this._bar = this.shadowRoot.querySelector(".bar");
        this._loaded = this.shadowRoot.querySelector(".loaded");
        this._passed = this.shadowRoot.querySelector(".passed");
        this._handle = this.shadowRoot.querySelector(".handle");
      }

      /****************************************************************************
       *
       * Here are attributes and properties managements below
       *
       ****************************************************************************/

    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, oldValue, newValue) {
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
    }, {
      key: "_value",
      value: function _value(v) {
        return Math.min(Math.max(v, this.min), this.max);
      }
    }, {
      key: "value",
      get: function get() {
        return this.getAttribute("value") || 0.0;
      },
      set: function set(v) {
        this.setAttribute("value", this._value(v));
        this._passed.style.width = this._handle.style.left = 100.0 * (this.value - this.min) / (this.max - this.min) + "%";
      }
    }, {
      key: "subvalue",
      get: function get() {
        return this.getAttribute("subvalue") || 0.0;
      },
      set: function set(v) {
        this.setAttribute("subvalue", this._value(v));
        this._loaded.style.width = 100.0 * (this.subvalue - this.min) / (this.max - this.min) + "%";
      }
    }, {
      key: "min",
      get: function get() {
        return this.getAttribute("min") || 0.0;
      },
      set: function set(v) {
        this.setAttribute("min", v);
      }
    }, {
      key: "max",
      get: function get() {
        return this.getAttribute("max") || 100.0;
      },
      set: function set(v) {
        this.setAttribute("max", v);
      }
    }, {
      key: "step",
      get: function get() {
        return this.getAttribute("step") || 0.1;
      },
      set: function set(v) {
        this.setAttribute("step", v);
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ["value", "subvalue", "min", "max", "step"];
      }
    }]);

    return CustomRangeInput;
  }(HTMLElement);
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ":host {\n  display: flex;\n  align-items: center;\n  font-size: 20px;\n  max-width: 100%;\n  height: 2em;\n  overflow: hidden; }\n\n.bar, .bar .loaded, .bar .passed {\n  font-size: 0.5em;\n  width: calc(100% - 0.8em);\n  height: 0.6em;\n  margin: 0 calc(1em + 1em);\n  border-radius: 0.6em;\n  border: none;\n  background-color: rgba(255, 255, 255, 0.2);\n  cursor: pointer;\n  position: relative; }\n  .bar .loaded, .bar .passed {\n    position: absolute;\n    background-color: rgba(255, 255, 255, 0.2);\n    margin: 0;\n    width: 0;\n    height: 100%; }\n  .bar .passed {\n    background-color: rgba(255, 255, 255, 0.4);\n    width: 60%; }\n  .bar .handle {\n    display: block;\n    background-color: rgba(255, 255, 255, 0.85);\n    width: 2em;\n    height: 2em;\n    border: 1px solid gray;\n    border-radius: 2em;\n    cursor: inherit;\n    position: relative;\n    transform: translate(-50%, -50%);\n    top: 50%;\n    left: 0; }\n    .bar .handle:hover {\n      background-color: white; }\n", ""]);

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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _customrangeinput = __webpack_require__(0);

var _customrangeinput2 = _interopRequireDefault(_customrangeinput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Actually CustomRangeInput extends HTMLInputElement (<input> element) but
 * it seems not to work on current browser implementations.
 * Thus we define CustomRangeInput from scratch, extending "plain" HTMLElement
 */
if ("object" === (typeof customElements === "undefined" ? "undefined" : _typeof(customElements))) {
  customElements.define("custom-range-input", (0, _customrangeinput2.default)());
} else {
  // Expecting a polyfill to be loaded
  window.addEventListener('WebComponentsReady', function () {
    customElements.define("custom-range-input", (0, _customrangeinput2.default)());
  });
}

/***/ })
/******/ ]);