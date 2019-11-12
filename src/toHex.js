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
 * @param {number} number
 *
 * @return {string}
 */
function toHex(value) {
  const hexDigits = '0123456789abcdef';
  const hexNumberArr = [];
  let number = value;

  do {
    hexNumberArr.push(hexDigits[number % 16]);
    number = Math.floor(number / 16);
  }
  while (number > 0);

  return hexNumberArr.reverse().join('');
}

module.exports = toHex;
