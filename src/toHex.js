'use strict';

function toHex(value) {
  if (!value) {
    return '0';
  }

  const hexNumbers = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: 'a',
    11: 'b',
    12: 'c',
    13: 'd',
    14: 'e',
    15: 'f',
  };

  const firstHexNumber = hexNumbers[Math.floor(value / 16)];
  const secondtHexNumber = hexNumbers[value % 16];

  return firstHexNumber + secondtHexNumber;
}

module.exports = toHex;
