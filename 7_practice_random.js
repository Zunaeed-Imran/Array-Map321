//  just a random practices
// 'function mytest3(a)' that example 'a' is a function parameter
// sometimes i forgot that function parameter name.  

const arr = [1, 5, 9, 63, 785, 4, 5];

function mytest3(a) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

document.write(mytest3(arr));
