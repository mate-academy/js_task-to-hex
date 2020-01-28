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
  const hex = {
    10: 'a',
    11: 'b',
    12: 'c',
    13: 'd',
    14: 'e',
    15: 'f',
  };

  if (value === 0) {
    return '0';
  }

  let remainder = value % 16;
  let str = '';
  let newValue = value;

  while (remainder !== 0) {
    if (remainder < 10) {
      str += remainder;
    } else {
      str += hex[remainder];
    }
    newValue = Math.trunc(newValue / 16);
    remainder = newValue % 16;
  }

  let newString = '';

  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }

  return newString;
}

toHex(205);

module.exports = toHex;
