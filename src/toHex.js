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

  const hexLetters = {
    10: 'a',
    11: 'b',
    12: 'c',
    13: 'd',
    14: 'e',
    15: 'f',
  };

  let hexColor = '';

  const hexSixteenth = Math.floor(value / 16);

  if (hexSixteenth < 10) {
    hexColor += hexSixteenth;
  } else {
    hexColor += hexLetters[hexSixteenth];
  }

  const hexOnes = value % 16;

  if (hexOnes < 10) {
    hexColor += hexOnes;
  } else {
    hexColor += hexLetters[hexOnes];
  }

  return hexColor;
}

module.exports = toHex;
