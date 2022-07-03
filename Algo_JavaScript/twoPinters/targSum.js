function targSum(arr, sumNum) {
    let pOne = 0,
        pTwo = arr.length - 1,
        pSum = 0;
    while(pOne <= pTwo) {
        pSum = arr[pOne] + arr[pTwo];
        if(pSum === sumNum) {
            return [pOne, pTwo]
        }
        if(pSum < sumNum) {
            pOne ++;
        }
        else {
            pTwo --;
        }
    }
    return [pOne,pTwo]
}

console.log(targSum([1,2,3,4,6], 6))
console.log(targSum([2,5,9,11], 11))