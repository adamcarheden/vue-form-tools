// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import RosettaMarkdown from 'rosetta-markdown'
import hljs from 'highlightjs'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	template: '<App/>',
	components: { App }
})

RosettaMarkdown.marked.setOptions({
	highlight: function(code) {
		return hljs.highlightAuto(code).value
	}
})
