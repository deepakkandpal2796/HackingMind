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

//swaping variables 
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
