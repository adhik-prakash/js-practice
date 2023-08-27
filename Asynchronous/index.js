//Asynchronous Javascript ->

// javascript-> javascript is a aynchronous programming language in a sense that  code executed in a linear model i.e one after another  .if there are two   functions A() and B() taht logs messages to the console then  the code is ececuted in a top-down approach.i.e only one line at a time.
// function A (){
//     console.log('A() is executed first')

// }
// function B (){
//     console.log('B() is executed only after first function')
// }

// A()
// B()
// setTimeOut:-> Executes a particular block of codes once after a specific time has elapsed

// function greet (){
//     console.log ("Hello world")

// }

// setTimeout(greet,5000)

// function greet(name){

//     console.log(`Hello${name}`)

//     }
//     setTimeout(greet,10000, 'Prakash')

//setInterval ->repeateadly runs the same code over and  again

// function greet (){
//     console.log(`Hello`)
// }

// setInterval(greet,3000)

// callbacks -> it is a function in  which a function can be passed as an argument in another function

// Synchronous callbacks

// function greet(name) {
//   console.log(`hello ${name}`)
// }
// function greetRJ(greetFunc){
//     const name = 'RJ'
//     greetFunc(name)
// }
// greetRJ(greet)

//Asynchronous callbacks

// function greet(name){
//     console.log(`hello ${name}`)

// }
// setTimeout(greet,5000,'RJ')

// /promises

// const onFulfillment = (result) => {
//   console.log(result);
// };

// const onRejection = (error) => {
//   console.log(error);
// };

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Accept to pickup");
//   });
// }, 5000);

// const promises = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Rejected to pick you up");
//   });
// }, 5000);
// promise.then(onFulfillment);
// promises.catch(onRejection);



