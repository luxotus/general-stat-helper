import assert from 'assert';
import generalStatHelper from '../src/general-stat-helper';

/**
 * Checks nested arrays for duplicate arrays, data order is ignored
 * @param {[[...], [...], ...]} arr
 */
function checkForNestedDuplicates(arr) {
  let hasDup = false;

  arr.forEach((outerEl) => {
    let count = 0;

    arr.forEach((innerEl) => {
      if (outerEl.join('') === innerEl.join('')) {
        count += 1;
      }
    });

    if (count > 1) {
      hasDup = true;
    }
  });

  return hasDup;
}

describe('Test helper functions', function() {
  describe('checkForNestedDuplicates', function() {
    it('Has duplicates', function() {
      const arr = [['a', 'b'], ['c', 'g'], ['a', 'b']];
      assert.equal(checkForNestedDuplicates(arr), true);
    });
    it('No duplicates', function() {
      const arr = [['a', 'b'], ['c', 'g'], ['a', 'z']];
      assert.equal(checkForNestedDuplicates(arr), false);
    });
  });
});

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

    it('Contains no duplicates', function() {
      assert.equal(checkForNestedDuplicates(generalStatHelper.permutations(arr)), false);
    });
  });
  describe('combination', function() {
    it('4 chosen from group of 15 has 1365 possible combinations', function() {
      assert.equal(generalStatHelper.combination(15, 4), 1365);
    });
  });
  describe('mean', function() {
    const arr = [600, 470, 170, 430, 300];
    const knownMean = 394;
    it(`[${arr.join(', ')}] has a mean of ${knownMean}`, function() {
      assert.equal(generalStatHelper.mean(arr), knownMean);
    });
  });
  describe('variance', function() {
    const arr = [600, 470, 170, 430, 300];
    const knownvariance = 21704;
    it(`[${arr.join(', ')}] has a variance of ${knownvariance}`, function() {
      assert.equal(generalStatHelper.variance(arr), knownvariance);
    });
  });
});