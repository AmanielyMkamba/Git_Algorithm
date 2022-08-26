//Given an array, find the average of all subarrays of ‘K’ contiguous elements in it.
//Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
//Output: [2.2, 2.8, 2.4, 3.6, 2.8]

// function find_averages_of_subarrays(K, arr) {
//     const resultOne = [];
//     for (let i = 0; i < arr.length - K + 1; i++) {
//       // find sum of next 'K' elements
//       let sum = 0.0;
//       for (let j = i; j < i + K; j++) {
//         sum += arr[j];
//       }
//       result.push(sum / K); // calculate average
//     }
  
//     return resultOne;
//   }
  
  
//   const resultOne = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
//   console.log(`Averages of subarrays of size K: ${resultOne}`);


//   function find_averages_of_subarrays(K, arr) {
//     const result = [];
//     let windowSum = 0.0,
//       windowStart = 0;
//     for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
//       windowSum += arr[windowEnd]; // add the next element
//       // slide the window, we don't need to slide if we've not hit the required window size of 'k'
//       if (windowEnd >= K - 1) {
//         result.push(windowSum / K); // calculate the average
//         windowSum -= arr[windowStart]; // subtract the element going out
//         windowStart += 1; // slide the window ahead
//       }
//     }
  
//     return result;
//   }
  
  
//   const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
//   console.log(`Averages of subarrays of size K: ${result}`);
  

function find_averages_of_subarrays(k, arr){
  const result = [];
  let windowStart = 0,
  windowSum = 0.0;
  for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
    windowSum += arr[windowEnd];
    if(windowEnd > k - 1){
      result.push(windowSum/k);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }
  return result
}

let result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: ${result}`);
console.log(result)