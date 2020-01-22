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
  let hex = '';
  let resultHex = '';
  let decimal = value;
  const remaind = {
    10: 'a',
    11: 'b',
    12: 'c',
    13: 'd',
    14: 'e',
    15: 'f',
  };

  if (decimal === 0) {
    return '0';
  }

  while (decimal > 0) {
    const remainder = (decimal % 16);

    if (remainder >= 10) {
      hex += remaind[remainder];
    } else {
      hex += (decimal % 16);
    }
    decimal = Math.trunc(decimal / 16);
  }

  for (let i = hex.length - 1; i >= 0; i--) {
    resultHex += hex[i];
  }

  return resultHex;
}

module.exports = toHex;
