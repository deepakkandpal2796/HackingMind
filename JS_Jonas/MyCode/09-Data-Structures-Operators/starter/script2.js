'use strict'; 

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
  
//? ===============  Looping Arrays: The for-of Loop ===============
//! In forof loop we can use the break and continue statements in like in for and while.

//? Iterating Element 
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) {
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
for (const item of menu.entries()) {
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
console.log(menu.entries()); // Object [Array Iterator] {}

console.log([...menu.entries()]); //! Check this in console
// It retrun the array which contain the array of 2 containing the index and the value.
//Output

// [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)] // which when expainds gives

// [
//  0: [ 0, 'Focaccia' ],
//  1: [ 1, 'Bruschetta' ],
//  2: [ 2, 'Garlic Bread' ],
//  3: [ 3, 'Caprese Salad' ],
//  4: [ 4, 'Pizza' ],
//  5: [ 5, 'Pasta' ],
//  6: [ 6, 'Risotto' ]
// ]


for (const item of menu.entries()) {
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
for( const [itemNo, itemVal] of menu.entries()){
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

for( const [itemNo, itemVal] of menu.entries()){
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

