// src/utils/stringCalculator.ts

function escapeRegExp(string: string): string {
  // Escaping all special regex characters
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
export function add(numbers: string): number {

  let delimiters: string[] = [',', '\n'];
  let numsString = numbers;


  const customDelimiterRegex = /^\/\/(.*?)\n(.*)/s;

  numbers.replace(customDelimiterRegex, (_, delimiterSection, rest) => {
    numsString = rest;

    const multipleDelimitersRegex = /\[([^\]]+)\]/g;
    let delimiterMatch;
    const customDelimiters = [];

    while ((delimiterMatch = multipleDelimitersRegex.exec(delimiterSection)) !== null) {
      customDelimiters.push(escapeRegExp(delimiterMatch[1]));
    }

    if (customDelimiters.length > 0) {
      delimiters = customDelimiters;
    } else {
      delimiters = [escapeRegExp(delimiterSection)];
    }

    return '';
  });

  // Creating a delimiter pattern
  const delimiterPattern = new RegExp(delimiters.join('|'));

  // Spliting the numbers string using the delimiter pattern
  const nums = numsString.split(delimiterPattern).map((num) => parseInt(num));

  // Checking for negative numbers
  const negativeNumbers = nums.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(`negative numbers not allowed: ${negativeNumbers.join(',')}`);
  }

  // Ignoring numbers greater than 1000
  const filteredNums = nums.filter((num) => num <= 1000);

  return filteredNums.reduce((sum, num) => sum + num, 0);
}