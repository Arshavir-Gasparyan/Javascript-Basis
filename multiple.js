let number = 41;
if (number % 3 === 0 && number % 5 === 0 && number % 7 === 0) {
  console.log(`${number} is a multiple of 3, 5 or 7.`);
} else if (number % 3 === 0 && number % 5 === 0) {
  console.log(`${number} is a multiple of 3, 5.`);
} else if (number % 3 === 0 && number % 7 === 0) {
  console.log(`${number} is a multiple of 3, 7.`);
} else if (number % 5 === 0 && number % 7 === 0) {
  console.log(`${number} is a multiple of 5, 7.`);
} else if (number % 3 === 0) {
  console.log(`${number} is a multiple of 3.`);
} else if (number % 5 === 0) {
  console.log(`${number} is a multiple of 5.`);
} else if (number % 7 === 0) {
  console.log(`${number} is a multiple of 7.`);
} else {
  console.log(`${number} is not a multiple of 3, 5 or 7.`);
}

// console.log(number);
