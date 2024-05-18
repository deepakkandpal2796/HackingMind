'use strict';

// OOP (Object oriented programing) -> It was developed with the goal of organising code, to make the code flexible and easier to maintain.
// Classes -> Classes are like the blue print of the house. It is not the real world object but we can create objects from classes. It is like a template to create objects.
// Objects -> It is an instance of the class. We can create multiple instance from the class.

//Rules to create clases : 
//Abstraction -> Hinding some details that dont matter to the user 
//Encapsulation -> Keeping methds private inside the class, so it can be accessed by outside of class
//Inheritance -> Inherit methods from other classes, to make code DRY
//Polymorphism -> Can oveerite the inherted method from the parent class (method overloading and method overrinding).

//Things to Remember about the new Keyword
//1. When we make a new instance with a new empty object is created.
//2. Then the constructor function is called and the 'this' keyword in the function will point to the new object created. (you might think that js give you an object name of the constructor function but it js helping you by giving constructor function's name for the object.)
//3. Then the newly created object will linked to the prototype.
//4. Then the function return the object.

//What are prototypes?
//Prototypes are nothing but methods attached to the constructor function. 
//!So the new instance (object) created is attached to the prototype of the constructor function.
// unlike normal classes of java and c++ in js Methods are not copied from the class itself this make the unneccesory methods copied from the class to the new object created. Insted the object is link to the prototype of the constructor function and can use the function/methods it like to use. This make the js faster.

//There are 3 ways though which we can use the classes in javascript, or can link object to the prototype
//Constructor function
//ES6 Classes
//object.create()


//* How can we use Prototype and Classes 
//*===========Constructor function==============

function PersonCl (firstName, birthYear){
    console.log(this);
}
const deepak = new PersonCl('Deepak', 2000); //read -> Things to Remember about the new Keyword

// PersonCl {}
// here the PersonCl is just the name of the constructor function the empty object is deepak and you can confirm this in the next step.


const Person = function (firstName, DOB){
    this.firstName = firstName;
    this.DOB = DOB;
    // console.log(this);
}

const male = new Person('Deepak', 2000);

console.log(male);
//output
//Person {firstName: 'Deepak', DOB: 2000}
//Person {firstName: 'Deepak', DOB: 2000}

//you can see that the output of both male and this are same the person is just the name of the constructor function which is called while formation of this object.


//*---------Prototype---------

//* Adding variable
Person.prototype.species = 'Homo Homo Sapiens';

//* Adding method
Person.prototype.calcAge = function(){
    console.log(2024 - this.DOB);
}

const man = new Person('Rajat', 2000);
console.log(man);

// DOB: 2000
// firstName: "Rajat"
// [[Prototype]]: Object
// calcAge: ƒ ()
// species: "Homo Homo Sapiens"
// constructor: ƒ (firstName, DOB)
// [[Prototype]]: Object

man.calcAge(); // o/p: - 24



//*---------Prototype Concept clear questions---------
// Person.prototype = gives you the prototype of the Person constructor function which is associated with all the instance created with the Person constructor function
// Person.__proto__ = gives you the prototype associated to the class, whose instance is person.

// the new instance will point at the prototype of associated with its constructor funtion
console.log(man.__proto__); // o/p:- {calcAge: ƒ}


console.log(man.__proto__ == Person.prototype); // o/p:- true

console.log(man.__proto__ == Person.__proto__); // o/p:- false reason being the prototype associated to the person is of its constructor function which is the object class.

console.log(Person.prototype == Person.__proto__); // o/p:- false 


//*---------Prototype Chaining and Inheritance---------

// We have already used this unknowingly

const School = function(standard, section){
    this.standard = standard;
    this.section = section;
}
School.prototype.fees = function(){
    this.fees = this.standard * 5000;
}

const dps = new School(1, 'A');
dps.fees();  
//* here the fees is not exists in the dps object so it go the its prototype and find the method and call that.

//? Just like dsp is associated with the School.prototype the School is also associated to the prototype and that is object.prototype.
// The function is object in the js and object is associated to the object class or is an instance of the object class.
// So the School is associated to the Object.prototype.
// If the method doesnot exist in the School.prototype then js engine will search that object in Object.prototype.
// object.prototype contain all the object method we have studies.
// The object.__proto__ points to null as it is the end of the chain.

console.log(dps.hasOwnProperty('standard')); //true

console.log(dps.__proto__); //{fees: ƒ} -> School.prototype
console.log(dps.__proto__.__proto__); //{__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …} -> Object.Prototype
console.log(dps.__proto__.__proto__.__proto__); //null -> no prototype above object exist


console.dir(School.prototype.constructor) //points back to Schhol object 

//*---------Prototype Chaining and Inheritance---------

// Using new Array === [];also new Object = {}

// We can make a prototype of Object Array classes which are used already declared but this is not advisable to make changes is global classes 
Array.prototype.newName = 'Deepak';
const a = [1,2,3];
a.newName //o/p  -> 'Deepak'


//*===========ES6 Classes==============