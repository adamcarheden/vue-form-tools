let valCB = function(value) { return value === false || typeof value === 'function' }
let propsSpec = {
	// This makes us work with v-model as described here:
	// https://vuejs.org/v2/guide/components.html#Form-Input-Components-using-Custom-Events
	syncOnValid: {
		type: Boolean,
		default: true,
	},
	value: {
		default: '',
	},
	// html-form-tools callbacks
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
	// html-form-tools options
	opts: {
		type: Object,
		default: function() { return {} }
	}
}
let onMounted = function(hftFun, tgt, vueComponentInstance, skipCallbacks = []) {
	let onValid = vueComponentInstance.valid
	if (vueComponentInstance.syncOnValid) {
		if (vueComponentInstance.valid) {
			onValid = (value) => { 
				vueComponentInstance.valid(value)
				vueComponentInstance.$emit('input', value)
			}
		} else {
			onValid = (value) => { 
				vueComponentInstance.$emit('input', value)
			}
		}
	}
	let callbacks = {}
	if (skipCallbacks.indexOf('unformat') < 0) callbacks.unformat = vueComponentInstance.unformat
	if (skipCallbacks.indexOf('validate') < 0) callbacks.validate = vueComponentInstance.validate
	if (skipCallbacks.indexOf('format') < 0) callbacks.format = vueComponentInstance.format
	if (skipCallbacks.indexOf('sync') < 0) callbacks.sync = vueComponentInstance.sync
	if (skipCallbacks.indexOf('invalid') < 0) callbacks.invalid = vueComponentInstance.invalid
	if (skipCallbacks.indexOf('intermediate') < 0) callbacks.intermediate = vueComponentInstance.intermediate
	if (skipCallbacks.indexOf('valid') < 0) callbacks.valid = onValid
	let hftObj = hftFun(tgt, callbacks, vueComponentInstance.opts)
	hftObj.set(vueComponentInstance.$props.value)
	vueComponentInstance.hftObj = hftObj
	return hftObj
}
let methods = function() {
	return {
		update: function(value) { this.hftObj.set(value) }
	}
}
let watch = function() {
	return {
		value: function(val, oldVal) { 
			this.hftObj.set(val) 
		}
	}
}
let data = function() {
	return {
		hftObj: null
	}
}
export {
	onMounted,
	propsSpec,
	methods,
	watch,
	data,
}
