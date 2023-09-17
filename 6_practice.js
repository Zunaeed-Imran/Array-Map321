// using function sum of array

const arr = [1, 6, 99, 36, 5, 85];

function sumArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += i;
  }
  return sum;
}
document.write(sumArr(arr));
