// Destructuring, SPREAD and REST operators 

'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(startIndex, mainIndex){
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
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
    },
  },
  orderDelivery: function({time = '20:21', staterIndex = 1, mainIndex = 0, address = 'In house'}){
    console.log(`Order Recived, ${this.starterMenu[staterIndex]} and ${this.mainMenu[mainIndex]} will be deliver to ${address} at ${time}`);
  },
  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`)
  },
  orderPizza: function(mainIng, ...otherIng){
    console.log(mainIng, otherIng);
  }
};

// Destructuring is used to break the big datastructures into the smaller ones 

//*=========================Destructuring of arrays=========================

//?The Noob way
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];


//?Destructuring
const [x, y, z] = arr;
console.log(x, y, z); // 2 3 4
console.log(arr); // [ 2, 3, 4 ]

//? Take only two elements 
const [first, second] = restaurant.categories;
console.log(first, second); //Italian Pizzeria

//?Skip any element 
let [starter, ,main] = restaurant.starterMenu;
console.log(restaurant.starterMenu) //[ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ]  
console.log(starter, main); // Focaccia Garlic Bread

//*swaping variables 
[starter, main] = [main, starter];
console.log(starter, main); // Garlic Bread Focaccia

//? Recieve 2 retrun value from a function
const [start, secondary] = restaurant.order(0, 2); //! remember this function return the array 
console.log(start, secondary); // Focaccia Risotto

//?Nested array destructuring  
const nested = [1, 2, [2, 4]];
const [i, ,j] = nested;
console.log(nested); // [ 1, 2, [ 2, 4 ] ]
console.log(i, j); // 1 [ 2, 4 ]

//?Nested destructuring (destructuring inside destructuring)
const [x1, , [y1, z1]] = nested;
console.log(x1, y1, z1); // 1 2 4

//? Default values 
const [p, q, r] = [8, 9]
console.log(p, q, r); // 8 9 undefined
// when there is less values and more variable, the variable which dont have value store undefine 
//! Now can also provide defalut values to the variable 
const [m = 1, n = 1, o = 1] = [6, 7];
console.log(m, n, o); // 6 7 1


//*=========================Destructuring of objects=========================
//!syntax - we have to provide the variable name which exactly match the property name of the objects.

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

// Classico Italiano
// {
//   thu: { open: 12, close: 22 },
//   fri: { open: 11, close: 23 },
//   sat: { open: 0, close: 24 }
// }
// [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ]

//? Variable name different from the property name 
const {name: dish, openingHours: hours, categories: types} = restaurant;
console.log(dish, hours, types);

// Classico Italiano
// {
//   thu: { open: 12, close: 22 },
//   fri: { open: 11, close: 23 },
//   sat: { open: 0, close: 24 }
// } 
// [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ]

//? Default value 
//!menu is not a key in the object restaurant so it will remain empty but the staterMenu will get filled
const {menu = [], starterMenu:staters = []} = restaurant;
console.log(menu, staters); // [] [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ]

//? Mutating Variable
//! here we have two variable one and two we want to rewrite the variable in destructuring form then
let one = 23;
let two = 31;
const obj = {one: 21, two:24, three:31};
({one, two} = obj); //! we have to wrap this up in the paranthesis to make sure there is no error 
console.log(one, two); // 21 24


//? Nested object destructuring
//! we can directly call the object inside the object without the dot notation 

const {fri} = restaurant.openingHours;
console.log(fri); // { open: 11, close: 23 }

const {fri : {open, close}} = openingHours;
//! console.log(fri, open, close);in this case fri is not a varible here only open and close are the variable 
console.log(open, close); // 11 23

//=================FUNCTIONS==============================

//? Destructuring Methods in objects
// many time we have alot of parameter for a function and its very hard to find the order of the parameter 
// Instead of finding the parameter manually we can just pass the object to the function as an argumnet 
//! The function then destructure that object and used that

// orderDelivery: function({time, staterIndex, mainIndex, address}){
//   console.log(`Order Recived, ${this.starterMenu[staterIndex]} and ${this.mainMenu[mainIndex]} will be deliver to ${address} at ${time}`);
// }

// this looks like we are passing four arguments but its not like that we are just passing one object and this function will get the value by destructuring the object.
//! the order of the argument can be anything the function we destructre it itself 

restaurant.orderDelivery({
  time: '12:30',
  address: "Janakpuri",
  staterIndex: 2,
  mainIndex: 1,
})
// Order Recived, Garlic Bread and Pasta will be deliver to Janakpuri at 12:30

//*=========================Spread Operators=========================

//=================ARRAYS==============================

//? Array litteral using spread operator
const ar = [7, 8, 9];
//! now we want to use this array in our new array the option is looping through the element or use the basic method which is
const badNewAr = [1, 2, ar[0], ar[1], ar[2]];
console.log(badNewAr); //[ 1, 2, 7, 8, 9 ]
//! The good method is using the spread operator 
const goodNewAr = [1, 2, ...ar]
console.log(goodNewAr); //[ 1, 2, 7, 8, 9 ]

// "..." is the spread operator ->  this will expand this array into all the its individual elements 
console.log(...goodNewAr) // 1 2 7 8 9

const newMenu = [...restaurant.mainMenu, "Shahi Paneer"];
console.log(newMenu); // [ 'Pizza', 'Pasta', 'Risotto', 'Shahi Paneer' ]


//! Important 
//! spread operator take all the elements from the array and doesnot create any variables, so we can only use this in a place where we are using the values seprated by commas. 
//? joining two array 
const newmenu = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(newmenu);
// [ 'Pizza', 'Pasta','Risotto', 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

//? Spead operator -  Spread operator is not for arrays, Spread operator is for itterables 
//! Iterables - array, stings, maps, sets, NOT object
//!ES2018 spread operators also works on the objects even though they are not Iterables 


//? Spread operator on a string
const firstName = 'Deepak';
const lastName = 'Kandpal'
const myNameLetters = [...firstName, ...lastName];
console.log(myNameLetters);
// [
//   'D', 'e', 'e', 'p',
//   'a', 'k', 'K', 'a',
//   'n', 'd', 'p', 'a',
//   'l'
// ]
console.log(...firstName); // D e e p a k
//!console.log(`my name letters are ${...myNameLetters}`); //error 
//! This is giving error because this is not the places where we are expecting values seprated by commas.
//! Usually functions and arrays are the place where we need values seprated by commas.

//=================FUNCTIONS==============================

//? Passing multiple arguments in the function using spread operator 
//Prompt is defined in the browser engine not in the node 
const ingridents = [
  // prompt(`Let's make pasta! ingredient 1?`),
  // prompt(`ingredient 2?`),
  // prompt(`ingredient 3?`)
];

console.log(ingridents);

//This is the normal way 
restaurant.orderPasta(ingridents[0], ingridents[1], ingridents[2] ); // Here is your delicious pasta with mushroom, cheese and bread
//This is the spread operator way
restaurant.orderPasta(...ingridents); // Here is your delicious pasta with mushroom, cheese and bread

//=================OBJECTS==============================

//? spread operators in objects
//? ES2018 spread operators also works on the objects even though they are not Iterables 
const newRestaurant = {foundedIn: 2023, ...restaurant, founder: 'Deepak'} 
console.log(newRestaurant);

// {
//   foundedIn: 2023,
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ],
//   starterMenu: [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ],
//   mainMenu: [ 'Pizza', 'Pasta', 'Risotto' ],
//   order: [Function: order],
//   openingHours: {
//     thu: { open: 12, close: 22 },
//     fri: { open: 11, close: 23 },
//     sat: { open: 0, close: 24 }
//   },
//   orderDelivery: [Function: orderDelivery],
//   orderPasta: [Function: orderPasta],
//   founder: 'Deepak'
// }


//*=========================Rest pattern and parameter=========================

// REST operator is same as the SPREAD operator but it does opposite work as SPREAD
//! Spread operator is used to make the array in to comma seprated values 
//! Rest operator used to pack the variables into the array
// SPREAD = EXPAND, REST = COMPRESS

//=================ARRAYS==============================

//? SPREAD used on the right hand side ...
const spreadArr = [2, 3, ...[4, 5]];
console.log(spreadArr); // [ 2, 3, 4, 5 ]

//? REST use on the left hand side ...
const [firstEl, secondEl, ...others] =  [2, 3, 4, 5, 6, 7];
console.log(firstEl, secondEl, others); // 2 3 [ 4, 5, 6, 7 ]
//! As the name suggest rest it keeps rest of the element in an Array 
//! Make sure the last element is the REST operator after that there should be no operator as it takes the rest of the element in the array.

//? Using SPREAD and REST Together 
//const [pizza, risotto, ...otherFood, salad] = [...restaurant.mainMenu, ...restaurant.starterMenu] //!SyntaxError: Rest element must be last element
const [pizza, risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu] 
console.log(...restaurant.mainMenu, ...restaurant.starterMenu)
// Pizza Pasta Risotto Focaccia Bruschetta Garlic Bread Caprese Salad
console.log(pizza, risotto, otherFood);
// Pizza Pasta ['Risotto','Focaccia','Bruschetta','Garlic Bread','Caprese Salad']


//=================OBJECTS==============================

//!It also the the value of the object by key name, sat is in the sat const and rest are in the weekdays
// const {sat, ...weekDays} = restaurant.openingHours
const {sat: weekEnd, ...weekDays} = restaurant.openingHours //We can also name the variable just like destructuring 
console.log(restaurant.openingHours);
// {thu: { open: 12, close: 22 },fri: { open: 11, close: 23 },sat: { open: 0, close: 24 }}
// console.log(sat, weekDays);
// { open: 0, close: 24 } { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 } }
console.log(weekDays,weekEnd)
// { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 } } { open: 0, close: 24 }

//=================FUNCTIONS==============================
//! In SPREAD operator -> We have the incredient array and then we are spreadding the array and passing into the function 
// orderPasta: function(ing1, ing2, ing3){
//   console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`)
// }
// restaurant.orderPasta(...ingridents);

// In REST operator 
const add = function (...numbers){
  console.log(numbers); // [ 1, 2, 3, 4, 5 ], [ 1, 2, 3 ], [ 1, 2 ]
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  console.log(sum);
}

//! We can pass as many as argumnet we want 
// The rest operator make construct an array out of it then we will use that array.
add(1, 2, 3 ,4 ,5); //15
add(1, 2, 3); //6
add(1, 2); //3

//? Using the spread and rest operator together 
const addArr = [2, 3, 10, 12];
add(...addArr)// 27
// Here we are passing he array in the function by destructuring it 
// After destructring the element we are making the element put togethere and passing it like an array in the add function
//! Why dont we directly pass the array inside the add function?
//! Then we are limiting are function to only accept the arrays not the single values here it can accpet both array and single values.
//! REST and SPREAD are more useful in the mordern JS


// Using rest operator we are not limiting arguments in the function, can use as many as we want.
restaurant.orderPizza('mushroom', 'olivs', 'cheeze', 'spices'); // mushroom [ 'olivs', 'cheeze', 'spices' ]
restaurant.orderPizza('mushrooom'); // mushrooom []


//? =============== Short Circuiting (&& and ||) ===============

// Conditional Statemeents(||, &&)
// 1) They can use "ANY datatype" for comparision
// 2) They return "ANY datatype" (both truthy and falsy value)
// 3) They use short-circuiting. (Return the desired value as soon as statement sees it)

//? ===============Conditional OR===============
console.log( 3 || 'Deepak') // 3
// both are truthy values so it uses shortCircuiting and return 3
console.log("" || 'Deepak' ) //Deepak
// "" is a falsy value so it goes to the next value and check if it is truthy or not.
console.log( true || 0); //true
// we can use any datatype here bolleans and number.
console.log(undefined || null) //null
// Both are falsy values so it return "ANY datatype" check all the values and return.

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello using shortcircuiting 

//? =============== Practical Application ===============
// restaurant.numGuests = 23;
restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; 
// if restaurant.numGuests = " " then put 10 there.
console.log(`guests1 : ${guests1}`);

//New approach 
const guests2 = restaurant.numGuests || 10;
console.log(`guests2 : ${guests2}`);

// But there is a problem in both if restaurant.numGuests = 0 then also it will give 10 in return because these ternary and the conditional operator works on the falsy and truthy value,

//? ===============Nullish Coalescing ===============
//! This will only consider the nullish value not the falsy value 0 is the falsy value but not the nullish value. 
//! Nullish value are null and undefined.
//! The nullish coalescing operator can be seen as a special case of the logical OR (||) operator. 
const guests3 = restaurant.numGuests ?? 10
console.log(`guests3 : ${guests3}`);

//? ===============Conditional AND===============

console.log(0 && 'Deepak'); // 0 
// here && use short cuircuiting as 0 is a falsy value so it ends there
console.log(7 && 'Deepak');
// 1st is truth so it will move to the 2nd one to check and return that
console.log(null && 'Deepak');
// here && use short cuircuiting as null is a falsy value so it ends there

//? =============== Practical Application ===============
// console.log(restaurant.orderPizza)//! [Function: orderPizza]
if(restaurant.orderPizza){ // we are checking if this method in the object exists
    restaurant.orderPizza('mushroom', 'olivs', 'cheeze'); // mushroom [ 'olivs', 'cheeze' ]
}

//New approach
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'olivs', 'cheeze'); // mushroom [ 'olivs', 'cheeze' ]

// HERE WE CANT USE NULLISHING OPERATOR ITS ONLY FOR OR(||).
// If you want to count 0 as an truthy value you have to put or condition to this 

//! dont replace all your code with this Short Circuiting (&& and ||), this will make your code very hard to read.

//? =============== Logical Assignment ===============

const restaurant1 = {
  restName: 'Capri',
  numGuests: 0, 
}
const restaurant2 = {
  restName: 'La Praza',
  owner: 'Rossi',
}

//? We want to set up the value numGuests in both the restaurant1 and 2.

//Older way
// restaurant1.numGuests = restaurant1.numGuests || 10;
// restaurant2.numGuests = restaurant2.numGuests || 10;
// console.log('restaurant1: ', restaurant1); // restaurant1:  { restName: 'Capri', numGuests: 20 }
// console.log('restaurant2: ', restaurant2); // restaurant2:  { restName: 'La Praza', owner: 'Rossi', numGuests: 10 }

//Using logical assignment 
// restaurant1.numGuests ||= 10;
// restaurant2.numGuests ||= 10;
// console.log('restaurant1: ', restaurant1); // restaurant1:  { restName: 'Capri', numGuests: 20 }
// console.log('restaurant2: ', restaurant2); // restaurant2:  { restName: 'La Praza', owner: 'Rossi', numGuests: 10 }

//The problem with the logical operator again comes that they will take 0 as falsy value and whrn numGuests is 0 they will set the default value instead of 0.
restaurant1.numGuests ??= 10;
restaurant2.numGuests ??= 10;
console.log('restaurant1: ', restaurant1); // restaurant1:  { restName: 'Capri', numGuests: 00 }
console.log('restaurant2: ', restaurant2); // restaurant2:  { restName: 'La Praza', owner: 'Rossi', numGuests: 10 }

//Now We want to replace the string of the owner with the string ANONYMOUS
restaurant1.owner &&= `<ANONYMOUS>`;
restaurant2.owner &&= `<ANONYMOUS>`;
console.log('restaurant1: ', restaurant1); // restaurant1:  { restName: 'Capri', numGuests: 0 }
console.log('restaurant2: ', restaurant2); // restaurant2:  { restName: 'La Praza', owner: '<ANONYMOUS>', numGuests: 10 }

//! BRIEF 
// restaurant1.owner &&= `<ANONYMOUS>`; 
// this is basically -> restaurant1.owner = restaurant1.owner && `<ANONYMOUS>`;
//! this is basically checking the value of the owner in restaurant if that value holds then it checks the next condition in the restaurant1 there is no owner mentoined, hence it will not run and there is now owner is created.
//! in the restaurant2 there is already an owner so the 1st condition holds true and 2nd is a string which is a truthy value hence && use the short-ciructing and return the ANONYMOUS string.

//! MOST IMP
//! TO CHECK THE VALUE ALREADY EXSIT IF NOT THEN TO ADD NEW DEFAULT VALUE USE ||.
//! TO CHANGE THE EXISTING VALUE USE &&.(THIS DONT ADD NEW KEY VALUE JUST CHANGE THE EXISTING VALUE)


//? ===============  Looping Arrays: The for-of Loop ===============
//! In forof loop we can use the break and continue statements in like in for and while.

//? Iterating Element 
const Newmenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of Newmenu) {
  console.log(item);
// Output
'Focaccia'
'Bruschetta'
'Garlic Bread'
'Caprese Salad'
'Pizza'
'Pasta'
'Risotto'
}

//? Iterating Index (iterting index in for)
for (const item of Newmenu.entries()) {
  console.log(item);
  //Output
// [ 0, 'Focaccia' ]
// [ 1, 'Bruschetta' ]
// [ 2, 'Garlic Bread' ]
// [ 3, 'Caprese Salad' ]
// [ 4, 'Pizza' ]
// [ 5, 'Pasta' ]
// [ 6, 'Risotto' ]
}
console.log(Newmenu.entries()); // Object [Array Iterator] {}

console.log([...Newmenu.entries()]); //! Check this in console
// It retrun the array which contain the array of 2 containing the index and the value.
//Output

// [0Array(2), 1Array(2), 2Array(2), 3Array(2), 4Array(2), 5Array(2), 6Array(2)] // which when expainds gives

// [
//  0: [ 0, 'Focaccia' ],
//  1: [ 1, 'Bruschetta' ],
//  2: [ 2, 'Garlic Bread' ],
//  3: [ 3, 'Caprese Salad' ],
//  4: [ 4, 'Pizza' ],
//  5: [ 5, 'Pasta' ],
//  6: [ 6, 'Risotto' ]
// ]


for (const item of Newmenu.entries()) {
  console.log( `${item[0] + 1}: ${item[1]}`);
}
// o/p 
// 1: Focaccia
// 2: Bruschetta
// 3: Garlic Bread
// 4: Caprese Salad
// 5: Pizza
// 6: Pasta
// 7: Risotto

//! lets do this with destructuring 
for( const [itemNo, itemVal] of Newmenu.entries()){
  console.log(itemNo, itemVal)
}
// o/p:
// 0 Focaccia
// 1 Bruschetta
// 2 Garlic Bread
// 3 Caprese Salad
// 4 Pizza
// 5 Pasta
// 6 Risotto

for( const [itemNo, itemVal] of Newmenu.entries()){
  console.log( `${itemNo + 1}: ${itemVal}`);
}
//o/p:
// 1: Focaccia
// 2: Bruschetta
// 3: Garlic Bread
// 4: Caprese Salad
// 5: Pizza
// 6: Pasta
// 7: Risotto
