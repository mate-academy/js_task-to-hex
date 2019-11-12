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
  const converseToHex = [];
  if (value === 0) {
    return '0';
  }

  let inputValue = value;
  const hexadecimal = 16;
  const numberToLetter = 87;

  while (inputValue > 0) {
    converseToHex.push(inputValue % hexadecimal);
    inputValue = Math.floor(inputValue / hexadecimal);
  }

  const hex = converseToHex.reverse();
  const result = [];

  for (let i = 0; i < hex.length; i++) {
    if (hex[i] < 10) {
      result.push(hex[i]);
    } else {
      result.push(String.fromCharCode(hex[i] + numberToLetter));
    }
  }
  return result.join('');
}

module.exports = toHex;
