// 1.Variables

// var theName = "RJ"
// console.log(theName)



//let can be reassigned

// let theName = "RJ"
// console.log(theName)

// theName = "Rajesh"
// console.log(theName)


//const  cannot be reassigned

// const theName ="RJ"
// console.log(theName)
// theName ="Rajesh"
// console.log(theName)


// 2.Datatypes

//Numbers:

// let length = 16
// let weight =7.5

// //string
// let color = "Yellow"
// let lastName ="Johnson"

// //Booleans
// let x = true
// let y = false

// //object
// const person ={firstName:"John",lastName:"Doe"}
// console.log(person)

// //Array object:
// const cars = ["saab","Volvo","BW"]
// console.log(cars)

// //Date Object
// const date = new Date("2022-03-25")
// console.log(date)


//3. Operators ->assignment operators are used to assign values to the variables

// var x = 5
// let x = 5
// x = x + 1


// increment or decrement

// let a = 2;
// a++
// console.log(a)



// let b = 2;
// b--
// console.log(b)

// 4.string Concatenation
// let firstName = "Rajesh"
// let lastName = "Adhikari"

// let fullName = firstName + lastName
// console.log(fullName)

// 5.string interpolation

// let myName = "Rajesh Adhikari"
// console.log(`My name is ${myName}`)

// 6.typeof Operator
// let myName = "Rajesh Adhiakri"
// let age = 21
// let student = true
// console.log(typeof (myName))
// console.log(typeof(age))
// console.log(typeof (student))

// B: Conditional Statements

// 1. if,if...else,if...else if... else statement

// eg: tocheck if aperson is eligible to vote 

// let age = 16
// if(age == 18){
//     console.log("Congratulation you are eligible to vote")
// }
// else{
//     console.log("you are not eligible to vote")
// }


//logical operator (logical &&)

// let stopLight = "green"
// let pedestrains = 0
// if(stopLight === "green" && pedestrains === 0) {
//     console.log("Go!")
// }
// else{
//     console.log("stop")
    
// }

// logical or operator (||)
// let day = 'sunday'
// if(day === 'saturday' || day === 'sunday'){
//    console.log('Enjoy the weekend')
// }
// else{
//    console.log('Go to work')
// }


//not operator  ->negates the boolean values of a variable

// let happy = true 
// console.log(!happy)


// //2.Ternary operators -> can be used as an alternative of if..else statement


// let age = 18 ;
// age>= 18 ? console.log("you are eligible  for voting")
// :console.log("You are not eligible to vote")

// 3.switch

// switch(expression){
//     case x:
//         //block of codes
//         break;
//         case y:
//             //block of code
//             break;
//             default:
// }

// C.Functions

// //function declaration
// function functionName(parameters){
//      //block of code
// }

// //function invoke
// functionName(arguments)




// function sum(a,b){
//     s = a + b; 
//     return s
//     }
//     let numOne = 5, numTwo = 4; 
//     add = sum(numOne, numTwo);
//     console.log(add);
    
    
//     // 1.Default Parameters:
//     function greeting (name = 'stranger') {
//         console.log(`Hello, ${name}!`)
//       }

//     //   2.Helper function
//     function calculateArea(width, height){
//         return width * height;
//      }
     
//      function calculateVolume(width, height, depth) {
//         const area = calculateArea(width, height);
//         console.log('Area is', calculateArea(width, height));
//         return area * depth;
//      }
     
//      let width =  4, height = 2, depth =3;
//      console.log('Volume is', calculateVolume(width, height, depth));
     
    //  3.Anonymous Function/function expression

    // const variableName = function(parameters){
    //     //body

    // }
    // //function call
    // variableName(arguments)


    // 4.Arrow function-> arrow function removes the need to type keyword function every time you create a function

    // const variableName = (parameters) => {
    //     //body
    //  };
     
     //function call
    //  variableName(arguments)
     
    // //  For zero parameters->
    //  const variableName = () => {
    //     //body
    //  }
     
     
    // For one parameter:
    // const variableName = parameter => {
    //    //body
    // }
    
    // For multiple parameters:
    // const variableName = (parameOne, paramTwo) => {
    //    //body
    // }
    

    // D.Scopes-> scopes refers to where a variable can be accessed throughtout a program.it is determined by how and where the are declared.
    

// E.Arrays

// const variableName = [ element1, element2, element3];
// console.log(variableName.length)


// push() and pop()
// let element1 = 'element1';
// let element2 = 'element2';
// let element3 = 'element3';
// const variableName = [element1, element2, element3];
// variableName.push(element4 = 'element4');
// console.log(variableName);


// let removed = variableName.pop();
// console.log(removed);
// console.log(variableName);



// array and functions

// function addFlower(arr) {
//     arr.push('lily');
//  }
 
//  const flowers = ['peony', 'daffodil', 'marigold'
// ];
//  addFlower(flowers);
//  console.log(flowers);
 

// F.Loops

// 1.for loops:

// for (let i = 0; i<=5; i++){
//     console.log(i);
//  }
 
// G. Higher order functions

// 1.function as  data

// const func =()=>{
//     console.log("hello!")

// }
// const newFunc = func;
// newFunc()



// 2.function as a parameters->functions that gets passed aa a prameter is called callback function, callback function gets invoked during the execution of the higher-order functions


// const higherOrderFunc = param => {
//     param();
//     console.log(`I just invoked ${param.name} as a callback function!`);
//  }
  
//  const anotherFunc = () => {
//     console.log('I\'m being invoked by the higher-order function!');
//  }
  
//  higherOrderFunc(anotherFunc);
 
 
 



// H.Iterators:The built-in JavaScript array methods that help us iterate are called iteration methods, at times referred to as iterators. Iterators are methods called on arrays to manipulate elements and return values. They can be used as an alternative to loops in JavaScript

// The .forEach() method:
// const arr = ['element1', 'element2', 'element3'];

// arr.forEach(arr => {
//    console.log(`${arr}`)
// })




// The .map() method:
// const smallNumbers = [1,2,3,4,5];

// const bigNumbers = smallNumbers.map(number =>{
//    return number*100;
// })
// console.log(bigNumbers);





//The .filter() method

// const words = ['hello', 'elephant', 'rhinoceros', 'refrigerator', 'pen', 'world', 'earth', 'sun'];



// const longwords = words.filter(word => {
//    return word.length >= 6;
// });
// const shortwords = words.filter(word => {
//    return word.length < 6;
// });

// console.log(longwords);
// console.log(shortwords);


// //4.the .findIndex() method
// const jumbledNums = [123, 25, 78, 5, 9];
// const lessThanTen = jumbledNums.findIndex(num => {
//  return num < 10;
// });

// console.log(lessThanTen);

//5. the .reduce() method
// const numbers = [1, 2, 4, 10];

// const summedNums = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue
// })

// console.log(summedNums)



