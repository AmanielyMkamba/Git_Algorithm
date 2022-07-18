/*
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

*/


function pairTargSum(arr, targSum) {
    const nums = {}; //to store numbers(values) and their indices(keys)
    /*
    nums = {
        1 : 0
        2 : 1
        3 : 2
    }


    */
    for(let i = 0; i < arr.length; i++) { // i = 3
        const num = arr[i]; // num = 4
        if(targSum - arr[i] in nums) { // 6 - 4 = 2
            return [nums[targSum - num], i]; // nums[2], i => 1,3
        }
        // console.log(nums[targSum-num])
        // nums[3] = 2
        nums[arr[i]] = i; //
    }
    return [-1, -1];
}

//                num =>     n
//              index =>       i
//                  i => 0 1 2 3 4
console.log(pairTargSum([1,2,3,4,6], 6))