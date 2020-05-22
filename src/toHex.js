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
  let devided;

  if (value < 1) {
    return '0';
  } else if (value > 255) {
    devided = 255 / 16;
  } else {
    devided = value / 16;
  }

  return `${getHex(Math.floor(devided))}
    ${getHex((devided - Math.floor(devided)) * 16)}`;
}

function getHex(num) {
  let hex;

  switch (num) {
    case 10: hex = 'a'; break;
    case 11: hex = 'b'; break;
    case 12: hex = 'c'; break;
    case 13: hex = 'd'; break;
    case 14: hex = 'e'; break;
    case 15: hex = 'f'; break;
    default: hex = num;
  }

  return hex;
}

module.exports = toHex;
