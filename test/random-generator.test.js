import assert from 'assert';
import randomGenerator from '../src/random-generator';

describe('Random Generator', function() {
  const numOfRolls = [
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1,
    Math.floor(Math.random() * 100) + 1
  ];
  const sides = [1, 2, 3, 4, 5, 6];
  const randomGen = [
    new randomGenerator(sides, numOfRolls[0]),
    new randomGenerator(sides, numOfRolls[1]),
    new randomGenerator(sides, numOfRolls[2]),
  ];

  describe('Shuffled Array has the same specified size', function() {
    it(`Rolling dice ${numOfRolls[0]} times`, function() {
      assert.equal(randomGen[0].shuffledSet.length, numOfRolls[0]);
    });
    it(`Rolling dice ${numOfRolls[1]} times`, function() {
      assert.equal(randomGen[1].shuffledSet.length, numOfRolls[1]);
    });
    it(`Rolling dice ${numOfRolls[2]} times`, function() {
      assert.equal(randomGen[2].shuffledSet.length, numOfRolls[2]);
    });
  });
});