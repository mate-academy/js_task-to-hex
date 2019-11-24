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
  const result = [];
  let toHexNum = value;
  let num = 0;
  while (Math.trunc(toHexNum) !== 0) {
    num = Math.trunc(toHexNum % 16);
    toHexNum = Math.trunc(toHexNum / 16);
    if (num < 10) {
      result.push(num);
      continue;
    }
    result.push(String.fromCharCode(num + 87));
  }
  return (result.reverse().join(''));
}

module.exports = toHex;
