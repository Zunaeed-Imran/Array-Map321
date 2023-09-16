// in this example we use for loop of and sum for the array

const numbers = [1, 25, -9, 8];

let sum  = 0;
for (let n of numbers){
    // sum += sum+n; or
    sum = sum + n;
}
document.write(sum);

numbers.reduce((accumulator, currentvalue) =>{
    
});