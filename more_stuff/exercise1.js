//What does this code log to the console? Why?

let array1 = [1, 2, 3]; //declare and intialize the array with a length of 3 elements 
let array2 = array1; //declare and initialize the array2 with variable of array1
array1[1] = 4; // array1 = [1,4,3]
console.log(array2); //=> [1,4,3], this changes the reference of the array1
//interesting find, if we change an element of an array1, it also changes the element in array2
// The opposite is also true: if we change an element in array2, that also changes the element in array1.

//copies a reference from the original array (array1 above) into the target array (array2).
