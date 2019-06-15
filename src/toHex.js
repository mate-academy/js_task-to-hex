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
  // write code here
  let currentValue = value;
  const hexValueArr = [];
  let hexValue = '0';

  const hexValuesAboveNine = {
    10: 'a',
    11: 'b',
    12: 'c',
    13: 'd',
    14: 'e',
    15: 'f',
  };

  while (currentValue > 0) {
    let currentRemainder = (currentValue % 16);
    currentValue = (currentValue - currentRemainder) / 16;

    if (currentRemainder > 9) {
      for (let i = 10; i <= 15; i++) {
        if (currentRemainder === i) {
          currentRemainder = hexValuesAboveNine[i];
        }
      }
    }

    hexValueArr.unshift(currentRemainder);
    hexValue = hexValueArr.join('');
  }

  return hexValue;
}

module.exports = toHex;

console.log(toHex(42));
