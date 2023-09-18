const users = [
  { firstName: 'akshay', lastName: 'kumar', age: 26 },
  { firstName: 'Sharook', lastName: 'Khan', age: 75 },
  { firstName: 'Salman', lastName: 'Khan', age: 50 },
  { firstName: 'Amir', lastName: 'khan', age: 26 },
];

const resulu = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

document.write(resulu);
