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
  // write code here
  if (value < 10) {
    return value + '';
  }

  const result = [];

  for (let i = value; i > 0; i = parseInt(i / 16, 10)) {
    result.push(i % 16);
  }

  for (let i = 0; i < result.length; i += 1) {
    switch (result[i]) {
      case 10:
        result[i] = 'a';
        break;
      case 11:
        result[i] = 'b';
        break;
      case 12:
        result[i] = 'c';
        break;
      case 13:
        result[i] = 'd';
        break;
      case 14:
        result[i] = 'e';
        break;
      case 15:
        result[i] = 'f';
        break;
    }
  }

  return result.reverse().join('');
}

module.exports = toHex;
