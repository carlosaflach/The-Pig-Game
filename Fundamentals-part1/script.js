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

*/

// Coding Challenge #01

/*
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
*/

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
