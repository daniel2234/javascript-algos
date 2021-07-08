function arraysEqual(arr1, arr2) {
  //if the arr1 does not equal arr2
  if (arr1.length !== arr2.length) return false;

  //for loop for arr1 length
  for (let i = 0; i < arr1.length; i += 1) {
    //if the index of the array element does not equal array index 
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}


console.log(arraysEqual([1, 2, 3], [1, 2, 3]));
console.log(arraysEqual([1, 2, 3], [4, 5, 6]));
console.log(arraysEqual([1, 2, 3], [1, 2, 3, 4]));