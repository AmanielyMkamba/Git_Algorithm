// Swap variables

var firstFruit = "Apples";
var secondFruit = "Oranges";

var temp = firstFruit;
firstFruit = secondFruit;
secondFruit = temp;

console.log(secondFruit + " and " + firstFruit)


// while loop

var start = 0;
var end = 10;

while(start < end) {
    // console.log("start: " + start + " end: " + end);
    start += 1;
    end -= 1;
}


// reversing and array

var arr = ["a", "b", "c"];
var newArr = [];

for(var i = arr.length-1; i >= 0; i--) {
    newArr.push(arr[i])
}
console. log(newArr)






