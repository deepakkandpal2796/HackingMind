'use strict';

///////////////////////////////////////
// Modal window

//Selected Elements 
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('header');
const section1 = document.querySelector('#section--1');
const btnScroll = document.querySelector('.btn--scroll-to');
const navLinks = document.querySelector('.nav__links');
const navLink = document.querySelectorAll('.nav__link');

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


// Lecture 

/*
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

document.documentElement.style.setProperty('--color-primary', 'orangered');

//------------Get/Set Attribute---------------------
const logo = document.querySelector('.nav__logo');

// get 
console.log(logo.alt);
console.log(logo.src);

// set
logo.alt = 'Deepak'

//* manual attribute 
console.log(logo.designer); //this only get html defined attribute manual defined.
console.log(logo.getAttribute('designer')); 

logo.setAttribute('name', 'deepak') //create an attribute

//------------Data attribute//------------
//* We use syntax dataset.cameCase and in html we use data-attribute-name
console.log(logo.dataset.versionNumber);  //3.0

//------------add/remove Classes------------

logo.classList.add('cl');
console.log(logo.classList.contains('nav__logo'));
console.log(logo.classList.contains('classss'));
logo.classList.toggle('c')
logo.classList.remove('cl');


//------------ Event Listner------------

const h1 = document.querySelector("h1");

const alertH1 = function(){
  alert(`Hi! You can't see  me after clicking ok!`);

  h1.removeEventListener('mouseenter', alertH1);
}

h1.addEventListener('mouseenter', alertH1);



////------------Event Propagation Example//------------
//! if we click on the navLinks we can see all the parent event got trigger with the same event target this is because of bubling
header.addEventListener('click', function(e){
  e.preventDefault();
  console.log('Header', e.target);
});

navLink.addEventListener('click', function(e){
  e.preventDefault();
  console.log('Nav',e.target);
});

navLinks.forEach(function(el){
  el.addEventListener('click', function(e){
    e.preventDefault();
    console.log('Link',e.target);
  });
})

// output on clicking the link is 
// navlink event works 
// nav event works
// then header event work
//!if you we have declare any event listner on the parent element then it will trigger on the click of the child element 

*/

//---------------Website starts------------------

//-----scrolling behaviour---------
btnScroll.addEventListener('click', function(e){

  /*
  const s1coords =  section1.getBoundingClientRect();
   //* this gives us coordinate from the top the screen.
   //* not the header just the top screen
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  

  console.log('current page position: ', window.pageXOffset, window.pageYOffset);
  //* this gives teh postion form the top of the page above the header


  //* window.scrollTo function move the screen from the top of the page (above header).
  //* thats why we added the height from the top + heigth from the screen.

  //! since pageoffset is not supported we use smooth scrooling in css for this not js.

  //! to check the height of the Viewport
  console.log(`Viewport Height ${document.documentElement.clientHeight}`);
  console.log(`Viewport Width ${document.documentElement.clientWidth}`);


  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // });
*/
section1.scrollIntoView({behavior:'smooth'});

});


/*
//! if we click on the navLinks we can see all the parent event got trigger with the same event target this is because of bubling
// here we have to select all of the elements of navlink but we dont have to do that we have to just select the parent element and get the target 
// as we know how bubbling works when we click on the link the event on the parent element will run also

header.addEventListener('click', function(e){
  e.preventDefault();
  console.log('Header', e.target);
});

navLinks.addEventListener('click', function(e){
  e.preventDefault();
  console.log('Nav',e.target);
});

navLink.forEach(function(el){
  el.addEventListener('click', function(e){
    e.preventDefault();
    console.log('Link',e.target);
  });
})

// output on clicking the link is 
// navlink event works 
// nav event works
// then header event work
//!if you we have declare any event listner on the parent element then it will trigger on the click of the child element 

*/

navLinks.addEventListener('click', function(e){
  e.preventDefault();
  const targetLink = e.target.classList.contains('nav__link');
  if(targetLink) {
    const targetSection = e.target.getAttribute('href');
    document.querySelector(targetSection).scrollIntoView({behavior: "smooth"});
  }
});

const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabContent =  document.querySelectorAll('.operations__content');

tabsContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest('operations__tab');

});