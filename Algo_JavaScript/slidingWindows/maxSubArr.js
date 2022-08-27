/*
Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

Example 1:

Input: [2, 1, 5, 1, 3, 2], k=3
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].
*/

function maxSubArr(arr, k) {
    let maxSum = 0,
        windowSum = 0,
        windowStart = 0;

     for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
         windowSum += arr[windowEnd];
        if(windowEnd <= k - 1) {
            maxSum += Math.max(maxSum, windowSum);
            windowSum -= arr[windowStart];
            windowStart += 1;
        }
    }
    return maxSum
}

console.log(maxSubArr([2, 1, 5, 1, 3, 2], k=3))
// console.log(maxSubArr([2, 1, -5, 1, 3, 2], k=3))
// console.log(maxSubArr([2,2,2], k=3))


function maxSubArr(arr, k) {
    let maxSum = 0,
        windowSum = 0,
        windowStart = 0;

     for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
         windowSum += arr[windowEnd];
        if(windowEnd <= k - 1) {
            maxSum += Math.max(maxSum, windowSum);
            windowSum -= arr[windowStart];
            windowStart += 1;
        }
    }
    return maxSum
}

console.log(maxSubArr([2, 1, 5, 1, 3, 2], k=3))
// console.log(maxSubArr([2, 1, -5, 1, 3, 2], k=3))
// console.log(maxSubArr([2,2,2], k=3))


