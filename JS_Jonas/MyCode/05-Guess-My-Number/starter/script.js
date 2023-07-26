// What is DOM?
// Dom stands for the document object model and it is a representation of the html document.
//It is used to access HTML elemnet and style them accordingly.

//! Each HTML element is an object in DOM
//! DOM is not the part of js it the part of WEB API's
//! Document is the main object inside of which all the HTML obejct reside. 
//! We use some object methods to access the object
//! for example document.querySelector ()
//! Document is a object and query selector is an object method.
//! We Have to pass the value of the attribute inside that object method.
//! After this we use the properties to do changes or access the object like InnerHTML, Style, addEventListner.
//The value you took out from the DOM all represented as strings.
//There are so many API's beside DOM like timers, set, Async, await etc .
'use strict';


//*=============Basic DOM Selector===============
//* to get inner text of the object 
// console.log(document.querySelector('.message').innerHTML);
//* to get the inner object of the input feild
// console.log(document.querySelector('.guess').value);

//*To set value in the objects 
// document.querySelector('.message').innerHTML = 10;
// document.querySelector('.guess').value = 21;

//*=============Click event===============
// When we click then a object method runs 

//* when click on the check button it duisplay the value of the input box in console.
// document.querySelector('.check').addEventListener('click',function(){
//     console.log(document.querySelector('.guess').value)
// })

//! we can also write this using the arrow function
// document.querySelector('.check').addEventListener('click',() => {
//     console.log(document.querySelector('.guess').value)
// })

// Remember using the arrow function we can use the this keyword hence we can access other properties inside the object .
//here the object is the elements in the HTML 

//*=============Buildin the Game===============

//Score Variable
let score = 20;

//Element Selected
let currentScore = Number(document.querySelector('.score').innerHTML);

//Random Number 
const secretNumber = Math.trunc(Math.random()*20)+1;
document.querySelector('.number').innerHTML = secretNumber;

//Check Button 
document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //If there is no value in the guess
    if(!guess){
        document.querySelector('.message').innerHTML = '⛔ No Number!'
    }else if(guess === secretNumber){
        document.querySelector('.message').innerHTML = '🎉 Congratulations'
    }else if(guess > secretNumber){
        document.querySelector('.message').innerHTML = '📈 To High';
        scoreDecrease(); //Score should decrease as the guess is wrong.
    }else{
        document.querySelector('.message').innerHTML = '📉 To Low';
        scoreDecrease(); //Score should decrease as the guess is wrong.
    }
})

//Score
const scoreDecrease = () => {
    const playerScore = document.querySelector('.score').innerHTML;
    if(playerScore <= 0){
        
    }
    score--;
    document.querySelector('.score').innerHTML = score;
    
}
