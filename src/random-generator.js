/**
 * Generates a set of random values that matches input values probability
 * Ex. flip a coin 50 times and get exactly 50% heads and 50% tails
 * @param {array} seq sequence of possible values
 * @param {int} discreteEvents number of separate events
 */
export default class randomGenerator {
  constructor(seq, discreteEvents) {
    this.currentIndex = 0;
    this.seq = seq;
    this.discreteEvents = discreteEvents;
    const size = Math.floor(discreteEvents / seq.length);
    let differenceToMax = Math.abs(discreteEvents - size * seq.length);
    let increment = 0;


    this.possibleSets = this.seq.map((val) => {
      if (differenceToMax > 0) {
        differenceToMax -= 1;
        increment = 1;
      } else {
        increment = 0;
      }

      return Array(size + increment).fill(val);
    });
    this.unShuffledSet = [].concat(...this.possibleSets);
    this.shuffledSet = this.unShuffledSet.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0]).map(a => a[1]);
  }

  get rand() {
    const currentVal = this.shuffledSet[this.currentIndex];
    this.currentIndex = (this.currentIndex >= this.discreteEvents) ? 0 : this.currentIndex + 1;

    return currentVal;
  }
}
