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

const frnds = ['Akansha', 'kabir', 'Vanshika', 'Tulsi'];

// Adding Element 
frnds.push('Tushar'); // add to the back 
console.log(frnds); //[ 'Akansha', 'kabir', 'Vanshika', 'Tulsi', 'Tushar' ]
frnds.unshift('Mansi'); // add to the front 
console.log(frnds); // [ 'Mansi', 'Akansha', 'kabir', 'Vanshika', 'Tulsi', 'Tushar' ]

// Remove Element - These will return the element which is removed 
// .pop() remove element from the back
// .shift() remove element form the start 
console.log(frnds.pop()); // Tushar
console.log(frnds.shift()); // Mansi


// Index of - To find the index of 
console.log(frnds.indexOf('Tulsi')); // 3
console.log(frnds.indexOf('Tushar')); // -1 (display -1 when there is no element present)

// Includes 
console.log(frnds.includes('kabir')); //true
console.log(frnds.includes('Tushar')); //false 

// We can use include method in conditions 
if (frnds.includes('kabir')){
    console.log("Yes kabir is my friend");
}

//! include does the straight equality which means 23 =! '23', kabir =! Kabir;

//* ===============Object Basics===============
//! Arrays are use for more ordered data and objects are used for more unstructured data 
// object we define key value pair to store data.
const deepak = {
    firstName: 'Deepak',
    lastName: 'Kandpal',
    age: 2023 - 2000,
    job: 'developer',
    friends: ['Akansha', 'Kabir']
}

console.log(deepak);
// {
//     firstName: 'Deepak',
//     lastName: 'Kandpal',
//     age: 23,
//     job: 'developer',
//     friends: [ 'Akansha', 'Kabir' ]
//   }
//* ===============Object Dot Vs Bracket Notation===============
//! Iterating object can be done by 2 ways dot notation and the bracket notatiion.

console.log(deepak.age); //23
console.log(deepak['age']); //23

//! Why we use the bracket notation? - Simply beacuse We want to compute the property name 
//! In square bracket we can put any expression not possible with the dot notation.
//! In dot notation we have to use the final property name and not the computed property name.
const nameKey = 'Name';
console.log(deepak['first'+nameKey]);
console.log(deepak['last'+nameKey]);

//! Let say you have to take value from the user first and then fetch the value from the object -> in this case we use the bracket notation 

// const intrestedIn = prompt('What you want to know about Deepak? (firstName, lastName, age, job, friends)');
//console.log(deepak.intrestedIn)// this will give us an error we cant use the expression here 
// console.log(`${intrestedIn} : `+deepak[intrestedIn]);


//* ===============Adding New Property to Object===============
deepak.location = 'Delhi';
deepak['email'] = 'deepak@abc.com'
console.log(deepak);

// {
//     firstName: 'Deepak',
//     lastName: 'Kandpal',
//     age: 23,
//     job: 'developer',
//     friends: [ 'Akansha', 'Kabir' ],
//     location: 'Delhi',
//     email: 'deepak@abc.com'
// }   

//! Accessing the array element inside the object
console.log(`My best friend is `+ deepak.friends[0]);
// console.log(`My second best friend is `+ deepak[friends[1]]);// undefined 
// console.log(`My second best friend is `+ deepak[friends][1]);// error


//* ===============Object Methods===============
//! any function which is attached to an object is called "Method"

const privateInfo = {
    firstName: 'Deepak',
    lastName: 'Kandpal',
    birthYear: 2000,
    job: 'developer',
    friends: ['Akansha', 'Kabir'],
    canDrive: true,
    
    //!Step1
    //instead of crearting the age key instead we are going to create a ibject method to calculate age 
    // calcAge : function (birthYear){
    //     return 2023-birthYear;
    // }
    //!Step2
    //*We can use this keyword - it reffer to the current object you are in
    // calcAge: function(){
    //     return 2023-this.birthYear;
    // }
    //!Step3
    //*Using the method again and again will make the program slow so instead of rerunning store in the object 
    calcAge: function(){
        this.age = 2023 - this.birthYear; // this will make a new key value pair inside the obejct 
        return this.age //retruning the value is always a good practice 
    },

    //! challenge 
    getSummay: function(){
            // we have to call the calAge function here we can assume that it has been called earlier.
            return `${this.firstName} is a ${this.calcAge()} and he has ${this.canDrive ? 'a' : 'no' } driving licence `
    }

}

//console.log(privateInfo.calcAge(2000)); //23
// console.log(privateInfo.calcAge()); //23
console.log(privateInfo.calcAge()); // First we have to call the function to use the this key  -> 23
console.log(privateInfo.age); // 23

// challenge -> print this in console using the object 
//Deepak is a 23 year old developer and he has a driving license.
console.log(privateInfo.getSummay());

//* ===============For Loops===============

// Syntax 
for (let i = 0; i <= 10; i++){
    console.log(`Exercise Day ${i}`);
}

// Exercise Day 0
// Exercise Day 1
// Exercise Day 2
// Exercise Day 3
// Exercise Day 4
// Exercise Day 5
// Exercise Day 6
// Exercise Day 7
// Exercise Day 8
// Exercise Day 9
// Exercise Day 10

for(let i=1; i <= 5; i++){
    console.log(`--------------Exercise Set ${i}`)
    for(let j = 1; j <= 5; j++){
        console.log(`Rep {j} of Set {i}`)
    }
}

// --------------Exercise Set 1
// Rep {j} of Set {i}
// Rep {j} of Set {i}
// Rep {j} of Set {i}
// Rep {j} of Set {i}
// Rep {j} of Set {i}
// --------------Exercise Set 2
// Rep {j} of Set {i}
// Rep {j} of Set {i}
// Rep {j} of Set {i}
// Rep {j} of Set {i}
// Rep {j} of Set {i}
// --------------Exercise Set 3
// Rep {j} of Set {i}
// Rep {j} of Set {i}
// Rep {j} of Set {i}
// Rep {j} of Set {i}
// Rep {j} of Set {i}
// --------------Exercise Set 4
// Rep {j} of Set {i}
// Rep {j} of Set {i}
// Rep {j} of Set {i}
// Rep {j} of Set {i}
// Rep {j} of Set {i}
// --------------Exercise Set 5
// Rep {j} of Set {i}
// Rep {j} of Set {i}
// Rep {j} of Set {i}
// Rep {j} of Set {i}
// Rep {j} of Set {i}

//* ===============Looping array break and continue===============
const deepakInfo = [
    'Deepak',
    'Kandpal',
    2023-2000,
    'Developer',
    ['Akansha', 'Kabir'],
    true
]

for(let i = 0; i < deepakInfo.length; i++){
    console.log(deepakInfo[i], typeof deepakInfo[i])
}
// Deepak string
// Kandpal string
// 23 number
// Developer string
// [ 'Akansha', 'Kabir' ] object
// true boolean

//Creating a new array of datatype
const deepakInfoDataType = [];
for(let i = 0; i< deepakInfo.length; i++){
    deepakInfoDataType.push(typeof deepakInfo[i]);
}
console.log(deepakInfoDataType);
//[ 'string', 'string', 'number', 'string', 'object', 'boolean' ]

//! continue is used to skip the iteration and break is used to break the looop 
//! return statement also act like break 

//* ===============While Loops===============

// In this we only declare the conditon in the bracket 

let rep = 1;
while ( rep < 11){
    console.log(rep);
    rep++;
}

//Make a dice which only rolls when number is not 6 and when 6 comes it gets end 

let dice = Math.trunc(Math.random()*6) + 1
console.log(dice);

if( dice == 6){
    console.log('Please roll the dice again ')
}

while(dice != 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}