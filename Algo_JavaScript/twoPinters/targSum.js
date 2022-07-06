
function targSum(arr, targSum) {
    let pOne = 0,
        pTwo = arr.length - 1,
        pSum = 0;
    while(pOne <= pTwo) {
        pSum = arr[pOne] + arr[pTwo];
        if(pSum === targSum) {
            return [pOne, pTwo]
        }
        if(pSum < targSum) {
            pOne ++;
        }
        else {
            pTwo --;
        }
    }
    return [-1,-1] //Means doesn't exist
}

console.log(targSum([1,2,3,4,6], 6))
console.log(targSum([2,5,9,11], 11))

/*


// function pairTargSum(arr, targSum) {
//     const nums = {}; //to store numbers(values) and their indices(keys)
//     for(let i = 0; i < arr.length; i++) {
//         const num = arr[i];
//         if(targSum - arr[i] in nums) {
//             return [nums[targSum - num], i];
//         }
//         // console.log(nums[targSum-num])
//         nums[arr[i]] = i;
//     }
//     return [i, i];
// }

// console.log(pairTargSum([1,2,3,4,6], 6))