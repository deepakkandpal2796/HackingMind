'use strict';
//Selecting Elements 
//players 
const player0El = document.querySelector('player--0');
const player1El = document.querySelector('player--1');
//score
const score0El = document.getElementById('score--0');
const score1El = document.querySelector('#score--1');
//current score
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
//buttons
const btnNew = document.getElementsByClassName('btn--new')[0];
const btnRoll = document.getElementsByClassName('btn--roll')[0];
const btnHold = document.querySelector('.btn--hold');
//dice
const diceEl = document.getElementsByClassName('dice')[0];



//Starting conditions 
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;

//Function 
const switchPlayer = () => {
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

//Events 
btnRoll.addEventListener('click', function (){
    //* 1. Generating a random dice roll 
    const dice = Math.trunc(Math.random()*6)+1;
    console.log(dice);

    //* 2. Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //* 3. When it's not 1 add to current score
    if(dice != 1){
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).innerHTML = currentScore;
    }
    else{
        //* 4. when its 1 then make the current score 0 and switch the active player 
        currentScore = 0;
        // //*remove active player class 
        // document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        // //*make current score zero
        // document.getElementById(`current--${activePlayer}`).innerHTML = 0;
        // //*change the active player
        // activePlayer = activePlayer === 0 ? 1 : 0;
        // //*add the active player class to other player 
        // document.querySelector(`.player--${activePlayer}`).classList.add('player--active')
        // switchPlayer();
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }
});

//hold button 
btnHold.addEventListener('click', function() {
    document.getElementById(`score--${activePlayer}`);
})