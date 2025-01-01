// Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i< nums.length; i++) {
       for(let j = i+1; j<nums.length; j++) {
          if(nums[i] + nums[j] === target) return [i, j];
       }
    }

    // 2-way
    // const numMap = new Map(); // To store numbers and their indices
    // for (let i = 0; i < nums.length; i++) {
    //     const complement = target - nums[i];
    //     if (numMap.has(complement)) {
    //         return [numMap.get(complement), i];
    //     }
    //     numMap.set(nums[i], i);
    // }
};

console.log(twoSum([3,3], 6))