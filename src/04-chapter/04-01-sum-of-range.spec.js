import chai from 'chai';
import {range, sum} from './04-01-sum-of-range.js';

const expect = chai.expect;

describe('#Chapter 4 - The Sum Of A Range', () => {

  describe('#range()', () => {
    it('Should return an array with a range between 1 to 10', () => {
      expect(range(1, 10)).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('Should return an array with a range between 0 to 10 with a step', () => {
      expect(range(1, 10, 2)).to.deep.equal([1, 3, 5, 7, 9]);
    });

    it('Should return an array with a range between 0 to 10 with a negative step', () => {
      expect(range(5, 2, -1)).to.deep.equal([5, 4, 3, 2]);
    });

    it('Should throw an error when passed a wrong step', () => {
      expect(range.bind(range, 1, 10, -1)).to.throw('Please, verify the arguments that was passed');
    });

    it('Should throw an error when passed a wrong step', () => {
      expect(range.bind(range, 10, 5, 1)).to.throw('Please, verify the arguments that was passed');
    });
  });

  describe('#sum()', () => {
    it('Should sum an array of number with a range between 1 to 10', () => {
      expect(sum(range(1, 10))).to.equal(55);
    });

    it('Should sum an array of number with a range between 1 to 10 with 2 as step', () => {
      expect(sum(range(1, 10, 2))).to.equal(25);
    });

    it('Should sum an array of number with a range between 5 to 2 with -1 as step', () => {
      expect(sum(range(5, 2, -1))).to.equal(14);
    });
  });
});
