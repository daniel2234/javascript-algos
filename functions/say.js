// function say(words = "hello") {
//   console.log(words + "!");
// }

// say('Howdy');


function foo() {
  function bar() {
    console.log("BAR");
  }
  bar();
  bar();
}

foo();
bar();