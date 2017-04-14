<template>
	<input ref='input' :value=value />
</template>

<script>
import HTMLFormTools from 'html-form-tools'
import { onMounted, propsSpec } from './common'
export default {
	name: 'vft-integer-input',
	props: propsSpec,
	mounted: function() {
		onMounted(HTMLFormTools.IntegerInput, this.$refs.input, this, ['format','validate','unformat'])
	}
}
</script>
