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
  let wholeNum = value;
  let hexNum = '';
  const hexStr = '0123456789abcdef';

  if (value === 0) {
    return '0';
  }

  while (wholeNum > 0) {
    hexNum += hexStr[wholeNum % 16];
    wholeNum = Math.floor(wholeNum / 16);
  }

  return hexNum.split('').reverse().join('');
}

module.exports = toHex;
