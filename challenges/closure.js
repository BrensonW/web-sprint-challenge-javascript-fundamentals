// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

/* Nested Functions can access the variable internal because the variable within the parent function was declared, so this 
 actually grants access to it by the child functions.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(number){
  let summation = 0

  for(let i = 1; i <= number; i++){
    console.log(i)
    summation = summation+i
  }
  return summation
}
console.log(summation(4));