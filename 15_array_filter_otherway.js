// in this example we use array filter and array map

const users = [
  { firstName: 'akshay', lastName: 'kumar', age: 23 },
  { firstName: 'Sharook', lastName: 'Khan', age: 60 },
  { firstName: 'Salman', lastName: 'Khan', age: 70 },
  { firstName: 'Amir', lastName: 'khan', age: 50 },
];
const output = users.filter(x => x.age < 30).map(x => x.firstName);

document.write(output);
