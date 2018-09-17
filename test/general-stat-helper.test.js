import assert from 'assert';
import generalStatHelper from '../src/general-stat-helper';

describe('generalStatHelper', function() {
  describe('factorial', function() {
    it('4! = 24', function() {
      assert.equal(generalStatHelper.factorial(4), 24);
    });
  });
});