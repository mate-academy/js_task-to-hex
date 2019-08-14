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
  let changenValue = value;
  const remaindersStorage = [];
  while (changenValue > 1) {
    switch (changenValue % 16) {
      case 10 :
        remaindersStorage.push('a');
        break;

      case 11:
        remaindersStorage.push('b');
        break;

      case 12:
        remaindersStorage.push('c');
        break;

      case 13:
        remaindersStorage.push('d');
        break;

      case 14:
        remaindersStorage.push('e');
        break;

      case 15:
        remaindersStorage.push('f');
        break;

      default :
        remaindersStorage.push(Math.floor(changenValue % 16));
        break;
    }
    changenValue /= 16;
  }
  return value === 0 ? '0' : remaindersStorage.reverse().join('');
}

module.exports = toHex;
