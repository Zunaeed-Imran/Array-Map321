// using function sum of array
// i can understand from main branch 12 array function
// i practice for to understand for difference between array[i] and i;

const arr = [1, 6, 99, 36, 5, 85];

function sumArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    document.write(i + ' ');
    sum += i + '<br>';
    sum += arr[i];
  }
  return sum;
}
document.write(sumArr(arr));
