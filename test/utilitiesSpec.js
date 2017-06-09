import chai from 'chai';
import store from 'store';
import { isEmpty } from 'lodash';
import * as utils from '../src/utilities';
const assert = chai.assert;
const expect = chai.expect;

describe('Utilities', () => {

	it('function #setStorageItem should save item and value', () => {
		utils.setStorageItem('name', 'Bob');
		const name = store.get('name');
		
		expect(name).to.equal('Bob');
	});

	it('function #getStorageItems should return empty object when no arguments are passed', () => {
		const result = utils.getStorageItems();
		
		expect(isEmpty(result)).to.equal(true);
		assert.typeOf(result, 'object');
	});

	it('function #getStorageItems should return an object with arguments a', () => {
		utils.setStorageItem('pet', 'dog');
		utils.setStorageItem('color', 'green');
		const result = utils.getStorageItems('pet', 'color');

		expect(result).to.have.property('pet');
		expect(result).to.have.property('color');
	});

	it('function #removeStorageItems should remove item passed', () => {
		utils.setStorageItem('age', 26);
		utils.removeStorageItems('age');
		const age = store.get('age');

		expect(age).to.equal(undefined);
	});

	it('function #emptyAllStorageItems should remove all items', () => {
		utils.setStorageItem('city', 'SF');
		utils.setStorageItem('state', 'CA');
		utils.emptyAllStorageItems();

		const city = store.get('city');
		const state = store.get('state');

		expect(city).to.equal(undefined);
		expect(state).to.equal(undefined);
	});
})