// // let container = document.querySelector(".container");
// // let container = document.querySelector("#container");

// // let container = document.getElementById('container')

// // container.innerHTML = '<h1> Hello </h1>'

// // container.style.backgroundColor = 'blue'

// // let heading = document.querySelector('.heading');

// // heading.innerHTML = 'Hello from javaScript';

// // heading.style.color = 'white';
// // heading.style.backgroundColor = 'black';
// // heading.style.padding = '10px'
// // heading.style.display = 'inline'

// // argument
// // parameter

// // function greetUser (username){
// //     console.log('hello ' + username);

// // }

// // greetUser("Abdullah")
// // greetUser("Usman")

// // return

// // undefined | null
// // let age = null;
// // console.log(age);

// // function greetings(username){
// //     console.log("hello " + username);
// //     return "hello"
// // }

// // greetings()
// // // let username = greetings("abdullah");
// // // console.log(username);
// // console.log(greetings("Usman"));

// // greetings("abdullah")
// // let username = prompt("enter your name");
// // console.log(username);

// // return ka matlb jaha function call hoga waha return hui wi value aayegi.

// // function greetUser(){
// //    return "hello abdullah"

// // }

// // console.log(greetUser());

// // function total(num1 , num2){
// //     return num1 + num2
// // }

// // console.log(total(20 , 30));

// // function cube(num) {
// //   return num ** 3;
// // }

// // console.log(cube(10));

// // function average(num1, num2, num3) {
// //     let sum = num1 + num2 + num3
// //     return sum / 3
// // }

// // console.log(average(100,100,90));

// // function combine(val1 , val2){
// //     console.log(typeof(val1) , typeof(val2));
// //     if(typeof(val1) === "number" && typeof(val2) === "number"){
// //         console.log("Sum of numbers " , val1 + val2);

// //     }else {
// //         console.log("string concatination " , val1 + val2);

// //     }

// // }

// // combine(20 , 21)

// // recurssion

// // DOM manipulation

// // let const

// // const h1 = document.querySelector("#head-one")
// // const para = document.querySelector("#para-one")
// // h1.innerHTML = "Changed through js"
// // console.log(h1.innerHTML);

// // function changetext(){
// //     console.log("text change kronga isma");

// //     h1.innerHTML = "Changed through js"
// //     para.innerHTML = "changed through javascript. Babar azam is the best batsman in the world. Pakistan will win t20 world cup 3027. Agha jee 28 wala match chahya"

// // }

// // var username = "Abdullah"; // initialize banadia
// // var username = "Usman" // redeclare
// // username = "Ammar" // reassign

// // let username = "Abdullah"
// // username = "Usman"
// // let username = "abd"
// // console.log(username);

// // const username = "Abdullah"
// // username = "abd"
// // console.log(username);

// // let username;
// // console.log(username);
// // username = "Abdullah"
// // console.log(username);

// // const username

// //DOM Manipulation

// // let inputOne = document.querySelector("#num1");
// // let inputTwo = document.querySelector("#num2");

// // function sum() {
// //   console.log(inputOne);
// //   console.log(inputTwo);
// // }

// let mathMarks = document.querySelector('#math');
// let physicsMarks = document.querySelector('#physics');
// let dsaMarks = document.querySelector('#DSA');
// let islMarks = document.querySelector('#Islamiat');
// let totalM = document.querySelector('.total')

// let totalMarks = 400 ;

// totalM.textContent = `${totalMarks}`

// function calcResut(){

//    let obtainedMarks = +mathMarks.value + +physicsMarks.value + +dsaMarks.value + +islMarks.value

// let percentage = (totalMarks/ obtainedMarks) * 100

// console.log(percentage)

// }

// // let name = 'abdul salam'
// // let age = 23
// // let city = 'quetta'

// // console.log(`hello  i am ${name} . my age is ${age} . i am from ${city}`)

// // let name = 'abdul salam'

// // console.log('Abul salam' , name , " hello")

// const head = document.querySelector("#head");
// const ul = document.querySelector("#list");

// function changeText() {
//   ul.innerHTML = "<li>Home</li><li>About</li><li>contact</li>";
//   if (head.innerHTML === "Hello world") {
//     head.innerHTML = "Changed through javascript";
//   } else {
//     head.innerHTML = "Hello world";
//   }
// }

// function changeStyle() {
//   head.style.backgroundColor = "red";
//   head.style.color = "white";
//   head.style.textAlign = "center";
// }

// const input = document.querySelector("#input");
// const email = document.querySelector("#email");
// const password = document.querySelector("#password");

// function getVal(){
//     console.log(input.value);
//     console.log(email.value);
//     console.log(password.value);

// }

// const engMarks = document.querySelector("#eng-marks");
// const urduMarks = document.querySelector("#urdu-marks");
// const mathsMarks = document.querySelector("#maths-marks");

// function calculatepercentage() {
//   console.log(engMarks.value);
//   console.log(urduMarks.value);
//   console.log(mathsMarks.value);

  

//   const obtainedMarks =
//     +engMarks.value + +urduMarks.value + Number(mathsMarks.value);
//   console.log(obtainedMarks);

//   const totalMarks = 300;

//   const percentage = (obtainedMarks / totalMarks) * 100;
//   if (percentage > 100) {
//     alert("please give number less than 100");
//   } else {
//     console.log("you got ===> ", percentage + "%");
//   }



//   engMarks.value = ""
// }

const body = document.querySelector("body");

function changeColor(color){
    console.log(color);
    body.style.backgroundColor = color
    
}