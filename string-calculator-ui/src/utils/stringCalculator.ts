// src/utils/stringCalculator.ts

import { parseDelimiters } from './delimiterParser';

export function escapeRegExp(input: string): string {
  return input.replace(/[-^$*+?.()|[\]{}]/g, '\\$&');

}


function splitNumbers(numbers: string, delimiterPattern: RegExp): number[] {
  console.log(`Splitting using pattern: ${delimiterPattern}`);
  const result = numbers.split(delimiterPattern);
  console.log(`Split result: ${result}`);
  return result.map((num) => parseInt(num)).filter((num) => !isNaN(num));
}


export function add(input: string): number {
  input = input.trim().replace(/\r\n|\r/g, '\n');

  if (input === '') {
    return 0;
  }

  const { numbersString, delimiterPattern } = parseDelimiters(input);
  console.log(`Using delimiter pattern: ${delimiterPattern}`);

  const parsedNumbers = splitNumbers(numbersString, delimiterPattern);
  console.log(`Parsed numbers: ${parsedNumbers}`);

  const filteredNumbers = parsedNumbers.filter((num) => num <= 1000);
  return filteredNumbers.reduce((sum, num) => sum + num, 0);
}
