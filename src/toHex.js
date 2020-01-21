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
const hexModel = {
  10: 'a',
  11: 'b',
  12: 'c',
  13: 'd',
  14: 'e',
  15: 'f',
};

function toHex(value) {
  let value1 = value;
  let integerPart = 0;
  let remainders = [];

  do {
    integerPart = Math.trunc(value1 / 16);
    remainders.push(value1 % 16);
    value1 = integerPart;
  } while (integerPart > 0);

  remainders = remainders.reverse().map(elem => {
    if (hexModel[elem]) {
      return hexModel[elem];
    } else {
      return elem;
    }
  });

  return remainders.join('');
}

module.exports = toHex;
