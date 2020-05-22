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
  let number = value;
  const remainder = [];
  const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
  let hex = '';

  while (number > 0) {
    remainder.unshift(number % 16);
    number = Math.floor(number / 16);
  }

  if (remainder.length === 0) {
    return '0';
  }

  for (const item of remainder) {
    hex += hexArray[item];
  }

  return hex;
}

module.exports = toHex;
