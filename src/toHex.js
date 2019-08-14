'use strict';

/**
 * The function takes a number and returns
 * its hexadecimal representation as a lower
 * case string. For example 256 is converted
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
  const arrOfHexDigits = [];
  let givenNumber = value;
  let tmp = 0;

  if (value !== 0) {
    while (givenNumber !== 0) {
      tmp = givenNumber % 16;

      arrOfHexDigits.push(tmp < 10 ? tmp : String.fromCharCode(tmp + 87));

      givenNumber = Math.floor(givenNumber / 16);
    }
    return arrOfHexDigits.reverse().join('');
  } else {
    return '0';
  }
}

module.exports = toHex;
