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
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	const defaultCallbacks={unformat:!1,validate:!1,format:!1,sync:!1,invalid:!1,intermediate:!1,valid:!1},events={HTMLInputElement:{keypress:function(a){return this.debug(`keypress: value='${this.input.value}'`),!!this.ignoreKey(a)||void this.validateAndFormat(a)},input:function(a){this.debug(`input: value='${this.input.value}'`),this.validateAndFormat(a)},blur:function(){this.debug(`blur: value='${this.input.value}'`),this.sync()}}};var defaultOpts={defaultValue:null,ignoreCtrl:!0,ignoreAlt:!0,debug:!1},predictInput=function(a){if(!('key'in a))throw new Error(`predictInput called on event of type '${a.type}', which has no value 'key'. You probably only want to call this on KeyEvents`);var b=a.target.value.slice(0,a.target.selectionStart),c=a.target.value.slice(a.target.selectionEnd),d=`${b}${a.key}${c}`;return d};class ManagedInput{constructor(a,b,c){if('string'!=typeof a)this.input=a;else if(this.input=document.getElementById(a),!this.input&&(this.input=document.querySelector(a),!this.input))throw new Error(`Failed to find element by id or query selector '${a}'`);if('object'!=typeof this.input)throw Error(`Expected an object or the name of an element to manage, but got a '${typeof this.input}'`);if(!(this.input instanceof HTMLInputElement))throw Error(`Expected an HTMLInputElement, got a '${this.input.constructor.name}'`);if('format'in b&&!('unformat'in b)&&console.warn(`You defined the format callback but not the unformat callback. That probably won't work well.`),'unformat'in b&&!('format'in b)&&console.warn(`You defined the unformat callback but not the format callback. That probably won't work well.`),'format'in b||'unformat'in b||'validate'in b||console.warn(`You didn't define the format/unformat callbacks nor the validate callback. This module doesn't really do anything if you haven't defined at least one of those.`),this.callbacks={},'undefined'==typeof b&&(b={}),'object'!=typeof b)throw new Error(`callbacks should be an object, not a ${typeof b}`);if(Object.keys(defaultCallbacks).forEach(d=>{this.callbacks[d]=d in b?b[d]:defaultCallbacks[d]}),Object.keys(b).forEach(function(d){d in defaultCallbacks||console.warn(`Unknown callback: '${d}'`)}),this.opts={},'undefined'==typeof c&&(c={}),'object'!=typeof c)throw new Error(`opts should be an object, not a ${typeof c}`);Object.keys(defaultOpts).forEach(d=>{this.opts[d]=d in c?c[d]:defaultOpts[d]}),null!==this.opts.defaultValue&&(this.input.value=this.opts.defaultValue),this.validateAndFormat(),this.inputType=this.input.constructor.name,Object.keys(events[this.inputType]).forEach(d=>{this.input.addEventListener(d,f=>{events[this.inputType][d].bind(this)(f)})})}unformat(a,b){return'undefined'==typeof a&&(a=this.input.value),this.callbacks.unformat?this.callbacks.unformat(a,b):a}unformatted(a){'undefined'==typeof a&&(a=this.input.value);var b=this.callbacks.unformat?this.callbacks.unformat(a):a;return'object'==typeof b?b.value:b}format(a,b){return this.callbacks.format?this.callbacks.format(a,b):a}validate(a){return'undefined'==typeof a&&(a=this.unformatted(this.input.value)),!this.callbacks.validate||this.callbacks.validate(a)}sync(a){'undefined'==typeof a&&(a=this.unformatted(this.input.value));try{if(this.callbacks.sync&&this.validate(a))return this.callbacks.sync(a)}catch(b){this.debug(`Refusing to sync invalid value ${a}`)}}invalid(a,b,c,d){this.callbacks.invalid&&this.callbacks.invalid(a,b,c,d)}intermediate(a,b,c,d){this.callbacks.intermediate&&this.callbacks.intermediate(a,b,c,d)}valid(a,b,c,d){this.callbacks.valid&&this.callbacks.valid(a,b,c,d)}ignoreKey(a){if(!('key'in a))throw new Error(`ignoreKey should only be called for KeyEvents. Called on event of type ${a.type}`);return(1<a.key.length||this.opts.ignoreCtrl&&a.ctrlKey||this.opts.ignoreAlt&&a.altKey)&&(this.debug({ignoring:a}),!0)}validateAndFormat(a){var b,c,d=this.input.selectionStart;a&&a.key?(b=this.input.value,c=predictInput(a),d++):c=this.input.value;var f=this.unformat(c,d);'object'!=typeof f&&(f={value:f,cursorPos:!1});try{if(!this.validate(f.value))this.debug(`'${f.value}': acceptable intermediate value, formatting delayed`),this.intermediate(f.value,b,c,this.input.value);else{var g=this.format(f.value,f.cursorPos);'object'!=typeof g&&(g={value:g,cursorPos:!1}),this.debug(`'${f.value}' (cursorPos=${f.cursorPos}) is valid, formatted as '${g.value}' (cursorPos=${g.cursorPos})`),a&&a.preventDefault(),this.input.value=g.value,g.cursorPos&&this.input.setSelectionRange(g.cursorPos,g.cursorPos),this.valid(f.value,b,c,this.input.value)}}catch(h){return this.debug(`Invalid value '${f.value}': "${h.message}". We'll prevent input if possible.`),a&&a.preventDefault(),a&&'keypress'===a.type||this.invalid(f.value,b,c,this.input.value),!1}return!0}debug(a){this.opts.debug&&console.log(a)}}const commafy=function(a,b){let c;switch(2>arguments.length&&(b=0),typeof a){case'number':c=a.toString();break;case'symbol':case'string':if(c=a.toString(),!c.match(/^\s*\d+(\.\d*)?\s*$/))return 2>arguments.length?a:{value:a,cursorPos:b};let j=c.substring(0,b),l=c.substring(b).trim();0===j.trim().length&&(b-=j.length,j=''),c=j+l;break;default:return 2>arguments.length?a:{value:a,cursorPos:b};}var d=c.match(/\./)?c.split(/\./,2):[c];for(var f=[],g=0,h=0;h<d[0].length;h++){let j=d[0].length-h-1;0!==h&&0==h%3&&(f.unshift(','),j<b&&g++),f.unshift(d[0].charAt(j))}return b+=g,d[0]=f.join(''),c=d.join('.'),2>arguments.length?c:{value:c,cursorPos:b}},uncommafy=function(a,b){var c=a.replace(/,/g,'');return 2<=arguments.length?(b-=a.substring(0,b).replace(/[^,]/g,'').length,{value:c,cursorPos:b}):c},mergeCallbacks=function(a,b,c,d=[]){return Object.keys(a).forEach(function(f){if(-1!==d.indexOf(f))f in b||(b[f]=a[f]);else{if(f in b)throw new Error(`You defined the callback '${f}', but '${c}' also defines that callback`);b[f]=a[f]}}),b},IntegerInput=function(a,b={},c={}){let d=JSON.parse(JSON.stringify(c));'commafy'in d||(d.commafy=!0);var f=!1;'MaxDigits'in d&&(f=d.MaxDigits,delete d.MaxDigits);var g=!1,h=!1;return d.commafy?(g=stackFormats(b,'format',function(j,l){return commafy(j,l)}),h=stackFormats(b,'unformat',function(j,l){return uncommafy(j,l)})):('format'in b&&(g=b.format),'unformat'in b&&(h=b.unformat)),delete d.commafy,new ManagedInput(a,mergeCallbacks(b,{validate:function(j){if(!j.match(/^[0-9]*$/))throw new Error('must be a integer');if(f&&j.length>f)throw new Error(`Must be at most ${f} digits`);return!0},format:g,unformat:h},'IntegerInput'),d)},FloatInput=function(a,b={},c={}){let d=JSON.parse(JSON.stringify(c));'commafy'in d||(d.commafy=!0);var f=!1;'MaxMantissaDigits'in d&&(f=d.MaxMantissaDigits,delete d.MaxMantissaDigits);var g=!1;'MaxDecimalDigits'in d&&(g=d.MaxDecimalDigits,delete d.MaxDecimalDigits);var h=!1,j=!1;return d.commafy?(h=stackFormats(b,'format',function(l,m){return commafy(l,m)}),j=stackFormats(b,'unformat',function(l,m){return uncommafy(l,m)})):('format'in b&&(h=b.format),'unformat'in b&&(j=b.unformat)),delete d.commafy,new ManagedInput(a,mergeCallbacks(b,{validate:function(l){if(l=l.toString(),0===l.length)return!1;var m=l.match(/^(\d*)((\.)(\d*))?$/);if(!m)throw new Error('Must be numeric (with out without a decimal)');if(f&&m[1]&&m[1].length>f)throw new Error(`Mantissa part must be no more than '${f}' digits`);if(g&&m[4]&&m[4].length>g)throw new Error(`Decimal part must be no more than '${g}' digits`);return m[3]&&!m[4]?!1:!0},format:h,unformat:j},'FloatInput',['format','unformat']),d)},stackFormats=function(a,b,c){let d;return d=b in a&&'function'==typeof a[b]?function(f,g){var h=c(f,g);return a[b](h.value,h.cursorPos)}:c,d},DollarInput=function(a,b={},c={}){let d=JSON.parse(JSON.stringify(c));return'MaxDecimalDigits'in d||(d.MaxDecimalDigits=2),FloatInput(a,mergeCallbacks(b,{unformat:function(f,g){f=f.toString();var h=f.replace(/^\$+/,''),j=g,l=f.length-h.length;return j-=Math.min(g,l),{value:h,cursorPos:j}},format:function(f,g){return{value:'$'+f,cursorPos:!1!==g&&g+1}}},'DollarInput'),d)};module.exports={ManagedInput:function(a,b,c){return new ManagedInput(a,b,c)},IntegerInput:IntegerInput,FloatInput:FloatInput,DollarInput:DollarInput,util:{commafy:commafy,uncommafy:uncommafy}};

/***/ }
/******/ ])
});
;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return onMounted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return propsSpec; });
var valCB = function valCB(value) {
	return value === false || typeof value === 'function';
};
var propsSpec = {
	syncOnValid: {
		type: Boolean,
		default: true
	},
	value: {
		default: ''
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
	},
	sync: {
		validator: valCB,
		default: false
	},
	invalid: {
		validator: valCB,
		default: false
	},
	intermediate: {
		validator: valCB,
		default: false
	},
	valid: {
		validator: valCB,
		default: false
	},

	opts: {
		type: Object,
		default: function _default() {
			return {};
		}
	}
};
var onMounted = function onMounted(hftFun, tgt, vueComponentInstance) {
	var skipCallbacks = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

	var onValid = vueComponentInstance.valid;
	if (vueComponentInstance.syncOnValid) {
		if (vueComponentInstance.valid) {
			onValid = function onValid(value) {
				vueComponentInstance.valid(value);
				vueComponentInstance.$emit('input', value);
			};
		} else {
			onValid = function onValid(value) {
				vueComponentInstance.$emit('input', value);
			};
		}
	}
	var callbacks = {};
	if (skipCallbacks.indexOf('unformat') < 0) callbacks.unformat = vueComponentInstance.unformat;
	if (skipCallbacks.indexOf('validate') < 0) callbacks.validate = vueComponentInstance.validate;
	if (skipCallbacks.indexOf('format') < 0) callbacks.format = vueComponentInstance.format;
	if (skipCallbacks.indexOf('sync') < 0) callbacks.sync = vueComponentInstance.sync;
	if (skipCallbacks.indexOf('invalid') < 0) callbacks.invalid = vueComponentInstance.invalid;
	if (skipCallbacks.indexOf('intermediate') < 0) callbacks.intermediate = vueComponentInstance.intermediate;
	if (skipCallbacks.indexOf('valid') < 0) callbacks.valid = onValid;
	hftFun(tgt, callbacks, vueComponentInstance.opts);
	console.log({ hftFun: hftFun });
};


/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(14),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/d1/src/vue/components/vue-form-tools/src/components/vft-dollar-input.vue"
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(17),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/d1/src/vue/components/vue-form-tools/src/components/vft-float-input.vue"
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(18)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(16),
  /* scopeId */
  "data-v-4c9e90ea",
  /* cssModules */
  null
)
Component.options.__file = "/d1/src/vue/components/vue-form-tools/src/components/vft-input.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vft-input.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4c9e90ea", Component.options)
  } else {
    hotAPI.reload("data-v-4c9e90ea", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(15),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/d1/src/vue/components/vue-form-tools/src/components/vft-integer-input.vue"
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_html_form_tools__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_html_form_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_html_form_tools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'vft-dollar-input',
	props: __WEBPACK_IMPORTED_MODULE_1__common__["a" /* propsSpec */],
	mounted: function mounted() {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common__["b" /* onMounted */])(__WEBPACK_IMPORTED_MODULE_0_html_form_tools___default.a.DollarInput, this.$refs.input, this, ['format', 'validate', 'unformat']);
	}
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_html_form_tools__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_html_form_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_html_form_tools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'vft-float-input',
	props: __WEBPACK_IMPORTED_MODULE_1__common__["a" /* propsSpec */],
	mounted: function mounted() {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common__["b" /* onMounted */])(__WEBPACK_IMPORTED_MODULE_0_html_form_tools___default.a.FloatInput, this.$refs.input, this, ['format', 'validate', 'unformat']);
	}
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_html_form_tools__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_html_form_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_html_form_tools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'vft-input',
	props: __WEBPACK_IMPORTED_MODULE_1__common__["a" /* propsSpec */],
	mounted: function mounted() {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common__["b" /* onMounted */])(__WEBPACK_IMPORTED_MODULE_0_html_form_tools___default.a.ManagedInput, this.$refs.input, this);
	}
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_html_form_tools__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_html_form_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_html_form_tools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'vft-integer-input',
	props: __WEBPACK_IMPORTED_MODULE_1__common__["a" /* propsSpec */],
	mounted: function mounted() {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common__["b" /* onMounted */])(__WEBPACK_IMPORTED_MODULE_0_html_form_tools___default.a.IntegerInput, this.$refs.input, this, ['format', 'validate', 'unformat']);
	}
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_vft_dollar_input_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_vft_dollar_input_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_vft_dollar_input_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_vft_float_input__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_vft_float_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_vft_float_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_vft_input_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_vft_input_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_vft_input_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_vft_integer_input_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_vft_integer_input_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_vft_integer_input_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "vftDollarInput", function() { return __WEBPACK_IMPORTED_MODULE_0__components_vft_dollar_input_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "vftFloatInput", function() { return __WEBPACK_IMPORTED_MODULE_1__components_vft_float_input___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "vftInput", function() { return __WEBPACK_IMPORTED_MODULE_2__components_vft_input_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "vftIntegerInput", function() { return __WEBPACK_IMPORTED_MODULE_3__components_vft_integer_input_vue___default.a; });







/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('input', {
    ref: "input",
    domProps: {
      "value": _vm.value
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3ec51348", module.exports)
  }
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('input', {
    ref: "input",
    domProps: {
      "value": _vm.value
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-48b8ecbc", module.exports)
  }
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('input', {
    ref: "input",
    domProps: {
      "value": _vm.value
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4c9e90ea", module.exports)
  }
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('input', {
    ref: "input",
    domProps: {
      "value": _vm.value
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-eb1512cc", module.exports)
  }
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(19)("39c8060b", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4c9e90ea\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vft-input.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-4c9e90ea\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vft-input.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 19 */
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

var listToStyles = __webpack_require__(20)

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
/* 20 */
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