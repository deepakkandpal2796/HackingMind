//* ===============Hello World===============
console.log('Hello World');// o/p: Hello World
// alert('Hello Deepak');
// prompt();

//* ===============Values & Variables===============
// values get store inside a variable.
console.log('Deepak'); // this is a value  
let firstName = 'Deepak'; // deepak value store inside the firstName variable, we can use this variable multiple times it is convenient 
console.log(firstName); //o/p: Deepak


//* ===============DataTypes=============== 
// The value in the javascript are either primitive or object 
let lastName = 'Kandpal'; //This is a primitive value 
let details = {  // This is an object 
    firstName: 'Deepak',
    lastName: 'Kandpal',
}

// Primitive Datatypes in js are :- 

// Number: numbers are the floating and integer both numbers
// Strings: sequence of charachter
// Boolean: logical Type either true or false
// undefined: It reflects as the values which are not defined, or empty
// null: this is also 'Empty value'
// symbol: Value which is unique and cant be changed (like const ) 
// BigInt: Larger integers (int only not float)
//! Dynamic typing works in js we dont have to define the datatype the value define the datatype.

let age = 23;
console.log(typeof(age)); //o/p: number

let isAnAdult = true;
console.log(typeof(isAnAdult)); //o/p: boolean

console.log(typeof(firstName)); //o/p: string

//! When rewriting the value we can also rewrite the datatype of the variable in js 
isAnAdult = 'Adult';
console.log(typeof(isAnAdult)); //o/p: string

let DOB;
console.log(typeof(DOB)); //o/p: undefined

let bankBalance = null;
console.log(typeof(bankBalance)); //o/p: object
//! null is show as an object in js, this is an error in JS.

//* ===============Let, Var, Const===============
// use const 
// use let if you are 100% sure that this variable is going to change 
// never use var 
// we will study this later in this course 

//* ===============Operators and Operator Precedence===============

//* Arithmatic operator 
// +, -, /, %, *, **
console.log(2 + 3); // o/p:- 5
console.log(2 - 3); // o/p:- -1
console.log(2 / 3); // o/p:- 0.6666666666666666
console.log(2 * 3); // o/p:- 6
console.log(2 ** 3); // o/p:- 8
console.log(2 % 3); // o/p:- 2
console.log('Deepak'+'kandpal'); // o/p:- Deepakkandpal
// There is a problem with computer in calculating floating number binary values 
// find the binary of .2 and then copy the result and find the decimal of that 
// the decimal of that same result is not .2
// but if you do the same with the .25 you will not see any error 

// lets say we want to calculate tax so we always write in paise not rupees to get the correct answer
console.log(20.95+7.99) //o/p:- 28.939999999999998
//this is not the way to do it when we are counting money in any language we do write it in rupees we write it in paise, this will make out calcution more easier and accurate whenever we are using floating numbers.

console.log(2095 + 799); //o/p:- 2894
// this is in paise now we have to convert it into rupees
console.log((2095 + 799)/100);//o/p:- 28.94

//* Assignment Operators
// =, +=, -=, *=, /=, ++x, x++, x--, --x
// a += 2 => a = a + 2;
// ++x and x++ pre and post increment operator there is a difference between them 

//* Comperison operator 
// >, <, <=, >=, !=, ==, ===

//* Operator Precedence 
// Higher the percedence the operator will executed first 
// If the operator is having the same precedence then it either give left to right priority or right to left 
// () have higher precedence 

//* ===============Strings and Template Literals===============
const legalName = 'Deepak';
const birthYear = 2000;
const currentYear = 2023;

// we can write strings in 2 ways. 
const myself = "Hi I'm " + legalName + ', my age is '+(currentYear-birthYear);
//! Template Litrals
const myself2 = `Hi my name is ${legalName}, my age is ${currentYear-birthYear}`;
console.log(myself, myself2);
//! Template literals can create multiline strings.
//* No need to use \n\ if you are using template literals
console.log("Earlier \n\
 we have to write \n\
 multiline strings like this ")
console.log(`Now
  we write multiline 
  strings like this `)


//* ===============Conditional Statements===============
let thisYear = 2023;
let dateOfBirth = 2006;
const canDrive = (thisYear - dateOfBirth) >= 18;

if(canDrive){
    console.log(`You can have a driving licence`)
}else{
    console.log(`Wait another ${18 - (thisYear - dateOfBirth)} year`)
}

//* ElseIf

if(canDrive){
    console.log(`You can have a driving licence`)
}else if((thisYear - dateOfBirth) <= 1){
    console.log(`Wait another ${18 - (thisYear - dateOfBirth)} years`) //here the statement has 'years' 
}else{
    console.log(`Wait another ${18 - (thisYear - dateOfBirth)} year`) // here it is year 
}

//* ===============Type Conversion & Coercion===============
// Type Conversion: Type conversion refers to the explicit conversion of a value from one data type to another.
// Number(), String(), Boolean(), parseInt(), parseFloat()
const birth_year = '1991'; // if we store birth year in a string
// we cant use this as a number this is a string.
console.log(birth_year + 18); //o/p:- 199118
console.log(Number(birth_year) + 18); // o/p:- 2009

//Type Coercion: Type coercion, on the other hand, is an implicit conversion that occurs when JavaScript automatically converts one data type to another in certain situations.
let number = 23;
const statement = 'My age is ' + number; // here the number is conveted into a string 
console.log(statement);

let result = "10" - 5; // minus operator convert string to number if we use + then it will concat the string 
console.log(result); // Output: 5 (a number)

console.log(5 > "3"); // Output: true
console.log(1 < true); // Output: false

//* ===============Truth and falsy===============

// In JavaScript, values can be categorized as "truthy" or "falsy" based on their inherent boolean interpretation
// Truthy means true and falsy means false values 
//* Falsy values are :- 
// false: The boolean value false itself.
// 0: The number zero.
// "": An empty string.
// null: Represents the absence of any object value.
// undefined: Denotes an uninitialized or missing value.
// NaN: Stands for "Not a Number" and represents an invalid or failed numeric operation.
//* Truthy values are :-
// true: The boolean value true itself.
// Non-zero numbers: Any number that is not zero, including negative numbers and decimals.
// Non-empty strings: Any string with at least one character.
// Objects and arrays: Any non-null object or array.
// Functions: Any defined function.

//* ===============Bitwise operators===============
// Bitwise operator used to perform operations on individual bits of binary representations of numbers. They manipulate the binary representation of values at the bit level.

// Bitwise AND (&): Performs a binary AND operation on each pair of corresponding bits. If both bits are 1, the resulting bit is set to 1. Otherwise, it is set to 0.

// Bitwise OR (|): Performs a binary OR operation on each pair of corresponding bits. If at least one of the bits is 1, the resulting bit is set to 1. Otherwise, it is set to 0.

// Bitwise NOT (~): Performs a unary negation operation on each bit, flipping the bits. It changes 0 to 1 and 1 to 0. Note that it also flips the sign of the number.

//* ===============Logical operators===============
//! The logical AND operator && returns true if both operands are true, and false otherwise. 

var a = true;
var b = false;
console.log(a && b); // Output: false

// The logical OR operator || returns true if at least one of the operands is true, and false if both operands are false.
var a = true;
var b = false;
console.log(a || b); // Output: true

// The logical NOT operator ! is a unary operator that negates the boolean value of its operand.
var a = true;
console.log(!a); // Output: false

//* ===============Ternary operator===============

// condition ? (expression1) : (expression2);
// The condition is evaluated. If the condition is truthy, the value of expression1 is returned. If the condition is falsy, the value of expression2 is returned.

var myAge = 20;
var message = (myAge >= 18) ? "You are an adult" : "You are a minor";
console.log(message);  // Output: "You are an adult"


//* ===============Switch Statement===============

//Syntax
// switch (expression) {
//   case value1:
     // Code to be executed if expression matches value1
//     break;
//   case value2:
     // Code to be executed if expression matches value2
//     break;
    // Additional cases
//   default:
     // Code to be executed if expression does not match any case
// }


var day = 3;
var dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName);  // Output: "Wednesday"

//! we dont write break in any of the case it will continue to the next statement 
  
 day = 3;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName);  // Output: "Wednesday"


//! ===============Statements and Expression===============

//* Expression:
// An expression is a combination of values, variables, operators, and function calls that evaluates to a value.

// Examples of JavaScript expressions include:

// Arithmetic expressions: 5 + 3, x * y, (a + b) / c.
// Function calls: Math.max(10, 20), myFunction().
// Variable access: x, person.name.
// Logical expressions: a && b, x > 0 || y < 10.
// Array literals: [1, 2, 3].
// Object literals: { name: "John", age: 25 }.

//* Statement:
// A statement is a unit of code that performs an action. It represents a complete instruction or command.
// Whenever something is ending with the semicollon ";" then it is considered as the statement.

// Examples of JavaScript statements include:

// Variable declaration: var x = 5;
// Control flow statements: if statement, for loop, while loop.
// Function declaration: function sum(a, b) { return a + b; }
// Assignment statement: x = y + z;
// Object creation: var person = { name: "John", age: 25 };

