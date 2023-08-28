//advanced objects
//1.This keyword


// const introduction = {
//     name : 'Rajesh Adhikari',
//     age : 21,
//     address : 'Dhumbarahi, Kathmandu',
 
//     introduce(){
//         console.log(`Hi, my name is ${this.name}. I am ${this.age} years old. I live in ${this.address}.`);
//     }
//  };
 
//  introduction.introduce()//when this statement is executed introduce() method is called on introduction object.the 'this' keyword in the introduce() method refers to the introduction object so the vales name,age,and address properties are printed in console
 

// 2.privacy


// const bankAccount = {
//     _amount: 1000
  
//   }
// //   It is still possible to change the value of amount as:
//   bankAccount._amount = 1000000;
  
//   3.Accessor StylePropertyMap(Getter and Setters)
// getter->javascript getter method are used to access the properties of an object


// const person ={  //js code which defines an object literal called 'person'

// _firstName : 'Rajesh',
// _lastName : 'Adhikari',

// get fullName(){
//     if(this._firstName && this._lastName){
//         return `${this._firstName} ${this._lastName}`// fullName() returns the full name of the person.the this keyword refers to the current object i.e 'person'
//     }

//     else{
//         console.log('Please insert your first name and last name')
//     }
// }
// }

// console.log(person.fullName);//when this statement is executed, the fullName() method is called on the person object. The this keyword in the fullName() method refers to the person object, so the values of the _firstName and _lastName properties are concatenated and returned.



//3. In JavaScript, setter methods are used to reassign the properties of an object.
// const person = {
//    _age: 37,
//    set age(newAge){
//      if (typeof newAge === 'number'){
//        this._age = newAge;
//      }
    
//      else {
//        Console.log('You must assign a number to age');
//      }
//    }
// };

// person.age = 40;
// console.log(person._age);
// person.age = '40'; 


//4.factory function



// const personOne ={
//     firstName : 'Rajesh',
//     lastName : 'Adhikari',
 
//     getFullName(){
//         return this.firstName + ' ' + this.lastName;
//     },
//  };
 
//  console.log(personOne.getFullName())
 
//  function createPerson(firstName, lastName){
//     return{
//         firstName: firstName,
//         lastName: lastName,
 
//         getFullName(){
//             return firstName + ' ' + this.lastName;
//         },
//     }
//  };
 
//  let personTwo = createPerson('Nisha', 'Bhattarai');
//  console.log(personTwo.getFullName());
 



//property value Shorthand



// function createPerson(firstName,lastName){
//   return{
//     firstName,
//     lastName,

//     getFullName(){
//       return firstName + ' ' + this.lastName
//     }


//   }
// }


// 5.Destructured Assignment

// const person = {
//   name:'RJ',
//   age: 21
// }

// const {name,age} = person//destructuring the object named person
// console.log(name)
// console.log(age)


// B.Classes-> classes are the templates for creating objects


//class declaration
// class Rectanular{
//   constructor(length,width){

//     this.length = length
//     this.width = width 
//   }
// }

//class expression:class is anonymus and is assigned to a variable

// const Rectangle = class{
//   constructor(length,width){
//     this.length = length
//     this.width = width
//   }
// }
// const myRectangle = new Rectangle (100, 50)
// console.log(myRectangle)


// 1.constructor -> it is a method which is called by js everytime it creates a  new instance of a class.

// class car{
//   constructor(name,brand){
//     this.name = name
//     this.brand = brand
//   }
// }

// const tesla = new car('model Y','Tesla')//The variable tesla is an object of the Car class. It is created using the new keyword. The new keyword tells JavaScript to create a new object and initialize it with the properties and methods defined in the class
// console.log(tesla.name)  //The console.log(tesla.name) statement logs the value of the name property of the tesla object to the console. In this case, the value of the name property is model Y.


// 2. Methods:

// class car{
//   constructor(name,brand){ //constructor method takes two properties _name and _brand
//     this._name = name
//     this._brand = brand
//   }
//   get nameAndBrand(){
//     return this._brand + ' ' + this._name
//   }
// }
// const tesla = new car('model Y', 'Tesla')  //variable tesla is an object of the car class.it is created using new keyword

// console.log(tesla.nameAndBrand)



// 3. Method calls

// class dog {
//   constructor(name){
//     this._name = name
//     this._behaviour = 1
//   }
//   get nameAndBehaviour(){
//     return this._name +' ' + this._behaviour
//   }
//   incrementbehaviour(){
//     this.behaviour++;

//   }
// }
// const halley = new dog("Haley")

// let nikko = new dog("Nikko")
// nikko.incrementbehaviour++
// console.log(nikko.nameAndBehaviour)
// console.log(nikko.nameAndBehaviour)


//4.inheritance ->Inheritance of a class is a way for one class to another so that the new functionality can be created on the top of another

// class HospitalEmployee {
//   constructor(name) {
//     this._name = name
//     this._remainingVacationDays = 20

//   }

//    get name(){
//     return this._name
//   }
//   get remainingvacationDays () {
//     return this._remainingVacationDays

//   }
//   takeVacationDays(daysOff) {
//     this._remainingVacationDays -= daysOff
//   }
// }

// class Nurse extends HospitalEmployee {
//   constructor(name, certifications) {
//     super(name)
//     this._certifications = certifications

//   }
//   get certification() {
//     return this._certifications
  
//   }
//   addCertification(newCertification) {
//   this._certifications.push(newCertification)

// }
// }

// const nurse01ynyk = new Nurse ('01ynyk',['Trauma','Pediatrics'])
// nurse01ynyk.takeVacationDays(5)
// console.log(nurse01ynyk.remainingVacationDays)
// nurse01ynyk.addCertification('Genetics')
// console.log(nurse01ynyk.certifications)



// static methods

// class calculator {
// static add(a,b) {
//   return a+b;

// }
// static subtract (a,b) {
//   return a-b
// }

// }

// console.log(calculator.add(15,5))
// console.log(calculator.subtract(15,5))


// C.module-> modules are the reusable pieces of the code  that can be exported and then imported to another file

// const gramsToKilograms = (grams) => {
//   return grams /1000

// }

// const KilogramsToGrams = (kilograms) => {
//   return kilograms * 1000
// }


// module.exports = {gramsToKilograms,KilogramsToGrams} //The module.exports keyword is used to export the functions from the module. This means that the functions can be used by other modules or by the global scope.


// D. Asynchronous Programming: ->Asynchronous programming allows a program to work on multiple tasks simultaneously instead of completing one task before moving on to the next one. This can make the program get more things done in a shorter amount of time. 

//conside  the synchronous program below

// function someLongRunningFunction () {
//   let start = Date.now()
//   while (Date.now() - start < 5000){
//     // console.log('Inside while loop')
//   }
//   return "Hello"
// }

// console.log('starting...')

// let result = someLongRunningFunction()
// console.log(result)

// console.log('...Finishing')
// console.log('Finished')


// Asynchronous Programming ->Asynchronous programming allows a program to continue working on other tasks while waiting for external events, such as network requests, to occur. 

// console.log("Start of script")

// setTimeout(function() {
//   console.log("First timeout completed")
// },10000)

// console.log("End of the script")


// E.Promise -> romises are objects that represent the eventual outcome of an asynchronous operation. A Promise object can be in one of three states:



// F.Callback functions -> callback fxn are the functions that are passed as arguments to another function and can be invoked or called any time later.


// function func1 (callback) {
//   console.log('I have a callabck function as an argument')
// callback()
// }

// function func2 () {
//   console.log('I an a callback function and i am invoked by another function')
// }

// func1(func2)

// G. Error Handling

// 1. The "try...Catch"

// try {
//   //code
// }

// catch(error){
//   //error handling
// }




//switch statements

// let day = new Date().getDay();

// switch (day) {
//   case 0:
//     console.log("Sunday");
//     break;
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Unknown day");
// }