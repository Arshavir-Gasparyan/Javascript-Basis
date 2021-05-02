let arr = [5, 61, 15, 4, "h", "sd", "5", 7];
let arrNumbers = [];
let arrStrings = [];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === typeof 12) {
    arrNumbers.push(arr[i]);
  } else {
    arrStrings.push(arr[i]);
  }
}
console.log(`Numbers: ${arrNumbers.length}, Strings: ${arrStrings.length}`);
