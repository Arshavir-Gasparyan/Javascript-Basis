let arr = [
  [3, 4, 5],
  [1, 0, 0],
  [4, 8, 7],
  [8, 8, -1],
];
let newArr = [];
let x = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    x += arr[i][j];
    // console.log(j);
    // console.log(x);
  }
  newArr.push(x);
}
console.log(newArr);
