let number = [43, -15, 0];
let a, b, c;
// console.log(number[0]);
// let number = str.split(",");
if (number[0] < number[1] && number[0] < number[2]) {
  a = number[0];
  //   console.log(a);
} else if (number[1] < number[0] && number[1] < number[2]) {
  a = number[1];
  //   console.log(a);
} else if (number[2] < number[0] && number[2] < number[1]) {
  a = number[2];
  //   console.log(a);
}
if (number[0] > number[1] && number[0] > number[2]) {
  c = number[0];
} else if (number[1] > number[0] && number[1] > number[2]) {
  c = number[1];
} else if (number[2] > number[0] && number[2] > number[1]) {
  c = number[2];
}
if (
  (number[2] < number[0] && number[0] < number[1]) ||
  (number[1] < number[0] && number[0] < number[2])
) {
  b = number[0];
} else if (
  (number[0] < number[1] && number[1] < number[2]) ||
  (number[2] < number[1] && number[1] < number[0])
) {
  b = number[1];
} else if (
  (number[0] < number[2] && number[2] < number[1]) ||
  (number[1] < number[2] && number[2] < number[0])
) {
  b = number[2];
}
let sort = [a, b, c];
console.log(sort);
