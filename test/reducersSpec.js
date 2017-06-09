import chai from 'chai';
import { isEmpty } from 'lodash';
import * as reducers from '../src/reducers';
const assert = chai.assert;
const expect = chai.expect;

describe('Reducers', () => {

	it('function #buildClientStateReducer should return empty object when no items are passed', () => {
		reducers.buildClientStateReducer();
		const state = reducers.getClientState();

		expect(isEmpty(state)).to.equal(true);
		assert.typeOf(state, 'object');
	});

	it('function #buildClientStateReducer should return object with keys same as argument passed', () => {
		reducers.buildClientStateReducer('name', 'age');
		const state = reducers.getClientState();

		assert.typeOf(state, 'object');
		expect(state).to.have.property('name');
		expect(state).to.have.property('age');
	});
})