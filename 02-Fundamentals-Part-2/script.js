'use strict';

/*
// strict mode avoid us to make some accidentals mistakes.

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D")

// const interface = 'Audio';
// const private = 543;



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

*/

// fuction declaration
const age1 = calcAge1(1993);

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

console.log(age1);

// fuction expression, anonnymus function.
// to remember expression produces values;
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

const age2 = calcAge2(1993);
console.log(age1,age2)

// the difference between fuction declaration and fuction expression, is that when it's function declaration we can invoke the function before it was declarated.
