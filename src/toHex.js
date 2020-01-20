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

const hexNumbers = {
  '10': 'a',
  '11': 'b',
  '12': 'c',
  '13': 'd',
  '14': 'e',
  '15': 'f',
};

function toHex(value) {
  if (!value) {
    return '0';
  }

  let resultReverse = '';

  let remainder;
  let newValue = value;

  while (newValue > 0) {
    remainder = newValue % 16;
    newValue = Math.floor(newValue / 16);

    if (remainder <= 9) {
      resultReverse += remainder;
    } else if (remainder > 9 && remainder <= 15) {
      resultReverse += hexNumbers[remainder];
    }
  }

  return resultReverse.split('').reverse().join('');
}

module.exports = toHex;
