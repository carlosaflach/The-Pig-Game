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



// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

// Arrow fuction

const calcAge3 = birthYear => 2037 - birthYear; // implicite return

const age3 = calcAge3(1993);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement}`
}

console.log(yearsUntilRetirement(1993, 'Carlos'));
console.log(yearsUntilRetirement(1991, 'Jonas'));


// Functions calling other functions

function cutFruitPieces(fruit) {
  const pieces = fruit * 4;
  return  pieces;
}

function fruitProcessor( apples, oranges) {
 const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2,3));

const calcAge = function(birthYear) {
  return 2037 - birthYear
}

// Fuction Expression
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if(retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
}

console.log(yearsUntilRetirement(1993, 'Carlos'));
console.log(yearsUntilRetirement(1950, 'Mike'));



// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// §
// §
// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉
// GOOD LUCK 😀

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = (avgDolphins, avgKoalas) => {
  if(avgDolphins >= 2 * avgKoalas) {
    return console.log(`Dolphins wins, ${avgDolphins} vs. ${avgKoalas}`);
  } else if( avgKoalas >= 2 * avgDolphins) {
    return console.log(`Koalas wins, ${avgKoalas} vs. ${avgDolphins}`);
  } 

  return console.log('No team wins...');
}

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(555,111);

// test 2;

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

checkWinner(scoreDolphins, scoreKoalas);

*/

// Data Structure - Array

// the way that we save data until now

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020); // function for create arrays.

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]) // to get the last element of an array.
// expression return a value, while statement don't return it from itself.

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Carlos'
const carlos =[firstName, 'Afonso', 'Flach', 2022-1993, 'dev', friends];
console.log(carlos);
console.log(carlos.length);

// Exercise

const calcAge = function (birthYear) {
  return 2037 - birthYear
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [age1, age2, age3];
console.log(ages);
