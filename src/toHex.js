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

  const remainder = [];
  let digit = value;

  const alphabet = {
    '10': 'A',
    '11': 'B',
    '12': 'C',
    '13': 'D',
    '14': 'E',
    '15': 'F',
  };

  while (digit > 0) {
    if (digit % 16 > 0) {
      remainder.push((digit % 16));
    }

    digit = Math.floor(digit / 16);
  }

  const str = remainder.map((item) => {
    if (item >= 10) {
      const convertion = alphabet[item];

      return convertion;
    }

    return item;
  }).reverse().join('');

  return str;
}

module.exports = toHex;
