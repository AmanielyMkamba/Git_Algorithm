function remDupl(arr) {
    let newArr = [],
        right = arr.length - 1,
        left = 0;
        while(left < right) {
            if(left !== right) {
                newArr.push(left);
            }
        }
        return newArr.length;
}

console.log(remDupl[2,2,2,11])