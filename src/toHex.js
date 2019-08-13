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
  const hexArray = [];
  const hexLetters = ['a', 'b', 'c', 'd', 'e', 'f'];
  let remainder = 0;
  let temp = value;
  if (value === 0) {
    return '0';
  }
  for (let i = 0; i <= temp; i++) {
    remainder = temp % 16;
    temp = parseInt(temp / 16);
    if (remainder > 9) {
      hexArray.push(hexLetters[remainder - 10]);
    } else {
      hexArray.push(remainder);
    }
  }
  return hexArray.reverse().join('');
}

module.exports = toHex;
