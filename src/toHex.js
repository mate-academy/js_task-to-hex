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
  const hex = '0123456789abcdef';
  const hexNum = [];
  let part;
  let valuePoint = value;

  while (valuePoint) {
    part = valuePoint % 16;
    hexNum.unshift(hex[part] || part);
    valuePoint = Math.floor(valuePoint / 16);
  }

  return value !== 0 ? hexNum.join('') : '0';
}

module.exports = toHex;
