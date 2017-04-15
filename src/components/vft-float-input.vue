<template>
	<input ref='input'/>
</template>

<script>
import HTMLFormTools from 'html-form-tools'
import { onMounted, propsSpec, methods, watch, data } from './common'
export default {
	name: 'vft-float-input',
	props: propsSpec,
	methods: methods(),
	watch: watch(),
	data: data,
	mounted: function() {
		onMounted(HTMLFormTools.FloatInput, this.$refs.input, this, ['format','validate','unformat'])
	}
}
</script>
