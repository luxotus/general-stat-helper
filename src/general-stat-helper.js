const generalStatHelper = {
  factorial: (num) => {
    if (num < 0) {
      return -1;
    }

    if (num === 0) {
      return 1;
    }

    return (num * generalStatHelper.factorial(num - 1));
  },
  sampleArrangement: () => {},
  permutations: () => {},
  combination: () => {},
  binomialCoefficient: () => {},
};

export default generalStatHelper;
