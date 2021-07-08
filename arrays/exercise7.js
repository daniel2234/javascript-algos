//Use reduce to compute the sum of the squares of all of the numbers in an array:

let array = [3, 5, 7];

function sumOfSquares(arr) {
  return arr.reduce(function(accumulator, currentValue) {
    return accumulator + (currentValue * currentValue);
  }, 0)
}

console.log(sumOfSquares(array)); // => 83