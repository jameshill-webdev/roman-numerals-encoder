import { describe, expect, it } from "vitest";

describe("hello world", () => {
  it("returns the expected greeting", () => {
    const greeting = "hello world";
    expect(greeting).toBe("hello world");
  });
});
