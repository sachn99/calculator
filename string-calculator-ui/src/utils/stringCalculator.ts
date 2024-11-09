// src/utils/stringCalculator.ts

import { parseDelimiters } from './delimiterParser';

export function escapeRegExp(input: string): string {
  return input.replace(/[-^$*+?.()|[\]{}]/g, '\\$&');

}

// stringCalculator.ts

function splitNumbers(numbers: string, delimiterPattern: RegExp): number[] {
  console.log(`Splitting using pattern: ${delimiterPattern}`);
  const result = numbers.split(delimiterPattern);
  console.log(`Split result: ${result}`);
  return result.map((num) => parseInt(num)).filter((num) => !isNaN(num));
}


export function add(input: string): number {
  if (input.trim() === '') {
    return 0;
  }

  const { numbersString, delimiterPattern } = parseDelimiters(input);

console.log(`Using delimiter pattern: ${delimiterPattern}`);

  const parsedNumbers = splitNumbers(numbersString, delimiterPattern);
  console.log(`Parsed numbers: ${parsedNumbers}`);

  // Checking for negative numbers
  const negativeNumbers = parsedNumbers.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
  }

  // Ignoring numbers greater than 1000
  const filteredNumbers = parsedNumbers.filter((num) => num <= 1000);
    console.log(`Filtered numbers (<= 1000): ${filteredNumbers}`);



  const result = filteredNumbers.reduce((sum, num) => sum + num, 0);

   console.log(`Sum of numbers: ${result}`);
  return result;



}