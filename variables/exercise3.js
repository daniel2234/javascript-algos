// What happens when you run the following program? Why do we get that result?

{
  let foo = 'bar';
}

console.log(foo);


//The program outputs an error since foo is out of scope: the let statement creates variables with block scope, which limits the visibility of the variable to the block. Even though console.log(foo) comes after the declaration and initialization of foo, we still get an error since we declared foo inside the block. Outside the block, foo doesn't exist.

