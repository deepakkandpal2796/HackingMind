'use strict';

//* ===============Functions===============

// Function declaration
function greet() {
    console.log("Hello, world!");
  }
  
  // Function call
  greet(); // Output: Hello, world!

//* Using attriutes in function 
//* using return 
function displayDetails(firstName, job){
    return `Hi! my name is ${firstName} and I am a ${job}`
}

const deepakDetail = displayDetails('Deepak', 'Application Enginner')
console.log(deepakDetail);
// when you RE using retur keyword then store the value in a variable

//* ===============Function Declaration & Function Expression===============

// Function Declaration 
function calculateAge1 (birthYear, currentYear){
    return currentYear - birthYear;
}
const deepakAge = calculateAge1(2000, 2023);

//! function Expression 
const calculateAge2 = function (birthYear, currentYear){
    return currentYear - birthYear;
}
const vanshikaAge = calculateAge2(2002, 2023);

console.log(`Deepak's Age ${deepakAge}, Vanshika's Age: ${vanshikaAge}`);

//! In function declaration we can call the function above the declaration it will work but that dosen't happen in function expression.  
//! this will give no error.
// const deepakAge = calculateAge1(2000, 2023);

// function calculateAge1 (birthYear, currentYear){
//     return currentYear - birthYear;
// }

//* ===============Arrow Functions===============
//! Adwance form of function expression.
const calculateAge3 = (birthYear, currentYear) => {
    return currentYear - birthYear;
}

const akanshasAge = calculateAge2(2001, 2023);

console.log(`Akansha's Age ${akanshasAge}`);

//* When we have one parameter then we can remove the bracket 
const retirementAge = birthYear => 2060-birthYear;  // We write this function in one line.
const myRetirementAge = retirementAge(2000);
console.log(myRetirementAge);


//* When we have no parameter 
const wishBirthday = () => console.log("Happy Birthday");

//* ===============Function Calling Another Function===============

function cutFruitPieces(numberOffruit){
    return 4*numberOffruit;
}
 
function foodProcessor(apples, oranges){
    //* calling another function 
    const piecesOfApple = cutFruitPieces(apples);
    const piecesOfOranges = cutFruitPieces(oranges);

    const starting = `The Food processor is making juice of ${apples} apples and ${oranges} oranges`;
    const juice = `The apple is being cut into ${piecesOfApple} piece and the orange has been cut into ${piecesOfOranges} piece.`
    const ready = `Your Juice is Ready`;

}

console.log(foodProcessor(3,4));

//* ===============Arrays Basics===============

//* To Store more than one value together we use array data-structure.

//! Declaration 
const friends = ['Deepak', 'Akansha', 'Vanshika'];
console.log(friends);
//! Literal syntax - new keyword in js is used to create instance of an object that has a constructor function 
//*Basically a new empty object is crearted having the property of the parent object.
const years = new Array(1991,1999,2000);


//* Iterating the arrays - arrays can be iterated with there index number 
console.log(years[0]); // 1991
console.log(friends[1]); // Akansha 
console.log(friends.length); // 3


//! In js the array is treated as the object so we can use .length feature of array 
typeof(friends); // object 

//* Change/Mutating the array 
friends[2] = 'Kabir'
console.log(friends); // [ 'Deepak', 'Akansha', 'Kabir' ]
//! ===============Important===============

// Question : The array we declare is constant then how we are able to change the value of the array.
// Answer : Const only work on the primitive DataType and array is not a primitive Datatype.
//! what we cant do is we cant change the whole array 
//friends = ['bob', 'smith']; //error

//! We can put Array, anyvariable and expersions inside an array
const firstName = 'Deepak'
const personalInfo = [firstName, 2023-2000, friends];
console.log(personalInfo); // [ 'Deepak', 23, [ 'Deepak', 'Akansha', 'Kabir' ] ]
console.log(personalInfo[2]); // [ 'Deepak', 'Akansha', 'Kabir' ]
console.log(personalInfo[2][1]); // Akansha


//! We cant pass the array as an argument in the function 

//* ===============Arrays Methods===============

