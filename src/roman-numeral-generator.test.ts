import { describe, expect, it } from "vitest";
import { romanNumeralGenerator } from "./roman-numeral-generator.js";

describe("roman numeral generator", () => {
  describe("Boundaries", () => {
    it("encodes 1 (minimum) as I", () => {
      expect(romanNumeralGenerator(1)).toBe("I");
    });

    it("encodes 3999 (maximum) as MMMCMXCIX", () => {
      expect(romanNumeralGenerator(3999)).toBe("MMMCMXCIX");
    });
  });

  describe("Each subtractive pair", () => {
    it("encodes 4 as IV", () => {
      expect(romanNumeralGenerator(4)).toBe("IV");
    });

    it("encodes 9 as IX", () => {
      expect(romanNumeralGenerator(9)).toBe("IX");
    });

    it("encodes 14 as XIV", () => {
      expect(romanNumeralGenerator(14)).toBe("XIV");
    });

    it("encodes 40 as XL", () => {
      expect(romanNumeralGenerator(40)).toBe("XL");
    });

    it("encodes 90 as XC", () => {
      expect(romanNumeralGenerator(90)).toBe("XC");
    });

    it("encodes 400 as CD", () => {
      expect(romanNumeralGenerator(400)).toBe("CD");
    });

    it("encodes 900 as CM", () => {
      expect(romanNumeralGenerator(900)).toBe("CM");
    });
  });

  describe("Each additive symbol", () => {
    it("encodes 1 as I", () => {
      expect(romanNumeralGenerator(1)).toBe("I");
    });

    it("encodes 5 as V", () => {
      expect(romanNumeralGenerator(5)).toBe("V");
    });

    it("encodes 10 as X", () => {
      expect(romanNumeralGenerator(10)).toBe("X");
    });

    it("encodes 50 as L", () => {
      expect(romanNumeralGenerator(50)).toBe("L");
    });

    it("encodes 100 as C", () => {
      expect(romanNumeralGenerator(100)).toBe("C");
    });

    it("encodes 500 as D", () => {
      expect(romanNumeralGenerator(500)).toBe("D");
    });

    it("encodes 1000 as M", () => {
      expect(romanNumeralGenerator(1000)).toBe("M");
    });
  });

  describe("Repetition up to 3x", () => {
    it("encodes 3 as III", () => {
      expect(romanNumeralGenerator(3)).toBe("III");
    });

    it("encodes 30 as XXX", () => {
      expect(romanNumeralGenerator(30)).toBe("XXX");
    });

    it("encodes 300 as CCC", () => {
      expect(romanNumeralGenerator(300)).toBe("CCC");
    });

    it("encodes 3000 as MMM", () => {
      expect(romanNumeralGenerator(3000)).toBe("MMM");
    });
  });

  describe("Composite numbers hitting many symbols at once", () => {
    it("encodes 1994 as MCMXCIV", () => {
      expect(romanNumeralGenerator(1994)).toBe("MCMXCIV");
    });

    it("encodes 2024 as MMXXIV", () => {
      expect(romanNumeralGenerator(2024)).toBe("MMXXIV");
    });
  });

  describe("Invalid input", () => {
    it("throws an error if the input is not an integer", () => {
      expect(() => romanNumeralGenerator(1.5)).toThrow("Expected an integer");
    });

    it("throws an error if the input is less than 1", () => {
      expect(() => romanNumeralGenerator(0)).toThrow(
        "Input must be between 1 and 3999",
      );
    });

    it("throws an error if the input is greater than 3999", () => {
      expect(() => romanNumeralGenerator(4000)).toThrow(
        "Input must be between 1 and 3999",
      );
    });
  });
});
