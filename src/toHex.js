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
  if (value === 0) {
    return '0';
  }
  let decToNex = '';
  let testValue = value;

  while (testValue > 0) {
    switch (testValue % 16) {
      case 10:
        decToNex = 'a' + decToNex;
        break;

      case 11:
        decToNex = 'b' + decToNex;
        break;

      case 12:
        decToNex = 'c' + decToNex;
        break;

      case 13:
        decToNex = 'd' + decToNex;
        break;

      case 14:
        decToNex = 'e' + decToNex;
        break;

      case 15:
        decToNex = 'f' + decToNex;
        break;

      default:
        decToNex = String(testValue % 16) + decToNex;
    }

    testValue = (testValue - testValue % 16) / 16;
  }

  return decToNex;
}

module.exports = toHex;
