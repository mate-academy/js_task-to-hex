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
  const parse = (number) => {
    switch (number) {
      case 15 :
        return "f";
      case 14 :
        return "e";
      case 13 :
        return "d";
      case 12 :
        return "c";
      case 11 :
        return "b";
      case 10 :
        return "a";
      default:
        return number;
    }
  }
  let result = "";
  if (value < 0 || value > 255) {
    return undefined;
  } else if (value < 16) {
    return result + parse(value);
  } else {
    return result + parse(Math.trunc(value / 16)) + parse(value % 16);
  }
}

module.exports = toHex;
