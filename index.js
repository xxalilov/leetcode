// Valid Parentheses
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const values = {
        "(": ")",
        "{": "}",
        "[": "]"
    };

    const stack = [];

    for (let char of s) {
        if (values[char]) {
            // Ochiluvchi qavsni stack-ga qo'shish
            stack.push(char);
        } else {
            // Yopiluvchi qavsni tekshirish
            const last = stack.pop();
            if (values[last] !== char) {
                return false; // Agar mos kelmasa
            }
        }
    }

    // Agar stack bo'sh bo'lsa, barcha qavslar mos
    return stack.length === 0;

};

console.log(isValid("([{]})"));

// Longest Common Prefix
/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function(strs) {
//     // 1-way
//     // let resultStr = "";
//     // if(strs.length === 1 && strs[0].length === 1) {
//     //     return strs[0]
//     // }
//     //
//     // for(let i = 0; i<strs[0].length; i++) {
//     //     let count = 0;
//     //     for(let j = 1; j <= strs.length-1; j++) {
//     //         if(strs[0][i] === strs[j][i]) {
//     //             count = count+1;
//     //             if(count === strs.length-1) {
//     //                 resultStr = resultStr + strs[0][i];
//     //             }
//     //         } else {
//     //             return resultStr;
//     //         }
//     //     }
//     // }
//     // return resultStr;
//     //2-way
//     if (strs.length === 0) return ""; // Agar massiv bo'sh bo'lsa
//     if (strs.length === 1) return strs[0]; // Faqat bitta so'z bo'lsa
//
//     // 1-so'zni boshlang'ich prefix sifatida qabul qilish
//     let prefix = strs[0];
//
//     for (let i = 1; i < strs.length; i++) {
//         while (strs[i].indexOf(prefix) !== 0) {
//             // Prefixni qisqartirib borish
//             prefix = prefix.slice(0, -1);
//             if (prefix === "") return ""; // Agar umumiy prefix bo'lmasa
//         }
//     }
//
//     return prefix;
// };
//
// console.log(longestCommonPrefix(["flower","flow","flight"]))


// // Roman to Integer
// /**
//  * @param {string} s
//  * @return {number}
//  */
// var romanToInt = function(s) {
// const values = {
//     "I":1,
//     "V": 5,
//     "X": 10,
//     "L": 50,
//     "C": 100,
//     "D": 500,
//     "M": 1000
// }
// let result = 0
// let str = s;
// for(let i = 0; i < str.length; i++) {
//     if(values[str[i]] < values[str[i+1]]) {
//         result = result - values[str[i]]
//     } else {
//         result = result + values[str[i]]
//     }
// }
//
// return result;
// };
//
// console.log(romanToInt("MCMXCIV"))


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