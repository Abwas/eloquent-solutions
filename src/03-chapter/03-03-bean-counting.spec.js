import { countBs, countChar } from './03-03-bean-counting';
import chai from 'chai';

const expect = chai.expect;

describe('#Chapter 3 -> Exercise 3 - Couting Beans', () => {
  it('Should return the number of B\'s in the word BBC', () => {
    expect(countBs('BBC')).to.equal(2);
  });

  it('Should return the number of k\'s in the word kakkerlak', () => {
    expect(countChar('kakkerlak', 'k')).to.equal(4);
  });
});
