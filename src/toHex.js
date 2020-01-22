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
  let resultHex = '';
  let decimal = value;

  if (decimal === 0) {
    return '0';
  }

  while (decimal > 0) {
    const REMAINDER = (decimal % 16);

    switch (REMAINDER) {
      case 10:
        hex += 'a';
        break;
      case 11:
        hex += 'b';
        break;
      case 12:
        hex += 'c';
        break;
      case 13:
        hex += 'd';
        break;
      case 14:
        hex += 'e';
        break;
      case 15:
        hex += 'f';
        break;
      default:
        hex += (decimal % 16);
    }
    decimal = Math.trunc(decimal / 16);
  }

  for (let i = hex.length - 1; i >= 0; i--) {
    resultHex += hex[i];
  }

  return resultHex;
}

module.exports = toHex;
