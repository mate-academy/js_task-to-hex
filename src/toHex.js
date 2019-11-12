'use strict';

/**
 * The function takes a number and returns
 * its hexadecimal representation as a lower
 * case string. For example 255 is converted
 * то 'ff'. You should not use .toString() method.
 *
 * Conversion algorithm:
 * Divide the number by 16 with the remainder
 * 50/16 = 3 (remainder 2)
 * 3/16 = 0 (remainder 3)
 * When the whole part is 0, then we take all
 * the remainders in the reverse order
 *
 * 50 === '32'
 *
 * @param {number} value
 *
 * @return {string}
 */
function toHex(value) {
  const hex = 16;
  const container = [];
  const hexLetters = ['a', 'b', 'c', 'd', 'e', 'f'];
  let numberDecimal = value;

  if (numberDecimal !== 0) {
    while (Math.floor(numberDecimal) > 0) {
      const remainder = numberDecimal % hex;

      if (remainder >= 10) {
        container.push(hexLetters[remainder - 10]);
      } else {
        container.push(Math.floor(remainder));
      }

      numberDecimal /= hex;
    }

    return container.reverse().join('');
  }
  return '0';
}

module.exports = toHex;
