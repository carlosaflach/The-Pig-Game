'use strict';

/*
// strict mode avoid us to make some accidentals mistakes.

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D")

// const interface = 'Audio';
// const private = 543;

*/

function logger() {
  console.log('My name is Carlos');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor( apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(2, 0);

console.log(appleJuice);
console.log(fruitProcessor(2,0));

const appleAndOrangeJuice = fruitProcessor(2, 3);
console.log(appleAndOrangeJuice);
