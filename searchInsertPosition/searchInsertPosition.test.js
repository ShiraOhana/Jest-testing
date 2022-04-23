const searchInsert = require("./searchInsertPosition.easy");

test("First test", () => {
  expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
});

test("Second test", () => {
  expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
});
