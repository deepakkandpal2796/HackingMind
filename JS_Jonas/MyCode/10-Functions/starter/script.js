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
//======= Higher Order Function and First class function. =======
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
const greet = function (greeting) {
    return function (name) {
      console.log(`${greeting} ${name}`);
    };
  };
  
  const greeterHey = greet('Hey');
  greeterHey('Jonas');
  greeterHey('Steven');
  
  greet('Hello')('Jonas');