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
  const hexStr = '0123456789abcdef';
  let low = 0;
  let high = 0;
  let hex = '';

  (value < 0) ? low = 0 : low = value % 16;
  (value < 0) ? high = 0 : high = (value - low) / 16;

  if (value >= 16) {
    hex = '' + hexStr.charAt(high) + hexStr.charAt(low);
  } else {
    hex = '' + hexStr.charAt(low);
  }

  return hex;
}

module.exports = toHex;
