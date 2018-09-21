import assert from 'assert';
import randomGenerator from '../src/random-generator';

describe('Random Generator', function() {
  const numOfRolls = 60;
  const sides = 6;
  const randomGen = new randomGenerator(sides, numOfRolls);

  describe('Shuffled Array has the same specified size', function() {
    it('Rolling dice 60 times', function() {
      assert.equal(randomGen.shuffledSet.length, numOfRolls);
    });
  });
});