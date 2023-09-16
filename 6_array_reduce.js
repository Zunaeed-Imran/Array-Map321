const numbers = [1, 25, -9, 8];

// a = 0, c = 1=> a = 1
// a = 1, c = 25 => a = 26
// a = 26, c = -9 => a = 17
// a = 17, c = 8 => a = 25

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

document.write(sum);

// এই পদ্ধতিতে অ্যারের প্রতিটা নাম্বার ভেঙ্গে ভেঙ্গে যোগ করা হয়
// example The sum of digits of 719 = 7 + 1 + 9 = 17