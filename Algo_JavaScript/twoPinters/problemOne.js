const search_quadruplets = function(arr, target) {
    let quadruplets = [];
    arr.sort((a,b)=>a-b);