'use strict';


const score0EL = document.querySelector('#score--0');
const score1EL = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.dice');
const btnNew = document-querySelector(.'btn-New');
const btnRoll = document-querySelector(.'btn-roll');
const btnHold = document-querySelector(.'btn-hold');

score0EL.textContent = 0;
scoreqEL.textContent = 0;
diceEL.classList.add('hidden');

btnRoll.addEventListener('click', function(){
  const dice = Math.trunc(Math.random()*6)+1;
  diceEL.classList.remove('hidden');
})

 if (dice !== 1) {
   currentScore += dice;
   current0El.textContent = currentScore;
   {else {

   }
 }
 };
