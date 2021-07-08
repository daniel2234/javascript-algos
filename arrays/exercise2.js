//Log all of the even values from myArray to the console.

let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

//expected output

// 6
// 4
// 2
// 4
// 16
// 0

//i < 11

let newMyArray = [];
for (let i = 0; i < myArray.length; i++) {
  if(myArray[i] % 2 === 0) {
    newMyArray.push(myArray[i]);
  }
}

console.log(newMyArray);