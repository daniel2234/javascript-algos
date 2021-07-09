// Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets:

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3

let objKeys = Object.keys(myObj);

objKeys.forEach(function(key) {
  console.log(key);
});


for (let key in myObj) {
  console.log(key);
}


//these snippets are not the same when it comes to producing the same output 
//the first snippet only produces an output of only the object properties of objKeys
//the second snippet produces the output of all the key values of the myObj

