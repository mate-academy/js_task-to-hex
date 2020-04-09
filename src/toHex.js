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
  let elements = value;
  const restArr = [];
  let hex = '';
  const hexElem = {
    10: 'a', 11: 'b', 12: 'c', 13: 'd', 14: 'e', 15: 'f',
  };

  while (true) {
    restArr.unshift(elements % 16);

    if (elements % 16 === elements) {
      break;
    }
    elements = Math.trunc(elements / 16);
  }

  for (let i = 0; i < restArr.length; i++) {
    restArr[i] < 10 ? hex += (restArr[i] + '') : hex += hexElem[restArr[i]];
  }

  return hex;
}

module.exports = toHex;
