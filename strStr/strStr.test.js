const strStr = require("./strStr.easy");

test("strStr1", () => {
  expect(strStr("hello", "ll")).toBe(2);
});
test("strStr2", () => {
  expect(strStr("aaaaa", "baa")).toBe(-1);
});
