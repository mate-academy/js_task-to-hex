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
  const hexArray = [];
  const hexNums = '0123456789abcdef'.split('');
  let startNumber = value;

  if (startNumber === 0) {
    return '0';
  }

  while (startNumber >= 0) {
    if (Math.floor(startNumber / 16) > 0) {
      hexArray.push(startNumber % 16);
      startNumber = Math.floor(startNumber / 16);
    }
    hexArray.push(startNumber % 16);
    break;
  }

  return hexArray
    .map(element => hexNums[element]).reverse().join('');
}

module.exports = toHex;
