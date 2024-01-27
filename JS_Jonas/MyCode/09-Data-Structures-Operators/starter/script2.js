'use strict'; 

console.log('script 2')

//? =============== Enhanced object Literals ===============

// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
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

//   //! Earlier we used to do this when we are inheriting any object inside the object
//   openingHours : openingHours,

//   //! And we used to declare the function 
//   order: function(startIndex, mainIndex){
//     return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function({time = '20:21', staterIndex = 1, mainIndex = 0, address = 'In house'}){
//     console.log(`Order Recived, ${this.starterMenu[staterIndex]} and ${this.mainMenu[mainIndex]} will be deliver to ${address} at ${time}`);
//   },
//   orderPasta: function(ing1, ing2, ing3){
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`)
//   },
//   orderPizza: function(mainIng, ...otherIng){
//     console.log(mainIng, otherIng);
//   }
// };


const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  }
}

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //! Now we do this 
  openingHours,

  //! now we do this for function declaration
  order (startIndex, mainIndex){
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery ({time = '20:21', staterIndex = 1, mainIndex = 0, address = 'In house'}){
    console.log(`Order Recived, ${this.starterMenu[staterIndex]} and ${this.mainMenu[mainIndex]} will be deliver to ${address} at ${time}`);
  },
  orderPasta (ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`)
  },
  orderPizza (mainIng, ...otherIng){
    console.log(mainIng, otherIng);
    return true;
  }
};

//? =============== Optional Chaining ===============

//* opening hours on monday
if(restaurant.openingHours && restaurant.openingHours.mon){
  console.log(restaurant.openingHours.mon.open)
}

//* With optional chaining 
//! only if the value before the questionmark exists then only it will give the value after the questionmark.
//! If the value not find then it will return undefined.
// console.log(restaurant.openingHours.mon.open)// error
console.log(restaurant.openingHours.mon?.open); // o/p: undefined
// We can use multiple optional chaining
console.log(restaurant.openingHours?.mon?.open); // o/p: undefined

const days = ['mon', 'tue', 'thr', 'fri', 'sat', 'sun'];
for (const day of days) {
  //const open = restaurant.openingHours[day]?.open || 'closed'; //! this will not work for sat open as it has the value 0 which is a fasly value
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, We open at ${open}`);
}
// o/p: 
// On mon, We open at undefined
// On tue, We open at undefined
// On thr, We open at undefined
// On fri, We open at 11
// On sat, We open at 0
// On sun, We open at undefined g\

//* In Methods 
console.log(restaurant.orderRissoto?.(0,1) ?? "Not exist"); // Not exist
console.log(restaurant.order?.(0,1) ?? "Not Exist ") // [ 'Focaccia', 'Pasta' ]

console.log(restaurant.orderPizza?.("olivs", "peproni") ?? "Sorry not available");
//o/p 
// olivs [ 'peproni' ]
// Sorry not available
//The reason why we are getting 2 output is because the method is not returning anything its just printing 

//* In Arrays

const user = [{name: 'Deepak', Pass: 'romrom'}];
console.log(user?.[0]?.name); //Deepak

//? =============== Looping Objects With For Of ===============

//! Object.Keys -> Will only returns the keys of the object 

const properties = Object.keys(openingHours);
console.log(properties); // [ 'thu', 'fri', 'sat' ]
console.log(properties.length) // 3
//use case 
for( const day of properties){
  console.log(`opens on ${day}`);
}
// o/p
// opens on thu
// opens on fri
// opens on sat

//! Object.Values -> It will give the values of the object keys
const values = Object.values(openingHours);
console.log(values);
// o/p :
// [
//   { open: 12, close: 22 },
//   { open: 11, close: 23 },
//   { open: 0, close: 24 }
// ]

//We can mix both keys and values to get the entries

//! Object.entries  -> This will give you the key and value pair (both)
const entries = Object.entries(openingHours);
console.log(entries);

//o/p:
// [
//   [ 'thu', { open: 12, close: 22 } ],
//   [ 'fri', { open: 11, close: 23 } ],
//   [ 'sat', { open: 0, close: 24 } ]
// ]

//! for( const ent of openingHours.entries())console.log(ent); dont do this here if you are thinking because in menu.entries() the menu is an array of objects, here we are looping the object which dosent have the iteration to begin with we have to convert this in array to itterate.

//use case 
for (const [key, {open, close}] of entries) {
    console.log(`On ${key}, we are open from ${open} till ${close}`);
}

// o/p
// On thu, we are open from 12 till 22
// On fri, we are open from 11 till 23
// On sat, we are open from 0 till 24

//? =============== Sets ===============
// set is a data structure like array and objects 
// Sets is a collection of unique value 

const orderSet = new Set([
  'pasta',
  'pizza',
  'pasta',
  'risotto',
  'pizza'
])

console.log(orderSet) // only uniue elements 
// Set(3) { 'pasta', 'pizza', 'risotto' } 

console.log(new Set("deepak"));
// Set(5) { 'd', 'e', 'p', 'a', 'k' }

//* size 
console.log(orderSet.size) // 3

//* has
console.log(orderSet.has("Pizza")) //false (P is capital)

//* add and delete 
console.log(orderSet.add("garlic bread")) // Set(4) { 'pasta', 'pizza', 'risotto', 'garlic bread' }
console.log(orderSet.add("pizza")) // Set(4) { 'pasta', 'pizza', 'risotto', 'garlic bread' } (unique value only)
console.log(orderSet.delete('pizza'))  // true
console.log(orderSet) // Set(3) { 'pasta', 'risotto', 'garlic bread' }

//* clear 
// orderSet.clear()
console.log(orderSet) // Set(0) {}

//! in sets there is no indexes
console.log(orderSet[1]) // undefine 
//! if you need value from the set then use an array 

//! Sets has no indexing but they are itterable 
for (const item of orderSet) {
  console.log(item);
}
//o/p
// pasta
// risotto
// garlic bread

orderSet.forEach((item) => {
  console.log(item);
})
// o/p
// pasta
// risotto
// garlic bread
 
//! Use case of sets -> We can seprate the unique value.
const workers = ['chef', 'waiter', 'waiter', 'chef', 'sweeper', 'manager'];
// i want to find the unique postions 
const uniqueWorkers = new Set(workers); 
console.log(uniqueWorkers) // Set(4) { 'chef', 'waiter', 'sweeper', 'manager' }
console.log(uniqueWorkers.size) // 4

const numUniqueWorker = new Set(workers).size
console.log(numUniqueWorker); // 4

//* I want to convert the set into the Array to loop over it 
//! as we all know the spread operator is used on the itterables and set is an itterable 

const uniq = [...new Set(workers)];
console.log(uniq); // [ 'chef', 'waiter', 'sweeper', 'manager' ]

const uniqueLetter = new Set('bsjgbdshgibwegbfuqwnklfbinqgewlkhgin').size
console.log(uniqueLetter); //15

//? =============== Maps ===============
// Map is a datastructure we can use to map kays with values.
// In objects mostly the keys are just strings.
// In maps keys can be anything.

const hotel = new Map();

//Set values 
hotel.set('name', 'Hayyat');
hotel.set(1, 'Janakpuri, Newdelhi');
hotel.set(2, 'Mumbai, Maharastra');
hotel.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 20).set(true, 'We are open :D').set(false, 'We are close :(');

console.log(hotel);

//o/p:
// Map(8) {
//   'name' => 'Hayyat',
//   1 => 'Janakpuri, Newdelhi',
//   2 => 'Mumbai, Maharastra',
//   'categories' => [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ],
//   'open' => 11,
//   'close' => 5,
//   true => 'We are open :D',
//   false => 'We are close :('
// }

//* Get values 
console.log(hotel.get('name'));// Hayyat
console.log(hotel.get(true)); //We are open :D
console.log(hotel.get(1)); // Janakpuri, Newdelhi

const time = 13;
console.log(hotel.get(time > hotel.get('open') && time < hotel.get('close'))); // We are open :D

//* has  
console.log(hotel.has('categories')); // true 

//* delete 
hotel.delete(2);
console.log(hotel);

// Map(7) {
//   'name' => 'Hayyat',
//   1 => 'Janakpuri, Newdelhi',
//   'categories' => [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ],
//   'open' => 11,
//   'close' => 20,
//   true => 'We are open :D',
//   false => 'We are close :('
// }

//* size 
console.log(hotel.size); // 7

//* clear 
// hotel.clear();

hotel.set([1,2], 'test');
console.log(hotel);
// Map(8) {
//   'name' => 'Hayyat',
//   1 => 'Janakpuri, Newdelhi',
//   'categories' => [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ],
//   'open' => 11,
//   'close' => 20,
//   true => 'We are open :D',
//   false => 'We are close :(',
//   [ 1, 2 ] => 'test'
// }

//! when we get the array it will give undefined, reason for this is in heap these two are different object.
console.log(hotel.get([1, 2])); //undefined

//! to make sure we are reffrening to the same key 
const arr = [1, 3];
hotel.set(arr, 'Deepak');  
console.log(hotel.get(arr)); // deepak 

//! we can use this to map the DOM 
// hotel.set(document.querySelector('h1'), 'HeadingMain');
console.log(hotel);

//? =============== Maps Iteration ===============
//! Maps are itterables hence we can run a for loop on the map 

const question = new Map([
  ['question', 'What is the best programming language ?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again']
])

console.log(question);
// Map(7) {
//   'question' => 'What is the best programming language',
//   1 => 'C',
//   2 => 'Java',
//   3 => 'Javascript',
//   'correct' => 3,
//   true => 'Correct 🎉',
//   false => 'Try again'
// }

console.log(question.get('question'));
for(const [key, value] of question){
  if(typeof key === 'number' ) console.log(`Answer ${key} : ${value}`)
}
const answer  = 3;
const iscorrect = question.get('correct') === answer;
console.log(question.get(iscorrect));

//! The map structure is same as the object 

// const question = new Map([
//   ['question', 'What is the best programming language ?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again']
// ])
//! The above map is very similar to this object.entries isn't it ? hence we can convert objects into maps 
console.log(Object.entries(openingHours));
// [
//   [ 'thu', { open: 12, close: 22 } ],
//   [ 'fri', { open: 11, close: 23 } ],
//   [ 'sat', { open: 0, close: 24 } ]
// ]

//* Converting objects into maps 
const hourMap = new Map(Object.entries(openingHours))
console.log(hourMap)

// Map(3) {
//   'thu' => { open: 12, close: 22 },
//   'fri' => { open: 11, close: 23 },
//   'sat' => { open: 0, close: 24 }
// }

//* Converting maps into arrays
console.log([...question])
// [
//   [ 'question', 'What is the best programming language ?' ],
//   [ 1, 'C' ],
//   [ 2, 'Java' ],
//   [ 3, 'Javascript' ],
//   [ 'correct', 3 ],
//   [ true, 'Correct 🎉' ],
//   [ false, 'Try again' ]
// ]

console.log(question.keys()) // [Map Iterator] { 'question', 1, 2, 3, 'correct', true, false }
console.log([...question.keys()]) // [ 'question', 1, 2, 3, 'correct', true, false ]
console.log(question.values())
// [Map Iterator] {
//   'What is the best programming language ?',
//   'C',
//   'Java',
//   'Javascript',
//   3,
//   'Correct 🎉',
//   'Try again'
// }
console.log([...question.values()])
// [
//   'What is the best programming language ?',
//   'C',
//   'Java',
//   'Javascript',
//   3,
//   'Correct 🎉',
//   'Try again'
// ]


//? =============== Which Data Structure to Use? ===============

//? Arrays VS Sets 
// Array - When you need ordered list value.
//       - When you need to manupulate the data.(using indexing)
// Sets  - When you need unique values.
//       - sets works faster than the arrays so when we need high performance
//       - Use to remove duplicate.
//? Objects VS Maps
// Objects - Easier to access and understand .
//         - When you need to include function.(methods)
//         - Working with JSON
// Maps    - better performance 
//         - Keys can be any data type 
//         - easy to itterate and compute size 
//         - use when keys are not strings(arrays or boolean)
//         - use when you need to map key to the value.

//? =============== STRINGS ===============
// Strings are like arrays but they are immutable as string are the primitive datatype. 
// Basically any changes in the string will not reflect the change in the main string. (not in the case of objects(array is an object.))
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); //A
console.log(plane[1]); //3
console.log(plane[2]); //2
console.log('B737'[0]); //B

console.log(airline.length); //16
console.log('B737'.length); //4

console.log(airline.indexOf('r')); //6
console.log(airline.lastIndexOf('r')); //10
console.log(airline.indexOf('portugal')); //-1 (portugal not exist, Portugal exist)

console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // Air

console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal

console.log(airline.slice(-2)); // al (this will calculte the elements from the end of the array)
console.log(airline.slice(1, -1)); // AP Air Portuga

//function to check the pessenger have middle seat or not. seatno 11C; seatno 12A
const middleSeat = function (seat){
  // B and E are the middle seat in the seat number. 
  const seatLetter = seat.slice(-1);
  if(seatLetter === 'B' || 'E')console.log(`${seat} is the middle seat`)
  else console.log(`You got lucky`);
}

middleSeat('11B'); // 11B is the middle seat
middleSeat('12C'); // 12C is the middle seat

// Why the methods are applicable on the strings? string is a primitive datatype so how it works?
// Methods are only applicable to the non primitive datatype.
// But in case of strings the js convert the string in an object and then apply methods on to it 
// this is known as the boxing
// After applying the method js then convert the result into string and return  
// How this done 

// as the method all on the string 1st step is to convert into the obejct 
const myName = new String("Deepak1");
console.log(myName); // [String: 'Deepak']
console.log(typeof myName); // object 
// then it will apply the method on this
const slicemyName = myName.slice(1,4);
const lastLetter = myName.slice(-1)
console.log(slicemyName); //eep
console.log(lastLetter); // 1
console.log(typeof slicemyName) // string
console.log(typeof lastLetter) // string


//? =============== STRINGS PART 2===============

// const airline = 'TAP Air Portugal';
console.log(airline.toLocaleLowerCase()); // tap air portugal
console.log(airline.toLocaleUpperCase()); // TAP AIR PORTUGAL

// Fix capitalistaion in name 
const fullName = 'deepak kandpal'
const sliceFirstName = fullName.slice(0, fullName.indexOf(' '));
const sliceLastName = fullName.slice(fullName.indexOf(" ")+1)
console.log(sliceFirstName + sliceLastName) // deepakkandpal

const firstLetterCap = function(word){
  return `${word[0].toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()}`;
}
const firstName = firstLetterCap(sliceFirstName);
const lastName = firstLetterCap(sliceLastName); 
console.log(`${firstName} ${lastName}`); //Deepak Kandpal

//! comparing emails
const email = 'deepak@gmail.com';
const loginEmail = '  deepak@gmail.com  \n';

// const lowerEmail = loginEmail.toLocaleLowerCase();
// console.log(loginEmail) //   deepak@gmail.com  
// const trimEmail = loginEmail.trim();
// console.log(trimEmail); // deepak@gmail.com

const normalisedEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normalisedEmail === email); //true 

//! Replace
const priceDollars = '234$';
// i want to replace $ with ₹

const priceRupee = priceDollars.replace('$', '₹');
console.log(priceRupee); // 234₹

const announcement = 'The gates are going to close. Please stand away from the gates';
//I want door instead of gates.
const announcementNew = announcement.replaceAll('gates', 'doors');
console.log(announcementNew); // The doors are going to close. Please stand away from the doors


//!Booleans

const airPlane = 'Airbus A320neo';
console.log(airPlane.includes('Air')); //true
console.log(airPlane.includes('A320')); //true
console.log(airPlane.startsWith('Airb')); //true

if (airPlane.startsWith('Airbus') && airPlane.endsWith('neo')) {
console.log('Part of the NEW ARirbus family'); // Part of the NEW ARirbus family
}

// Practice exercise
const checkBaggage = function (items) {
    const baggage = items.toLowerCase(); // convert to lower case so we can't stuck at camel casing.
    if (baggage.includes ('knife') || baggage.includes( 'gun')) {
        console.log('You are NOT allowed on board');
    } else {
        console.log('Welcome aboard!');
    }
};
checkBaggage ('I have a laptop, some Food and a pocket Knife'); // You are NOT allowed on board
checkBaggage ( 'Socks and camera'); // Welcome aboard!
checkBaggage ('Got some snacks and a gun for protection'); // You are NOT allowed on board

//? =============== STRINGS PART 3===============

//! Split and join 

console.log('a+very+nice+string'.split('+')); //[ 'a', 'very', 'nice', 'string' ]
console.log('Jonas Schmedtmann'.split(' '));//[ 'Jonas', 'Schmedtmann' ]

const [FirstName, LastName] = "Jonas Schmedtmann".
split(' ');
const newName = ['Mr.', firstName, lastName.
toUpperCase()].join(" ");
console.log(newName); //Mr. Deepak KANDPAL

// Padding
const message = 'Go to gate 23! ';
console.log(message.padStart(25, '+')); //++++++++++Go to gate 23!
//the length of the string is 25.
console.log(message.padEnd(25, '+')); // Go to gate 23! ++++++++++

const masterCard = function(number){
  let str = number + ''; //converting the number to the string so we can use the methods on this string 
  let last =  str.slice(-4);
  return last.padStart(str.length, '*');
}
console.log(masterCard(123456432)); //*****6432
console.log(masterCard(1234543212345654)); //************5654
console.log(masterCard('12345432123456543')); //*************6543

