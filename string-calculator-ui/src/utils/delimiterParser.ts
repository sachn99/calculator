// delimiterParser.ts
import { escapeRegExp } from './stringCalculator';

interface ParsedDelimiters {
numbersString: string;
delimiterPattern: RegExp;
}

export function parseDelimiters(input: string): ParsedDelimiters {
  let delimiters: string[] = [',', '\n'];
  let numbersString = input;

  const customDelimiterRegex = /^\/\/(.*?)\r?\n(.*)/s;

  console.log(`input in parseDelimiters : ${input}`);

  console.log(`numbersString in parseDelimiters : ${numbersString}`);

  const match = input.match(customDelimiterRegex);

  console.log(`match in parseDelimiters : ${match}`);

  if (match) {
    const delimiterSection = match[1];
    numbersString = match[2];

console.log(`It;s match : ${numbersString}`);

    const multipleDelimitersRegex = /\[([^\]]+)\]/g;
    let delimiterMatch;
    const customDelimiters: string[] = [];

    while ((delimiterMatch = multipleDelimitersRegex.exec(delimiterSection)) !== null) {
      customDelimiters.push(delimiterMatch[1]);
    }

    if (customDelimiters.length > 0) {
      delimiters = customDelimiters;
    } else {
      delimiters = [delimiterSection];
    }
  }

  // Create a regex pattern by escaping each delimiter
  const escapedDelimiters = delimiters.map((delimiter) => escapeRegExp(delimiter));
  const delimiterPattern = new RegExp(escapedDelimiters.join('|'));

  console.log(`Final Delimiter Pattern: ${delimiterPattern}`);
  return { numbersString, delimiterPattern };
}
