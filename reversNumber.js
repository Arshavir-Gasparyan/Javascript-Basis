let number = 859473;
let strNumber = number.toString();
firstNumber = strNumber[0];
lastNumber = strNumber[strNumber.length - 1];
middleNumbers = strNumber.slice(1, strNumber.length - 1);
// console.log(middleNumbers);
let newNumber = `${lastNumber}${middleNumbers}${firstNumber}`;
console.log(newNumber);
