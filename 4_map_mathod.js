// in this example we use currency change

let storeBDT = [5, 78, 9, 6];

function toUSD(value) {
  value *= 110;
  return value;
}

let storeUSD = storeBDT.map(toUSD);

document.write(storeBDT + '<br>');
document.write(storeUSD);
