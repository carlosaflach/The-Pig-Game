'use strict'

// PROBLEM

// We work for a company building a smart home thermometer. Our most recent taks is this: "Given an array of temperatures, of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor"
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem.

// - What is temperature amplitude? Answer: difference between the highest and lowest temp.
// - How to compute the max and the min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up in to sub-problems
// - How to ignore errors?
// - Find max value temp in array. ok.
// - Find the min value temp in array.
// - Substract min from max (amplitude) and return it.


const calcTempAmplitude = (temps) => {
  let max = temps[0];
  let min = temps[0]
  for(let i = 0; i < temps.length; i += 1) {
    const curTemp = temps[i];
    if(typeof curTemp !== 'number') continue; // Here if the type of curTemp is not a number, it will stop the iteration imediatly, and jump to the next iteration.
    if(curTemp > max) max = curTemp;
    if(curTemp < min) min = curTemp
  }
  console.log(max, min);
  return max - min;
}

// calcTempAmplitude([3, 7, 4, 8, 1])
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude)

// Problem 2: 
// Function should now recieve 2 arrays of temps

// 1 - Understanding the problem.
// - With 2 arrays, should we implement functionality twice? Answer: NO! Just merge two arrays.

// 2) Breaking up in to sub-problems
// - merge 2 arrays?

const calcTempAmplitudeNew = (array1, array2) => {
  const temps = array1.concat(array2)
  console.log(temps)
  let max = temps[0];
  let min = temps[0]
  for(let i = 0; i < temps.length; i += 1) {
    const curTemp = temps[i];
    if(typeof curTemp !== 'number') continue; // Here if the type of curTemp is not a number, it will stop the iteration imediatly, and jump to the next iteration.
    if(curTemp > max) max = curTemp;
    if(curTemp < min) min = curTemp
  }
  console.log(max, min);
  return max - min;
}


const newAmplitude = calcTempAmplitudeNew([2,1],[3,4])
console.log(newAmplitude)

const measureKelvin = () => {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // C) FIXING THE BUG
    value: Number(prompt('Degrees celcius: '))
  }

  // B) FIND THE BUG
  console.table(measurement)

  const kelvin = measurement.value + 273;
  return kelvin;
}
// A) IDENTIFY
console.log(measureKelvin())

*/

// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]
// GOOD LUCK 😀


// 1 - Understanding the problem.
// - Array transform to string, separated by ...
// - What is the x day? Answer: index + 1;

// 2) Breaking up in to sub-problems:
// - Transform Array into a string;
// - Transform each element to string with grays celcius.
// - Strings needs to contain day (index + 1);
// - Add ... between elements and start and end of string.

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = (array) => {
  let str = '';
  for(let i = 0; i < array.length; i++) {
    str += `... ${array[i]}ºC in ${i + 1 } days `
  }
  return console.log(str); 
}

printForecast(data1);

printForecast(data2);
