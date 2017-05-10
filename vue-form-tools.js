(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("vue-form-tools", [], factory);
	else if(typeof exports === 'object')
		exports["vue-form-tools"] = factory();
	else
		root["vue-form-tools"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(24)('wks')
  , uid        = __webpack_require__(25)
  , Symbol     = __webpack_require__(0).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(13)
  , createDesc = __webpack_require__(22);
module.exports = __webpack_require__(6) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("html-form-tools", [], factory);
	else if(typeof exports === 'object')
		exports["html-form-tools"] = factory();
	else
		root["html-form-tools"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return commafy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return uncommafy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mergeCallbacks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return stackFormats; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var commafy = function commafy(num, cursorPos) {
	var value = void 0;
	if (arguments.length < 2) cursorPos = 0;
	switch (typeof num === 'undefined' ? 'undefined' : _typeof(num)) {
		case 'number':
			value = num.toString();
			break;
		case 'symbol':
		case 'string':
			value = num.toString();

			if (!value.match(/^\s*\d+(\.\d*)?\s*$/)) {
				if (arguments.length < 2) return num;
				return { value: num, cursorPos: cursorPos };
			}

			var before = value.substring(0, cursorPos);
			var after = value.substring(cursorPos).trim();
			if (before.trim().length === 0) {
				cursorPos -= before.length;
				before = '';
			}
			value = before + after;
			break;
		default:
			if (arguments.length < 2) return num;
			return { value: num, cursorPos: cursorPos };
	}
	var parts;
	if (value.match(/\./)) {
		parts = value.split(/\./, 2);
	} else {
		parts = [value];
	}
	var res = [];
	var moveCursor = 0;
	for (var i = 0; i < parts[0].length; i++) {
		var pos = parts[0].length - i - 1;
		if (i !== 0 && i % 3 === 0) {
			res.unshift(',');
			if (pos < cursorPos) moveCursor++;
		}
		res.unshift(parts[0].charAt(pos));
	}
	cursorPos += moveCursor;
	parts[0] = res.join('');
	value = parts.join('.');
	if (arguments.length < 2) {
		return value;
	} else {
		return { value: value, cursorPos: cursorPos };
	}
};
var uncommafy = function uncommafy(value, cursorPos) {
	switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
		case 'number':
			return value.toString();
		case 'symbol':
		case 'string':
			var val = value.replace(/,/g, '');
			if (arguments.length >= 2) {
				cursorPos -= value.substring(0, cursorPos).replace(/[^,]/g, '').length;
				return { value: val, cursorPos: cursorPos };
			}
			return val;
		case 'undefined':
			return '';
		default:
			return value.toString();
	}
};

var mergeCallbacks = function mergeCallbacks(src, tgt, name) {
	var skip = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

	Object.keys(src).forEach(function (k) {
		if (skip.indexOf(k) !== -1) {
			if (!(k in tgt)) tgt[k] = src[k];
		} else {
			if (k in tgt) throw new Error('You defined the callback \'' + k + '\', but \'' + name + '\' also defines that callback');
			tgt[k] = src[k];
		}
	});
	return tgt;
};

var stackFormats = function stackFormats(callbacks, name, formatter) {
	var fun = void 0;
	if (name in callbacks && typeof callbacks[name] === 'function') {
		fun = function fun(value, cursorPos) {
			var fmtd = formatter(value, cursorPos);
			return callbacks[name](fmtd.value, fmtd.cursorPos);
		};
	} else {
		fun = formatter;
	}
	return fun;
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultCallbacks = {
	unformat: false,

	validate: false,

	format: false,

	sync: false,

	invalid: false,

	intermediate: false,

	valid: false
};

var events = {
	HTMLInputElement: {
		keypress: function keypress(e) {
			this.debug('keypress: value=\'' + this.input.value + '\'');
			if (this.ignoreKey(e)) return true;
			this.validateAndFormat(e);
		},

		input: function input(e) {
			this.debug('input: value=\'' + this.input.value + '\'');
			this.validateAndFormat(e);
		},

		blur: function blur(e) {
			this.debug('blur: value=\'' + this.input.value + '\'');
			this.sync();
		}
	}
};

var defaultOpts = {
	defaultValue: null,
	ignoreCtrl: true,
	ignoreAlt: true,
	debug: false
};

var predictInput = function predictInput(e) {
	if (!('key' in e)) throw new Error('predictInput called on event of type \'' + e.type + '\', which has no value \'key\'. You probably only want to call this on KeyEvents');
	var beforeSelection = e.target.value.slice(0, e.target.selectionStart);
	var afterSelection = e.target.value.slice(e.target.selectionEnd);
	var res = '' + beforeSelection + e.key + afterSelection;
	return res;
};

var ManagedInput = function () {
	function ManagedInput(input, callbacks, opts) {
		var _this = this;

		_classCallCheck(this, ManagedInput);

		if (typeof input === 'string') {
			this.input = document.getElementById(input);
			if (!this.input) {
				this.input = document.querySelector(input);
				if (!this.input) throw new Error('Failed to find element by id or query selector \'' + input + '\'');
			}
		} else {
			this.input = input;
		}
		if (!(_typeof(this.input) === 'object')) {
			throw Error('Expected an object or the name of an element to manage, but got a \'' + _typeof(this.input) + '\'');
		}
		if (!(this.input instanceof HTMLInputElement)) {
			throw Error('Expected an HTMLInputElement, got a \'' + this.input.constructor.name + '\'');
		}

		if ('format' in callbacks && !('unformat' in callbacks)) {
			console.warn('You defined the format callback but not the unformat callback. That probably won\'t work well.');
		}
		if ('unformat' in callbacks && !('format' in callbacks)) {
			console.warn('You defined the unformat callback but not the format callback. That probably won\'t work well.');
		}
		if (!('format' in callbacks || 'unformat' in callbacks || 'validate' in callbacks)) {
			console.warn('You didn\'t define the format/unformat callbacks nor the validate callback. This module doesn\'t really do anything if you haven\'t defined at least one of those.');
		}

		this.callbacks = {};
		if (typeof callbacks === 'undefined') callbacks = {};
		if ((typeof callbacks === 'undefined' ? 'undefined' : _typeof(callbacks)) !== 'object') throw new Error('callbacks should be an object, not a ' + (typeof callbacks === 'undefined' ? 'undefined' : _typeof(callbacks)));
		Object.keys(defaultCallbacks).forEach(function (cb) {
			_this.callbacks[cb] = cb in callbacks ? callbacks[cb] : defaultCallbacks[cb];
		});
		Object.keys(callbacks).forEach(function (cb) {
			if (!(cb in defaultCallbacks)) {
				console.warn('Unknown callback: \'' + cb + '\'');
			}
		});

		this.opts = {};
		if (typeof opts === 'undefined') opts = {};
		if ((typeof opts === 'undefined' ? 'undefined' : _typeof(opts)) !== 'object') throw new Error('opts should be an object, not a ' + (typeof opts === 'undefined' ? 'undefined' : _typeof(opts)));
		Object.keys(defaultOpts).forEach(function (opt) {
			_this.opts[opt] = opt in opts ? opts[opt] : defaultOpts[opt];
		});
		if (this.opts.defaultValue !== null) {
			this.input.value = this.opts.defaultValue;
		}
		this.validateAndFormat();

		this.inputType = 'HTMLInputElement';
		Object.keys(events[this.inputType]).forEach(function (evnt) {
			_this.input.addEventListener(evnt, function (e) {
				events[_this.inputType][evnt].bind(_this)(e);
			});
		});
	}

	_createClass(ManagedInput, [{
		key: 'unformat',
		value: function unformat(value, cursorPos) {
			if (typeof value === 'undefined') value = this.input.value;
			if (typeof value === 'undefined') {
				value = '';
			} else {
				value = value.toString();
			}
			if (this.callbacks.unformat) return this.callbacks.unformat(value, cursorPos);
			return value;
		}
	}, {
		key: 'unformatted',
		value: function unformatted(value) {
			if (typeof value === 'undefined') value = this.input.value;
			if (typeof value === 'undefined') {
				value = '';
			} else {
				value = value.toString();
			}
			var unf = this.callbacks.unformat ? this.callbacks.unformat(value) : value;
			if ((typeof unf === 'undefined' ? 'undefined' : _typeof(unf)) === 'object') return unf.value;
			return unf;
		}
	}, {
		key: 'format',
		value: function format(value, cursorPos) {
			if (this.callbacks.format) return this.callbacks.format(value, cursorPos);
			return value;
		}
	}, {
		key: 'validate',
		value: function validate(value) {
			if (typeof value === 'undefined') value = this.unformatted(this.input.value);
			if (this.callbacks.validate) return this.callbacks.validate(value);
			return true;
		}
	}, {
		key: 'sync',
		value: function sync(value) {
			if (typeof value === 'undefined') value = this.unformatted(this.input.value);
			try {
				if (this.callbacks.sync && this.validate(value)) {
					return this.callbacks.sync(value);
				}
			} catch (e) {
				this.debug('Refusing to sync invalid value ' + value);
			}
		}
	}, {
		key: 'invalid',
		value: function invalid(unformattedValue, oldValue, newValue) {
			if (this.callbacks.invalid) this.callbacks.invalid(unformattedValue, oldValue, newValue, this.input);
		}
	}, {
		key: 'intermediate',
		value: function intermediate(unformattedValue, oldValue, newValue) {
			if (this.callbacks.intermediate) this.callbacks.intermediate(unformattedValue, oldValue, newValue, this.input);
		}
	}, {
		key: 'valid',
		value: function valid(unformattedValue, oldValue, newValue) {
			if (this.callbacks.valid) this.callbacks.valid(unformattedValue, oldValue, newValue, this.input);
		}
	}, {
		key: 'ignoreKey',
		value: function ignoreKey(evnt) {
			if (!('key' in evnt)) throw new Error('ignoreKey should only be called for KeyEvents. Called on event of type ' + evnt.type);
			if (evnt.key.length > 1 || this.opts.ignoreCtrl && evnt.ctrlKey || this.opts.ignoreAlt && evnt.altKey) {
				this.debug({ ignoring: evnt });
				return true;
			}
			return false;
		}
	}, {
		key: 'validateAndFormat',
		value: function validateAndFormat(e) {

			var oldValue = '';
			var newValue;
			var cursorPos = this.input.selectionStart;
			if (e && e.key) {
				oldValue = this.input.value;
				newValue = predictInput(e);
				cursorPos++;
			} else {
				newValue = this.input.value;
			}
			var unformatted = this.unformat(newValue, cursorPos);
			if ((typeof unformatted === 'undefined' ? 'undefined' : _typeof(unformatted)) !== 'object') unformatted = { value: unformatted, cursorPos: false };
			try {
				if (!this.validate(unformatted.value)) {
					this.debug('\'' + unformatted.value + '\': acceptable intermediate value, formatting delayed');
					this.intermediate(unformatted.value, oldValue, newValue);
				} else {
					var formatted = this.format(unformatted.value, unformatted.cursorPos);
					if ((typeof formatted === 'undefined' ? 'undefined' : _typeof(formatted)) !== 'object') formatted = { value: formatted, cursorPos: false };
					this.debug('\'' + unformatted.value + '\' (cursorPos=' + unformatted.cursorPos + ') is valid, formatted as \'' + formatted.value + '\' (cursorPos=' + formatted.cursorPos + ')');
					if (e) e.preventDefault();
					this.input.value = formatted.value;
					if (formatted.cursorPos) {
						this.input.setSelectionRange(formatted.cursorPos, formatted.cursorPos);
					}
					this.valid(unformatted.value, oldValue, newValue);
				}
			} catch (ex) {
				this.debug('Invalid value \'' + unformatted.value + '\': "' + ex.message + '". We\'ll prevent input if possible.');
				if (e) e.preventDefault();
				if (!e || e.type !== 'keypress') this.invalid(unformatted.value, oldValue, newValue);
				return false;
			}
			return true;
		}
	}, {
		key: 'set',
		value: function set(newValue, force) {
			var oldValue = this.input.value;
			var unformatted = this.unformat(newValue);
			if ((typeof unformatted === 'undefined' ? 'undefined' : _typeof(unformatted)) !== 'object') unformatted = { value: unformatted, cursorPos: false };
			var formatted = newValue;
			var valid = false;
			try {
				if (!this.validate(unformatted.value)) {
					this.debug('set() called with \'' + unformatted.value + '\': acceptable intermediate value set programatically, formatting delayed');
					this.intermediate(unformatted.value, oldValue, newValue);
				} else {
					valid = true;
					formatted = this.format(unformatted.value, unformatted.cursorPos);
					this.debug('set() called with \'' + unformatted.value + '\': valid, formatted as \'' + formatted.value + '\' (cursorPos=' + formatted.cursorPos + ')');
				}
			} catch (ex) {
				if (force) {
					this.debug('set() called with force. Setting invalid value \'' + unformatted.value + '\': "' + ex.message + '". ');
				} else {
					this.debug('set() called without force, ignoring invalid value \'' + unformatted.value + '\': "' + ex.message + '". ');
					return valid;
				}
			}
			if ((typeof formatted === 'undefined' ? 'undefined' : _typeof(formatted)) !== 'object') formatted = { value: formatted, cursorPos: false };
			this.input.value = formatted.value;
			if (formatted.cursorPos) this.input.setSelectionRange(formatted.cursorPos, formatted.cursorPos);
			if (valid) this.valid(unformatted.value, oldValue, newValue);
			return valid;
		}
	}, {
		key: 'debug',
		value: function debug(msg) {
			if (this.opts.debug) console.log(msg);
		}
	}]);

	return ManagedInput;
}();

/* harmony default export */ __webpack_exports__["a"] = (ManagedInput);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ManagedInput__ = __webpack_require__(1);



/* harmony default export */ __webpack_exports__["a"] = (function (input) {
	var callbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	var newOpts = JSON.parse(JSON.stringify(opts));
	if (!('commafy' in newOpts)) newOpts.commafy = true;

	var maxMantissa = false;
	if ('MaxMantissaDigits' in newOpts) {
		maxMantissa = newOpts.MaxMantissaDigits;
		delete newOpts.MaxMantissaDigits;
	}
	var maxDecimal = false;
	if ('MaxDecimalDigits' in newOpts) {
		maxDecimal = newOpts.MaxDecimalDigits;
		delete newOpts.MaxDecimalDigits;
	}
	var fmt = false;
	var ufmt = false;
	if (newOpts.commafy) {
		fmt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* stackFormats */])(callbacks, 'format', function (value, cursorPos) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* commafy */])(value, cursorPos);
		});
		ufmt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* stackFormats */])(callbacks, 'unformat', function (value, cursorPos) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* uncommafy */])(value, cursorPos);
		});
	} else {
		if ('format' in callbacks) fmt = callbacks.format;
		if ('unformat' in callbacks) ufmt = callbacks.unformat;
	}
	delete newOpts.commafy;

	return new __WEBPACK_IMPORTED_MODULE_1__ManagedInput__["a" /* default */](input, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* mergeCallbacks */])(callbacks, {
		validate: function validate(value) {
			if (typeof value === 'undefined') {
				value = '';
			} else {
				value = value.toString();
			}
			if (value.length === 0) return false;

			var parts = value.match(/^(\d*)((\.)(\d*))?$/);
			if (!parts) throw new Error('Must be numeric (with out without a decimal)');
			if (maxMantissa && parts[1] && parts[1].length > maxMantissa) throw new Error('Mantissa part must be no more than \'' + maxMantissa + '\' digits');
			if (maxDecimal && parts[4] && parts[4].length > maxDecimal) throw new Error('Decimal part must be no more than \'' + maxDecimal + '\' digits');
			if (parts[3] && !parts[4]) return false;
			return true;
		},
		format: fmt,
		unformat: ufmt
	}, 'FloatInput', ['format', 'unformat']), newOpts);
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FloatInput__ = __webpack_require__(2);



/* harmony default export */ __webpack_exports__["a"] = (function (input) {
	var callbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	var newOpts = JSON.parse(JSON.stringify(opts));
	if (!('MaxDecimalDigits' in newOpts)) newOpts.MaxDecimalDigits = 2;
	return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__FloatInput__["a" /* default */])(input, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* mergeCallbacks */])(callbacks, {
		unformat: function unformat(value, cursorPos) {
			if (typeof value === 'undefined') {
				value = '';
			} else {
				value = value.toString();
			}
			var unf = value.replace(/^\$+/, '');
			var cp = cursorPos;
			var ext = value.length - unf.length;
			cp -= Math.min(cursorPos, ext);
			return { value: unf, cursorPos: cp };
		},
		format: function format(value, cursorPos) {
			var res = { value: '$' + value, cursorPos: cursorPos === false ? false : cursorPos + 1 };
			return res;
		}
	}, 'DollarInput'), newOpts);
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ManagedInput__ = __webpack_require__(1);



/* harmony default export */ __webpack_exports__["a"] = (function (input) {
	var callbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	var newOpts = JSON.parse(JSON.stringify(opts));
	if (!('commafy' in newOpts)) newOpts.commafy = true;
	var maxDigits = false;
	if ('MaxDigits' in newOpts) {
		maxDigits = newOpts.MaxDigits;
		delete newOpts.MaxDigits;
	}

	var fmt = false;
	var ufmt = false;
	if (newOpts.commafy) {
		fmt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* stackFormats */])(callbacks, 'format', function (value, cursorPos) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["a" /* commafy */])(value, cursorPos);
		});
		ufmt = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["d" /* stackFormats */])(callbacks, 'unformat', function (value, cursorPos) {
			return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["b" /* uncommafy */])(value, cursorPos);
		});
	} else {
		if ('format' in callbacks) fmt = callbacks.format;
		if ('unformat' in callbacks) ufmt = callbacks.unformat;
	}
	delete newOpts.commafy;

	return new __WEBPACK_IMPORTED_MODULE_1__ManagedInput__["a" /* default */](input, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util__["c" /* mergeCallbacks */])(callbacks, {
		validate: function validate(val) {
			if (!val.match(/^[0-9]*$/)) throw new Error('must be a integer');
			if (maxDigits && val.length > maxDigits) throw new Error('Must be at most ' + maxDigits + ' digits');
			return true;
		},
		format: fmt,
		unformat: ufmt
	}, 'IntegerInput'), newOpts);
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ManagedInput__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__IntegerInput__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FloatInput__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DollarInput__ = __webpack_require__(3);






/* harmony default export */ __webpack_exports__["default"] = ({
	ManagedInput: function ManagedInput(input, callbacks, opts) {
		return new __WEBPACK_IMPORTED_MODULE_1__ManagedInput__["a" /* default */](input, callbacks, opts);
	},
	IntegerInput: __WEBPACK_IMPORTED_MODULE_2__IntegerInput__["a" /* default */],
	FloatInput: __WEBPACK_IMPORTED_MODULE_3__FloatInput__["a" /* default */],
	DollarInput: __WEBPACK_IMPORTED_MODULE_4__DollarInput__["a" /* default */],
	util: {
		commafy: __WEBPACK_IMPORTED_MODULE_0__util__["a" /* commafy */],
		uncommafy: __WEBPACK_IMPORTED_MODULE_0__util__["b" /* uncommafy */]
	}
});

/***/ })
/******/ ]);
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return onMounted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return propsSpec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return methods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return watch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return data; });

var valCB = function valCB(value) {
	return value === false || typeof value === 'function';
};
var propsSpec = {
	value: {
		default: false
	},
	syncOnValid: {
		type: Boolean,
		default: true
	},

	opts: {
		type: Object,
		default: function _default() {
			return {};
		}
	},

	unformat: {
		validator: valCB,
		default: false
	},
	validate: {
		validator: valCB,
		default: false
	},
	format: {
		validator: valCB,
		default: false
	}
};
var onMounted = function onMounted(hftFun, tgt, vueComponentInstance) {
	var skipCallbacks = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

	var callbacks = {
		unformat: vueComponentInstance.unformat,
		validate: vueComponentInstance.validate,
		format: vueComponentInstance.format,
		sync: function sync(value) {
			return vueComponentInstance.$emit('sync', value);
		},
		invalid: function invalid(unfmtd, oldVal, newVal, input) {
			return vueComponentInstance.$emit('invalid', unfmtd, oldVal, newVal, input);
		},
		intermediate: function intermediate(unfmtd, oldVal, newVal, input) {
			return vueComponentInstance.$emit('intermediate', unfmtd, oldVal, newVal, input);
		},
		valid: function valid(unfmtd, oldVal, newVal, input) {
			if (vueComponentInstance.syncOnValid) vueComponentInstance.$emit('input', newVal);
			return vueComponentInstance.$emit('valid', unfmtd, oldVal, newVal, input);
		}
	};
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(skipCallbacks), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var cb = _step.value;

			delete callbacks[cb];
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	var hftObj = hftFun(tgt, callbacks, vueComponentInstance.opts);
	if (vueComponentInstance.$props.value) hftObj.set(vueComponentInstance.$props.value);
	vueComponentInstance.hftObj = hftObj;
	return hftObj;
};
var methods = function methods() {
	return {};
};
var watch = function watch() {
	return {
		value: function value(val, oldVal) {
			this.hftObj.set(val);
		}
	};
};
var data = function data() {
	return {
		hftObj: null
	};
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(20)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(5)
  , IE8_DOM_DEFINE = __webpack_require__(44)
  , toPrimitive    = __webpack_require__(59)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(24)('keys')
  , uid    = __webpack_require__(25);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(45)
  , defined = __webpack_require__(11);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12)
  , document = __webpack_require__(0).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(48)
  , $export        = __webpack_require__(42)
  , redefine       = __webpack_require__(54)
  , hide           = __webpack_require__(2)
  , has            = __webpack_require__(7)
  , Iterators      = __webpack_require__(8)
  , $iterCreate    = __webpack_require__(46)
  , setToStringTag = __webpack_require__(23)
  , getPrototypeOf = __webpack_require__(51)
  , ITERATOR       = __webpack_require__(1)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(13).f
  , has = __webpack_require__(7)
  , TAG = __webpack_require__(1)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(9)(
  /* script */
  __webpack_require__(30),
  /* template */
  __webpack_require__(67),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/storage/raid/onsite/offsite/home/acarheden/src/vue/components/vue-form-tools/src/components/vft-dollar-input.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vft-dollar-input.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3ec51348", Component.options)
  } else {
    hotAPI.reload("data-v-3ec51348", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(9)(
  /* script */
  __webpack_require__(31),
  /* template */
  __webpack_require__(70),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/storage/raid/onsite/offsite/home/acarheden/src/vue/components/vue-form-tools/src/components/vft-float-input.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vft-float-input.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-eb1512cc", Component.options)
  } else {
    hotAPI.reload("data-v-eb1512cc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(9)(
  /* script */
  __webpack_require__(32),
  /* template */
  __webpack_require__(68),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/storage/raid/onsite/offsite/home/acarheden/src/vue/components/vue-form-tools/src/components/vft-integer-input.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vft-integer-input.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-48b8ecbc", Component.options)
  } else {
    hotAPI.reload("data-v-48b8ecbc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(71)

var Component = __webpack_require__(9)(
  /* script */
  __webpack_require__(33),
  /* template */
  __webpack_require__(69),
  /* scopeId */
  "data-v-4fdab5dd",
  /* cssModules */
  null
)
Component.options.__file = "/storage/raid/onsite/offsite/home/acarheden/src/vue/components/vue-form-tools/src/components/vft-managed-input.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vft-managed-input.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4fdab5dd", Component.options)
  } else {
    hotAPI.reload("data-v-4fdab5dd", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_html_form_tools__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_html_form_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_html_form_tools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(4);




var htfObj = void 0;
/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'vft-dollar-input',
	props: __WEBPACK_IMPORTED_MODULE_1__common__["a" /* propsSpec */],
	methods: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common__["b" /* methods */])(),
	watch: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common__["c" /* watch */])(),
	data: __WEBPACK_IMPORTED_MODULE_1__common__["d" /* data */],
	mounted: function mounted() {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common__["e" /* onMounted */])(__WEBPACK_IMPORTED_MODULE_0_html_form_tools___default.a.DollarInput, this.$refs.input, this, ['format', 'validate', 'unformat']);
	}
});

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_html_form_tools__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_html_form_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_html_form_tools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(4);




/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'vft-float-input',
	props: __WEBPACK_IMPORTED_MODULE_1__common__["a" /* propsSpec */],
	methods: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common__["b" /* methods */])(),
	watch: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common__["c" /* watch */])(),
	data: __WEBPACK_IMPORTED_MODULE_1__common__["d" /* data */],
	mounted: function mounted() {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common__["e" /* onMounted */])(__WEBPACK_IMPORTED_MODULE_0_html_form_tools___default.a.FloatInput, this.$refs.input, this, ['format', 'validate', 'unformat']);
	}
});

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_html_form_tools__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_html_form_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_html_form_tools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(4);




/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'vft-integer-input',
	props: __WEBPACK_IMPORTED_MODULE_1__common__["a" /* propsSpec */],
	methods: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common__["b" /* methods */])(),
	watch: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common__["c" /* watch */])(),
	data: __WEBPACK_IMPORTED_MODULE_1__common__["d" /* data */],
	mounted: function mounted() {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common__["e" /* onMounted */])(__WEBPACK_IMPORTED_MODULE_0_html_form_tools___default.a.IntegerInput, this.$refs.input, this, ['format', 'validate', 'unformat']);
	}
});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_html_form_tools__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_html_form_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_html_form_tools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(4);




/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'vft-managed-input',
	props: __WEBPACK_IMPORTED_MODULE_1__common__["a" /* propsSpec */],
	methods: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common__["b" /* methods */])(),
	watch: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common__["c" /* watch */])(),
	data: __WEBPACK_IMPORTED_MODULE_1__common__["d" /* data */],
	mounted: function mounted() {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common__["e" /* onMounted */])(__WEBPACK_IMPORTED_MODULE_0_html_form_tools___default.a.ManagedInput, this.$refs.input, this);
	}
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_vft_dollar_input_vue__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_vft_dollar_input_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_vft_dollar_input_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_vft_float_input__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_vft_float_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_vft_float_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_vft_managed_input_vue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_vft_managed_input_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_vft_managed_input_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_vft_integer_input_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_vft_integer_input_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_vft_integer_input_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "vftDollarInput", function() { return __WEBPACK_IMPORTED_MODULE_0__components_vft_dollar_input_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "vftFloatInput", function() { return __WEBPACK_IMPORTED_MODULE_1__components_vft_float_input___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "vftManagedInput", function() { return __WEBPACK_IMPORTED_MODULE_2__components_vft_managed_input_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "vftIntegerInput", function() { return __WEBPACK_IMPORTED_MODULE_3__components_vft_integer_input_vue___default.a; });







/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(36), __esModule: true };

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(64);
__webpack_require__(63);
module.exports = __webpack_require__(61);

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(16)
  , toLength  = __webpack_require__(57)
  , toIndex   = __webpack_require__(56);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(17)
  , TAG = __webpack_require__(1)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(37);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(0)
  , core      = __webpack_require__(10)
  , ctx       = __webpack_require__(41)
  , hide      = __webpack_require__(2)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0).document && document.documentElement;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(20)(function(){
  return Object.defineProperty(__webpack_require__(18)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(17);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(49)
  , descriptor     = __webpack_require__(22)
  , setToStringTag = __webpack_require__(23)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(2)(IteratorPrototype, __webpack_require__(1)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(5)
  , dPs         = __webpack_require__(50)
  , enumBugKeys = __webpack_require__(19)
  , IE_PROTO    = __webpack_require__(14)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(18)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(43).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(13)
  , anObject = __webpack_require__(5)
  , getKeys  = __webpack_require__(53);

module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(7)
  , toObject    = __webpack_require__(58)
  , IE_PROTO    = __webpack_require__(14)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(7)
  , toIObject    = __webpack_require__(16)
  , arrayIndexOf = __webpack_require__(39)(false)
  , IE_PROTO     = __webpack_require__(14)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(52)
  , enumBugKeys = __webpack_require__(19);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(15)
  , defined   = __webpack_require__(11);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(15)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(15)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(11);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(12);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(40)
  , ITERATOR  = __webpack_require__(1)('iterator')
  , Iterators = __webpack_require__(8);
module.exports = __webpack_require__(10).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5)
  , get      = __webpack_require__(60);
module.exports = __webpack_require__(10).getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(38)
  , step             = __webpack_require__(47)
  , Iterators        = __webpack_require__(8)
  , toIObject        = __webpack_require__(16);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(21)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(55)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(21)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(62);
var global        = __webpack_require__(0)
  , hide          = __webpack_require__(2)
  , Iterators     = __webpack_require__(8)
  , TO_STRING_TAG = __webpack_require__(1)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(66)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 66 */
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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('input', {
    ref: "input"
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3ec51348", module.exports)
  }
}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('input', {
    ref: "input"
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-48b8ecbc", module.exports)
  }
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('input', {
    ref: "input"
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4fdab5dd", module.exports)
  }
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('input', {
    ref: "input"
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-eb1512cc", module.exports)
  }
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(65);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(72)("6b07164d", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4fdab5dd\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vft-managed-input.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4fdab5dd\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vft-managed-input.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(73)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 73 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })
/******/ ]);
});