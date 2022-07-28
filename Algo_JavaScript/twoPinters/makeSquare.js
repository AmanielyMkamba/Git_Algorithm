function make_squares(arr) {
    const n = arr.length; // => 5 [-2, -1, 0, 2, 3]
    squares = Array(n).fill(0); // => [0,0,0,0,0,0]
    let highestSquareIdx = n - 1; // => 4
    let left = 0, // index 0 -> 1
    right = n - 1; // index 4 -> 3
    while (left <= right) {
      let leftSquare = arr[left] ** 2,
        rightSquare = arr[right] ** 2;
        if (leftSquare > rightSquare) {
        squares[highestSquareIdx] = leftSquare; // square[4] = leftSquare
        left += 1; // 1
    } else { // (leftSquare < rightSquare)
        squares[highestSquareIdx] = rightSquare; // square[4] = rightSquare
        right -= 1;
    }
    highestSquareIdx -= 1; // (4 - 1) -> 3, 
    }
    return squares;
}
//                                rightSquare => 4
//                      leftSquare =>      1
//                               i =>  0   1  2  3  4
console.log(`Squares: ${make_squares([-2, -1, 0, 2, 3])}`); // n => 5


console.log(`Squares: ${make_squares([-3, -1, 0, 1, 2])}`);