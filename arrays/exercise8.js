// Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. Instead, try to use the reduce method.

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];


function oddLengths (arr) {
  return arr.reduce(function(accumulator, currentValue){
    let numberLength = currentValue.length;
    if(numberLength % 2 === 1){
      accumulator.push(numberLength)
    }
    return accumulator;
  }, [])
}

console.log(oddLengths(arr)); // => [1, 5, 3]