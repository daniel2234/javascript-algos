//Explain why this code logs '510' instead of 15
console.log('5' + 10);

//this code logs 510 because the + expression has a string operand which produces a string result no matter what the other operand is.
//the Number 10 gets coerced to a String and then gets coerced to a String and then gets concatenated to the String '5', which produces '510'


