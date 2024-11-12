**Title: Solve Two Sum Problem Using a Hash Table**

**Objective:**
Develop a JavaScript function to solve the "Two Sum" problem. The function should take an array of numbers and a target sum, and return the indices of the two numbers that add up to the target sum.

**Given the following input:**

```javascript
const nums = [2, 8, 11, 7, 1];
const target = 9;

console.log("Indices of Two Numbers:", twoSum(nums, target));
```

For example, after implementing the `twoSum` function, you should be able to produce the following output:
```javascript
Indices of Two Numbers: [0, 3]
```

<details>
<summary>Hints</summary>

1. Define a function `twoSum(nums, target)` that accepts an array `nums` and a number `target`.
2. Create a hash table (using an object or `Map`) to keep track of each number's index as you iterate through the array.
3. As you iterate, calculate the complement (target - current number) and check if it exists in the hash table.
4. If the complement is found in the hash table, return the current index and the found index as a pair.
5. If the complement is not found, add the current number along with its index to the hash table.
6. Continue iterating until a pair is found or the array is fully traversed.

Remember, this approach efficiently finds the two numbers that add up to the target by storing and looking up data in the hash table.

</details>

