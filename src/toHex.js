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
  if (value === 0) {
    return '0';
  }

  let result = '';
  let number = value;

  while (number > 0) {
    switch (number % 16) {
      case 10:
        result += 'a';
        break;
      case 11:
        result += 'b';
        break;
      case 12:
        result += 'c';
        break;
      case 13:
        result += 'd';
        break;
      case 14:
        result += 'e';
        break;
      case 15:
        result += 'f';
        break;
      default:
        result += number % 16;
    }
    number = Math.floor(number / 16);
  }

  return result.split('').reverse().join('');
};

module.exports = toHex;
