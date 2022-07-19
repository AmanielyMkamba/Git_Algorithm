function removeElement(arr, key) {
    let nextElement = [];
    for(i = 0; i < arr.length; i++) {
        if(arr[i] !== key) {
            arr[nextElement] = arr[i];
            nextElement.push(arr[i]);
        }
    }
    return nextElement
}

//                       i 0  1  2
console.log(removeElement([3, 2, 3, 6, 3, 10, 9, 3], 3));