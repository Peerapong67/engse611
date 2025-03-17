let x;

const name = 'John';
const age = 31;

// Concatenation
x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';
console.log(x);

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old`;
console.log(x);

// String Properties and Methods

// Creating a "string object" (JS does this automatically when using a propery or method on a primitive string)
const s = new String('Hello World');
console.log(s);

x = typeof s;
console.log(x);

x = s.length;
console.log(x);

// Access value by key
x = s[0];
console.log(x);

// Shows the prototype of the string object. Shows the properties and methods
x = s.__proto__;
console.log(x);

// Change case
x = s.toUpperCase();
console.log(x);
x = s.toLowerCase();
console.log(x);

// charAt() - returns the character at the specified index
x = s.charAt(0);
console.log(x);
// indexOf - returns the index of the first occurrence of a specified value in a string
x = s.indexOf('d');
console.log(x);

// substring() - search a string for a specified value
x = s.substring(2, 5);
console.log(x);
x = s.substring(7);
console.log(x);

// slice() - extracts a part of a string and returns a new string
x = s.slice(-11, -6);
console.log(x);

// trim() - remove whitespace from beginning and end of string
x = '         Hello World';
console.log(x);

x = x.trim();
console.log(x);
// replace() - replace all instances of a string
x = s.replace('World', 'John');
console.log(x);

// includes() - returns true if the string is found
x = s.includes('Hell');
console.log(x);

// valueOf() - returns the primitive value of a variable
x = s.valueOf();
console.log(x);

// split() - returns an array of strings
x = s.split('');
console.log(x);
