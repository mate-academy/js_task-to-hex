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
  const mapTable = new Map([
    [10, 'a'],
    [11, 'b'],
    [12, 'c'],
    [13, 'd'],
    [14, 'e'],
    [15, 'f']
  ]);
  let hexValue = '';
  let hexValueReversed = '';
  let wholePart = value;

  do {
    const remainder = wholePart % 16;

    if (remainder < 10) {
      hexValue += remainder;
    } else {
      hexValue += mapTable.get(remainder);
    }

    wholePart = Math.floor(wholePart / 16);
  } while (wholePart);

  for (let i = hexValue.length - 1; i >= 0; i--) {
    hexValueReversed += hexValue[i];
  }

  return hexValueReversed;
}

module.exports = toHex;
