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
  // write code here
  if (value === 0) {
    return '0';
  }

  let result = '';
  let innerValue = value;

  while (innerValue % 16 !== 0) {
    const num = innerValue % 16;

    switch (num) {
      case 10:
        result = 'a' + result;
        break;
      case 11:
        result = 'b' + result;
        break;
      case 12:
        result = 'c' + result;
        break;
      case 13:
        result = 'd' + result;
        break;
      case 14:
        result = 'e' + result;
        break;
      case 15:
        result = 'f' + result;
        break;
      default:
        result = num + result;
    }
    innerValue = Math.trunc(innerValue / 16);
  }

  return result;
}

module.exports = toHex;
