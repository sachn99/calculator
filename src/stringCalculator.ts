// src/stringCalculator.ts
export function add(numbers: string): number {
  if (numbers === '') {
      return 0;
    } else {
      return parseInt(numbers);
    }
}