'use strict';

//Selecting elements 
const btnOpenModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// Functions 
const showModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const removeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

//Events 
//We want to add event to all the modal buttons 
//Show modal button event 
for(let i=0; i <btnOpenModal.length; i++){
    btnOpenModal[i].addEventListener('click', showModal)
}

//Close modal button event 
btnCloseModal.addEventListener('click',removeModal)

//Overlay event (click on the overlay to remove modal)
overlay.addEventListener('click', removeModal)

//Escape key event 
//! 1st the key presseed should be escape and we also have to check that the modal is visible that means it dosent contain the hidden class so pressing escape hide the modal.

document.addEventListener('keydown', function(e){
    // console.log(e,e.key);
    // if(e.key === 'Escape'){
    //     if(!modal.classList.contains('hidden')){
    //         removeModal();
    //     }
    // }
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        removeModal();
    }
})

//!Findings
//Dont call the functin in the addEventListners method it should we called when the element get clicked.

//Make all the things seprate for writting clean code

//To make keyboard event work we add the event listner to the document , and use keyDown event 

// If we pass the attribute in that function we will get the keyboard event in which key property will give us the name of the key 

//Check the condition is very necessary like here we have check that if the modal is already visible or not to. and to check these things we use classList.contains() method. 