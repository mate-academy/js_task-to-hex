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
  const hexSymbols = ' 123456789abcdef'.split('');
  const hexColor = [];
  let iterations = value;

  if (iterations === 0) {
    return '0';
  }

  while (iterations) {
    hexColor.push(iterations % 16);
    iterations = Math.floor(iterations / 16);
  }

  return hexColor.map(elem => hexSymbols[elem]).reverse().join('');
}

module.exports = toHex;
