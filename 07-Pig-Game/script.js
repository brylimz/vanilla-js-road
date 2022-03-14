'use strict';

// selecting elements
const player1EL = document.querySelector('.player--0')
const player2EL = document.querySelector('.player--1')

const score1EL = document.querySelector('#score--0');
const score2EL = document.querySelector('#score--1');
const current1EL = document.querySelector('#current--0')
const current2EL = document.querySelector('#current--1')

const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')



// starting condiitons
score1EL.textContent = Number(0);
score2EL.textContent = Number(0);
diceEL.classList.add('hidden');

const scores = [0, 0]
let currentScore = 0;
let activePlayer = 0;
// rolling dice functionality
btnRoll.addEventListener('click', function(){


    // 1. genearting a random dice rol
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. display dice
    diceEL.classList.remove('hidden')
    diceEL.src = `dice-${dice}.png`
    // 3. check for rolled 1: if true, switch to next player
if(dice !== 1) { 
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore

} else {
// switch to next player
document.getElementById(`current--${activePlayer}`).textContent = 0
currentScore = 0
activePlayer = activePlayer === 0 ? 1: 0;
player1EL.classList.toggle('player--active')
player2EL.classList.toggle('player--active')
}
})