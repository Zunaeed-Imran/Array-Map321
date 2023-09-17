// array reduce practice in practice branch

const arr = [45, 69, 66, 2, 4, 25];

const redu = arr.reduce((accu, current) => {
  return accu + current;
});

document.write(redu);
