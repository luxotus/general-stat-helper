/**
 * Generates a set of random values that matches input values probability
 * Ex. flip a coin 50 times and get exactly 50% heads and 50% tails
 */
export default class randomGenerator {
  constructor(value, size) {
    this.currentIndex = 0;
    this.value = value;
    this.size = size;

    // Creates a sequence starting from 1
    this.startSequence = Array.from(new Array(value), (val, index) => index + 1);
    this.possibleSets = this.startSequence.map(val => Array(size / value).fill(val));
    this.unShuffledSet = [].concat(...this.possibleSets);
    this.shuffledSet = this.unShuffledSet.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0]).map(a => a[1]);
  }

  get rand() {
    const currentVal = this.shuffledSet[this.currentIndex];
    this.currentIndex = (this.currentIndex >= this.size) ? 0 : this.currentIndex + 1;

    return currentVal;
  }
}
