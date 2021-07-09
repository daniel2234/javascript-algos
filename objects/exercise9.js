// What does the following program log to the console? Why?

let foo = {
  a: 'hello',
  b: 'world',
}; //declare and assign a variable foo with an object literal syntax with a key-pair value of a and b

let qux = 'hello'; //declare and assign a variable with a string primitive value of 'hello'

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
} //using a reserved word of function and naming a function of bar with associated parameters of argument1 and argument2 

bar(foo, qux);

console.log(foo.a);
console.log(qux);