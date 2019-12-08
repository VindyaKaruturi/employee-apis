import { expect } from 'chai';
import sinon from 'sinon';
const TestController = require('../src/controllers/TestController');

describe('TestController', () => {
    it('tests the basic test case',() => {
        expect(true).to.eq(true);
    })
})