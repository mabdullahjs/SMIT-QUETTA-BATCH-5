// console.log("hello world");

// string "asdsad" '123@#$@$asdasd'
// number 20 20.42
// boolean true / false

// object
// undefined
// null
// bigint

// console.log("hello world");
// console.log(20);
// console.log(true);

// let username = "Abdullah"; // initialize
// username = "Usman" // reassign
// console.log(username)

// const username = "Abdullah";
// console.log(username)

// let $_username12 =  "Abdullah"

// var / let / const

// let num1 = 10;
// let num2 = '20';

// // concatination

// console.log(num1 + num2);
// +-*/%

// console.log("Abdullah " + 20 + " khan" + true);

// assignment operators
// let num = 10
// num += 20;
// num = num + 20
// console.log(num);

// comparision operator

// revision

// logical operator

// && ||

// true && false && true
// true && false || true
// false || true
// true

// conditional statement (if / else)

// let age = 18;

// if(age >= 18){
//     console.log("Welcome to my gym");

// }else {
//     console.log("You are not eligible");

// }

// let age = 19;

// if (age >= 18) {
//   console.log("Welcome to my gym");
// } else if (age >= 15 && age < 18) {
//   console.log("please pay 1000 extra");
// } else {
//   console.log("You are not allowed");
// }

// function

// function greet(name , age){
//     console.log("My name is" + " " + name + " age is " + age);
// }

// greet("Abdullah" , 21)
// greet("Ali" , 22)

// const title = document.querySelector("#Title");
// title.innerHTML = "Hello DOM";

// title.style.fontSize = "50px";
// title.style.padding = "30px"

// const para = document.querySelector(".para");
// para.innerHTML = "this para is changed!"

// function ChangeColor(){
//     const title = document.querySelector("#Title");
//     title.style.color = "yellow";
//     title.style.backgroundColor = "Black";
// }

// function submit(){
//     const input = document.querySelector("#input");
//     console.log(input.value);
//     input.value = ""
// }

// arrays

// let name = 'ibrahim'

// let arr =['abdul' , 12 ,true ];

// console.log(arr[2])
// console.log(arr.length);

// arr.push('salam')
// console.log(arr)

// arr.pop()

// console.log(arr)

// arr.unshift(12
// )
// console.log(arr)

// arr.shift()

// console.log(arr)

// arr.splice(0 , 1 , 'SMIT' , "Abdullah")
// console.log(arr)

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(numbers.indexOf(5))

// console.log(numbers.reverse());

// let num = [3, 6, 3, 1, 8, 9];

// console.log(num.sort())

// let copy = numbers.slice(1 , 5)

// console.log(copy)

// console.log(numbers.join('%'))

// let a = [1, 2,3]
// let b = [4 ,5 ,6]

// let c = a.concat(b)

// console.log(a+b)

// let str1 = 'abdul'
// let str2 = 'salam'

// console.log(22 + 22)

// console.log(str1 + str2)

// console.log(a.concat(b))

//push
//pop
//unshift
//shift
//slice
//splice
//reverse
//sort
// indexof
//concat
//join

// function add(a,b){
//     return a + b;
// }
//  const result =  add(2 ,4)
//  console.log(result);

// function check(num){
//     if(num >0){
//         return "positive"
//     } else{
//         return "Negative"
//     }
// }
// console.log(check(2));
// console.log(check(-1));

// function greet(){
//      return function (){
//         console.log("hello");
//      }
// }
// const sayHello = greet();
// sayHello();

// const userName = prompt("Please enter your name!")

// const name = "ABDULLAH"
// console.log(name.length);

// console.log(name.toUpperCase());
// console.log(name.toLowerCase());

// const str = "this is JS";
// console.log(str.includes("you"));

// const str = "hello";
// console.log(str.indexOf("o"));

// const str = " Hello world ";
// console.log(str.slice(0,7));

// console.log(str.replace("world" , "Boy"));
// console.log(str.trim());

// const str = "Hello js how are you";
// console.log(str.split(""));

// const firstName = "Abdullah";
// const lastName = "Khan";
// const age = "21";
// console.log(firstName.concat(" " , lastName , " " , age));

// const str = "hello";
// const reversed = str.split("").reverse().join("");
// console.log(reversed);

// Loops

// console.log("Hello World")

// let list = document.querySelector(".list");

// let cities = [
//   "New York",
//   "London",
//   "Tokyo",
//   "Paris",
//   "Dubai",
//   "Sydney",
//   "Toronto",
//   "Berlin",
//   "Moscow",
//   "Beijing",
//   "Mumbai",
//   "Istanbul",
//   "Los Angeles",
//   "Chicago",
//   "Bangkok",
//   "Singapore",
//   "Rome",
//   "Madrid",
//   "Seoul",
//   "Cape Town",
// ];

// console.log(cities[10])

// for (let i = 0; i < cities.length; i++) {
//   list.innerHTML +=  `<li>${cities[i]} </li>`;
// }

// let heading = document.querySelector('.heading')

// heading.innerHTML = 'Heading one'

// return in function

const input = document.querySelector("#input");
const ol = document.querySelector(".list");

const allTodos = [];

function renderTodo() {
  ol.innerHTML = "";
  for (let i = 0; i < allTodos.length; i++) {
    ol.innerHTML += `<li>${allTodos[i]}
        <button onclick="deleteTodo(${i})">delete</button>
        <button onclick="editTodo(${i})">edit</button>
        </li>`;
  }
}

function addTodo() {
  // console.log(input.value);
  allTodos.push(input.value);
  // console.log(allTodos);

  renderTodo();
}

function deleteTodo(index) {
  console.log("todo deleted ", index);
  allTodos.splice(index, 1);
  console.log(allTodos);

  renderTodo();
}


function editTodo() {
  console.log("todo edited");
}
