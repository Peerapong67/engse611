/*
let numbers = [];
numbers.push(10);
numbers.push(20);
numbers.push(30);
numbers.push(40);
numbers.push(50); // [10, 20, 30, 40,50]

console.log(numbers);

let languages = ["Ruby"];
languages.push("Python");
languages.push("JavaScript");

console.log(languages);// ["Ruby", "Python", "JavaScript"] 

let mixedTypes = [10, 3.14, true, "JavaScript", new Date()];
console.log(mixedTypes);

console.log("numbers[2]:", numbers[2]);
console.log("numbers[3]:", numbers[3]);

console.log("numbers[2] + numbers[3]:", numbers[2] + numbers[3]);
console.log("numbers[4]:", numbers[4]);
console.log("number.length: "+numbers.length);
console.log("numbers[4]:", numbers[numbers.length - 1]);*/

/* --------------------------------------------------------------- */
/*
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);
console.log("Length of fruits: ", fruits.length);

fruits.push("Tomato");
console.log(fruits);
console.log("Length of fruits: ", fruits.length);

fruits.pop();
console.log(fruits);
console.log("Length of fruits: ", fruits.length);
*/
let numbers = [1, 2, 3, 4];
console.log("Before:", numbers)

numbers.push(5);
numbers.push(6);
console.log("After push:", numbers);

numbers.unshift(0);
numbers.unshift(-1);
console.log("After unshift:", numbers);

console.log("numbers[0]:", numbers[0]);
console.log("numbers[2]:", numbers[2]);
