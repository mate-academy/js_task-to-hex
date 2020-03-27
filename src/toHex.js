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
  const hexNum = {
    10: 'a', 11: 'b', 12: 'c', 13: 'd', 14: 'e', 15: 'f',
  };

  let num10 = value;
  const resArr = [];
  let res = '';

  while (true) {
    resArr.unshift(num10 % 16);

    if (num10 % 16 === num10) {
      break;
    }

    num10 = Math.trunc(num10 / 16);
  }

  for (let i = 0; i < resArr.length; i++) {
    if (resArr[i] < 10) {
      resArr[i] += '';
    } else {
      resArr[i] = hexNum[resArr[i]];
    }

    res += resArr[i];
  }

  return res;
}

module.exports = toHex;
