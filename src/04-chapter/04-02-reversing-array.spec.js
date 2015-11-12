import chai from 'chai';
import {reverseArray, reverseArrayInPlace} from './04-02-reversing-array';

const expect = chai.expect;

describe('#Chapter 4 - Reversing An Array', function() {
  
  describe('#reverseArray()', function() {
    let array = ["A", "B", "C"];

    it('Should return a new array in the reverse order', function() {
      expect(reverseArray(array)).to.deep.equal(["C", "B", "A"]);
    });

    it('Should not modifies the original array', function() {
      expect(array).to.deep.equal(["A", "B", "C"]);
    });
  });

  describe('#reverseArrayInPlace()', function() {
    let array = [1, 2, 3, 4, 5];

    it('Should modifies the original array', function() {
      reverseArrayInPlace(array);

      expect(array).to.deep.equal([5, 4, 3, 2, 1]);
    });
  });
});
