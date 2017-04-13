let valCB = function(value) { return value === false || typeof value === 'function' }
let propsSpec = {
	// This makes us work with v-model as described here:
	// https://vuejs.org/v2/guide/components.html#Form-Input-Components-using-Custom-Events
	syncOnValid: {
		type: Boolean,
		default: true,
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
let onMounted = function(hftFun, tgt, vueCmpInst, skipCallbacks = []) {
	let onValid = vueCmpInst.valid
	if (vueCmpInst.syncOnValid) {
		if (vueCmpInst.valid) {
			onValid = (value) => { 
				vueCmpInst.valid(value)
				vueCmpInst.$emit('input', value)
			}
		} else {
			onValid = (value) => { 
				vueCmpInst.$emit('input', value)
			}
		}
	}
	let callbacks = {}
	if (skipCallbacks.indexOf('unformat') < 0) callbacks.unformat = vueCmpInst.unformat
	if (skipCallbacks.indexOf('validate') < 0) callbacks.validate = vueCmpInst.validate
	if (skipCallbacks.indexOf('format') < 0) callbacks.format = vueCmpInst.format
	if (skipCallbacks.indexOf('sync') < 0) callbacks.sync = vueCmpInst.sync
	if (skipCallbacks.indexOf('invalid') < 0) callbacks.invalid = vueCmpInst.invalid
	if (skipCallbacks.indexOf('intermediate') < 0) callbacks.intermediate = vueCmpInst.intermediate
	if (skipCallbacks.indexOf('valid') < 0) callbacks.valid = onValid
	hftFun(tgt, callbacks, vueCmpInst.opts)
	console.log({hftFun: hftFun})
}
export {
	onMounted,
	propsSpec
}
