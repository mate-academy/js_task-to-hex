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
  const result = [];
  let number = value;
  let remainder;

  while (number !== 0) {
    remainder = number % 16;
    result.push(convertDigit(remainder));
    number = (number - remainder) / 16;
  }

  return result.reverse().join('') || '0';
}

const convertDigit = digit => {
  if (digit < 10) {
    return digit + '';
  }

  switch (digit) {
    case 10:
      return 'a';
    case 11:
      return 'b';
    case 12:
      return 'c';
    case 13:
      return 'd';
    case 14:
      return 'e';
    case 15:
      return 'f';
  }
};

module.exports = toHex;
