<template>
	<div>
		<input ref='input' />
	</div>
</template>

<script>
import HTMLFormTools from 'html-form-tools'
import { onMounted, propsSpec, methods, watch, data } from './common'
let htfObj // eslint-disable-line no-unused-vars
export default {
	name: 'vft-dollar-input',
	props: propsSpec,
	methods: methods(),
	watch: watch(),
	data: data,
	mounted: function() {
		onMounted(HTMLFormTools.DollarInput, this.$refs.input, this, ['format','validate','unformat'])
	}
}
</script>
