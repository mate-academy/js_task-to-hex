'use strict';

function toHex(value) {
  if (!value) {
    return '0';
  }

  function toHexNumber(number) {
    switch (number) {
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

      default:
        return number + '';
    }
  }

  const firstHexNumber = toHexNumber(Math.floor(value / 16));
  const secondtHexNumber = toHexNumber(value % 16);

  return firstHexNumber + secondtHexNumber;
}

module.exports = toHex;
