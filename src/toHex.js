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
  if (value === 0 || value === undefined) {
    return '0';
  }

  const numbers = [];
  let hexValue = '';
  let decimalValue = value;
  const hexMapping = new Map();
  hexMapping.set(10, 'a');
  hexMapping.set(11, 'b');
  hexMapping.set(12, 'c');
  hexMapping.set(13, 'd');
  hexMapping.set(14, 'e');
  hexMapping.set(15, 'f');

  while (decimalValue / 16 !== 0) {
    const remainder = decimalValue % 16;
    if (remainder < 10) {
      numbers.push(remainder);
    } else {
      numbers.push(hexMapping.get(remainder));
    }
    decimalValue = ~~(decimalValue / 16);
  }

  for (let i = numbers.length - 1; i >= 0; i--) {
    const number = numbers[i];
    hexValue += number;
  }

  return hexValue;
}

module.exports = toHex;
