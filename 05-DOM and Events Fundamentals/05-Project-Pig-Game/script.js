'use strict';

// Selecting elements;
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const bntHold = document.querySelector('.btn--hold');

// Starting Conditions;

let scores;
let currentScore;
let activePlayer;
let playing;

const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  
  currentScore = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

const createRandomNumber = () => {
  const number = Math.floor(Math.random() * 6) + 1;
  return number;
};

const checkIfPlayerWins = () => {
  if(currentScore >= 20) {
    document.getElementById(`score--${activePlayer}`).innerText = currentScore;
    diceEl.classList.add('hidden');
    playing = false;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  }
};


// Rolling dice functionality
btnRoll.addEventListener('click', () => {
  if(playing) {
    //1. Genarating a random dice roll
    const diceNumber = createRandomNumber();
    
    //2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceNumber}.png`;
    
    //3. Check for rollet 1: If true, switch to next player
    if(diceNumber !== 1) {
      // Add dice to current score;
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
      checkIfPlayerWins();
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

// Functionality for hold btn

bntHold.addEventListener('click', () => {
  if(playing) {
    // 1. Add to scores, current score;
      scores[activePlayer] += currentScore;
      document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
  
    //2. Check if the score >= 100;
    if(scores[activePlayer] >= 20) {
      diceEl.classList.add('hidden');
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }
    //3. Switch Player;
    switchPlayer();
  }
});

btnNew.addEventListener('click', () => {
  init();
});

