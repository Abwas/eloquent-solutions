import isEven from './03-02-recursion';
import chai from 'chai';

const expect = chai.expect;

describe('#Chapter 3 -> Exercise 2 - Recursion', () => {
  it('Should true for an even number', () => {
    expect(isEven(50)).to.be.true;
  });

  it('Should return false for an odd number', () => {
    expect(isEven(75)).to.be.false;
  });

  it('Should return false for an negative odd number', () => {
    expect(isEven(-1)).to.be.false;
  });

  it('Should return true for an positive even number', () => {
    expect(isEven(-50)).to.be.true;
  });

  it('Should return true for zero (0)', () => {
    expect(isEven(0)).to.be.true;
  });

  it('Should return false for one (1)', () => {
    expect(isEven(1)).to.be.false;
  });
});
