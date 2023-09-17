// trying to make a programm that can input number will summ of it

let num1 = prompt('Enter a number');
let num2 = num1.split(',');
let num3 = num2.join();

let sum = 0;
for (let n of num3) {
  sum += sum + n;
}
document.write(sum);
