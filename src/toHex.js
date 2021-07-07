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
const toHex = (value) => {
  let color = value;
  const hex = [];
  const letters = ['a', 'b', 'c', 'd', 'e', 'f'];

  do {
    const remainder = color % 16;
    color = Math.floor(color / 16);
    if (remainder > 9) {
      hex.unshift(letters[remainder - 10]);
      continue;
    }
    hex.unshift(remainder);
  } while (color);

  return hex.join('');
};
module.exports = toHex;
