# VUE Form Tools

> html-form-tools for Vue

VUE Form Tools implement [VUE](https://vuejs.org/) components for the inputs in [HTML Form Tools](https://github.com/adamcarheden/html-form-tools).

## Live Demo
[Live demo](https://jsfiddle.net/adamcarheden/ufqx56ww/)

## Install
``` bash
npm install vue-form-tools --save
```
or
``` bash
git clone https://github.com/adamcarheden/vue-form-tools.git
```

## Use
```
<template>
	<div>
		<!-- Some inputs with predefined limits and formatting -->
		<vft-integer-input v-model:myObject.int />
		<vft-float-input   v-model:myObject.float />
		<vft-dollar-input  v-model:myObject.dollar />

		<!-- A fully customizable input -->
		<vft-input v-model=myObject.alpha :validate=alphaOnly />
	<div>
</template>
<script>
import { vftIntegerInput, vftFloatInput, vftDollarInput, vftInput } from 'vue-form-tools'

var myObject = {
	int: 1,
	float: 1.0,
	dollar: 100,
	alpha: 'abc',
}

export default {
	name: 'my-component',
	components: {
		vftIntegerInput,
		vftFloatInput,
		vftDollarInput,
		vftInput,
	},
	data() {
		return {
			myObject: myObject,
			alphaOnly: function(value) {
				if (value.match(/[^A-Za-z]/)) throw new Error('non-alpha chars now allowed')
				return true
			}
		}
	},
}	
</script>
```

## API

VUE Form Tools is a complete interface to [HTML Form Tools](https://github.com/adamcarheden/html-form-tools). All callbacks become VUE props. Options are the 'opts' prop.

VUE Form Tools implements VUE's [v-model interface](https://vuejs.org/v2/guide/components.html#Form-Input-Components-using-Custom-Events). The model will be automatically updated *only* when the input contains a valid value.


## Contribute
``` bash
git clone https://github.com/adamcarheden/vue-form-tools.git
cd vue-form-tools
npm install
# Start the development server
npm run dev
# Build the release
npm run release
```
PRs welcome.

