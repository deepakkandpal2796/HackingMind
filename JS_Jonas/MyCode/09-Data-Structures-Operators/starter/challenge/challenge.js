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



// While brushing up on my JavaScript knowledge, I stumbled upon a fascinating feature.
// Lets suppose we have teams in an office.Some teams dosen't have HR reps(lucky ones), and we have some teams where HR reps are not needed.(value of HR is false in those teams).
// We have to add "1" hr to those team which need HR and dosent have HR.

// Let's suppose we have teams in an office.Some teams dosen't have HR reps(lucky ones), and we have some teams where HR reps are not needed.(value of HR is false in those teams).
// We have to add "1" hr to those team which need HR and dosent have HR.


// // Using nullish(??) operator 
// const team1 = {
//   dev : 8,
//   testers : 4,
//   ba : 3 
// }

// const team2 = {
//   dev : 8,
//   testers : 0,
//   ba : 3,
//   hr: false,
// }
// const teams = [team1, team2];

// teams.forEach(function(team){
//   team.hr = team.hr || 1;
// });

// console.log(team1);
// console.log(team2);

// // Output :
// { dev: 8, testers: 4, ba: 3, hr: 1 }
// { dev: 8, testers: 0, ba: 3, hr: false }

// // It addes 1 to the team2 where the HR is not needed, the reason is the or operator which takes false as the falsy value and assign 1 to team2.hr.

// // The simple solution is to use the Nullish Coalescing operator : It consider on the nusllish value not the falsy value.
// // nullish values are null or undefined.

// teams.forEach(function(team){
//   team.hr = team.hr ?? 1;
// });

// console.log(team1);
// console.log(team2);

// { dev: 8, testers: 4, ba: 3, hr: 1 }
// { dev: 8, testers: 0, ba: 3, hr: false }

// const user1 = {
//   name: "John",
//   address: {
//     city: "New York",
//     street: "123 Main St",
//     zipcode: "10001"
//   }
// };
// const user2 = {
//   name: "Pam",
//   address: null,
// };

// console.log(user1.address.zipcode)
// console.log(user2.address?.zipcode ?? "No address found")
