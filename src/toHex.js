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
  if (value === 0) {
    return String(value);
  }

  const hex = [];
  let operateValue = 0;
  let convertibleValue = value;
  const letterDesignations = new Map([
    [10, 'A'],
    [11, 'B'],
    [12, 'C'],
    [13, 'D'],
    [14, 'E'],
    [15, 'F'],
  ]);

  while (convertibleValue > 0) {
    operateValue = convertibleValue - (Math.trunc(value / 16) * 16);
    convertibleValue = Math.trunc(convertibleValue / 16);

    if (operateValue >= 10) {
      hex.unshift(letterDesignations.get(operateValue));
    } else {
      hex.unshift(operateValue);
    }

    if (convertibleValue < 15) {
      convertibleValue = convertibleValue % 16;

      if (convertibleValue >= 10) {
        hex.unshift(letterDesignations.get(convertibleValue));
      } else {
        hex.unshift(convertibleValue);
      }
      convertibleValue = 0;
    }
  }

  return hex.join('');
}

module.exports = toHex;
