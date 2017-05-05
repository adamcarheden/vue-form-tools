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

(function(b,c){ true?module.exports=c():'function'==typeof define&&define.amd?define('html-form-tools',[],c):'object'==typeof exports?exports['html-form-tools']=c():b['html-form-tools']=c()})(this,function(){return function(a){function b(d){if(c[d])return c[d].exports;var f=c[d]={i:d,l:!1,exports:{}};return a[d].call(f.exports,f,f.exports,b),f.l=!0,f.exports}var c={};return b.m=a,b.c=c,b.i=function(d){return d},b.d=function(d,f,g){b.o(d,f)||Object.defineProperty(d,f,{configurable:!1,enumerable:!0,get:g})},b.n=function(d){var f=d&&d.__esModule?function(){return d['default']}:function(){return d};return b.d(f,'a',f),f},b.o=function(d,f){return Object.prototype.hasOwnProperty.call(d,f)},b.p='',b(b.s=5)}([function(a,b,c){'use strict';c.d(b,'a',function(){return f}),c.d(b,'b',function(){return g}),c.d(b,'c',function(){return h}),c.d(b,'d',function(){return j});var d='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(l){return typeof l}:function(l){return l&&'function'==typeof Symbol&&l.constructor===Symbol&&l!==Symbol.prototype?'symbol':typeof l},f=function(m,n){var o;switch(2>arguments.length&&(n=0),'undefined'==typeof m?'undefined':d(m)){case'number':o=m.toString();break;case'symbol':case'string':if(o=m.toString(),!o.match(/^\s*\d+(\.\d*)?\s*$/))return 2>arguments.length?m:{value:m,cursorPos:n};var p=o.substring(0,n),q=o.substring(n).trim();0===p.trim().length&&(n-=p.length,p=''),o=p+q;break;default:return 2>arguments.length?m:{value:m,cursorPos:n};}var r=o.match(/\./)?o.split(/\./,2):[o];for(var v,s=[],t=0,u=0;u<r[0].length;u++)v=r[0].length-u-1,0!==u&&0==u%3&&(s.unshift(','),v<n&&t++),s.unshift(r[0].charAt(v));return n+=t,r[0]=s.join(''),o=r.join('.'),2>arguments.length?o:{value:o,cursorPos:n}},g=function(m,n){var o=m.replace(/,/g,'');return 2<=arguments.length?(n-=m.substring(0,n).replace(/[^,]/g,'').length,{value:o,cursorPos:n}):o},h=function(m,n,o){var p=3<arguments.length&&void 0!==arguments[3]?arguments[3]:[];return Object.keys(m).forEach(function(q){if(-1!==p.indexOf(q))q in n||(n[q]=m[q]);else{if(q in n)throw new Error('You defined the callback \''+q+'\', but \''+o+'\' also defines that callback');n[q]=m[q]}}),n},j=function(m,n,o){var p;return p=n in m&&'function'==typeof m[n]?function(r,s){var t=o(r,s);return m[n](t.value,t.cursorPos)}:o,p}},function(a,b){'use strict';function d(o,p){if(!(o instanceof p))throw new TypeError('Cannot call a class as a function')}var f='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&'function'==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?'symbol':typeof o},g=function(){function o(p,q){for(var s,r=0;r<q.length;r++)s=q[r],s.enumerable=s.enumerable||!1,s.configurable=!0,'value'in s&&(s.writable=!0),Object.defineProperty(p,s.key,s)}return function(p,q,r){return q&&o(p.prototype,q),r&&o(p,r),p}}(),h={unformat:!1,validate:!1,format:!1,sync:!1,invalid:!1,intermediate:!1,valid:!1},j={HTMLInputElement:{keypress:function(p){return this.debug('keypress: value=\''+this.input.value+'\''),!!this.ignoreKey(p)||void this.validateAndFormat(p)},input:function(p){this.debug('input: value=\''+this.input.value+'\''),this.validateAndFormat(p)},blur:function(){this.debug('blur: value=\''+this.input.value+'\''),this.sync()}}},l={defaultValue:null,ignoreCtrl:!0,ignoreAlt:!0,debug:!1},m=function(p){if(!('key'in p))throw new Error('predictInput called on event of type \''+p.type+'\', which has no value \'key\'. You probably only want to call this on KeyEvents');var q=p.target.value.slice(0,p.target.selectionStart),r=p.target.value.slice(p.target.selectionEnd),s=''+q+p.key+r;return s},n=function(){function o(p,q,r){var s=this;if(d(this,o),'string'!=typeof p)this.input=p;else if(this.input=document.getElementById(p),!this.input&&(this.input=document.querySelector(p),!this.input))throw new Error('Failed to find element by id or query selector \''+p+'\'');if('object'!==f(this.input))throw Error('Expected an object or the name of an element to manage, but got a \''+f(this.input)+'\'');if(!(this.input instanceof HTMLInputElement))throw Error('Expected an HTMLInputElement, got a \''+this.input.constructor.name+'\'');if('format'in q&&!('unformat'in q)&&console.warn('You defined the format callback but not the unformat callback. That probably won\'t work well.'),'unformat'in q&&!('format'in q)&&console.warn('You defined the unformat callback but not the format callback. That probably won\'t work well.'),'format'in q||'unformat'in q||'validate'in q||console.warn('You didn\'t define the format/unformat callbacks nor the validate callback. This module doesn\'t really do anything if you haven\'t defined at least one of those.'),this.callbacks={},'undefined'==typeof q&&(q={}),'object'!==('undefined'==typeof q?'undefined':f(q)))throw new Error('callbacks should be an object, not a '+('undefined'==typeof q?'undefined':f(q)));if(Object.keys(h).forEach(function(t){s.callbacks[t]=t in q?q[t]:h[t]}),Object.keys(q).forEach(function(t){t in h||console.warn('Unknown callback: \''+t+'\'')}),this.opts={},'undefined'==typeof r&&(r={}),'object'!==('undefined'==typeof r?'undefined':f(r)))throw new Error('opts should be an object, not a '+('undefined'==typeof r?'undefined':f(r)));Object.keys(l).forEach(function(t){s.opts[t]=t in r?r[t]:l[t]}),null!==this.opts.defaultValue&&(this.input.value=this.opts.defaultValue),this.validateAndFormat(),this.inputType='HTMLInputElement',Object.keys(j[this.inputType]).forEach(function(t){s.input.addEventListener(t,function(u){j[s.inputType][t].bind(s)(u)})})}return g(o,[{key:'unformat',value:function(q,r){return'undefined'==typeof q&&(q=this.input.value),this.callbacks.unformat?this.callbacks.unformat(q,r):q}},{key:'unformatted',value:function(q){'undefined'==typeof q&&(q=this.input.value);var r=this.callbacks.unformat?this.callbacks.unformat(q):q;return'object'===('undefined'==typeof r?'undefined':f(r))?r.value:r}},{key:'format',value:function(q,r){return this.callbacks.format?this.callbacks.format(q,r):q}},{key:'validate',value:function(q){return'undefined'==typeof q&&(q=this.unformatted(this.input.value)),!this.callbacks.validate||this.callbacks.validate(q)}},{key:'sync',value:function(q){'undefined'==typeof q&&(q=this.unformatted(this.input.value));try{if(this.callbacks.sync&&this.validate(q))return this.callbacks.sync(q)}catch(r){this.debug('Refusing to sync invalid value '+q)}}},{key:'invalid',value:function(q,r,s){this.callbacks.invalid&&this.callbacks.invalid(q,r,s,this.input)}},{key:'intermediate',value:function(q,r,s){this.callbacks.intermediate&&this.callbacks.intermediate(q,r,s,this.input)}},{key:'valid',value:function(q,r,s){this.callbacks.valid&&this.callbacks.valid(q,r,s,this.input)}},{key:'ignoreKey',value:function(q){if(!('key'in q))throw new Error('ignoreKey should only be called for KeyEvents. Called on event of type '+q.type);return(1<q.key.length||this.opts.ignoreCtrl&&q.ctrlKey||this.opts.ignoreAlt&&q.altKey)&&(this.debug({ignoring:q}),!0)}},{key:'validateAndFormat',value:function(q){var s,r='',t=this.input.selectionStart;q&&q.key?(r=this.input.value,s=m(q),t++):s=this.input.value;var u=this.unformat(s,t);'object'!==('undefined'==typeof u?'undefined':f(u))&&(u={value:u,cursorPos:!1});try{if(!this.validate(u.value))this.debug('\''+u.value+'\': acceptable intermediate value, formatting delayed'),this.intermediate(u.value,r,s);else{var v=this.format(u.value,u.cursorPos);'object'!==('undefined'==typeof v?'undefined':f(v))&&(v={value:v,cursorPos:!1}),this.debug('\''+u.value+'\' (cursorPos='+u.cursorPos+') is valid, formatted as \''+v.value+'\' (cursorPos='+v.cursorPos+')'),q&&q.preventDefault(),this.input.value=v.value,v.cursorPos&&this.input.setSelectionRange(v.cursorPos,v.cursorPos),this.valid(u.value,r,s)}}catch(w){return this.debug('Invalid value \''+u.value+'\': "'+w.message+'". We\'ll prevent input if possible.'),q&&q.preventDefault(),q&&'keypress'===q.type||this.invalid(u.value,r,s),!1}return!0}},{key:'set',value:function(q,r){var s=this.input.value,t=this.unformat(q);'object'!==('undefined'==typeof t?'undefined':f(t))&&(t={value:t,cursorPos:!1});var u=q,v=!1;try{this.validate(t.value)?(v=!0,u=this.format(t.value,t.cursorPos),this.debug('set() called with \''+t.value+'\': valid, formatted as \''+u.value+'\' (cursorPos='+u.cursorPos+')')):(this.debug('set() called with \''+t.value+'\': acceptable intermediate value set programatically, formatting delayed'),this.intermediate(t.value,s,q))}catch(w){if(r)this.debug('set() called with force. Setting invalid value \''+t.value+'\': "'+w.message+'". ');else return this.debug('set() called without force, ignoring invalid value \''+t.value+'\': "'+w.message+'". '),v}return'object'!==('undefined'==typeof u?'undefined':f(u))&&(u={value:u,cursorPos:!1}),this.input.value=u.value,u.cursorPos&&this.input.setSelectionRange(u.cursorPos,u.cursorPos),v&&this.valid(t.value,s,q),v}},{key:'debug',value:function(q){this.opts.debug&&console.log(q)}}]),o}();b.a=n},function(a,b,c){'use strict';var d=c(0),f=c(1);b.a=function(g){var h=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},j=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},l=JSON.parse(JSON.stringify(j));'commafy'in l||(l.commafy=!0);var m=!1;'MaxMantissaDigits'in l&&(m=l.MaxMantissaDigits,delete l.MaxMantissaDigits);var n=!1;'MaxDecimalDigits'in l&&(n=l.MaxDecimalDigits,delete l.MaxDecimalDigits);var o=!1,p=!1;return l.commafy?(o=c.i(d.d)(h,'format',function(q,r){return c.i(d.a)(q,r)}),p=c.i(d.d)(h,'unformat',function(q,r){return c.i(d.b)(q,r)})):('format'in h&&(o=h.format),'unformat'in h&&(p=h.unformat)),delete l.commafy,new f.a(g,c.i(d.c)(h,{validate:function(r){if(r=r.toString(),0===r.length)return!1;var s=r.match(/^(\d*)((\.)(\d*))?$/);if(!s)throw new Error('Must be numeric (with out without a decimal)');if(m&&s[1]&&s[1].length>m)throw new Error('Mantissa part must be no more than \''+m+'\' digits');if(n&&s[4]&&s[4].length>n)throw new Error('Decimal part must be no more than \''+n+'\' digits');return s[3]&&!s[4]?!1:!0},format:o,unformat:p},'FloatInput',['format','unformat']),l)}},function(a,b,c){'use strict';var d=c(0),f=c(2);b.a=function(g){var h=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},j=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},l=JSON.parse(JSON.stringify(j));return'MaxDecimalDigits'in l||(l.MaxDecimalDigits=2),c.i(f.a)(g,c.i(d.c)(h,{unformat:function(n,o){n=n.toString();var p=n.replace(/^\$+/,''),q=o,r=n.length-p.length;return q-=Math.min(o,r),{value:p,cursorPos:q}},format:function(n,o){return{value:'$'+n,cursorPos:!1!==o&&o+1}}},'DollarInput'),l)}},function(a,b,c){'use strict';var d=c(0),f=c(1);b.a=function(g){var h=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},j=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},l=JSON.parse(JSON.stringify(j));'commafy'in l||(l.commafy=!0);var m=!1;'MaxDigits'in l&&(m=l.MaxDigits,delete l.MaxDigits);var n=!1,o=!1;return l.commafy?(n=c.i(d.d)(h,'format',function(p,q){return c.i(d.a)(p,q)}),o=c.i(d.d)(h,'unformat',function(p,q){return c.i(d.b)(p,q)})):('format'in h&&(n=h.format),'unformat'in h&&(o=h.unformat)),delete l.commafy,new f.a(g,c.i(d.c)(h,{validate:function(q){if(!q.match(/^[0-9]*$/))throw new Error('must be a integer');if(m&&q.length>m)throw new Error('Must be at most '+m+' digits');return!0},format:n,unformat:o},'IntegerInput'),l)}},function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(0),f=c(1),g=c(4),h=c(2),j=c(3);b['default']={ManagedInput:function(m,n,o){return new f.a(m,n,o)},IntegerInput:g.a,FloatInput:h.a,DollarInput:j.a,util:{commafy:d.a,uncommafy:d.b}}}])});

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