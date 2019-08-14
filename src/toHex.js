'use strict';

/**
 * The function takes a number and returns
 * its hexadecimal representation as a lower
 * case string. For example 256 is converted
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
  const hexList = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: 'a',
    11: 'b',
    12: 'c',
    13: 'd',
    14: 'e',
    15: 'f',
  };

  let restValue = value;
  const resultToHexList = [];

  while (true) {
    if (Math.floor(restValue / 16) > 0) {
      resultToHexList.push(hexList[Math.floor(restValue % 16)]);
      restValue = Math.floor(restValue / 16);
    } else {
      resultToHexList.push(hexList[Math.floor(restValue % 16)]);
      break;
    }
  }
  return resultToHexList.reverse().join('');
}

module.exports = toHex;
