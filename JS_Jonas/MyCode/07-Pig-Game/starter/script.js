'use strict';

// Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');

// Starting conditions
const score0 = score0El.textContent = 0;
const score1 = score1El.textContent = 0;
diceEl.classList.add('hidden');
