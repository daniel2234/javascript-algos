//Write a findIntegers function that takes an array argument and returns an array that contains only the integers from the input array. Use the filter method in your function.

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let newThings = [];

function findIntegers(array) {
  for (let i = 0; i < array.length; i++) {
    if (Number.isInteger(array[i]) === true) {
      newThings.push(array[i]);
    }
  }
  return newThings;
}

let integers = findIntegers(things);
console.log(integers);