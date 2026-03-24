import { romanNumeralGenerator } from "./roman-numeral-generator.js";
import { createInterface } from "readline/promises";

const rl = createInterface({ input: process.stdin, output: process.stdout });

const input = await rl.question(
  "Enter an integer between 1 and 3999 (inclusive): ",
);
const result = romanNumeralGenerator(parseInt(input, 10));
console.log(`Roman numeral: ${result}`);

rl.close();
