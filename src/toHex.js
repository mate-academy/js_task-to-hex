'use strict';

/**
 * The function takes a number and returns a value - the record of this number in the hexadecimal number system
 * .toString(16) cannot be used
 *
 * Divide the number by 16 with the remainder
 * 50/16 = 3 (remainder 2)
 * 3/16 = 0 (remainder 3)
 * When the whole part is 0, then we take all the balances in the reverse order
 * 50 === 0x32
 *
 *
 * @param {number} value
 *
 * @return {string}
 */
function toHex(value) {
  // write code here
}

module.exports = toHex;
