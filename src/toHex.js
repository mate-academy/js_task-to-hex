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
  const num1 = Math.floor(value / 16);
  const num2 = value % 16;
  let hex = '';
  if ((num1 - num2) === 0) {
    return num1 + '';
  }

  if (num1 === 10) {
    hex += 'a';
  } else if (num1 === 11) {
    hex += 'b';
  } else if (num1 === 12) {
    hex += 'c';
  } else if (num1 === 13) {
    hex += 'd';
  } else if (num1 === 14) {
    hex += 'e';
  } else if (num1 === 15) {
    hex += 'f';
  }
  for (let i = 0; i <= 9; i++) {
    if (num1 === i) {
      hex += i + '';
    }
  }

  if (num2 === 10) {
    hex += 'a';
  } else if (num2 === 11) {
    hex += 'b';
  } else if (num2 === 12) {
    hex += 'c';
  } else if (num2 === 13) {
    hex += 'd';
  } else if (num2 === 14) {
    hex += 'e';
  } else if (num2 === 15) {
    hex += 'f';
  }
  for (let i = 0; i <= 9; i++) {
    if (num2 === i) {
      hex += i + '';
    }
  }

  return hex;
}

module.exports = toHex;
