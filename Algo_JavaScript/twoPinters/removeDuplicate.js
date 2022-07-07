function remove_duplicates(arr) {
    // index of the next non-duplicate element
    let nextNonDuplicate = 1; // => 2
    let nonDuplicateArr = [];

    let i = 0; // i = 4
    while (i < arr.length) { // i < 4 elements
        //                          2 !== 11
        if (arr[nextNonDuplicate - 1] !== arr[i]) {
        //                  2 = 11
        arr[nextNonDuplicate] = arr[i];
        // 1 = 1 + 1 => 2
        nextNonDuplicate += 1;
    }
    i += 1;
    }

    return nextNonDuplicate; // 2
}
//                                              i
//                               0  1  2  3  4  5  6
  console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9])); // [2,3,6,9]

//                             i
//                             0  1  2   3
console.log(remove_duplicates([2, 2, 2, 11])); // [2,11]