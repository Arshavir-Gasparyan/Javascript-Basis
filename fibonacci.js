let arr = [];
let n1 = 0;
let n2 = 1;
let nextTerm;
for (let j = 0; j < 21; j++) {
  arr.push(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}
console.log(arr);
