'use strict';

//! Function are also  objects in JavaScript. They have properties and methods just like any other object.

// ======= Default Parameters in function =======
const bookings = [];

const createBooking = function (
 //! ES6 -setting default value in the parameter.
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //! ES5 - we do this like this to assign default value.
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  //This is how we set key and value at the same time.
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
//{ flightNum: 'LH123', numPassengers: 1, price: 199 }
createBooking('LH123', 2, 800);
// { flightNum: 'LH123', numPassengers: 2, price: 800 }
createBooking('LH123', 2);
// { flightNum: 'LH123', numPassengers: 2, price: 398 }
createBooking('LH123', 5);
// { flightNum: 'LH123', numPassengers: 5, price: 995 }

//! If we want to skip a attribute we have to pass undefine as parameter.
createBooking('LH123', undefined, 1000);
// { flightNum: 'LH123', numPassengers: 1, price: 1000 }


///////////////////////////////////////


// ======= How Passing Arguments Works: Values vs. Reference =======
//! there is no such thing as pass by refrence in js only pass by value.
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    console.log('Checked in');
  } else {
    console.log('Wrong passport!');
  }
};

checkIn(flight, jonas); // Checked in
console.log(flight); // LH234
console.log(jonas); // { name: 'Mr. Jonas Schmedtmann', passport: 24739479284 }

//! In case of object the change in the value of the object lead to the change in the main object to (this sounds like the pass by refrence but it is not, in js only pass by value exists )

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas); // { name: 'Mr. Jonas Schmedtmann', passport: 24739479284 }
checkIn(flight, jonas); // Wrong passport!
console.log(jonas); // { name: 'Mr. Mr. Jonas Schmedtmann', passport: 16214858283 }

//! In javascript we only can do pass by value not pass by refrence... if you look at the jonas object which got changed it is also pass by value not refrence....it is changed because we are passing the address of the jonas object as the value....so it is pass by value but we are passing the address as a value to the function hence in js it is pass by value....and hence the jonas object got change

// just study this only 

function changeStuff(a, b, c)
{
  a = a * 10;
  b.item = "changed";
  c = {item: "changed"};
}

var num = 10;
var obj1 = {item: "unchanged"};
var obj2 = {item: "unchanged"};

changeStuff(num, obj1, obj2);

console.log(num); // 10
console.log(obj1.item); // changed
console.log(obj2.item); // unchanged

//! if you change the parameter itself (as with num and obj2), that won't affect the item that was fed into the parameter. But if you change the internals of the parameter, that will propagate back up (as with obj1).

///////////////////////////////////////


// ======= Higher Order Function and First class function. =======
//! A higher order function is a function that takes a function as an argument, or returns a function. Higher order function is in contrast to first order functions, which don’t take a function as an argument or return a function as output.

//======= First class function =======
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
  };
  
const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
  };

//======= Higher-order function =======
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
  
    console.log(`Transformed by: ${fn.name}`);
};
//======= Functions Accepting Callback Functions =======

//! A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

transformer('JavaScript is the best!', upperFirstWord);
// output:
// Original string: JavaScript is the best!
// Transformed string: JAVASCRIPT is the best!
// Transformed by: upperFirstWord
transformer('JavaScript is the best!', oneWord);
// output:
// Original string: JavaScript is the best!
// Transformed string: javascriptisthebest!
// Transformed by: oneWord

// ======= JS uses callbacks all the time =======
const high5 = function () {
    console.log('👋');
  };
//document.body.addEventListener('click', high5);
  ['Jonas', 'Martha', 'Adam'].forEach(high5);
//   👋
//   👋
//   👋
//   addEventListener, forEach these are also callback function 

///////////////////////////////////////

// ======= Functions Returning Functions =======

// const greet = function (greeting) {
//     return function (name) {
//       console.log(`${greeting} ${name}`);
//     };
//   };

//* written in arrow function format 
const greet = (greeting) => {
    return (name) => {
        console.log(`${greeting} ${name}`);
    }
}
  
  console.log(greet('Hey'));
//   function (name) {
//     console.log(`${greeting} ${name}`);
//   };
  const greeterHey = greet('Hey');
//  now we have a function in greeterHey and we can call it. 
  greeterHey('Jonas');  // hey Jonas 
  greeterHey('Steven'); // hey Steven

  // Make this without the 
  greet('Hello')('Jonas');

///////////////////////////////////////

// =======The call and apply Methods=======

const indigo = {
  airline: 'Indigo',
  iataCode: 'I',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}-${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

const airIndia = {
  airline: 'airIndia',
  iataCode: 'AI',
  bookings: [],
};

indigo.book(123, 'Deepak Kandpal');
// Deepak Kandpal booked a seat on Indigo flight I-123
console.log(indigo.bookings);
// { flight: 'I123', name: 'Deepak Kandpal' } ]

const book = indigo.book;
// book(123, 'Deepak Kandpal');//Error
//`${name} booked a seat on ${this.airline} flight ${this.iataCode}-${flightNum}`
//Cannot read property 'airline' of undefined

//! this is because when we save the function in other constant now the this keword is pointing to that fucntion not to the object.

// =====Call Method=====
//! Basically we can define that where the this keyword to point at. 

//here this keword is pointing towards the airIndia object 
book.call(airIndia,123, 'Deepak Kandpal');
// Deepak Kandpal booked a seat on airIndia flight AI-123
console.log(airIndia.bookings);
// [ { flight: 'AI123', name: 'Deepak Kandpal' } ]

book.call(indigo,456, 'Deepak Kandpal');
//Deepak Kandpal booked a seat on Indigo flight I-456
console.log(indigo.bookings);
// [
//   { flight: 'I123', name: 'Deepak Kandpal' },//old entry
//   { flight: 'I456', name: 'Deepak Kandpal' } //new entry
// ]

// =====Apply Method=====

//! The difference is that apply let you invoke the function with arguments as an array; call requires the parameters be listed explicitly. 

const flightData = [231, 'Tushar Bharti'];
//Tushar Bharti booked a seat on Indigo flight I-231
book.apply(indigo, flightData);
console.log(indigo.bookings);
// [
//   { flight: 'I123', name: 'Deepak Kandpal' },
//   { flight: 'I456', name: 'Deepak Kandpal' },
//   { flight: 'I231', name: 'Tushar Bharti' }
// ]

// We can do this same using destructuring 
book.call(airIndia, ...flightData);
// Tushar Bharti booked a seat on airIndia flight AI-231

console.log(airIndia.bookings);
// [
//   { flight: 'AI123', name: 'Deepak Kandpal' },
//   { flight: 'AI231', name: 'Tushar Bharti' }
// ]

///////////////////////////////////////

// =======The Bind Methods=======

//! using bind make diffrent fucntion form a function with the preset values of argument given to them.

//! Use .bind() when you want that function to later be called with a certain context, useful in events. Use .call() or .apply() when you want to invoke the function immediately, and modify the context.


// Preset values - this is called patial application where apart of argument is already passed in the function.

//can derive and save 2 diiferent function from a function
const bookAI = book.bind(airIndia);
const bookI = book.bind(indigo);

//for flight no 123
const bookAI123 = bookAI.bind(null, 123);//keep the first value null which you are going to pass later
const bookI123 = book.bind(indigo, 123);

bookAI123('Radhika'); 
//Radhika booked a seat on airIndia flight AI-123
bookI123('Aisha');
// Aisha booked a seat on Indigo flight I-123
console.log(airIndia.bookings);
// [
//   { flight: 'AI123', name: 'Deepak Kandpal' },
//   { flight: 'AI231', name: 'Tushar Bharti' },
//   { flight: 'AI123', name: 'Radhika' }
// ]
console.log(indigo.bookings);
// [
//   { flight: 'I123', name: 'Deepak Kandpal' },
//   { flight: 'I456', name: 'Deepak Kandpal' },
//   { flight: 'I231', name: 'Tushar Bharti' },
//   { flight: 'I123', name: 'Aisha' }
// ]

// ====== Event Listners =======

airIndia.plane = 300;
airIndia.buyPlane = function(){
  console.log(this);
  this.plane++;
  console.log(this.plane);
}

// document.querySelector('.buy').addEventListener('click', airIndia.buyPlane);
  // this is pointing to the element which are in 
  //<button class="buy">Buy new plane 🛩</button>
  
// document.querySelector('.buy').addEventListener('click', airIndia.buyPlane.call(airIndia));
// this will make the function work even if without clicking the function as call does not save the preset pass to it.

//! Use .bind() when you want that function to later be called with a certain context, useful in events. Use .call() or .apply() when you want to invoke the function immediately, and modify the context.

document.querySelector('.buy').addEventListener('click', airIndia.buyPlane.bind(airIndia));


///////////////////////////////////////
// ============Immediately Invoked Function Expressions (IIFE)============

// These function are just run once 

//not like this;
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

IIFE
(() => console.log('This will ALSO never run again'))();


// Also as this function is in a scope (), the varibale cant be accessable  outside of that scope.

///////////////////////////////////////
//* ============Closures============

//! Closure is not a thing which we perform  it is a situation which we have observed.

//!-------
//! Closures only works when a function is returning a function.

// const deepak = function () {
//   let paseenger = 0;
//   return paseenger++
// }

// deepak();
// deepak();

//here we know how the scope chaining works, so this works normally how the scope chainging works 
//!--------

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker(); //1 passengers
booker(); //2 passengers
booker(); //3 passengers

//* Question :- Every time the booker function calls the new  execution context is created and added to the stack. So how the value is getting updated.

//! A function has access to the variable environment (VE) of the execution context in which it was created. This is knows as clouser. 

//! const booker = secureBooking();  --> this has created in the secureBooking environment so it has the context of secureBooking. 

//! That is why everytime the function is calleld it get saved to the passengerCount variable.

//!=================================

// const deepak = function () {
//   let paseenger = 0;
//   return paseenger++
// }

// deepak();
// deepak();

//! If we see this here deepak function is created in global context so everytime it has been called then passenger starts from 0.

//! And for that we can now see if passenger is declared in the global context then it got updated.

//   let paseenger = 0;
// const deepak = function () {
//   return paseenger++
// }

// deepak();
// deepak();

//!=================================




