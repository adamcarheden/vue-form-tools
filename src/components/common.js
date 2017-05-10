let valCB = function(value) { return value === false || typeof value === 'function' }
let propsSpec = {
	// This makes us work with v-model as described here:
	// https://vuejs.org/v2/guide/components.html#Form-Input-Components-using-Custom-Events
	value: {
		default: false
	},
	syncOnValid: {
		type: Boolean,
		default: true,
	},
	// html-form-tools options
	opts: {
		type: Object,
		default: function() { return {} }
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
}
let onMounted = function(hftFun, tgt, vueComponentInstance, skipCallbacks = []) {
	let callbacks = {
		unformat: vueComponentInstance.unformat,
		validate:  vueComponentInstance.validate,
		format: vueComponentInstance.format,
		sync: function(value) {
			return vueComponentInstance.$emit('sync', value)
		},
		invalid: function(unfmtd, oldVal, newVal, input) {
			return vueComponentInstance.$emit('invalid', unfmtd, oldVal, newVal, input)
		},
		intermediate: function(unfmtd, oldVal, newVal, input) {
			return vueComponentInstance.$emit('intermediate', unfmtd, oldVal, newVal, input)
		},
		valid: function(unfmtd, oldVal, newVal, input) { 
			if (vueComponentInstance.syncOnValid) vueComponentInstance.$emit('input', newVal)
			return vueComponentInstance.$emit('valid', unfmtd, oldVal, newVal, input) 
		},
	}
	for (let cb of skipCallbacks) {
		delete callbacks[cb]
	}
	let hftObj = hftFun(tgt, callbacks, vueComponentInstance.opts)
	if (vueComponentInstance.$props.value) hftObj.set(vueComponentInstance.$props.value)
	vueComponentInstance.hftObj = hftObj
	return hftObj
}
let methods = function() {
	return {
		// update: function(value) { this.hftObj.set(value) }
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
