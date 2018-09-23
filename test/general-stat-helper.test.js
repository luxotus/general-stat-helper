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
    const knownVariance = 21704;
    it(`[${arr.join(', ')}] has a variance of ${knownVariance}`, function() {
      assert.equal(generalStatHelper.variance(arr), knownVariance);
    });
  });
  describe('Standard Deviation', function() {
    const arr = [600, 470, 170, 430, 300];
    const knownSigma = 147.32;
    it(`[${arr.join(', ')}] has a Standard Deviation of ${knownSigma}`, function() {
      assert.equal(Math.round(100 * generalStatHelper.sigma(arr))/100, knownSigma);
    });
  });
  describe('intersection', function() {
    const sets_1 = [[1,2,3], [1,5,3,4], [87, 3, 99, 22, 1, 55]];
    it(`Known intersection ${[1,3]}`, function() {
      assert.deepEqual(generalStatHelper.intersection(sets_1), [1,3]);
    });

    const sets_2 = [[9, 7, 4], [5, 3, 1]];
    it(`No Intersections in [${sets_2[0].join(', ')}] and [${sets_2[1].join(', ')}]`, function() {
      assert.deepEqual(generalStatHelper.intersection(sets_2), []);
    });
  });
  describe('union', function() {
    const sets = [[1,2,3], [1,4,3,5]];
    it(`The union of [${sets[0].join(', ')}] and [${sets[1].join(', ')}] is [1,2,3,4,5]`, function() {
      assert.deepEqual(generalStatHelper.union(sets), [1,2,3,4,5]);
    });
  });
  describe('slope', function() {
    const coordinates = [[10, 7], [15, 8]];
    it(`The slope of [${coordinates[0].join(', ')}] and [${coordinates[1].join(', ')}] is 0.2`, function() {
      assert.equal(generalStatHelper.slope(coordinates[0], coordinates[1]), 0.2);
    });
  });
});