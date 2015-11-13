import chai from 'chai';
import * as list from './04-03-list';

const expect = chai.expect;

describe('#Chapter 4 -> Exercise 3 - A List', function() {
  describe('#arrayToList()', function() {
    it('Should return a list when given an array', function() {
      expect(list.arrayToList([10, 20])).to.deep.equal({value: 10, rest: {value: 20, rest: null}});
    });
  });

  describe('#listToArray()', function() {
    it('Should return an array when given a list', function() {
      expect(list.listToArray(list.arrayToList([10, 20, 30]))).to.deep.equal([10, 20, 30]);
    });
  });

  describe('#prepend()', function() {
    it('Should return a new list with a prepended element', function() {
      expect(list.prepend(10, list.prepend(20, null))).to.deep.equal({value: 10, rest: {value: 20, rest: null}});
    });
  });

  describe('#nth()', function() {
    it('Should return an element at the given position in the list', function() {
      expect(list.nth(list.arrayToList([10, 20, 30]), 1)).to.equal(20);
    });

    it.skip('Should return undefined if there is no element at the given position in the list', function() {
      expect(list.nth(list.arrayToList([10, 20, 30]), 4)).to.be.undefined;
    });
  });
});
