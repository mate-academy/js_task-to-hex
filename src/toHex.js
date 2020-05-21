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
  let hex = '';
  let num;

  if (value === 0) {
    return '0';
  }
  num = value / 16 >> 0;
  hex += num;
  num = value % 16;

  switch (num) {
    case 10:
      num = 'a';
      break;
    case 11:
      num = 'b';
      break;
    case 12:
      num = 'c';
      break;
    case 13:
      num = 'd';
      break;
    case 14:
      num = 'e';
      break;
    case 15:
      num = 'f';
      break;
    default:
  }
  hex += num;

  return hex;
}

module.exports = toHex;
