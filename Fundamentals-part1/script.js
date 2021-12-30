/* let js = 'amazing';
    // if (js === 'amazing') alert("JavaScript is FUN!");

    // 40 + 8 + 23 - 10;
    // console.log(40 + 8 + 23 - 10);

    console.log("Carlos");
    console.log(23);

    let firstName = "Carlos"; // camel case notation

    console.log(firstName);
    console.log(firstName);

    let carlos_matilda = "CM";

    let $function = 27;

    let myFirstJob = "Programmer"
    let myCurrentJob = "Teacher"

    // Not good pratic for clean code.
    let job1 = "Programmer";
    let job2 = "Teacher";

    // Practice Assignments

    let country = "Brazil";
    let continent = "South America";
    let population = 7000000;

    console.log("Hi my name is: " + firstName + " eu sou do: "+ country + ", localizado no continente: "+ continent + ", com uma população de: " + population+" de habitantes");

    let javascriptIsFun = true;
    // console.log(javascriptIsFun);
    console.log(typeof javascriptIsFun);
    // console.log(typeof 'Carlos');
    // console.log(typeof 23);
    
    javascriptIsFun = "yes!"
    console.log(typeof javascriptIsFun);
    
    let year;
    
    console.log(year);
    console.log(typeof year);
    
    console.log(typeof null); // error from javascript;

    

    let age = 30; // 
    age = 31;

    const birthYear = 1993; // We can't redeclarete a const variable.
    // birthYear = 1991;

    // const job; 
    // we can't declarete a variable const empty.

    lastName = "Flach"

    console.log(lastName);


// Math Operators
const now = 2037;
const ageCarlos = now - 1993;
const ageSarah = now - 2020;

console.log(ageCarlos, ageSarah);

console.log(ageCarlos * 2, ageCarlos / 10, 2 ** 3);

const firstName = "Carlos";
const lastName = "Flach";

console.log(firstName + " " + lastName)

let x = 10 +5;

// Assingment Operators
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++ // x = x + 1
x-- // x = x - 1
console.log(x);

// Comparison Operators

console.log(ageCarlos > ageSarah); // >, <, <=, >=
console.log(ageSarah >= 18);

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageCarlos = now - 1993;
const ageSarah = now - 2020;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 -10 - 5; // x = y = 10,  y = 10, x = 10;

console.log(x, y)

const averageAge = (ageCarlos + ageSarah) / 2;
console.log(ageCarlos, ageSarah, averageAge);



// Coding Challenge #01


Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK 😀


let johnMass = 92;
let johnHeight = 1.95
let markMass = 78
let markHeight = 1.69

let johhBMI = (johnMass/ (johnHeight ** 2)).toFixed(2)
let markBMI = (markMass/ (markHeight ** 2)).toFixed(2)

console.log(johhBMI, markBMI);

let markHigherBMI = markBMI > johhBMI;
console.log(markHigherBMI);

johnMass = 85;
johnHeight = 1.76;

markMass = 95;
markHeight = 1.88;

johhBMI = (johnMass/ (johnHeight * johnHeight)).toFixed(2)
markBMI = (markMass/ (markHeight * markHeight)).toFixed(2)

console.log(johhBMI, markBMI);

markHigherBMI = markBMI > johhBMI;

console.log(markHigherBMI);



const firstName = "Carlos";
const job = "Teacher";
const birthYear = 1993;
const year = 2037;

const carlos = "I'm " + firstName + ', a ' + (year - birthYear) + " years old " + job + "!"

console.log(carlos);

const carlosNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`

console.log(carlosNew);

console.log(`Just a regular string ...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`);



const age = 15;
// const isOldEnough = age >= 18;

if(age >= 18) {
  console.log('Sarah can start driving license')
} else {
  const yearLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearLeft} years =)`);
}

const birthYear = 1991;
let century;
if(birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);



// Coding Challenge #02

const johnMass = 92;
const johnHeight = 1.95
const markMass = 78
const markHeight = 1.69

const johhBMI = (johnMass/ (johnHeight ** 2)).toFixed(2)
const markBMI = (markMass/ (markHeight ** 2)).toFixed(2)

console.log(johhBMI, markBMI);

if(markBMI > johhBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's(${johhBMI})!`)
} else {
  console.log(`John's BMI (${johhBMI}) is higher than Mark's(${markBMI})!`)
}


// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('carlos')); // NaN not an number;

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old'); 
console.log('I am ' + '23' + ' years old')
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' / '2');
let n = '1' + 1;
n = n - 1
console.log(n);


// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(2));
console.log(Boolean('Carlos'));
console.log(Boolean({}));

const money = 0;
if(money) {
  console.log("Don't spend it all ;)")
} else {
  console.log("You should get a job!")
}

let height = 0;
if(height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Oh no! Height is undefined")
}



const age = 18; // Assingment just one equal
if (age === 18) console.log("You just became an adult(strict equal)") // Comparison operator === strict operator,  == loose equal operator.

if (age == 18) console.log("You just became an adult(loose equal)")

// always use the strict equal, and do de conversion before it. It's a good practice of coding.

const favorite = Number(prompt("What's is your favorite number?"));

console.log(favorite)
// console.log(typeof favorite);

if (favorite === 23) console.log("Cool! 23 is an amazing number!");
else if (favorite === 7) console.log('7 is also a cool number');
else console.log('Number is not 23 or 7');

if(favorite !== 23) console.log('Why not 23?')

*/

const hasDriversLicense = true; // A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);


// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!")
// } else {
//   console.log("Someone else should drive...")
// }

const isTired = true; // C

console.log(hasDriversLicense && hasGoodVision && isTired);


if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!")
} else {
  console.log("Someone else should drive...")
}