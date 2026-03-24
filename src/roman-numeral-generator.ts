const MAPPING = {
  1000: "M",
  900: "CM",
  500: "D",
  400: "CD",
  100: "C",
  90: "XC",
  50: "L",
  40: "XL",
  10: "X",
  9: "IX",
  5: "V",
  4: "IV",
  1: "I",
} as const;

export function romanNumeralGenerator(input: number): string {
  if (!Number.isInteger(input)) {
    throw new Error("Expected an integer");
  }

  if (input < 1 || input > 3999) {
    throw new Error("Input must be between 1 and 3999 (inclusive)");
  }

  let result = "";
  let remainder = input;

  Object.keys(MAPPING)
    .sort((a, b) => parseInt(b, 10) - parseInt(a, 10))
    .forEach((key) => {
      const keyAsNumber = parseInt(key, 10);
      const mappedSymbol = MAPPING[keyAsNumber as keyof typeof MAPPING];

      while (remainder >= keyAsNumber) {
        result += mappedSymbol;
        remainder -= keyAsNumber;
      }
    });

  return result;
}
