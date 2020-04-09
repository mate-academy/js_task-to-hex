'use strict';

const toHex = require('./toHex');

test(`Should return hexadecimal number string`, () => {
  expect(toHex(42).toLowerCase())
    .toBe('2a');
});

test(`Should return zero`, () => {
  expect(toHex(1651).toLowerCase())
    .toBe('673');
});

test(`Should return zero`, () => {
  expect(toHex(3215).toLowerCase())
    .toBe('c8f');
});
