const lib = require('../dist/lib');

const {
  currency,
  randomNum,
  randomColor,
  generateStarScore,
  parseUrlParams
} = lib.string;

var assert = require('assert');
describe('String', function() {
  describe('#currency()', function() {
    it('should return 123,456 when the value is 123456', function() {
      assert.equal(currency(123456), '123,456');
    });
  });

  describe('#randomNum(3)', function() {
    it('should return string of length 3  when the value is 3', function() {
      assert.equal(randomNum(3).length, 3);
    });
  });

  describe('#randomColor()', function() {
    it('should return hex color  when the value length is 7', function() {
      assert.equal(randomColor().length, 7);
    });
  });

  describe('#generateStarScore()', function() {
    it('should return ★★★★★  when the value 5', function() {
      assert.equal(generateStarScore(5), '★★★★★');
    });
  });

  describe('#parseUrlParams()', function() {
    it('should return 1  when the value "?type=1"', function() {
      const qs = parseUrlParams('?type=1')
      assert.equal(qs.get('type'), 1);
    });
  });
});
