/*
console.log("Morning!");
console.log(100);
console.log('A');
console.log(98.25);

console.log(5*4);
console.log("Morning! " + "Thanit")

const x = 100;
console.log(x);

// console error & warning
console.error('A');
console.warn('Warning');

let a = 10;
let b = 20;
let c = a + b;
console.log(c);
*/
//27/02/2568
//------------------------------------

let a = 1;
console.log("Top level");
console.log("a = " + a);
// Create new block
{
let b = 2;
console.log("Inside block");
console.log("a = " + a);
console.log("b = " + b);
}
// We cannot access b here

function greet(name) {
    console.log("Welcome " + name)
    }

let age = 20

if (age >= 18) {
    greet("Mateo");
    }
for (let i = 0; i < 5; i++) {
    console.log("Loop " + i);
    }

