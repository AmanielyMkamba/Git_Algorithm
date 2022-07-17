const search_quadruplets = function(arr, target) {
    let quadruplets = [];
    arr.sort((a,b)=>a-b);
  
    for(let i = 0; i< arr.length - 3; i++) {
      if (i > 0 && arr[i] === arr[i - 1]) continue;
      for(let j = i + 1; j< arr.length - 2; j++ ) {
        if (j > i + 1 && arr[j] === arr[j - 1]) continue
        let left = j + 1, right = arr.length - 1;
        while(left < right) {
          const sum = arr[i] + arr[j] + arr[left] + arr[right];
          if(sum === target) {
            quadruplets.push([arr[i], arr[j], arr[left], arr[right]])
            while(left < right && arr[left]===arr[left+1]) left++;
            while(left < right && arr[right] === arr[right -1]) right--;
            left++;
            right--;
          } 
          else if(sum < target) left++;
          else right--;
        }
      }
    }
    return quadruplets;
  }
