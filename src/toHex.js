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
 * 42 / 16 = 2
 * 10 = a
 * 2a
 *
 * 422
 * 422 / 16 = 26 / 16 = 1 10
 * 6
 * @return {string}
 */
function toHex(value) {
  let Hex = '';
  const systemTo16 = [0, 1, 2, 3, 4, 5, 6, 7, 8,
    9, 'A', 'B', 'C', 'D', 'E', 'F'];

  const convertToLetter = function(element) {
    if (element > 9) {
      // eslint-disable-next-line no-param-reassign
      element = systemTo16[element];
    }

    return element;
  };
  let intPart = 0;
  let floatPart = 0;

  if (value === 0) {
    return '0';
  }
  intPart = (value - (value % 16)) / 16;
  intPart = convertToLetter(intPart);
  Hex += intPart + '';
  floatPart = (value % 16);
  floatPart = convertToLetter(floatPart);
  Hex += floatPart + '';

  return Hex;
}

module.exports = toHex;
