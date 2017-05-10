// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
	'managed-input.js': function (browser) {
		// automatically uses dev Server port from /config.index.js
		// default: http://localhost:8080
		// see nightwatch.conf.js
		const devServer = browser.globals.devServerURL

		browser
			.url(devServer)
			.waitForElementVisible('#app', 5000)
			.assert.elementPresent('#noz input')
			.clearValue('#noz input')
			.setValue('#noz input','z')
			.getValue('#noz input', function(result) {
				this.assert.equal(result.status, 0)
				this.assert.equal(result.value, '')
			})
			.execute(function() {
				return window['obj'].noz
			}, [], function(result) {
				this.assert.equal(result.status, 0)
				this.assert.equal(result.value,'wxy',`Invalid input doesn't update object`)}
			)
			.clearValue('#noz input')
			.setValue('#noz input',['a','b','c','z','y','x'])
			.getValue('#noz input', function(result) {
				this.assert.equal(result.status, 0)
				this.assert.equal(result.value, 'abcyx')
			})
			.execute(function() {
				return window['obj'].noz
			}, [], function(result) {
				this.assert.equal(result.status, 0)
				this.assert.equal(result.value,'abcyx',`Valid input does update object`)}
			)
			.click('#noz button')
			.getValue('#noz input', function(result) {
				this.assert.equal(result.status, 0)
				this.assert.equal(result.value, 'abc')
			})
			.click('#integer button')
			.getValue('#integer input', function(result) {
				this.assert.equal(result.status, 0)
				this.assert.equal(result.value, '12,345')
			})
			.click('#float button')
			.getValue('#float input', function(result) {
				this.assert.equal(result.status, 0)
				this.assert.equal(result.value, '3.1415927')
			})
			.clearValue('#float input')
			.setValue('#float input','6942.27')
			.getValue('#float input', function(result) {
				this.assert.equal(result.status, 0)
				this.assert.equal(result.value, '6,942.27')
			})
			.click('#dollar button')
			.getValue('#dollar input', function(result) {
				this.assert.equal(result.status, 0)
				this.assert.equal(result.value, '$1,000,000')
			})

		browser.end()
	}
}
