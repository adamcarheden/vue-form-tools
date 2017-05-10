<template>
	<div>
		<input ref='input' />
	</div>
</template>

<script>
import HTMLFormTools from 'html-form-tools'
import { onMounted, propsSpec, methods, watch, data } from './common'
export default {
	name: 'vft-integer-input',
	props: propsSpec,
	methods: methods(),
	watch: watch(),
	data: data,
	mounted: function() {
		onMounted(HTMLFormTools.IntegerInput, this.$refs.input, this, ['format','validate','unformat'])
	}
}
</script>
