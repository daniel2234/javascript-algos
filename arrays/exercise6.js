//Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];


function oddLengths(arr) {
  let oddArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 !== 0){
      oddArray.push(arr[i].length)
    }
  }
  return oddArray;
}


console.log(oddLengths(arr)); // => [1, 5, 3]