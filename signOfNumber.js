let numbers = [-14, -5, -3];
a = numbers[0];
b = numbers[1];
c = numbers[2];
if (
  (a > 0 && b > 0 && c > 0) ||
  (a < 0 && b < 0 && c > 0) ||
  (a < 0 && b > 0 && c < 00) ||
  (a > 0 && b < 0 && c < 0)
) {
  console.log("+");
} else if (a === 0 || b === 0 || c === 0) {
  console.log("unsigned");
} else {
  console.log("-");
}
