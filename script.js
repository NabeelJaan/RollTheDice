'use strict';

// All El in stored in Variables
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const holdScore = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// Switch player function
const switchPlayer = function () {
   document.getElementById(`current--${activePlayer}`).textContent = 0;
   activePlayer = activePlayer === 0 ? 1 : 0;
   currentScore = 0;
   player0El.classList.toggle('player--active');
   player1El.classList.toggle('player--active');
}


// Rolling the Dice funcitonality
rollDice.addEventListener('click', function () {
   if (playing) {
      // Generate a random number
      const dice = Math.trunc(Math.random() * 6 + 1);
      // Display Roll dice
      diceEl.classList.remove('hidden');

      if (dice !== 1) {
         currentScore += dice;
         document.getElementById(`current--${activePlayer}`).textContent = currentScore;
      } else {
         switchPlayer();
      }
   }
});

holdScore.addEventListener('click', function () {
   if (playing) {
      scores[activePlayer] += currentScore;
      // scores[1] = scores[1] = currentScore;

      document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

      if (scores[activePlayer] >= 20) {
         playing = false;
         diceEl.classList.add('hidden');
         document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
         document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      } else {
         // Switch Player
         switchPlayer();
      }
   }
});
