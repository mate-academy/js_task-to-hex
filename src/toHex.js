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
  const hexLetters = {
    10: 'a',
    11: 'b',
    12: 'c',
    13: 'd',
    14: 'e',
    15: 'f',
  };

  let num = value;
  let rest = 0;
  let result = 0;
  const hexArr = [];

  if (value === 0) {
    return '0';
  }

  while (num > 0) {
    rest = num % 16;
    result = num / 16;
    result = Math.trunc(result);

    for (let j = 10; j <= 15; j++) {
      if (rest === j) {
        rest = hexLetters[j];
      }
    }
    hexArr.push(rest);
    num = result;
  }

  return hexArr.reverse().join('');
}

module.exports = toHex;
