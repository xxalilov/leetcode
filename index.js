// Roman to Integer
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
const values = {
    "I":1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
}
let result = 0
let str = s;
for(let i = 0; i < str.length; i++) {
    if(values[str[i]] < values[str[i+1]]) {
        result = result - values[str[i]]
    } else {
        result = result + values[str[i]]
    }
}

return result;
};

console.log(romanToInt("MCMXCIV"))


// // Palindrome number
// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function(x) {
//  if(x < 0) return false;
//  let number = x.toString();
//  let reversedNumber = ``;
//  for(let i = 1; i<= number.length; i++) {
//      reversedNumber = `${reversedNumber}${number[number.length-i]}`
//  }
//  return number === reversedNumber;
// };
//
// console.log(isPalindrome(1222))


// Two Sum
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     for(let i = 0; i< nums.length; i++) {
//        for(let j = i+1; j<nums.length; j++) {
//           if(nums[i] + nums[j] === target) return [i, j];
//        }
//     }
//
//     // 2-way
//     // const numMap = new Map(); // To store numbers and their indices
//     // for (let i = 0; i < nums.length; i++) {
//     //     const complement = target - nums[i];
//     //     if (numMap.has(complement)) {
//     //         return [numMap.get(complement), i];
//     //     }
//     //     numMap.set(nums[i], i);
//     // }
// };
//
// console.log(twoSum([3,3], 6))