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
  const hexArr = [];
  let num = value;
  const hexNums = '0123456789abcdef'.split('');

  if (num === 0) {
    return '0';
  }

  while (num >= 0) {
    if (Math.floor(num / 16) > 0) {
      hexArr.push(num % 16);
      num = Math.floor(num / 16);
    }
    hexArr.push(num % 16);
    break;
  }

  return hexArr
    .map(element => hexNums[element])
    .reverse()
    .join('');
}

module.exports = toHex;
