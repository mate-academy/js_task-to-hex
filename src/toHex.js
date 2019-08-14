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
  let num = value;
  const result = [];

  while (num > 0) {
    const tempResult = num % 16;

    if (tempResult < 10) {
      result.push(tempResult);
    } else {
      result.push(String.fromCharCode(tempResult + 87));
    }
    num = Math.floor(num / 16);
  }

  if (result.length === 0) {
    return '0';
  }

  return result.reverse().join('');
}

module.exports = toHex;
