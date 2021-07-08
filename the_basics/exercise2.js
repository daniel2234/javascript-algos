//find the thousands, hundreds, tens, ones

let number = 4936;
let ones = number % 10;

console.log(ones);

let tens = (number - ones) / 10 % 10;
console.log(tens);

let hundreds = (number - ones - (tens * 10)) / 100 % 10;
console.log(hundreds);

let thousands = (number - ones - (tens * 10) - (hundreds * 100)) / 1000 % 10;
console.log(thousands);