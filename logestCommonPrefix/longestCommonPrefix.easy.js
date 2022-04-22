/**
 * @param {string[]} strs
 * @return {string}
 *
 * @description {Write a function to find the longest common prefix string amongst an array of strings.
                If there is no common prefix, return an empty string "".}
 * 
 * Example 1 
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 *
 * Example 2
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 *
 */

// const longestCommonPrefix = function (strs) {
//   strs.forEach((element) => {
//     if (element[0] === element[0] && element[1] === element[1]) {
//       return strs;
//     } else {
//       return "";
//     }
//   });
// };
// let strs = ["flower", "flow", "flight"];
// console.log(longestCommonPrefix(strs));

function longestCommonPrefix(a) {
  let size = a.length;

  if (size === 0) return "";
  if (size === 1) return a[0];
  a.sort();
  let end = Math.min(a[0].length, a[size - 1].length);
  let i = 0;
  while (i < end && a[0][i] == a[size - 1][i]) i++;
  let pre = a[0].substring(0, i);
  return pre;
}

let strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));

module.exports = longestCommonPrefix;
