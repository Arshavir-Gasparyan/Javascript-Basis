let arr = [8, 0, 1, "hey", 12, 5, true, "2", null, 7, 3];
let numbers;
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  // console.log(typeof arr[i]);
  if (typeof arr[i] === typeof 12) {
    numbers = arr[i];
    // console.log(numbers);
    if (numbers % 2 === 0) {
      newArr.push(numbers);
    } else {
      newArr.unshift(numbers);
    }
  }
}
console.log(newArr);
