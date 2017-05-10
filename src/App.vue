<template>
	<div id="app">
		<table style='margin-left: auto; margin-right: auto'>
		<tr>
			<th>&nbsp;</th>
			<th>Form</th>
			<th>Object value</th>
		</tr>
		<tr id='noz'>
			<td class='lbl'>Hey, wake up!</td>
			<td><vft-managed-input v-model="obj.noz" :validate=validate @valid=valid @invalid=invalid :opts='{debug: false}' /><div>(Try to type the letter 'z')</div></td>
			<td class='dataVal'>{{obj.noz}}</td>
			<td><button v-on:click='obj.noz = "abc"'>&larr; Set</button></td>
		</tr>
		<tr id='integer'>
			<td class='lbl' id='integer'>Integer</td>
			<td><vft-integer-input v-model="obj.whole" @valid=valid @invalid=invalid :opts='{debug: false}'></vft-integer-input></td>
			<td class='dataVal'>{{obj.whole}}</td>
			<td><button v-on:click='obj.whole = 12345'>&larr; Set</button></td>
		</tr>
		<tr id='float'>
			<td class='lbl'>Float</td>
			<td><vft-float-input v-model="obj.decimal" @valid=valid @invalid=invalid :opts='{debug: false}'></vft-float-input></td>
			<td class='dataVal'>{{obj.decimal}}</td>
			<td><button v-on:click='obj.decimal = 3.1415927'>&larr; Set</button></td>
		</tr>
		<tr id='dollar'>
			<td class='lbl'>Dollar</td>
			<td><vft-dollar-input v-model="obj.money" @valid=valid @invalid=invalid :opts='{debug: true}'></vft-dollar-input></td>
			<td class='dataVal'>{{obj.money}}</td>
			<td><button v-on:click='obj.money = 1000000'>&larr; Set</button></td>
		</tr>
		</table>
	</div>
</template>

<script>
import vftManagedInput from './components/vft-managed-input'
import vftIntegerInput from './components/vft-integer-input'
import vftFloatInput from './components/vft-float-input'
import vftDollarInput from './components/vft-dollar-input'

let obj = {
	noz: 'wxy',
	whole: 10,
	decimal:0.5,
	money: 50,
}
window['obj'] = obj // For access in test suite
export default {
	name: 'app',
	data() {
		return {
			validate: function(val) { 
				if (val.match(/z/i)) throw new Error(`'z' is not allowed`)
				return true
			},
			valid: (unfmtd, oldval, newval, input) => {
				input.style.backgroundColor = 'rgba(0,255,0,0.1)'
			},
			invalid: (unfmtd, oldval, newval, input) => {
				input.style.backgroundColor = 'rgba(255,0,0,0.1)'
			},
			obj: obj,
		}
	},
	components: {
		vftManagedInput,
		vftIntegerInput,
		vftFloatInput,
		vftDollarInput,
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-top: 60px;
}
td { text-align: center; }
#button {
	text-align:center;
}
.lbl {
	text-align: right;
	margin-left: 1em;
}
.lbl::after {
	content: ':'
}
</style>
