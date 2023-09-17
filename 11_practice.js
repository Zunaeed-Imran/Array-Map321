// trying to make a programm that can input number will summ of it

let num1 = prompt('Enter a number');
let num2 = num1.split(',');
let num3 = num2.join();

let result = num2.reduce((a, c) => a + c);

document.write(result);
