let arr = ["anymore", "raven", "me", "communicate"];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  newArr.push(arr[i].length);
}
// console.log(newArr);
let min = Math.min.apply(null, newArr);
let max = Math.max.apply(null, newArr);
let sum = min + max;
console.log(sum);
