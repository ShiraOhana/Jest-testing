const { test, expect } = require("@jest/globals");
const romanToInt = require("./romanToInteger.easy");

test("Example 1", () => {
  expect(romanToInt(LVIII)).toBe(58);
});

test("Example 2", () => {
  expect(romanToInt("MCMXCIV")).toBe(1994);
});
