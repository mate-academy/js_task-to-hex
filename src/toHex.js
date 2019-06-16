'use strict';

/**
 * The function takes a number and returns
 * its hexadecimal representation as a lower
 * case string. For example 256 is converted
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
  let result = '0';
  for (let i = 0; i < value / 16; i++) {
    if (value % 16 === 10) {
      result = i + 'a';
    } else if (value % 16 === 11) {
      result = i + 'b';
    } else if (value % 16 === 12) {
      result = i + 'c';
    } else if (value % 16 === 13) {
      result = i + 'd';
    } else if (value % 16 === 14) {
      result = i + 'e';
    } else if (value % 16 === 15) {
      result = i + 'f';
    }
  }
  return result;
}

module.exports = toHex;
