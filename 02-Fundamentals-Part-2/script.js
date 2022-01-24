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


// Basic Arrays Methods.

// Add elements.
const friends = ['Michael', 'Steven', 'Peter'];
const newLenght = friends.push('Jay'); // Push is a method that it is a function which adds one element in the last position of the array.
// A push method return the new length of the array that uses this method.

console.log(friends);
console.log(newLenght);

friends.unshift('John'); // unshift method is a function that adds an element at the first position of an array.
console.log(friends);

// Remove Elements
friends.pop(); // last
const popped = friends.pop(); // the return of a pop function is the element it will be removed.
console.log(friends);
console.log(popped);

friends.shift(); // Remove the first element of an array. And also return the element that was removed.
console.log(friends);

console.log(friends.indexOf('Steven'))
console.log(friends.indexOf('Bob')) // when we called a indexOf method of an element that is not in the array its return -1

console.log(friends.includes('Steven')); // The includes method will return true if the element is in that array, or false if not.
console.log(friends.includes('Bob'));
friends.push(21);
console.log(friends.includes(21));

if(friends.includes('Peter')) {
  console.log('You have a friend called Peter');
} else {
  console.log('You dont have a friend called Peter')
}

// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) 😉
// GOOD LUCK 😀

const calcTip = (billValue) => {
  if(billValue >= 50 && billValue <= 300) {
    return billValue * 0.15
  } else {
    return billValue * 0.20
  }
}
console.log(calcTip(100));
const bills = [125, 555, 44];

const tips =[calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(totals);

const carlosArray = [
  'Carlos',
  'Flach',
  2037 - 1993,
  'dev',
  ['Gustavo', 'Artur', 'Kyle']
];
// object literaling sentence
const carlos = {
  firstname: 'Carlos',
  lastName: 'Flach',
  age: 2037-1993,
  job: 'dev',
  friends: ['Gustavo', 'Artur', 'Kyle']
}

const carlos = {
  firstName: 'Carlos',
  lastName: 'Flach',
  age: 2037-1993,
  job: 'dev',
  friends: ['Gustavo', 'Artur', 'Kyle']
};

// acessing keys of an object.
console.log(carlos);
// dot notation
console.log(carlos.lastName);
// brackets notation
console.log(carlos['lastName']);

const nameKey = 'Name';
console.log(carlos['first' + nameKey]);
console.log(carlos['last' + nameKey]);

const interestedIn = prompt('What do you want to know about carlos? Choose between firstName, lastName, age, job and friends');

if(carlos[interestedIn]) {
  console.log(carlos[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
}

// adding keys to an object
carlos.location = 'Brasil';
carlos['twitter'] = '@carlosaflach';
console.log(carlos);

// Challenge
// "Carlos has 3 friends, and his best friend is called Gustavo"
console.log(`${carlos['firstName']} has ${carlos['friends'].length} friends, and his best friend is called ${carlos['friends'][0]}.`);

const carlos = {
  firstName: 'Carlos',
  lastName: 'Flach',
  birthYear: 1993,
  job: 'dev',
  friends: ['Gustavo', 'Artur', 'Kyle'],
  hasDriversLicense: true,
  // here is an expression, produces a value. Not an declaration
  // calcAge: function(birthYear) {
  //   return 2037 - birthYear
  // },
  // calcAge: function() {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },
  calcAge: function() {
    // console.log(this);
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} a drivers license.`
  }
};

console.log(carlos.calcAge());
console.log(carlos['calcAge']());
console.log(carlos.age);
console.log(carlos['age']);

// Challenge
// "Carlos is a 44 year old teacher, and he has a drivers license";
console.log(carlos.getSummary());

// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.
// GOOD LUCK 😀

const mark = {
  fistName: 'Mark',
  lastName: 'Miller',
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.BMI = this.mass / (this.height**2);
    return this.BMI;
  }
}

const john = {
  fistName: 'John',
  lastName: 'Smith',
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.BMI = this.mass / (this.height**2);
    return this.BMI;
  }
}

if(john.calcBMI() > mark.calcBMI()) {
  console.log(`${john.fullName} BMI ${john.calcBMI()} is higher than ${mark.fullName} BMI ${mark.calcBMI()}`);
} else {
  console.log(`${mark.fullName} BMI ${mark.calcBMI()} is higher than ${john.fullName} BMI ${john.calcBMI()}`);
}

// Interation: The loop for
// For loop keeps running while the condition is TRUE.
for(let rep = 1; rep <= 10; rep += 1) {
  console.log(`Lifting weights repetition ${rep}`);
}

const carlosArray = ['Carlos', 'Flach', 2037-1993, 'dev', ['Gustavo', 'Kyle', 'Emeli']];
const types = [];
for(let i = 0; i < carlosArray.length; i += 1) {
  console.log(carlosArray[i], typeof carlosArray[i]);

  // Filling types array
  // types[i] = typeof carlosArray[i];
  types.push(typeof carlosArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];

const ages = [];

for(let i = 0; i < years.length; i += 1) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('---- ONLY STRINGS ---')
for(let i = 0; i < carlosArray.length; i += 1) {
  if(typeof carlosArray[i] !== 'string') continue;
  console.log(carlosArray[i], typeof carlosArray[i]);
}

console.log('---- BREAK WITH NUMBER ---')
for(let i = 0; i < carlosArray.length; i += 1) {
  if(typeof carlosArray[i] === 'number') break;
  console.log(carlosArray[i], typeof carlosArray[i]);
}

// Looping Backwards.
const carlosArray = ['Carlos', 'Flach', 2037-1993, 'dev', ['Gustavo', 'Kyle', 'Emeli']];

for(let i = carlosArray.length -1; i >= 0; i -= 1) {
  console.log(i, carlosArray[i]);
}

for(let exercise = 1; exercise <= 3; exercise += 1) {
  console.log(`----STARTING EXERCISE ${exercise}`);

  for(let rep = 1; rep < 6; rep += 1) {
    console.log(`Lifting weight repetition  ${rep}`);
  }
}
console.log();
*/
// the while loop
let rep = 1
while(rep <= 10) {
  console.log(`Lifting weight repetition  ${rep}`);
  rep += 1
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !==6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if(dice === 6) {
    console.log('Loop is about to end...')
  }
}