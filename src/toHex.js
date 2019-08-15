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
  const result = [];
  const divisor = 16;
  let newVal = value;

  while (newVal !== 0) {
    const divided = newVal % divisor;
    result.unshift(divided < 10 ? divided : String.fromCharCode(divided + 87));
    newVal = Math.floor(newVal / divisor);
  }

  return result.length === 0 ? '0' : result.join('');
}

module.exports = toHex;
