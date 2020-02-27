/**
 * leet code puzzle - https://leetcode.com/problems/subsets/submissions/
 * Runtime: 60 ms, faster than 72.88% of JavaScript online submissions for Subsets.
Memory Usage: 35.5 MB, less than 11.76% of JavaScript online submissions for Subsets.
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = nums => {
  const validSubsets = [[]];
  const uniqueNumbers = [...new Set(nums)];

  for (let i = 0; i < nums.length; i++) {
    const starterArr = [uniqueNumbers[i]];
    const combinerArr = uniqueNumbers.slice(i + 1) || [];
  
    validSubsets.push(starterArr);
    combinator(validSubsets, starterArr, combinerArr);
  }

  return validSubsets;
};

const combinator = (accumulator, starterArr, combinerArr) => {
  for (let i = 0; i < combinerArr.length; i++) {
    const newStarterArr = [...starterArr, combinerArr[i]];
    accumulator.push(newStarterArr);
    combinator(accumulator, newStarterArr, combinerArr.slice(i + 1));
  }
};
