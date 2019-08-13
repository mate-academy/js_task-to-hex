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
  const result = [];
  let number = value;
  if (number === 0) {
    return '0';
  }
  while (number >= 0) {
    if (Math.floor(number / 16) > 0) {
      result.push(number % 16);
      number = Math.floor(number / 16);
    }
    result.push(number % 16);
    break;
  }
  return result
    .reverse()
    .map(elem => {
      switch (elem) {
        case 10:
          return 'a';
        case 11:
          return 'b';
        case 12:
          return 'c';
        case 13:
          return 'd';
        case 14:
          return 'e';
        case 15:
          return 'f';
        default:
          return elem;
      }
    })
    .join('');
}

module.exports = toHex;
