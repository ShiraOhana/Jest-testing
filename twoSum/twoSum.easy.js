/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * @description {Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]}
 */

// const twoSum = (nums, target) => {
//   let temporaryHold = {};
//   for (let [index, num] of nums.entries()) {
//     if (temporaryHold[nums] !== undefined) return [temporaryHold[num], index];
//     temporaryHold[target + num] = index;
//   }
// };

function twoSum(array, target) {
  answer = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let sum = array[i] + array[j];
      if (sum === target) {
        if (array[i] === array[j]) continue;
        else {
          answer.push(i);
          answer.push(j);
          return answer;
        }
      }
    }
  }
}

console.log(twoSum([3, 2, 4], 6));
module.exports = twoSum;
