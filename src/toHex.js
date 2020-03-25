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
  if (!value) {
    return '0';
  }

  let str = '';
  const obj = {
    10: 'a',
    11: 'b',
    12: 'c',
    13: 'd',
    14: 'e',
    15: 'f',
  };
  const reminder = value % 16;
  const valueInt = parseInt(value / 16);

  if (reminder > 9) {
    if (valueInt > 9) {
      str = str + obj[valueInt] + obj[reminder];
    } else {
      str = str + valueInt + obj[reminder];
    }
  } else if (reminder === 0 && valueInt > 9) {
    str = str + obj[valueInt] + reminder;
  } else {
    str = str + valueInt + reminder;
  }

  return str;
}

module.exports = toHex;
