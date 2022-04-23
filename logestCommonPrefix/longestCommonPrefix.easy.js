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

const strs = ["flight", "flora", "flowers"];

const longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 1) {
    return strs[0] || "";
  }

  let i = 0;
  // i = 0,,,  f  &&              flight f      ===   f - flights
  //                              flore  f      ===   f - flights
  //                  flowers f      ===   f - flights

  // i = 1,,,  f  &&              flight l      ===   l - flights
  //                             flore  l      ===   l - flights
  //                             flowers l      ===   l - flights

  // i = 2,,,  f  &&             flight i      ===   i - flights
  //                             flore  o      ===   i - flights
  while (strs[0][i] && strs.every((str) => str[i] === strs[0][i])) i++;

  //i = 2
  return strs[0].substring(0, i);
};

longestCommonPrefix(strs);
