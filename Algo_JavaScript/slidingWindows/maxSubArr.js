/*
Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

Example 1:

Input: [2, 1, 5, 1, 3, 2], k=3
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].
*/

function maxSubArr(arr, k) {
    let maxSum = 0,
        arrSum = 0,
        arrStart = 0;

     for(let arrEnd = 0; arrEnd < arr.length; arrEnd++) {
         arrSum += arr[arrEnd];
        if(arrEnd <= k -1) {
            maxSum += Math.max(maxSum, arrSum);
            arrSum -= arr[arrStart];
            arrStart += 1;
        }
    }
    return maxSum
}

console.log(maxSubArr([2, 1, 5, 1, 3, 2], k=3))


