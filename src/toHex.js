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

  const hexValue = {
    10: 'a',
    11: 'b',
    12: 'c',
    13: 'd',
    14: 'e',
    15: 'f',
  };

  let temp = value;
  let hexString = '';
  let hexNumber;
  let modulo;

  while (temp > 0) {
    modulo = temp % 16;
    hexNumber = modulo >= 10 ? hexValue[modulo] : modulo;
    hexString = hexNumber + hexString;
    temp = ~~(temp / 16);
  }

  return hexString;
}

module.exports = toHex;
