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

  let number = value;
  let remainder = 0;
  let remainderStr = '';
  let hexStr = '';
  const hexDecimals = {
    10: 'a',
    11: 'b',
    12: 'c',
    13: 'd',
    14: 'e',
    15: 'f',
  };

  while (number >= 1) {
    remainder = number % 16;
    number = Math.floor(number / 16);

    if (remainder < 10) {
      remainderStr += remainder;
    } else {
      remainderStr += hexDecimals[remainder];
    }
  }

  for (let i = remainderStr.length - 1; i >= 0; i--) {
    hexStr += remainderStr[i];
  }

  return hexStr;
}

module.exports = toHex;
