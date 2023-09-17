// sum of the array function

const arr = [45, 9, 63, 1, 23, 6, 69, 89];

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

document.write(findSum(arr));
