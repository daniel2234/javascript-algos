let array = [3,1,5,9,2,6,4,7];
let indexOfFive = -1;

for (let i = 0; i < array.length; i+=1) {
  if (array[i] === 5) {
    indexOfFive = i;
    break;
  }
}

console.log(indexOfFive);

//the break statement on line 7 tells Javascript to terminate the loop once we find the desired element

let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];

// names.forEach(function(name){
//   console.log(name);
// });

names.forEach((name) => console.log(name))