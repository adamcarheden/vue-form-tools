<template>
	<div>
		<input ref='input' :value=value />
	</div>
</template>

<script>
import HTMLFormTools from 'html-form-tools'
import { onMounted, propsSpec } from './common'
export default {
	name: 'vft-input',
	props: propsSpec,
	mounted: function() {
		onMounted(HTMLFormTools.ManagedInput, this.$refs.input, this)
	}
}
</script>

<style scoped>

</style>
