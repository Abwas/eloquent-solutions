import chai from 'chai';
import deepEqual from './04-04-deep-comparison';

const expect = chai.expect;

describe('#Chapter 4 -> Exercise 4 - Deep Comparison', function() {
  describe('#deepEqual()', function() {
    it('Should compare objects', function() {
      let obj = {here: {is: "an"}, object: 2};
      expect(deepEqual(obj, obj)).to.be.true;
    });

    it.skip('Should compare objects', function() {
      let obj = {here: {is: "an"}, object: 2};
      expect(deepEqual(obj, obj)).to.be.true;
      expect(deepEqual(obj, {here: 1, object: 2})).to.be.false;
    });

    it('Should compare objects', function() {
      let obj = {here: {is: "an"}, object: 2};
      expect(deepEqual(obj, {here: {is: "an"}, object: 2})).to.be.true;
    });
  });
});
