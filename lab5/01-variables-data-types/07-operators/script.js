let x;

x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;
x = 7 % 5;
console.log(x);

let y;
y = 1 / (2 * 3);
console.log(y);

let usd = 100;
let thb = usd * 31.5;
let str = usd + " USD = " + thb + " THB";
console.log(str);
if (thb >= 1000) {
  console.log("You can buy this");
} else {
  console.log("You don't have enough money");
}

function varTest() {
  var x = 1;
  if (true) {
    var x = 2; // มองเป็นตัวเดียวกันกับด้านนอก
    console.log(x);
  }
  console.log(x);
}
function letTest() {
  let x = 1;
  if (true) {
    let x = 2; // มองเป็นคนละตัวกับด้านนอก
    console.log(x);
  }
  console.log(x);
}
varTest();
letTest();
