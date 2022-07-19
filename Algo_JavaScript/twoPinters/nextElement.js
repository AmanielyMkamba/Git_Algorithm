function removeElement(arr, key) {
    const nextElement = 0;
    for(i = 0; i < arr.length; i++) {
        if(arr[i] !== key) {
            arr[nextElement] = arr[i];
            nextElement += 1;
        }
    }
    return nextElement
}

console.log(removeElement([3, 2, 3, 6, 3, 10, 9, 3], 3));