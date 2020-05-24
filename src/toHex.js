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

  let hexReminder = 0;
  let outputString = '';
  let valueNew = value;

  if (valueNew < 16) {
    outputString += getSmallHex(valueNew);
  } else {
    while (valueNew > 16) {
      hexReminder = valueNew % 16;
      valueNew = Math.floor(valueNew / 16);
      outputString += getSmallHex(valueNew) + getSmallHex(hexReminder);
    }
  }

  return outputString;
}

function getSmallHex(value) {
  const hexLetters = ['a', 'b', 'c', 'd', 'e', 'f'];
  let hexValue = '';

  if (value < 10) {
    hexValue = '' + value;
  } else if (value < 16) {
    hexValue = hexLetters[value - 10];
  }

  return hexValue;
}

toHex(0);
module.exports = toHex;
