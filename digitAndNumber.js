let numbers = 2583;
let digit = 5;
let strDigit = digit.toString();
let str = numbers.toString();
let a;
for (let i = 0; i < str.length; i++) {
  //   console.log(str[i]);
  if (str[i] === strDigit) {
    a = "Yes";
    break;
  } else {
    a = "No";
  }
  //   console.log(a);
}
console.log(a);
