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
  const literals
  = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'a', 'b', 'c', 'd', 'e', 'f'];

  let hexCode = '';
  let res = value;

  do {
    const divisionedValus = res / 16;
    const remainder = (res - (Math.trunc(divisionedValus) * 16));

    hexCode = hexCode + literals[remainder];
    res = Math.trunc(divisionedValus);
  } while (res > 0);

  return hexCode.split('').reverse().join('');
}

module.exports = toHex;
