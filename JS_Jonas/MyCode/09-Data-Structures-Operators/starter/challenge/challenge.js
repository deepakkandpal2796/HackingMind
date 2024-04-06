'use strict';

// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!
*/

//selecting elements

// let textarea = document.getElementById('text');
// let button = document.getElementById('submit');

// //add event listners
// button.addEventListener('onClick', printOutputs);
// let output;
// const printOutputs = function(textareaInput){
//     let input = textareaInput.value;
    
//     const inputArray = input.split('\n');
//     inputArray.forEach(item => {
//       const items = item.split('_');
//       let final = " ";
//       items.forEach(val => {
//         final = final + val;
//         output.push(final);
//       });
//     });

// }

// console.log(output);






// const openingHours = {
//   thu: {
//     open: '12 pm',
//     close: '22 pm',
//   },
//   fri: {
//     open: '11 am',
//     close: '23 pm',
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   }
// }

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours,
// };

// const days = ['mon', 'tue', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(open != 'closed' ? `On ${day}, We open at ${open}` : `On ${day}, We are ${open}`);
// }

// On mon, We are closed
// On tue, We are closed
// On thu, We open at 12 pm
// On fri, We open at 11 am
// On sat, We open at 0
// On sun, We are closed