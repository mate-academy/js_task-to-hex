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
  let remainders = [];
  let hexadecimalRepresentation = {
    10: 'a',
    11: 'b',
    12: 'c',
    13: 'd',
    14: 'e',
    15: 'f'
  }
  for (let i = 0; ; i++) {
    if (Math.floor(value / 16) === 0) {
      remainders.unshift(value % 16);
      break;
    }
    value % 16 >= 10 ? remainders.unshift(hexadecimalRepresentation[`${value % 16}`]) : remainders.unshift(value % 16);
    value = Math.floor(value / 16);
  }
  
  return remainders.join("");
}

module.exports = toHex;
