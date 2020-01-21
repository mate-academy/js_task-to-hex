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
  if (value === 0) {
    return '0';
  }

  const hexVariableArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    'a', 'b', 'c', 'd', 'e', 'f'];
  const hexNum = value / 16;
  const hexCeilPart = Math.trunc(hexNum);
  let hexadecimal = '';
  let hexRemaindPart = '' + hexNum.toFixed(1);

  hexRemaindPart = hexRemaindPart[hexRemaindPart.length - 1];

  if (hexCeilPart < 9) {
    hexadecimal += hexCeilPart;
  } else {
    hexadecimal += hexVariableArr[hexCeilPart + 1];
  }

  if (hexRemaindPart === 0) {
    hexadecimal += hexRemaindPart;
  } else {
    hexadecimal += hexVariableArr[hexVariableArr.length - hexRemaindPart];
  }

  return hexadecimal;
}

module.exports = toHex;
