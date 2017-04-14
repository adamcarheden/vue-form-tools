<template>
	<div id="app">
		<table style='margin-left: auto; margin-right: auto'>
		<tr>
			<td class='lbl'>Hey, wake up!</td>
			<td><vft-input v-model="obj.noz" :validate=validate /><br/>(Just try to type the letter 'z', I dare you)</td>
			<td>{{obj.noz}}</td>
		</tr>
		<tr>
			<td class='lbl'>Integer</td>
			<td><vft-integer-input v-model="obj.whole"></vft-integer-input></td>
			<td>{{obj.whole}}</td>
		</tr>
		<tr>
			<td class='lbl'>Float</td>
			<td><vft-float-input v-model="obj.decimal"></vft-float-input></td>
			<td>{{obj.decimal}}</td>
		</tr>
		<tr>
			<td class='lbl'>Dollar</td>
			<td><vft-dollar-input v-model="obj.money"></vft-dollar-input></td>
			<td>{{obj.money}}</td>
		</tr>
		</table>
		<button v-on:click='go'>Go</button>
	</div>
</template>

<script>
import vftInput from './components/vft-input'
import vftIntegerInput from './components/vft-integer-input'
import vftFloatInput from './components/vft-float-input'
import vftDollarInput from './components/vft-dollar-input'

let obj ={
	noz: 'wxy',
	whole: 10,
	decimal:0.5,
	money: 50,
}
let go = () => {
	obj.noz = 'abc'
}
export default {
	name: 'app',
	data() {
		return {
			validate: function(val) { 
				if (val.match(/z/i)) throw new Error(`'z' is not allowed`)
				return true
			},
			obj: obj,
			go: go,
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
