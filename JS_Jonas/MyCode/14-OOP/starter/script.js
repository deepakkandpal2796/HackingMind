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

// All the concept here are same as constructor function it is just we have differenet syntax for classes in ES6 
// There is no such things like classes in the js like traditional languges c++ or java 
// There are just syntactical sugar of classes in js, actually classes are the function itself or a special type of function.
//We organise code with the help of classes so we have to do the same in js for that js have come up with this idea


//class expression
// const AllPerson = class{}

//class declaration
class AllPerson {

    //constructor function
    constructor(firstName, dob){
        this.firstName = firstName;
        this.dob = dob;
    }

    //prototype
    calcAge(){
        console.log(2024 - this.dob);
    }
}


const deepu = new AllPerson('Deepu', 2000);
console.log(deepu);
// output
// AllPerson {firstName: 'Deepu', dob: 2000}
// dob: 2000
// firstName: "Deepu"
// [[Prototype]] : Object
// calcAge: ƒ calcAge()
// constructor: class AllPerson
deepu.calcAge(); //24

//Things to Remember about the new Keyword are same 
//1. When we make a new instance with a new empty object is created.
//2. Then the constructor function is called and the 'this' keyword in the function will point to the new object created. (you might think that js give you an object name of the constructor function but it js helping you by giving constructor function's name for the object.)
//3. Then the newly created object will linked to the prototype.
//4. Then the function return the object.

console.log(deepu.__proto__ == AllPerson.prototype); //true

//*---------Can add prototype outside of the class---------

AllPerson.prototype.printname = function(){
    console.log(this.firstName);
}

deepu.printname(); //o/p: Deepu

//*---------Imp point on classes---------
// 1. Classes are not hoisted meaning, we can't call them before declaration
//2. Classes are first class citizens meaning, we can pass them into a function and return them from a function. 
//3. classes are excuted in strict mode even if you dont write it on the top.

//*---------Getters and Setters---------

//* ----getters and setters in objects-----

const accounts = {
    owner: 'Deepu',
    movements: [100, 200, 300, 400],

    get latest(){
        return this.movements.slice(-1).pop();
    },

    set latest(value){
        this.movements.push(value);
    }

}

//*Basics of getters and setters
// In object we dont need to set both getter and setter for the same object which means we can only set getters and setter alone.
// You can only pass one parameter in the setter class
//? Here set and get are the methods but we still dont call them we make them act like the property.
//? Remember setters and getters are used to set and get the properties, we have to create the property first. either using the constructor function or manually just like the account object.


console.log(accounts.latest); //400
// not like accounts.latest()
accounts.latest = 50; 
console.log(accounts.movements); //[100, 200, 300, 400, 50]

//* ----getters and setters in classes-----

//*Basics of getters and setters is same 

//* wrong way of calling a setter this give error
/*
class Practice {
    constructor(firstName){
        this.firstName = firstName //we have to define a property 
    }

    set firstName(name){ //constructor name should be the name of the property
        this.firstName = name;
    }
    get firstName(){
        console.log(this.firstName);
    }
}

*/

// How do we call setter pra.firstName = value.....right ?
// Here if we can see the constructor is calling the setter this.firstName = firstName
// then the setter is being called and the firstNamen is passes as attribute to the setter 
// now we can see that the setter this.firstName = name is again calling the setter
// So we are in a infinite loop of calling a setter

//? To tackel with this problem we use '_', lets see how :-

class Practice {
    constructor(firstName){
        this.firstName = firstName 
    }

    set firstName(name){ 
        this._firstName = name;
    }

    get firstName(){
        return this._firstName;
    }
}


const pra = new Practice('deepak');
console.log(`firstName : ${pra.firstName}`);
console.log(`_firstName : ${pra._firstName}`);

console.log(pra);

// Practice {_firstName: 'deepak'}
// _firstName: "deepak"
// firstName: (...) //if i click on this ... it will compute the value 
// [[Prototype]]: Object
// pra.fullName -> undefined



//What is happning in depth 
// As we are calling the constructor function on the new pra instance created the following happens:
// In constructor function this.firstName = firstName property executed but there is a firstName setter in the class so this will trigger that.
// This time inside the setter we have used the _firstName to prevent the infinite calling of the setter. 
// Now what happens is setter creaate a property _firstname in the new par instance and assign name to it which is nothing but the firstName.
//? Till now no getter method is defined the firstName is still gonna undefined as it is not set, _firstName is set.
// console.log(`firstName : ${pra.firstName}`); -> undefined 
// console.log(`_firstName : ${pra._firstName}`); -> deepak
//? now we use firstName getter and return the _firstName (which is deepak) into the firstName property which is initiated by the constructor function.


//*---------Static method---------

//The methods which are declared in the object itself not in the prototype.
//We can't use them with the new instance created we have to use them using the parent object 
// For eg
// Array.from() you cann't do [1,2,3].from this will not work or const dee = new Array(); dee.from();
// Number.parseInt() is also a static method 

//?Static method in consturctor function
const Sch = function(standard, section){
    this.standard = standard;
    this.section = section;
}

Sch.intro = function(){
    console.log(`welcome to our school`);
}

const mySch = new Sch(1, 'A');

//mySch.into(); //this doesNot exist
Sch.intro(); //this will work
//welcome to our school

//?Static method in ES6 class
class intro {
    //instance method
    constructor(firstName){
        this.firstName = firstName 
    }

    set firstName(name){ 
        this._firstName = name;
    }

    get firstName(){
        return this._firstName;
    }

    //static methods
    static myInto(){
        console.log(`Hi I am deepak`);
    }
}
const D = new intro('Deepak')
//D.myInto(); //error
intro.myInto(); //this will work
//Hi I am deepak

//*---------Object.create()---------

//? Object.create is a static method of the object class 
//? It is used to manually ser a prototype of object to any object
//? So there is prototype inheritance without a constructor function and new keyword.

// const personProto = {
//     calcAge(){
//         console.log(2024 - this.dob);
//     }
// }

// const employee = Object.create(personProto);
//there is no constructor function so manually setting up the properties
// employee.firstName = 'Deepak';
// employee.dob = 1990;
// employee.calcAge(); //34
// console.log(employee);

// {firstName: 'Deepak', dob: 1990}
// [[Prototype]]: Object
// calcAge: ƒ calcAge()
// [[Prototype]]: Object


//? However we can create a methods inside teh personProto object which can act like a constructor 


const personProto = {
    calcAge(){
        console.log(2024 - this.dob);
    },
    init(firstName, dob){
        this.firstName = firstName;
        this.dob = dob;
    }
}
const employee = Object.create(personProto);
//there is no constructor function so manually setting up the properties
employee.init('Deepak', 1990);
employee.calcAge(); //34
console.log(employee);

// {firstName: 'Deepak', dob: 1990}
// [[Prototype]]: Object
// calcAge: ƒ calcAge()
// [[Prototype]]: Object


//*---------Inheritance using constructor function---------

const PersonParent =  function(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
}

PersonParent.prototype.calcAge = function(){
    console.log(2024 - this.birthYear);
}

const Student = function(firstName, birthYear, course){
    //? I want to inherit this property 
    //? For that use function.call so that I can set the this keyword to the instance.
    //? If you dont set the this keyword then the this.firstName in the PersonParent function will point to the PersonParent function.
    //This is how constructor function is inherited
    // this.firstName = firstName;
    // this.birthYear = birthYear;
    PersonParent.call(this, firstName, birthYear);
    this.course = course;
}

//* Linking the Student protoype with the persoinParent prototype.

//? student.Prototype object inherits the properties of the PersonParent.prototype
//? student.Prototype = PersonParent.prototype
//? If you assign the prototype then it will overwrite the existing prototype of the Student class.

Student.prototype = Object.create(PersonParent.prototype)

Student.prototype.intoduce = function(){
    console.log(`My name is ${this.firstName} and i study ${this.course}`);
}

const ashu = new Student('ashu', 2000, 'Science');



console.log(ashu);
ashu.intoduce(); //My name is ashu and i study Science
ashu.calcAge() //24


//? Prototype Chaining 
console.log(ashu.__proto__); //PersonParent {intoduce: ƒ}
console.log(ashu.__proto__.__proto__); // {calcAge: ƒ}
console.log(ashu.__proto__.__proto__.__proto__); // Object class

//* If I check the constructor of the Student class it shows the constructor is person as we have set the prototype property using object.create()

console.dir(Student.prototype.constructor); //PersonParent(firstName, birthYear)

Student.prototype.constructor = Student;

console.dir(Student.prototype.constructor); //Student(firstName, birthYear, course)


//*---------Inheritance using ES6---------

class PersonEl {
    constructor(firstName, dob){
        this.firstName = firstName;
        this.dob = dob;
    }

    set firstName(name){
        this._firstName = name;
    }

    get firstName(){
        return this._firstName;
    }

    static into(){
        console.log(`Hi I am the person class`)
    }

    calcAge(){
        console.log(2024 - this.dob);
    }
}

//To use inheritance in the ES6 we 

class StudentEl extends PersonEl{
    //to use the constructor we have to use the super keyword
    //we have to use this at the top 
    constructor(firstName, dob, course){
        super(firstName, dob);
        this.course = course;
    }

    intoduce(){
        console.log(`Hi my name is ${this.firstName} and I am studying ${this.course}`);
    }
}

const ram = new StudentEl('Ram', 2000, 'Btech');
console.log(ram);

//here we dont have to set the constructor and the prototype it will inherits automatically 


//Output 

// StudentEl {_firstName: 'Ram', dob: 2000, course: 'Btech'}
// course: "Btech"
// dob: 2000
// _firstName: "Ram"
// firstName: "Ram"
// [[Prototype]]: PersonEl
// constructor: class StudentEl
// intoduce: ƒ intoduce()
// firstName: (...)
// [[Prototype]]: Object
// calcAge: ƒ calcAge()
// constructor: class PersonEl
// firstName: (...)
// get firstName: ƒ firstName()
// set firstName: ƒ firstName(name)
// [[Prototype]]: Object

//*---------Inheritance using Object.Create---------

