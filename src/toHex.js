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
  const valueToHex = value;
  const hexedList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    'a', 'b', 'c', 'd', 'e', 'f'];

  if (valueToHex === 0) {
    return '0';
  }

  if (value <= 16) {
    return hexedList[valueToHex];
  }

  const remainder = hexedList[Math.floor(valueToHex / 16)];
  const divided = hexedList[value % 16];

  return remainder + divided;
}

module.exports = toHex;
