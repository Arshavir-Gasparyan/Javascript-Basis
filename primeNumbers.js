let number = 401;
let a;
if (number % 2 === 0 || number % 3 === 0 || number % 5 === 0) {
  a = "composite";
  if (number === 2 || number === 3 || number === 5) {
    a = "prime";
  }
} else if (number === 1) {
  a = "not prime not composite";
} else {
  a = "prime";
}
console.log(a);
