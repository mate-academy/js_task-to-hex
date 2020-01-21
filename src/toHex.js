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
  // write code here

  if (value === 0) {
    return '0';
  }

  let remainders = [];
  let dividedValue = value;

  while (dividedValue) {
    remainders.push(dividedValue % 16);
    dividedValue = Math.trunc(dividedValue / 16);
  }

  remainders = remainders.map(item => {
    if (item === 10) {
      return 'a';
    } else if (item === 11) {
      return 'b';
    } else if (item === 12) {
      return 'c';
    } else if (item === 13) {
      return 'd';
    } else if (item === 14) {
      return 'e';
    } else if (item === 15) {
      return 'f';
    } else {
      return item;
    }
  });

  const hexCode = remainders.reverse().join('');

  return hexCode;
}

module.exports = toHex;
