let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
let upperNames = [];
// let index = 0;

// while (index < names.length) {
//   let upperCaseName = names[index].toUpperCase();
//   upperNames.push(upperCaseName);
//   index += 1;
// }

// console.log(upperNames);

//the variable names holds an array of names
//we want to convert every name to uppercase and to append it to the empty upperNames array
//Since array indexes are zero-based, we initialize an index with 0
//Next, we use a loop that executes as long as the number in index is smaller than the length of the names array
//Line 8 increments the index by 1 after each iteration, which ensures that index < names.length becomes false after the loop handles the last element
//Line 6 the name stored at names[index] and uses it to call the toUpperCase method
//That method returns the name in uppercase, which we assign UpperCaseName, it doesn't change the original name in the names array
//Line 7 uses the push method for arrays to append the latest uppercase name to the upperNames array
//over the five iterations of the names array, line 7 appends to five upperNames, one per iteration, in the same order that the loops processes them.
//Note that we initialized names, upperNames, and index before the loop
//if we initialized them inside the loop, they would have block scope.
//Every loop iteration would create, initialize, and discard each variable


// for (let index = 0; index < names.length; index++) {
//   let upperCaseName = names[index].toUpperCase();
//   upperNames.push(upperCaseName);
// }

// console.log(upperNames);

//controlling loops

for (let index = 0; index < names.length; index+=1) {

  if (names[index] !== 'Naveed') {
    let upperCaseName = names[index].toUpperCase();
    upperNames.push(upperCaseName);
  }
}

console.log(upperNames);
