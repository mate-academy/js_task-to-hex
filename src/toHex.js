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
    return `${value}`;
  };

  let countValue = value;

  const divide = [];

  while (Math.floor(countValue) !== 0) {
    const countValueClone = Math.floor(countValue);
    const takeDivide = Math.floor(countValue /= 16);
    if (takeDivide === 0) {
      divide.push(countValueClone);
    } else {
      divide.push(value - (takeDivide * 16));
    }
  }

  return (
    divide
      .reverse()
      .map(num => {
        if (num > 9) {
          return String.fromCharCode(num + 87);
        } else {
          return num;
        }
      })
      .join('')
  );
}

module.exports = toHex;
