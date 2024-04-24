'use strict';

///////////////////////////////////////
// Modal window

//Selected Elements 
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('header');
//Functions
const openModal = function (e) {
  e.preventDefault(); //! on click of the hyperlink the page refresh
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


//Event listners 
btnsOpenModal.forEach(element => {
  element.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Creating and inserting element 

//--------create element and add class------------
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent -> we use this to fill the text content only
message.innerHTML = "We use cookies for improved functionality and analytics <button class = 'btn btn-close-cookie'> Got it </button>";


//-------------Append and prepend-----------------
// header.prepend(message)
header.append(message);
// you can use one element at a time only if you append and prepend the element then, the method which runds later runs.
//* if we want to apply multiple coppy of the same element then
//header.append(message.cloneNode(true)); //we have made a copy and appended it 

//-------------Before and after--------------------
// header.before(message)
//header.after(message)

//--------------Remove the element-------------------
document.querySelector('.btn-close-cookie').addEventListener('click', function(){
  message.remove();
})

//--------------Adding Styles----------------------

//* this will add the inline property to the html element
message.style.background = '#37383d';
message.style.width = '120%'

console.log(message.style.width)
console.log(message.style.color)//Error : as the color property is not inline defined

//* to get the css property of the object which are not inlin
console.log(getComputedStyle(message).height); 

message.style.height = parseFloat(getComputedStyle(message).height)+30+ "px";