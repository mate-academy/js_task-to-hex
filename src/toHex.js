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
  // write code here
  let decimalNumber = value;
  const hexArray = [];

  if (decimalNumber === 0) {
    hexArray.push(decimalNumber);
  }

  while (decimalNumber > 0) {
    const hexDigit = decimalNumber % 16;

    switch (hexDigit) {
      case 15 :
        hexArray.unshift('f');
        break;
      case 14 :
        hexArray.unshift('e');
        break;
      case 13 :
        hexArray.unshift('d');
        break;
      case 12 :
        hexArray.unshift('c');
        break;
      case 11 :
        hexArray.unshift('b');
        break;
      case 10 :
        hexArray.unshift('a');
        break;
      default :
        hexArray.unshift(hexDigit);
    }

    decimalNumber = Math.floor(decimalNumber / 16);
  }

  return hexArray.join('');
}

module.exports = toHex;
