let name = 'Pete Hanson';
console.log(name.toUpperCase());
console.log(name);

let oddNumbers = [1,3,5,7,9];
oddNumbers.pop();
console.log(oddNumbers);


function changeFirstElement(array) {
  array[0] = 9;
}

let oneToFive = [1,2,3,4,5];
changeFirstElement(oneToFive);
console.log(oneToFive);

function addToArray(array) {
  return array.concat(10);
}

console.log(addToArray(oneToFive));
console.log(oneToFive);

function add(a,b) {
  return a + b;
}

function subtract(a,b) {
  return a - b;
}

let sum = add(20, 45);
console.log(sum);

let difference = subtract(80, 10);
console.log(difference);

console.log(add(20, 45));


function times(num1, num2){
  return num1 * num2;
}

console.log(times(add(20,45), subtract(80, 10)));

let sum = add(20, 45);
let difference = subtract(80, 10);
let result = times(sum, difference);
console.log(result);

add(subtract(80, 10), times(subtract(20, 6), add(30, 5))); // => 560

//1. first, we pass arguments to add: subtract(80, 10) and times(subtract(20, 6), add(30, 5))
//2. the first argument, the subtract function call, returns 70
//3. the second argument, the times function call, furthermore has two arguments, subtract(20, 6) and add(30, 5)
//-subtract(20, 6) returns 14
//-add(30,5) returns 35
//using the return values, the entire functions call becomes times(14, 35)
//the overall value of the times, call is 490

//4.using the return values from steps 2 and 3, we get add(70, 490) which returns 560


greetingPeople();
function greetingPeople() {
  console.log("Good Morning!")
}

let greetPeople = function() {
  console.log("Good Morning!");
}

greetPeople();


(function greetTwoPeople(){
  console.log("Good Morning!");
})

function makeGreeter(name){
  return function greeter() {
    console.log(`Hello ${name}`);
  }
}