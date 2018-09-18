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
    const ret = [];

    for (let i = 0; i < arr.length; i += 1) {
      const rest = generalStatHelper.permutations(arr.slice(0, i).concat(arr.slice(i + 1)));

      if (!rest.length) {
        ret.push([arr[i]]);
      } else {
        for (let j = 0; j < rest.length; j += 1) {
          ret.push([arr[i]].concat(rest[j]));
        }
      }
    }
    return ret;
  },
  combination: () => {},
  binomialCoefficient: () => {},
};

export default generalStatHelper;
