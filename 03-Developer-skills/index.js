'use strict'

// PROBLEM

// We work for a company building a smart home thermometer. Our most recent taks is this: "Given an array of temperatures, of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor"

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