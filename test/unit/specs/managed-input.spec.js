import Vue from 'vue'
import ManagedInput from '@/components/vft-managed-input'

describe('vft-managed-input', () => {

/*
	it('has an empty default value', () => {
		expect(ManagedInput.props).to.be.an('object')
		expect(ManagedInput.props.value).to.be.an('object')
		expect(ManagedInput.props.value.default).to.be.an('string')
		expect(ManagedInput.props.value.default).to.be(false)
	})
	it('has a mounted hook', () => {
		expect(ManagedInput.mounted).to.be.a('function')
	})
*/

	it('renders an HTML input', () => {
		const vm = new Vue(ManagedInput).$mount()
		expect(typeof vm.$el.querySelector('input')).to.equal('object')
	})

	it('honors default value', () => {
		const vm = new (Vue.extend(ManagedInput))({propsData: { value: 'xyz' } }).$mount()
		expect(vm.$el.querySelector('input').value).to.equal('xyz')
	})

})
