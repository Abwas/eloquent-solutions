import chai from 'chai';
import minimum from './03-01-functions';

const expect = chai.expect;

describe('#Chapter 3 - Functions', function() {
  describe('#Exercise 1 - Minimum', function() {
    it('Should takes two arguments and return their minimum', function() {
      expect(minimum(0, 10)).to.equal(0);
      expect(minimum(0, -10)).to.equal(-10);
    });
  });
});
