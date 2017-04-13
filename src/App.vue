<template>
	<div id="app">
		<table style='margin-left: auto; margin-right: auto'>
		<tr>
			<td class='lbl'>Hey, wake up!</td>
			<td><vft-input :validate=validate :opts='opts'></vft-input> (Just try to type the letter 'z', I dare you)</td>
		</tr>
		<tr>
			<td class='lbl'>Integer</td>
			<td><vft-integer-input :opts='opts'></vft-integer-input></td>
		</tr>
		<tr>
			<td class='lbl'>Float</td>
			<td><vft-float-input :opts='opts'></vft-float-input></td>
		</tr>
		<tr>
			<td class='lbl'>Dollar</td>
			<td><vft-dollar-input :opts='opts'></vft-dollar-input></td>
		</tr>
		</table>
	</div>
</template>

<script>
import vftInput from './components/vft-input'
import vftIntegerInput from './components/vft-integer-input'
import vftFloatInput from './components/vft-float-input'
import vftDollarInput from './components/vft-dollar-input'

export default {
	name: 'app',
	data() {
		return {
			validate: function(val) { if (val.match(/z/i)) throw new Error(`'s' is not allowed`) },
			opts: { debug: true },
		}
	},
	components: {
		vftInput,
		vftIntegerInput,
		vftFloatInput,
		vftDollarInput,
	}
}
</script>

<style scoped>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-top: 60px;
}
.lbl {
	text-align: right;
	margin-left: 1em;
}
.lbl::after {
	content: ':'
}
</style>
