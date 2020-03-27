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

  const firstHex = Math.trunc(value / 16);
  const secondHex = ((value / 16) - firstHex) * 16;

  return `${hexNumberConverter(firstHex)}${hexNumberConverter(secondHex)}`;
}

function hexNumberConverter(num) {
  const toHexString = {
    10: 'a',
    11: 'b',
    12: 'c',
    13: 'd',
    14: 'e',
    15: 'f',
  };

  return num > 9 ? toHexString[num] : num;
}

module.exports = toHex;
