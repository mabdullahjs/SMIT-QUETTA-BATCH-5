// js ES6

// ternary opertors

//variable scoping

// let name = 'xyz'

// function printName(){
//     console.log(name)
// }

// printName()

// blocked scope

// function printName(){
//     let name = 'abdul '

//     if(true){
//         // let name = 'salam'
//         console.log(name)
//     }
//     console.log(name)
// }

// printName()

// function printName(){
//     var name = 'abdul '

//     if(true){
//         var name = 'salam'
//         console.log(name)
//     }
//     console.log(name)
// }

// printName()

// optional chainig

// let user = {
//     name  : "ibrahim" ,
//     email : 'ibrahim@gmail.com',
//     address : {
//         street : 'sarayb road' ,
//         city : 'Quetta'
//     }
// }

// let city = user && user.address && user.address.city

// let city = user?.address?.city
// console.log(city)

//Array Destructuring

let nums = [10, 20, 30];

let [first, second, third] = nums;

// console.log(first)
// console.log(second)
// console.log(third)

//object Destructuring

let user = {
  name: "ibrahim",
  email: "ibrahim@gmail.com",
  age: 50,

  address: {
    city: "Quetta",
    country: "pakistan",
  },
};
// let {name  , email , age } = user

// console.log(name , email , age)

// const {address : {city : myCity , country}} = user ;

// console.log(myCity)
// console.log(country)

// let name = 'abdul salam' ;
// console.log(`My name is ${name}`)

// Variable Scoping // p
// Destructuring //p
// Destructuring //p
// Ternary Operator //p
// Optional chaining //p

//IIFE
// simple funtion
// function sum(num1 , num2){
//     console.log(num1 + num2)
// }

//   (function (num1 , num1) {
//   console.log(num1 + num2);
// })();

// sum(10 , 20)
// Default parameters //p

// function greet(name = 'Ibrahim'){
//     console.log(`Hello ${name}`)
// }

// greet('abdul salam');
// greet();
// greet('Rizwan')

// Rest parameter //p

// function total(...numbers) {
//   // let sum = 0 ;
//   // for(let i = 0 ; i< numbers.length ; i++){
//   //     sum += numbers[i]
//   // }

//   // console.log(sum)

//  let sum =  numbers.reduce((acc, val) => {
//     return acc + val;
//   }, 0);

//   console.log(sum)
// }

// total(23, 32, 76, 34, 56, 67, 3, 5, 6, 7, 8, 9, 9)

// spread operator

// let arr = [23, 32, 76, 34, 56, 67, 3, 5, 6, 7, 8, 9, 9]

// let copy = [...arr]

// let a = [1, 2, 3, 4];
// let b = [5, 6, 7, 8];

// let c = [...a , ...b]
// console.log(c)


// let arr  = [ 2 , 3, 4, 5,6];

// let updated = [...arr ,  7 , 8]
// console.log(updated)

// Exponentiation Operator // p

// lexical scoping //p

// function outer(){
//     let couter = 0 ;

//     function inner(){
//         couter ++
//         console.log(couter)
//     }

//     return inner
// }

// let counter = outer()

// counter()
// counter()
// counter()
// counter()



// Closure //p
// Modules
