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
const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabContent =  document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const logo = document.querySelector('.nav__logo');

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


////------------Intersection observer api------------


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



tabsContainer.addEventListener("click", (e) => {
  //tab display
  const clicked = e.target.closest('.operations__tab');
  if(!clicked) return;
  tabs.forEach(el => el.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  //content Display
  tabsContent.forEach(el => el.classList.remove('operations__content--active'));

  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');

  //* Dont code like this, code in one line.
  // const selectedContent = clicked.dataset.tab;
  // const tabSelected = document.querySelector(`.operations__content--${selectedContent}`);
  // tabSelected.classList.add('operations__content--active');
  
  
});

//Hover event in nav bar
const handelHover = function (e){
  if(e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = e.target.closest('nav');
    console.log(siblings);
    const navLinks = siblings.querySelectorAll('.nav__link');
    
    navLinks.forEach((el) => {
      if(el !== link) el.style.opacity = this;
    })
    logo.style.opacity = this;
  }

}


//*how can we call the function in the event listners

// nav.addEventListener('mouseover', function(e) {
//   handelHover(e, 0.5);
// })

// nav.addEventListener('mouseout', function(e){
//   handelHover(e, 1);
// });

nav.addEventListener('mouseover', handelHover.bind(0.5));

nav.addEventListener('mouseout',  handelHover.bind(1));


//*The bind() method creates a new function where this keyword refers to the parameter in the parenthesis. This way the bind() method enables calling a function with a specified this value. 
//*It dose not call the funtion it just make return the funciton so we can use this in the event handlers and when the function is call we can get the event.


//*Sticky nav bar


// from here we can ger the postion of the section from the top!
// then we to trigger the scroll event the scroll event trigger whenever we hit the scroll pad

// window.addEventListener('scroll', function(){
//   const initialPosition = section1.getBoundingClientRect();
//   // console.log(initialPosition);
//   console.log(this.window.scrollY);
//   //this will give the page postion form the top of the screen.
//   console.log(`section 1 ${initialPosition.top}`);
//   //this will give the position of the section 1 from the top of the page.
//   if(window.scrollY > initialPosition.top){
//     nav.classList.add('sticky');
//   }else{
//     nav.classList.remove('sticky');
//   }
// })


//!why the scroll event is bad ?
//* it fires evertime which can make the code slow as the scroll event runs everytime we touch the mouse pad
//! Solution 


//!This will observe wether the target element is  intersecting the root or not....as soon as the target element intersects the root this function will be called up...

//!We will make a target element, root and an observer function. when the target element will intesect the root then the observer function will called up.

//!section 1 is the target element we have to pass the taget element in the observer event.

//!What is the root ? root is the other element which we want the moniter wether the target element has crossed it or not. if the root is null then this will take the viewport as the root.

//!Also we have threshold where we can define on how much percentage intersection of target and the root the function will be called.

//!the threshold can be the array.

//!Then we have the observer function. where we can define what functionalites should be there when intersection happen.

//!in the callback function we have to pass the enteries of the threshhold and the observer event itself.

//!The IntersectionObserver will observe the target and the root

/*
const obsCallback = function(entries, observer ){
  entries.forEach(entry => console.log(entry));
}


const obsOption = {
  root: null,
  threshold: 0.1,
}


//observer 
const observer = new IntersectionObserver(obsCallback, obsOption);
//we have to observe section 1
observer.observe(section1);

*/

// isIntersecting: false
//We can see is intersecting in the object entry which is true when intersection is happning and false when the object is not intersecting...


// *threshold is the presentage we want to visble on the root, when it is intersecting and matches the threshold percentage it says intersecting true.
// *but when it is not intersecting and matches the threshold percentage then it says false 
//* the observer will call function two time 1st when it is going to intersect then when it stops intersecting but when 10% is visible in the viewport as threshold is 10% and root is null


const obsCallback = function(entries, observer ){
  entries.forEach(entry => console.log(entry));
}


const obsOption = {
  root: null,
  threshold: [0, 0.2],
}
// 0 means that the section is just get into view port and when it completely gets out of the viewport

//observer 
const observer = new IntersectionObserver(obsCallback, obsOption);
//we have to observe section 1
observer.observe(section1);



// const obsCallback = function(enteries, observer){
//  enteries.forEach(entry => {
//   if(en)
//  })
// }

// const obsOptions = {
//   root: null,
//   threshold: -0.1,
// }

// const observer = new IntersectionObserver();