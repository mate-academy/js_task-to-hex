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
  // eslint-disable-next-line
  const hexSymbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  let decimal = value;
  const hexNumber = [];
  let i = 0;

  while (decimal > 16) {
    hexNumber[i] = hexSymbols[Math.floor(decimal / 16)];
    decimal = decimal % 16;
    i++;
  }
  hexNumber[i] = hexSymbols[Math.floor(decimal)];

  return hexNumber.join('');
}

module.exports = toHex;
