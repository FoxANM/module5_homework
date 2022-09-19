function checkArray(arr, curr = 0) {
  if (arr.length < 2 || curr == arr.length-1) {
    return true;
  }
  
  return typeof arr[curr] !== typeof arr[curr+1] 
    ? false 
    : checkArray(arr, ++curr)
}

console.log(checkArray([4,8,16,32]))
console.log(checkArray([4,'8',16,32]))
