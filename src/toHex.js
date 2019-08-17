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
  if (value < 1) {
    return '0';
  }

  let converted = '';

  const firstTimeDivide = Math.floor(value % 16);
  const seconTimedDivide = Math.floor(value / 16) % 16;

  switch (seconTimedDivide) {
    case 0:
      converted += '';
      break;

    case 10:
      converted += 'a';
      break;

    case 11:
      converted += 'b';
      break;

    case 12:
      converted += 'c';
      break;

    case 13:
      converted += 'd';
      break;

    case 14:
      converted += 'e';
      break;

    case 15:
      converted += 'f';
      break;

    default:
      converted += seconTimedDivide;
  }

  switch (firstTimeDivide) {
    case 10:
      converted += 'a';
      break;

    case 11:
      converted += 'b';
      break;

    case 12:
      converted += 'c';
      break;

    case 13:
      converted += 'd';
      break;

    case 14:
      converted += 'e';
      break;

    case 15:
      converted += 'f';
      break;

    default:
      converted += firstTimeDivide;
  }

  return converted;
}

module.exports = toHex;
