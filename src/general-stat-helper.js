const generalStatHelper = {
  /**
   * the product of an integer and all the integers below it
   * @param {int} num
   */
  factorial: (num) => {
    if (num < 0) {
      return -1;
    }

    if (num === 0) {
      return 1;
    }

    return (num * generalStatHelper.factorial(num - 1));
  },

  /**
   * Provides all permutations of a set
   * @param {array} arr
   */
  permutations: (arr) => {
    const result = [];

    for (let i = 0; i < arr.length; i += 1) {
      const permGroup = generalStatHelper.permutations(arr.slice(0, i).concat(arr.slice(i + 1)));

      if (permGroup.length === 0) {
        result.push([arr[i]]);
      } else {
        for (let j = 0; j < permGroup.length; j += 1) {
          result.push([arr[i]].concat(permGroup[j]));
        }
      }
    }

    return result;
  },

  /**
   * Get the number possible combinations from a group within a set
   * @param {int} n number of permutations
   * @param {int} r number of objects
   */
  combination: (n, r) => {
    const nPr = generalStatHelper.factorial(n);
    const denominator = generalStatHelper.factorial(r) * generalStatHelper.factorial(n - r);

    return nPr / denominator;
  },

  /**
   * Calculate the average from an array of numbers
   * @param {[int]} arr array of numbers
   */
  mean: arr => arr.reduce((p, c) => p + c) / arr.length,

  /**
   * The average of the squared differences from the Mean.
   * @param {[int]} arr array of numbers
   */
  variance: (arr) => {
    const mean = generalStatHelper.mean(arr);
    const sqDiff = arr.map(x => (x - mean) ** 2); // squared differences

    return generalStatHelper.mean(sqDiff);
  },

  /**
   * The Standard Deviation
   * @param {[int]} v variance
   */
  sigma: (v) => {},

  /**
   * The set of elements that belong to all sets
   * @param {[[int], [int]...]} s array of all the sets you want to get the intersection of
   */
  intersection: (s) => {},

  /**
   * The set of elements that belong to one or both sets
   * @param {[[int], [int]...]} sets array of all the sets you want to get the union of
   */
  union: (s) => {},

};

export default generalStatHelper;
