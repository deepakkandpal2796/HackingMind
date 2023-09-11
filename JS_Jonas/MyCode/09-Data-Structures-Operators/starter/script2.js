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

