// run `node index.js` in the terminal

// don't remove this line if are using prompt
const prompt = require('prompt-sync')();

function twoSums(nums, target) {
  const hashTable = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (hashTable.has(complement)) {
      return [hashTable.get(complement), i];
    }
    hashTable.set(nums[i], i);
  }

  return null; // Return null if no pair is found
}

const nums = [2, 8, 11, 7, 1];
const target = 9;
console.log("Indices of Two Numbers:", twoSums(nums, target));