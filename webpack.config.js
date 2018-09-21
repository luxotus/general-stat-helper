const path = require('path');

module.exports = [
  {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
  },
  {
    entry: {
      tests: ['./test/general-stat-helper.test.js', './test/random-generator.test.js'],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'tests-bundle.js',
    },
  },
];
