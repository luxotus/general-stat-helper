import assert from 'assert';
import generalStatHelper from '../src/general-stat-helper';

// console.log(generalStatHelper.permutations(['a', 'b', 'c']));

describe('generalStatHelper', function() {
  describe('factorial', function() {
    it('4! = 24', function() {
      assert.equal(generalStatHelper.factorial(4), 24);
    });
  });
  describe('permutations', function() {
    const arr = ['a', 'b', 'c'];
    const factorial = generalStatHelper.factorial(arr.length);

    it(`[${arr.join(', ')}]! = ${factorial}`, function() {
      assert.equal(generalStatHelper.permutations(arr).length, factorial);
    });
  });
});