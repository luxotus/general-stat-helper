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
      generalStat: './test/general-stat-helper.test.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'tests-bundle.js',
    },
  },
];
