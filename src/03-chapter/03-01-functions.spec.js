import chai from 'chai';
import minimum from './03-01-functions';

const expect = chai.expect;

describe('#Chapter 3 -> Exercise 1 - Minimum', () => {
  it('Should takes two arguments and return their minimum', () => {
    expect(minimum(0, 10)).to.equal(0);
    expect(minimum(0, -10)).to.equal(-10);
  });
});
