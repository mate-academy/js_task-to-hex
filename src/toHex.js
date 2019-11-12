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
  let result = '';
  let number = value;
  const map = '0123456789ABCDEF';

  if (number === 0) {
    return '0';
  } else {
    while (number > 0) {
      result = map[number % 16] + result;
      number = Math.floor(number / 16);
    }
    return result;
  }
}

module.exports = toHex;
