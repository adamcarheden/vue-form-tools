<template>
	<div>
		<input ref='input' />
	</div>
</template>

<script>
import HTMLFormTools from 'html-form-tools'
import { onMounted, propsSpec, methods, watch, data } from './common'
export default {
	name: 'vft-managed-input',
	props: propsSpec,
	methods: methods(),
	watch: watch(),
	data: data,
	mounted: function() {
		onMounted(HTMLFormTools.ManagedInput, this.$refs.input, this)
	}
}
</script>

<style scoped>

</style>
