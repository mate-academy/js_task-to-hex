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
  const numbers = [];
  let balance = value;

  while (balance > 0) {
    const divionBalance = balance % 16;
    balance = Math.trunc(balance / 16);
    switch (divionBalance) {
      case 10:
        numbers.push('a');
        break;
      case 11:
        numbers.push('b');
        break;
      case 12:
        numbers.push('c');
        break;
      case 13:
        numbers.push('d');
        break;
      case 14:
        numbers.push('e');
        break;
      case 15:
        numbers.push('f');
        break;
      default:
        numbers.push(divionBalance);
    }
  }
  const stringNumber = String(numbers.reverse().join(''));
  return (value === 0) ? '0' : stringNumber;
}

module.exports = toHex;
