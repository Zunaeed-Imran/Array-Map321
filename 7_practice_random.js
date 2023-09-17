//  just a random practices

const arr = [1, 5, 9, 63, 785, 4, 5];

function mytest3(a) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

document.write(mytest3(arr));
