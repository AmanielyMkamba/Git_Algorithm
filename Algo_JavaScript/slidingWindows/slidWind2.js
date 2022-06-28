function max_sub_array_of_size_k(k, arr) {
    let maxSum = 0,
        windowSum = 0,
        windowStart = 0;
    for(window_end = 0; window_end < arr.length; window_end++) {
        windowSum += arr[window_end]; //add next element
        //slide window, if we hit size "k"
        if(window_end - windowStart + 1 === k) {
            maxSum = Math.max(maxSum, windowSum);
            windowSum -= arr[windowStart]; //Substract going out element
            windowStart += 1 //slide window ahead
        }
    }
    return maxSum;
}

const result = `Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`
console.log(result)






function max_sub_array_of_size_k(k, arr) {
    let maxSum = 0,
        windowSum = 0,
        windowStart = 0;
    for(window_end = 0; window_end < arr.length; window_end++) {
        windowSum += arr[window_end];
        if(window_end - windowStart + 1 === k) {
            maxSum = Math.max(windowSum, maxSum);
            windowSum -= arr[windowStart];
            windowStart += 1
        }
    }
    return maxSum
}