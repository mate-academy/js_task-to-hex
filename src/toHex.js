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
  if (value === 0) {
    return '0';
  }

  let result = '';
  let decimal = value;
  while (decimal > 0) {
    result = toHexChar(decimal % 16) + result;
    decimal = Math.floor(decimal / 16);
  }

  return result;
}

function toHexChar(char) {
  if (char < 10) {
    return char;
  }

  switch (char) {
    case 10: return 'A';
    case 11: return 'B';
    case 12: return 'C';
    case 13: return 'D';
    case 14: return 'E';
    case 15: return 'F';
  }
}

module.exports = toHex;
