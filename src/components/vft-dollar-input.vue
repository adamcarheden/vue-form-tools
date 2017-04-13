<template>
	<input ref='input'/>
</template>

<script>
import HTMLFormTools from 'html-form-tools'
import { onMounted, propsSpec } from './common'
export default {
	name: 'vft-dollar-input',
	props: propsSpec,
	mounted: function() {
		onMounted(HTMLFormTools.DollarInput, this.$refs.input, this, ['format','validate','unformat'])
	}
}
</script>
