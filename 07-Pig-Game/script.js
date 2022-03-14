'use strict';

// selecting elements
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

let currentScore = 0;
// rolling dice functionality
btnRoll.addEventListener('click', function(){


    // 1. genearting a random dice rol
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. display dice
    diceEL.classList.remove('hidden')
    diceEL.src = `dice-${dice}.png`
    // 3. check for rolled 1: if true, switch to next player
if(dice !== 1) { currentScore = currentScore += dice;
    current1EL.textContent = currentScore // CHANGE LATTER
} else {
// switch to next player
}
})
