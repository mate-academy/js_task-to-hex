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
  const res = [];
  let dec = value;

  if (dec === 0) {
    return '0';
  }

  while (dec !== 0) {
    res.push(dec % 16);
    dec = Math.floor(dec / 16);
  }

  for (let i = 0; i < res.length; i++) {
    switch (res[i]) {
      case 10:
        res[i] = 'A';
        break;
      case 11:
        res[i] = 'B';
        break;
      case 12:
        res[i] = 'C';
        break;
      case 13:
        res[i] = 'D';
        break;
      case 14:
        res[i] = 'E';
        break;
      case 15:
        res[i] = 'F';
        break;
    }
  }

  return res.reverse().join('');
}

module.exports = toHex;
