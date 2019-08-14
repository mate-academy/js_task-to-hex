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
  let hexNumberInString = '';
  let number = value;

  do {
    let remainder = number % 16;

    if (remainder) {
      switch (remainder) {
        case 16:
          remainder = '10';
          break;
        case 15:
          remainder = 'f';
          break;
        case 14:
          remainder = 'e';
          break;
        case 13:
          remainder = 'd';
          break;
        case 12:
          remainder = 'c';
          break;
        case 11:
          remainder = 'b';
          break;
        case 10:
          remainder = 'a';
          break;
      }
    }
    hexNumberInString = `${remainder}${hexNumberInString}`;
    number = Math.trunc(number / 16);
  } while (number);

  return hexNumberInString;
}

module.exports = toHex;
