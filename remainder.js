let number = 1233;
let numbers = number.toString();
let a = 1;
let b = 0;
let c;
// console.log(numbers[0]);
for (let i = 0; i < numbers.length; i++) {
  let x = +numbers[i];
  a *= x;
  b += x;
}
if (number === 0) {
  c = "Not calculated";
  console.log(c);
} else if (a % b === 0) {
  c = a / b;
  console.log(`‘Quotient is ${c}`);
} else if (a % b !== 0) {
  c = a % b;
  console.log(`Remainder is ${c} `);
}
