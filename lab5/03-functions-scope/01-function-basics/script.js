// Define a function
function sayHello() {
  console.log('Hello World');
}

// Invoke, execute or call a function
sayHello();

// Define a function with parameters
function add(num1, num2) {
  console.log(num1);
  console.log(num2);
  console.log(num1 + num2);
}

// Invoke function with arguments
add(5, 10);

// Parameters vs. Arguments
// Parameters are the names of the variables that are used to pass data into a function.
// Arguments are the values that are passed into the function

// Returning a value
function subtract(num1, num2) {
  console.log(num1 + '-' + num2);
  console.log('After the return');
  return num1 - num2;
}
// Assign the returned value to a variable
const result = subtract(10, 2);
console.log(result);

console.log(subtract(20, 5));
