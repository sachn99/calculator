// src/tests/stringCalculator.test.ts
import { add } from '../utils/stringCalculator';

test('returns 0 for an empty string', () => {
  expect(add('')).toBe(0);
});

test('returns the number itself when a single number is provided', () => {
  expect(add('1')).toBe(1);
});

test('returns the sum of two numbers separated by a comma', () => {
  expect(add('1,2')).toBe(3);
});

test('returns the sum of multiple numbers separated by commas', () => {
  expect(add('1,2,3,4,5')).toBe(15);
});

test('handles new lines between numbers', () => {
  expect(add('1\n2,3')).toBe(6);
});

test('supports different delimiters specified at the beginning of the string', () => {
  expect(add('//;\n1;2')).toBe(3);
});

test('supports another custom delimiter', () => {
  expect(add('//|\n1|2|3')).toBe(6);
});

test('throws an exception when a negative number is included', () => {
  expect(() => add('1,-2,3')).toThrow('Negative numbers not allowed: -2');
});

test('throws an exception listing all negative numbers when multiple are included', () => {
  expect(() => add('-1,-2,3')).toThrow('Negative numbers not allowed: -1, -2');
});

test('adds numbers when all are positive, even with custom delimiter', () => {
  expect(add('//;\n1;2;3')).toBe(6);
});

test('ignores numbers greater than 1000', () => {
  expect(add('2,1001')).toBe(2);
});

test('includes numbers equal to 1000', () => {
  expect(add('2,1000')).toBe(1002);
});

test('supports delimiters of any length', () => {
  expect(add('//[***]\n1***2***3')).toBe(6);
});

test('supports multiple delimiters', () => {
  expect(add('//[*][%]\n1*2%3')).toBe(6);
});

test('supports multiple delimiters longer than one character', () => {
  expect(add('//[***][%%%]\n1***2%%%3')).toBe(6);
});

test('supports multiple delimiters with special regex characters', () => {
  expect(add('//[***][%%%][+++]\n1***2%%%3+++4')).toBe(10);
});

test('supports delimiters with mixed special regex characters', () => {
  expect(add('//[$$$][.^.][|||]\n1$$$2.^.3|||4')).toBe(10);
});

test('supports single character special delimiters', () => {
  expect(add('//[+]\n1+2+3')).toBe(6);
});

test('adds numbers when all are positive, even with custom delimiter', () => {
  expect(add('//;\n1;2;3')).toBe(6);
});
