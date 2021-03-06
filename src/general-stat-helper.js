const generalStatHelper = {
  /**
   * the product of an integer and all the integers below it
   * @param {int} num
   * @returns {int}
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
   * @returns {array}
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
   * The number of ways of picking k unordered outcomes from n possibilities
   * @param {int} n number of permutations
   * @param {int} k number of objects
   * @returns {float}
   */
  binomialCoefficient: (n, k) => {
    const nPr = generalStatHelper.factorial(n);
    const denominator = generalStatHelper.factorial(k) * generalStatHelper.factorial(n - k);

    return nPr / denominator;
  },

  /**
   * Calculate the average from an array of numbers
   * @param {[int]} arr array of numbers
   * @returns {float}
   */
  mean: arr => arr.reduce((p, c) => p + c) / arr.length,

  /**
   * The average of the squared differences from the Mean.
   * @param {[int]} arr array of numbers
   * @param {boolean} isSample determines if data is a population or just a sample
   * @returns {float}
   */
  variance: (arr, isSample) => {
    const mean = generalStatHelper.mean(arr);
    const sqDiff = arr.map(x => (x - mean) ** 2); // squared differences
    let v = 0;

    if (isSample) {
      v = sqDiff.reduce((p, c) => p + c) / (sqDiff.length - 1);
    } else {
      v = generalStatHelper.mean(sqDiff);
    }

    return v;
  },

  /**
   * The Standard Deviation of a set
   * @param {[int]} arr array of numbers
   * @param {boolean} isSample determines if data is a population or just a sample
   * @returns {float}
   */
  sigma: (arr, isSample) => Math.sqrt(generalStatHelper.variance(arr, isSample)),

  /**
   * The set of elements that belong to all sets
   * @param {[[int], [int]...]} s array of all the sets you want to get the intersection of
   * @returns {[int]}
   */
  intersection: (s) => {
    let andSet = [];

    if (s.length >= 2) {
      andSet = s[0].filter(value => s[1].indexOf(value) !== -1);

      if (s.length > 2) {
        s.splice(1, s.length).forEach((el) => {
          andSet = andSet.filter(value => el.indexOf(value) !== -1);
        });
      }
    }

    return andSet;
  },

  /**
   * The set of elements that belong to one or both sets
   * @param {[[int], [int]...]} sets array of all the sets you want to get the union of
   * @returns {[int]}
   */
  union: (s) => {
    const allValues = [];
    s.forEach(arr => allValues.push(...arr));

    return allValues.filter((elem, pos, arr) => arr.indexOf(elem) === pos);
  },

  /**
   * Slope of a line
   * @param {[int, int]} a first coordinate
   * @param {[int, int]} b second coordinate
   * @returns {float}
   */
  slope: (a, b) => (b[1] - a[1]) / (b[0] - a[0]),

  /**
   * Intercept of a line
   * @returns {float}
   */
  intercept: (coordinate, m) => coordinate[1] - m * coordinate[0],

  /**
   * a random experiment with exactly two possible outcomes, "success" and "failure",
   * in which the probability of success is the same every time the experiment is conducted.
   * @param {int} n number of trials
   * @param {int} k number of successes
   * @param {int} c number of choices
   * @returns {float}
   */
  bernoulliTrials: (n, k, c) => {
    const failures = n - k;
    const p = 1 / c; // probability of success in one trial
    const q = 1 - p; // probability of failure in one trial

    return generalStatHelper.binomialCoefficient(n, k) * (p ** k) * (q ** failures);
  },

  /**
   * Least Square Method to calculate the line of best fit
   * @param {[[int, int]]} coordinates array of (x, y)
   * @returns {{slope: float, yIntercept: float}}
   */
  leastSquare: (coordinates) => {
    const sum = {
      top: 0,
      bottom: 0,
    };
    const c = {
      x: coordinates.map(el => el[0]),
      y: coordinates.map(el => el[1]),
    };
    const bar = {
      x: generalStatHelper.mean(c.x),
      y: generalStatHelper.mean(c.y),
    };
    let slope = 0;
    let yIntercept = 0;

    coordinates.forEach((points) => {
      sum.top += (points[0] - bar.x) * (points[1] - bar.y);
      sum.bottom += (points[0] - bar.x) ** 2;
    });

    slope = Math.round(10 * (sum.top / sum.bottom)) / 10;
    yIntercept = Math.round(10 * (bar.y - (slope * bar.x))) / 10;

    return { slope, yIntercept };
  },

  /**
   * Covariance indicates how two variables are related.
   * @param {[[int, int]]} coordinates array of (x, y)
   * @returns {float}
   */
  covariance: (coordinates) => {
    const c = {
      x: coordinates.map(el => el[0]),
      y: coordinates.map(el => el[1]),
    };
    const bar = {
      x: generalStatHelper.mean(c.x),
      y: generalStatHelper.mean(c.y),
    };
    let sum = 0;

    coordinates.forEach((points) => {
      sum += (points[0] - bar.x) * (points[1] - bar.y);
    });

    return sum / (coordinates.length - 1);
  },

  /**
   * Determines how two variables are related
   * @param {[[int, int]]} coordinates array of (x, y)
   * @returns {float}
   */
  correlation: (coordinates) => {
    const c = {
      x: coordinates.map(el => el[0]),
      y: coordinates.map(el => el[1]),
    };
    const cov = generalStatHelper.covariance(coordinates);
    const sigma = {
      x: generalStatHelper.sigma(c.x, true),
      y: generalStatHelper.sigma(c.y, true),
    };

    return cov / (sigma.x * sigma.y);
  },

  /**
   * Distance between two points in N-dimensions
   * @param {[[int, int], [int, int]]} coordinates array of (x, y)
   */
  euclideanDistance: (coordinates) => {
    let dist = 0;

    coordinates[0].forEach((val, index) => {
      dist += ((coordinates[1][index] - val) ** 2);
    });

    return Math.sqrt(dist);
  },

  /**
   * K-Nearest Neighbor: a non-parametric supervised learning technique for classifying data
   * Feature = input, Label = output, nN = Nearest Neighbors
   * @param {{features: [[int, int]], labels: [string]}} trainData
   * @param {{features: [[int, int]], labels: [string]}} testData Optional. Array of (x, y) features
   * @param {int} k Number of closest training examples in the feature space
   * @param {float} testPercent Required if no testData given. Split data for training and testing
   * @returns {[{predictedLabel: string, confidence: float}]} For each test data point
   */
  kNN: (trainData, testData, k, testPercent) => {
    const distance = [];
    const indexesOfKs = [];
    const results = [];
    let data = {};

    if (testData === null || typeof testData === 'undefined') {
      data = generalStatHelper.splitDataForTrainingAndTesting(trainData, testPercent);
    } else {
      data = {
        train: trainData,
        test: testData,
      };
    }

    // distances for each test data point against all training data points
    data.test.features.forEach((testPair) => {
      const tempArr = [];

      data.train.features.forEach((trainPair) => {
        tempArr.push(generalStatHelper.euclideanDistance([testPair, trainPair]));
      });

      distance.push(tempArr);
    });

    // Storing the positions of the closest training data for each test data
    distance.forEach((el) => {
      const tempArr = [];

      // K determines the number of closest training data
      for (let index = 0; index < k; index += 1) {
        // min = closest training data to the current test data
        const indexOfMinValue = el.reduce((iMin, x, i, arr) => {
          let currentMinIndex = 0;

          if (x < arr[iMin] && !tempArr.includes(i)) {
            currentMinIndex = i;
          } else {
            currentMinIndex = iMin;
          }

          return currentMinIndex;
        }, 0);

        tempArr.push(indexOfMinValue);
      }

      indexesOfKs.push(tempArr);
    });

    // Preparing results on predictions
    data.test.features.forEach((val, index) => {
      const testResult = {};
      const labelsOfNN = indexesOfKs[index].map(i => data.train.labels[i]);
      const uniqueLabels = labelsOfNN.filter((item, i, ar) => ar.indexOf(item) === i);

      // Label occurrences
      const oc = generalStatHelper.occurrences(labelsOfNN);

      if (uniqueLabels.length >= 2) {
        testResult.predictedLabel = Object.keys(oc).reduce((a, b) => (oc[a] > oc[b] ? a : b));
      } else {
        [testResult.predictedLabel] = uniqueLabels;
      }

      testResult.confidence = oc[testResult.predictedLabel] / k;
      results.push(testResult);
    });

    return results;
  },

  /**
   * Split data into training and test sets
   * @param {features: [[int, int]], labels: [string]} data
   * @param {float} testPercent Percentage of test data vs training data
   * @returns {{test: {data}, train: {data}}}
   */
  splitData: (data, testPercent) => {
    const numOfTestData = Math.round(data.features.length * testPercent);
    const combineData = data.features.map((el, index) => el.concat(data.labels[index]));
    const shuffleData = combineData.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0]).map(a => a[1]);
    const splitShuffleData = {
      test: shuffleData.slice(0, numOfTestData),
      train: shuffleData.slice(numOfTestData),
    };
    const results = {
      test: {
        features: [],
        labels: [],
      },
      train: {
        features: [],
        labels: [],
      },
    };

    // Split features and labels
    Object.entries(splitShuffleData).forEach(([key, value]) => {
      value.forEach((el) => {
        results[key].features.push(el.slice(0, el.length - 1));
        results[key].labels.push(el[el.length - 1]);
      });
    });

    return results;
  },

  /**
   * Get the number of occurrences for each label
   * @param {[string]} arr array of labels
   */
  occurrences: (arr) => {
    const occurrences = arr.reduce((prev, curr) => {
      const temp = prev;

      if (temp[curr] === null || typeof temp[curr] === 'undefined') {
        temp[curr] = 1;
      } else {
        temp[curr] += 1;
      }

      return temp;
    }, {});

    return occurrences;
  },

  /**
   * Compares the strength of the effect of each individual independent variable
   *  to the dependent variable
   * @param {[[int, int]]} coordinates array of (x, y)
   */
  betaCoefficient: (coordinates) => {
    const cov = generalStatHelper.covariance(coordinates);
    const variance = generalStatHelper.variance(coordinates.map(val => val[1]));

    return cov / variance;
  },

  /**
   * Simple machine learning algorithm that is trained on a test data set
   *  then able to classify a new data.
   * @param {[[int, int]]} coordinates array of (x, y)
   */
  kMean: (coordinates, k) => {
    const maxIterations = 100;
    const results = [];
    const ranges = {};
    const centroids = [];
    let bestMatches = {};
    let lastMatches = {};

    function getMax(a) {
      return Math.max(...a.map(e => (Array.isArray(e) ? getMax(e) : e)));
    }

    function getMin(a) {
      return Math.min(...a.map(e => (Array.isArray(e) ? getMin(e) : e)));
    }

    ranges.max = getMax(coordinates);
    ranges.min = getMin(coordinates);

    // Adding starting points
    for (let index = 0; index < k; index += 1) {
      centroids.push([
        Math.floor(Math.random() * (ranges.max - ranges.min + 1) + ranges.min),
        Math.floor(Math.random() * (ranges.max - ranges.min + 1) + ranges.min),
      ]);
    }

    for (let i = 0; i < maxIterations; i += 1) {
      bestMatches = {};
      let isSame = true;

      // Find which centroid is closest for each row
      for (let j = 0; j < coordinates.length; j += 1) {
        const currentRow = coordinates[j];
        let bestMatch = 0;

        for (let t = 0; t < centroids.length; t += 1) {
          const distance = generalStatHelper.euclideanDistance([centroids[t], currentRow]);

          if (distance < generalStatHelper.euclideanDistance([centroids[bestMatch], currentRow])) {
            bestMatch = t;
          }
        }

        if (typeof bestMatches[bestMatch] === 'undefined') {
          bestMatches[bestMatch] = [];
        }

        bestMatches[bestMatch].push(j);
      }

      // Check to see if bestMatches and lastMatches are the same
      Object.entries(bestMatches).forEach(([key, value]) => {
        if (Object.keys(lastMatches).length === 0 || typeof lastMatches[key] === 'undefined' || lastMatches[key] !== value) {
          isSame = false;
        }
      });

      // If the results are the same as last time, this is complete
      if (isSame) {
        break;
      }

      lastMatches = bestMatches;

      // Move the centroids to the average of their members
      for (let j = 0; j < centroids.length; j += 1) {
        const avgs = Array(coordinates[0].length).fill(0);

        if (typeof bestMatches[j] !== 'undefined' && bestMatches[j].length > 0) {
          bestMatches[j].forEach((rowVal, rowId) => {
            coordinates[rowId].forEach((val, key) => {
              avgs[key] += val;
            });
            avgs.forEach((val, key) => {
              avgs[key] /= bestMatches[j].length;
            });
          });
        }

        centroids[j] = avgs;
      }
    }

    // Building results
    Object.entries(bestMatches).forEach(([key, val]) => {
      results.push({
        centroid: centroids[key],
        cluster: val,
      });
    });

    return results;
  },

};

export default generalStatHelper;
