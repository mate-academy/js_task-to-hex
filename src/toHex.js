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
  const digitHex = '0123456789abcdef';
  const floorNum = Math.floor(value / 16);
  if (value > 16) {
    return `${digitHex[floorNum]}${digitHex[value % 16]}`;
  } else {
    return digitHex[value / 16];
  }
}

module.exports = toHex;
