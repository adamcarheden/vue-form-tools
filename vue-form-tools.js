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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function(b,c){ true?module.exports=c():'function'==typeof define&&define.amd?define('html-form-tools',[],c):'object'==typeof exports?exports['html-form-tools']=c():b['html-form-tools']=c()})(this,function(){return function(a){function b(d){if(c[d])return c[d].exports;var f=c[d]={i:d,l:!1,exports:{}};return a[d].call(f.exports,f,f.exports,b),f.l=!0,f.exports}var c={};return b.m=a,b.c=c,b.i=function(d){return d},b.d=function(d,f,g){b.o(d,f)||Object.defineProperty(d,f,{configurable:!1,enumerable:!0,get:g})},b.n=function(d){var f=d&&d.__esModule?function(){return d['default']}:function(){return d};return b.d(f,'a',f),f},b.o=function(d,f){return Object.prototype.hasOwnProperty.call(d,f)},b.p='',b(b.s=5)}([function(a,b){'use strict';b.a=function(j,l){let m;switch(2>arguments.length&&(l=0),typeof j){case'number':m=j.toString();break;case'symbol':case'string':if(m=j.toString(),!m.match(/^\s*\d+(\.\d*)?\s*$/))return 2>arguments.length?j:{value:j,cursorPos:l};let r=m.substring(0,l),s=m.substring(l).trim();0===r.trim().length&&(l-=r.length,r=''),m=r+s;break;default:return 2>arguments.length?j:{value:j,cursorPos:l};}var n=m.match(/\./)?m.split(/\./,2):[m];for(var o=[],p=0,q=0;q<n[0].length;q++){let r=n[0].length-q-1;0!==q&&0==q%3&&(o.unshift(','),r<l&&p++),o.unshift(n[0].charAt(r))}return l+=p,n[0]=o.join(''),m=n.join('.'),2>arguments.length?m:{value:m,cursorPos:l}};b.b=function(j,l){var m=j.replace(/,/g,'');return 2<=arguments.length?(l-=j.substring(0,l).replace(/[^,]/g,'').length,{value:m,cursorPos:l}):m};b.c=function(j,l,m,n=[]){return Object.keys(j).forEach(function(o){if(-1!==n.indexOf(o))o in l||(l[o]=j[o]);else{if(o in l)throw new Error(`You defined the callback '${o}', but '${m}' also defines that callback`);l[o]=j[o]}}),l};b.d=function(j,l,m){let n;return n=l in j&&'function'==typeof j[l]?function(o,p){var q=m(o,p);return j[l](q.value,q.cursorPos)}:m,n}},function(a,b){'use strict';const d={unformat:!1,validate:!1,format:!1,sync:!1,invalid:!1,intermediate:!1,valid:!1},f={HTMLInputElement:{keypress:function(l){return this.debug(`keypress: value='${this.input.value}'`),!!this.ignoreKey(l)||void this.validateAndFormat(l)},input:function(l){this.debug(`input: value='${this.input.value}'`),this.validateAndFormat(l)},blur:function(){this.debug(`blur: value='${this.input.value}'`),this.sync()}}};var g={defaultValue:null,ignoreCtrl:!0,ignoreAlt:!0,debug:!1},h=function(l){if(!('key'in l))throw new Error(`predictInput called on event of type '${l.type}', which has no value 'key'. You probably only want to call this on KeyEvents`);var m=l.target.value.slice(0,l.target.selectionStart),n=l.target.value.slice(l.target.selectionEnd),o=`${m}${l.key}${n}`;return o};b.a=class{constructor(l,m,n){if('string'!=typeof l)this.input=l;else if(this.input=document.getElementById(l),!this.input&&(this.input=document.querySelector(l),!this.input))throw new Error(`Failed to find element by id or query selector '${l}'`);if('object'!=typeof this.input)throw Error(`Expected an object or the name of an element to manage, but got a '${typeof this.input}'`);if(!(this.input instanceof HTMLInputElement))throw Error(`Expected an HTMLInputElement, got a '${this.input.constructor.name}'`);if('format'in m&&!('unformat'in m)&&console.warn(`You defined the format callback but not the unformat callback. That probably won't work well.`),'unformat'in m&&!('format'in m)&&console.warn(`You defined the unformat callback but not the format callback. That probably won't work well.`),'format'in m||'unformat'in m||'validate'in m||console.warn(`You didn't define the format/unformat callbacks nor the validate callback. This module doesn't really do anything if you haven't defined at least one of those.`),this.callbacks={},'undefined'==typeof m&&(m={}),'object'!=typeof m)throw new Error(`callbacks should be an object, not a ${typeof m}`);if(Object.keys(d).forEach((o)=>{this.callbacks[o]=o in m?m[o]:d[o]}),Object.keys(m).forEach(function(o){o in d||console.warn(`Unknown callback: '${o}'`)}),this.opts={},'undefined'==typeof n&&(n={}),'object'!=typeof n)throw new Error(`opts should be an object, not a ${typeof n}`);Object.keys(g).forEach((o)=>{this.opts[o]=o in n?n[o]:g[o]}),null!==this.opts.defaultValue&&(this.input.value=this.opts.defaultValue),this.validateAndFormat(),this.inputType=this.input.constructor.name,Object.keys(f[this.inputType]).forEach((o)=>{this.input.addEventListener(o,(p)=>{f[this.inputType][o].bind(this)(p)})})}set(l){this.input.value=l,this.validateAndFormat()}unformat(l,m){return'undefined'==typeof l&&(l=this.input.value),this.callbacks.unformat?this.callbacks.unformat(l,m):l}unformatted(l){'undefined'==typeof l&&(l=this.input.value);var m=this.callbacks.unformat?this.callbacks.unformat(l):l;return'object'==typeof m?m.value:m}format(l,m){return this.callbacks.format?this.callbacks.format(l,m):l}validate(l){return'undefined'==typeof l&&(l=this.unformatted(this.input.value)),!this.callbacks.validate||this.callbacks.validate(l)}sync(l){'undefined'==typeof l&&(l=this.unformatted(this.input.value));try{if(this.callbacks.sync&&this.validate(l))return this.callbacks.sync(l)}catch(m){this.debug(`Refusing to sync invalid value ${l}`)}}invalid(l,m,n){this.callbacks.invalid&&this.callbacks.invalid(l,m,n,this.input)}intermediate(l,m,n){this.callbacks.intermediate&&this.callbacks.intermediate(l,m,n,this.input)}valid(l,m,n){this.callbacks.valid&&this.callbacks.valid(l,m,n,this.input)}ignoreKey(l){if(!('key'in l))throw new Error(`ignoreKey should only be called for KeyEvents. Called on event of type ${l.type}`);return(1<l.key.length||this.opts.ignoreCtrl&&l.ctrlKey||this.opts.ignoreAlt&&l.altKey)&&(this.debug({ignoring:l}),!0)}validateAndFormat(l){var m='',n,o=this.input.selectionStart;l&&l.key?(m=this.input.value,n=h(l),o++):n=this.input.value;var p=this.unformat(n,o);'object'!=typeof p&&(p={value:p,cursorPos:!1});try{if(!this.validate(p.value))this.debug(`'${p.value}': acceptable intermediate value, formatting delayed`),this.intermediate(p.value,m,n);else{var q=this.format(p.value,p.cursorPos);'object'!=typeof q&&(q={value:q,cursorPos:!1}),this.debug(`'${p.value}' (cursorPos=${p.cursorPos}) is valid, formatted as '${q.value}' (cursorPos=${q.cursorPos})`),l&&l.preventDefault(),this.input.value=q.value,q.cursorPos&&this.input.setSelectionRange(q.cursorPos,q.cursorPos),this.valid(p.value,m,n)}}catch(r){return this.debug(`Invalid value '${p.value}': "${r.message}". We'll prevent input if possible.`),l&&l.preventDefault(),l&&'keypress'===l.type||this.invalid(p.value,m,n),!1}return!0}debug(l){this.opts.debug&&console.log(l)}}},function(a,b,c){'use strict';var d=c(0),f=c(1);b.a=function(g,h={},j={}){let l=JSON.parse(JSON.stringify(j));'commafy'in l||(l.commafy=!0);var m=!1;'MaxMantissaDigits'in l&&(m=l.MaxMantissaDigits,delete l.MaxMantissaDigits);var n=!1;'MaxDecimalDigits'in l&&(n=l.MaxDecimalDigits,delete l.MaxDecimalDigits);var o=!1,p=!1;return l.commafy?(o=c.i(d.d)(h,'format',function(q,r){return c.i(d.a)(q,r)}),p=c.i(d.d)(h,'unformat',function(q,r){return c.i(d.b)(q,r)})):('format'in h&&(o=h.format),'unformat'in h&&(p=h.unformat)),delete l.commafy,new f.a(g,c.i(d.c)(h,{validate:function(q){if(q=q.toString(),0===q.length)return!1;var r=q.match(/^(\d*)((\.)(\d*))?$/);if(!r)throw new Error('Must be numeric (with out without a decimal)');if(m&&r[1]&&r[1].length>m)throw new Error(`Mantissa part must be no more than '${m}' digits`);if(n&&r[4]&&r[4].length>n)throw new Error(`Decimal part must be no more than '${n}' digits`);return r[3]&&!r[4]?!1:!0},format:o,unformat:p},'FloatInput',['format','unformat']),l)}},function(a,b,c){'use strict';var d=c(0),f=c(2);b.a=function(g,h={},j={}){let l=JSON.parse(JSON.stringify(j));return'MaxDecimalDigits'in l||(l.MaxDecimalDigits=2),c.i(f.a)(g,c.i(d.c)(h,{unformat:function(m,n){m=m.toString();var o=m.replace(/^\$+/,''),p=n,q=m.length-o.length;return p-=Math.min(n,q),{value:o,cursorPos:p}},format:function(m,n){return{value:'$'+m,cursorPos:!1!==n&&n+1}}},'DollarInput'),l)}},function(a,b,c){'use strict';var d=c(0),f=c(1);b.a=function(g,h={},j={}){let l=JSON.parse(JSON.stringify(j));'commafy'in l||(l.commafy=!0);var m=!1;'MaxDigits'in l&&(m=l.MaxDigits,delete l.MaxDigits);var n=!1,o=!1;return l.commafy?(n=c.i(d.d)(h,'format',function(p,q){return c.i(d.a)(p,q)}),o=c.i(d.d)(h,'unformat',function(p,q){return c.i(d.b)(p,q)})):('format'in h&&(n=h.format),'unformat'in h&&(o=h.unformat)),delete l.commafy,new f.a(g,c.i(d.c)(h,{validate:function(p){if(!p.match(/^[0-9]*$/))throw new Error('must be a integer');if(m&&p.length>m)throw new Error(`Must be at most ${m} digits`);return!0},format:n,unformat:o},'IntegerInput'),l)}},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(0),f=c(1),g=c(4),h=c(2),j=c(3);b['default']={ManagedInput:function(l,m,n){return new f.a(l,m,n)},IntegerInput:g.a,FloatInput:h.a,DollarInput:j.a,util:{commafy:d.a,uncommafy:d.b}}}])});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
		default: ''
	},
	syncOnValid: {
		type: Boolean,
		default: true
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
		var doSync = void 0;
		if (vueComponentInstance.valid) {
			doSync = function doSync(value) {
				vueComponentInstance.valid(value);
			};
		} else {
			doSync = function doSync(value) {
				return;
			};
		}
		onValid = function onValid(value) {
			doSync(value);
			vueComponentInstance.$emit('input', value);
		};
	}
	var callbacks = {};
	if (skipCallbacks.indexOf('unformat') < 0) callbacks.unformat = vueComponentInstance.unformat;
	if (skipCallbacks.indexOf('validate') < 0) callbacks.validate = vueComponentInstance.validate;
	if (skipCallbacks.indexOf('format') < 0) callbacks.format = vueComponentInstance.format;
	if (skipCallbacks.indexOf('sync') < 0) callbacks.sync = vueComponentInstance.sync;
	if (skipCallbacks.indexOf('invalid') < 0) callbacks.invalid = vueComponentInstance.invalid;
	if (skipCallbacks.indexOf('intermediate') < 0) callbacks.intermediate = vueComponentInstance.intermediate;
	if (skipCallbacks.indexOf('valid') < 0) callbacks.valid = onValid;
	var hftObj = hftFun(tgt, callbacks, vueComponentInstance.opts);
	hftObj.set(vueComponentInstance.$props.value);
	vueComponentInstance.hftObj = hftObj;
	return hftObj;
};
var methods = function methods() {
	return {
		update: function update(value) {
			this.hftObj.set(value);
		}
	};
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(15),
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(18)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(16),
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_html_form_tools__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_html_form_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_html_form_tools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(1);




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
	methods: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common__["b" /* methods */])(),
	watch: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common__["c" /* watch */])(),
	data: __WEBPACK_IMPORTED_MODULE_1__common__["d" /* data */],
	mounted: function mounted() {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common__["e" /* onMounted */])(__WEBPACK_IMPORTED_MODULE_0_html_form_tools___default.a.FloatInput, this.$refs.input, this, ['format', 'validate', 'unformat']);
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_html_form_tools__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_html_form_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_html_form_tools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'vft-input',
	props: __WEBPACK_IMPORTED_MODULE_1__common__["a" /* propsSpec */],
	methods: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common__["b" /* methods */])(),
	watch: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common__["c" /* watch */])(),
	data: __WEBPACK_IMPORTED_MODULE_1__common__["d" /* data */],
	mounted: function mounted() {
		__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common__["e" /* onMounted */])(__WEBPACK_IMPORTED_MODULE_0_html_form_tools___default.a.ManagedInput, this.$refs.input, this);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_vft_managed_input_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_vft_managed_input_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_vft_managed_input_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_vft_integer_input_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_vft_integer_input_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_vft_integer_input_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "vftDollarInput", function() { return __WEBPACK_IMPORTED_MODULE_0__components_vft_dollar_input_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "vftFloatInput", function() { return __WEBPACK_IMPORTED_MODULE_1__components_vft_float_input___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "vftManagedInput", function() { return __WEBPACK_IMPORTED_MODULE_2__components_vft_managed_input_vue___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "vftIntegerInput", function() { return __WEBPACK_IMPORTED_MODULE_3__components_vft_integer_input_vue___default.a; });







/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

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
    ref: "input"
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
    ref: "input"
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('input', {
    ref: "input"
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
var update = __webpack_require__(19)("6b07164d", content, false);
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