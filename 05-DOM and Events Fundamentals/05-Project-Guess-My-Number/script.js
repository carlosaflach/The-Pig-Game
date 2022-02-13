'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!'
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

const showHighscore = () => {
  document.querySelector('.highscore').textContent = highscore;
}

const showScore = () => {
  document.querySelector('.score').textContent = score;
}

const numberSelector =  document.querySelector('.number');
const bodySelector = document.querySelector('body');
const guessSelector = document.querySelector('.guess');


document.querySelector('.check').addEventListener('click',function() {
  const guess = Number(document.querySelector('.guess').value);

// When there is no input
  if (!guess) {
    displayMessage("⚠️ No Number!⚠️");

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎯 Correct Number!')
    
    numberSelector.textContent = secretNumber;

    bodySelector.style.backgroundColor = '#60b347'

    numberSelector.style.width = '30rem'

    if(score > highscore) {
      highscore = score
      showHighscore();
    }
    
    // When guess is wrong;
  } else if (guess !== secretNumber) {

    if(score > 1) {
      displayMessage(guess > secretNumber ? '⏫ Too high!!' : '⏬ Too low!!')
      score = score -1;
      showScore();
    } else {
      score = 0;
      showScore()
      displayMessage('😢 You lost the game!')
    }
    // When guess is to high
  }
  // Refactoring - Clean Code.

  // else if (guess > secretNumber) {
  //   if(score > 1) {
  //     document.querySelector('.message').textContent = '⏫ Too high!!'
  //     score = score -1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     score = 0;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = '😢 You lost the game!'
  //   }

  //   // When guess is to low
  // } else if (guess < secretNumber) {
  //   if(score > 1) {
  //     document.querySelector('.message').textContent = '⏬ Too low!!'
  //     score = score -1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     score = 0;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = '😢 You lost the game!'
  //   }
  // }
});

// When playing again.
document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  showScore();
  numberSelector.textContent = '?';
  guessSelector.value = '';

  body.style.backgroundColor = '#222'

  numberSelector.style.width = '15rem'
});