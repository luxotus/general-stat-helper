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

describe('General Stat Helper', function() {
  describe('factorial', function() {
    it('4! = 24', function() {
      assert.equal(generalStatHelper.factorial(4), 24);
    });
  });
  describe('Permutations', function() {
    const arr = ['a', 'b', 'c'];
    const factorial = generalStatHelper.factorial(arr.length);

    it(`[${arr.join(', ')}]! = ${factorial}`, function() {
      assert.equal(generalStatHelper.permutations(arr).length, factorial);
    });

    it('Contains no duplicates', function() {
      assert.equal(checkForNestedDuplicates(generalStatHelper.permutations(arr)), false);
    });
  });
  describe('Binomial Coefficient', function() {
    it('4 chosen from group of 15 has a binomial coefficient of 1,365', function() {
      assert.equal(generalStatHelper.binomialCoefficient(15, 4), 1365);
    });
  });
  describe('Mean', function() {
    const arr = [600, 470, 170, 430, 300];
    const knownMean = 394;
    it(`[${arr.join(', ')}] has a mean of ${knownMean}`, function() {
      assert.equal(generalStatHelper.mean(arr), knownMean);
    });
  });
  describe('Variance', function() {
    const arr = [600, 470, 170, 430, 300];
    const knownVariance = 21704;
    it(`[${arr.join(', ')}] has a variance of ${knownVariance}`, function() {
      assert.equal(generalStatHelper.variance(arr, false), knownVariance);
    });
  });
  describe('Standard Deviation', function() {
    const arr = [600, 470, 170, 430, 300];
    const knownSigma = 147.32;
    it(`[${arr.join(', ')}] has a Standard Deviation of ${knownSigma}`, function() {
      assert.equal(Math.round(100 * generalStatHelper.sigma(arr, false))/100, knownSigma);
    });
  });
  describe('Intersection', function() {
    const sets_1 = [[1,2,3], [1,5,3,4], [87, 3, 99, 22, 1, 55]];
    it(`Known intersection ${[1,3]}`, function() {
      assert.deepEqual(generalStatHelper.intersection(sets_1), [1,3]);
    });

    const sets_2 = [[9, 7, 4], [5, 3, 1]];
    it(`No Intersections in [${sets_2[0].join(', ')}] and [${sets_2[1].join(', ')}]`, function() {
      assert.deepEqual(generalStatHelper.intersection(sets_2), []);
    });
  });
  describe('Union', function() {
    const sets = [[1,2,3], [1,4,3,5]];
    it(`The union of [${sets[0].join(', ')}] and [${sets[1].join(', ')}] is [1,2,3,4,5]`, function() {
      assert.deepEqual(generalStatHelper.union(sets), [1,2,3,4,5]);
    });
  });
  describe('Slope', function() {
    const coordinates = [[10, 7], [15, 8]];
    it(`The slope of [${coordinates[0].join(', ')}] and [${coordinates[1].join(', ')}] is 0.2`, function() {
      assert.equal(generalStatHelper.slope(coordinates[0], coordinates[1]), 0.2);
    });
  });
  describe('Intercept', function() {
    const coordinate = [40, 25];
    const slope = 0.5;
    it(`The intercept of [${coordinate.join(', ')}] and a slope of ${slope} is 5`, function() {
      assert.equal(generalStatHelper.intercept(coordinate, slope), 5);
    });
  });
  describe('Bernoulli Trials', function() {
    const bt = {
      n: 10,
      k: 7,
      c: 4,
      probability: 0.0031,
    };

    it(`In a ${bt.n} question multiple choice test, with ${bt.c} choices per question. You have a probability of ${bt.probability} for getting ${bt.k} questions correct.`, function() {
      assert.equal(Math.round(10000 * generalStatHelper.bernoulliTrials(bt.n, bt.k, bt.c))/10000, bt.probability);
    });
  });
  describe('Least Square Method', function() {
    const coordinates = [[8, 3], [2, 10], [11, 3], [6, 6], [5, 8], [4, 12], [12, 1], [9, 4], [6, 9], [1, 14]];
    const slope = -1.1;
    const yIntercept = 14.0;
    it(`The line of best fit: y = ${slope}x + ${yIntercept}`, function() {
      assert.deepEqual(generalStatHelper.leastSquare(coordinates), {slope: slope, yIntercept: yIntercept});
    });
  });
  describe('Covariance', function() {
    const coordinates = [[2.1, 8], [2.5, 12], [4, 14], [3.6, 10]];
    const covariance = 1.53;
    it(`Covariance: ${covariance}`, function() {
      assert.equal(Math.round(100 * generalStatHelper.covariance(coordinates))/100, covariance);
    });
  });
  describe('Correlation', function() {
    const coordinates = [[2.1, 8], [2.5, 12], [4, 14], [3.6, 10]];
    const correlation = 0.66;
    it(`Correlation: ${correlation}`, function() {
      assert.equal(Math.round(100 * generalStatHelper.correlation(coordinates))/100, correlation);
    });
  });
  describe('Euclidean Distance 2D', function() {
    const coordinates = [[158, 58], [161, 61]];
    const distance = 4.2;
    it(`Distance: ${distance}`, function() {
      assert.equal(Math.round(10 * generalStatHelper.euclideanDistance(coordinates))/10, distance);
    });
  });
  describe('Euclidean Distance 3D', function() {
    const coordinates = [[158, 58, 25], [161, 61, 43]];
    const distance = 18.49;
    it(`Distance: ${distance}`, function() {
      assert.equal(Math.round(100 * generalStatHelper.euclideanDistance(coordinates))/100, distance);
    });
  });
  describe('K-Nearest Neighbor', function() {
    const k = 5;
    const testData = {features: [[161, 61]]};
    const predictedLabel = 'M';
    const confidence = 0.8;
    const trainData = {
      features: [
        [158,	58],
        [158,	59],
        [158,	63],
        [160,	59],
        [160,	60],
        [163,	60],
        [163,	61],
        [160,	64],
        [163,	64],
        [165,	61],
        [165,	62],
        [165,	65],
        [168,	62],
        [168,	63],
        [168,	66],
        [170,	63],
        [170,	64],
        [170,	68],
      ],
      labels: ['M', 'M', 'M', 'M', 'M', 'M', 'M', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L'],
    };

    it(`Predicted Label: ${predictedLabel}`, function() {
      assert.equal(generalStatHelper.kNN(trainData, testData, k)[0].predictedLabel, predictedLabel);
    });

    it(`Predicted Label: ${confidence}`, function() {
      assert.equal(generalStatHelper.kNN(trainData, testData, k)[0].confidence, confidence);
    });
  });
  describe('Occurrences', function() {
    const labels = ['dog', 'dog', 'dog', 'cat', 'cat'];
    const results = {dog: 3, cat: 2};
    it(`Number of dogs: ${results.dog} & Number of cats: ${results.cat}`, function() {
      assert.deepEqual(generalStatHelper.occurrences(labels), results);
    });
  });
  describe('Split Data for training/testing', function() {
    const trainData = {
      features: [
        [170,	68],
        [45,	23],
        [234,	78],
        [87,	12],
        [10,	34],
      ],
      labels: [
        'M',
        'M',
        'M',
        'L',
        'L',
      ],
    };
    const expected = {test: 1, train: 4};
    const actual = generalStatHelper.splitData(trainData, 0.2);

    it(`Test Length: ${actual.test.length}`, function() {
      assert.equal(actual.test.features.length, expected.test);
    });
    it(`Train Length: ${actual.train.length}`, function() {
      assert.equal(actual.train.features.length, expected.train);
    });
  });
  describe('Beta Coefficient', function() {
    const coordinates = [[2.1, 8], [2.5, 12], [4, 14], [3.6, 10]];
    const betaCoefficient = 0.31;
    
    it(`Beta: ${betaCoefficient}`, function() {
      assert.equal(Math.round(100 * generalStatHelper.betaCoefficient(coordinates))/100, betaCoefficient);
    });
  });
});