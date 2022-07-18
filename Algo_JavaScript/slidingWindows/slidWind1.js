function find_averages_of_subarrays(K, arr) {
    const result = [];
    let windowSum = 0.0,
        windowStart = 0;
    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd]; //add the element
        //check or limi the loop to size "k"
        if(windowEnd >= K - 1) {
            result.push(windowSum / K); // add the windowSum to result
            windowSum -= arr[windowStart];// deducting the first element
            windowStart += 1;//sliding the window to the next element
        }
    }
    return result;
}

const result2 = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
// console.log('Averages of subarrays of size K: ${result}');
console.log(result2)


function find_averages_of_subarrays(k, arr) {
    let result = 0.0,
        windowSum = 0,
        windowStart = 0;
    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];
        if(windowEnd >= k - 1) {
            result.push(windowSum/k);
            windowSum  -= arr[windowStart];
            windowStart += 1;
        }
    }
    return result;
}