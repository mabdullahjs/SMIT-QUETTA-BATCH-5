// For  Loop
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i] + 2)
// }

// let guests = ['Ali', 'rehman', 'shahzaib', 'Rizwan'];

// for (let i = 0; i < guests.length; i++) {
//     if(i == 0 ){
//         console.log('You are not invited')
//     }else{
//         console.log('You are invited')
//     }
// }
// let userList = document.getElementById("list");

// let users = ["Ali", "Ahmed", "Raza", "javad"];
// for (let i = 0; i < users.length; i++) {
//   console.log(users[i]);
//   userList.innerHTML += users[i];
// }
// let newUser = users.slice(1, 4);
// console.log(newUser);
// users.splice(1, 2 , "Abdullah");
// console.log(users);

// while loop

// let i = 0;
// while (i  < 0) {
//   console.log(i);
//   i++;
// }

// // do while loop

// let index = 0;

// do {
//   console.log('xyz');
//   i++ ;
// } while (index < 0 );

// for(let i = 1 ; i <= 10 ; i++){
//   console.log(`2 x ${i} = ${2*i}`)
// }

// console.log("hello world");

// for / while / dowhile

// initialization
// condition
// increment

// iteration

// for(let i = 0; i < 10; i++){
//   console.log("hello world from loop" , i);

// }

// backtick

// let username = "Muhammad Abdullah";
// let age = 22
// let city = "karachi";

// "user name is {username} and user age is {age} and user live in {city}"

// console.log("user name is "+ username +  " and user age is " + age + " and user live in " + city);

// console.log(`username is ${username} and user age is ${age} and user live in ${city}`);

// let num = 78

// for(let i = 1; i <= 10; i++){
//   console.log(`${num} x ${i} = ${num*i}`);

// }

// infinite loop

// for(let i = 10; i > 1; i++)

// nested loop

// for(let i = 1; i <= 5; i++){
//   console.log(`outer loop ${i}`);

//   for(let j = 1; j <= 10; j++){
//     console.log(`inner loop ${j}`);

//   }

// }

// for(let i = 1; i <= 5000; i++){
//   console.log(`Table of ${i}`);

//   for(let j = 1; j <= 10; j++){
//     console.log(`${i} * ${j} = ${i * j}`);

//   }

// }

// console.log("console after loop");

// let guests = ['Ali', 'rehman', 'shahzaib', 'Rizwan'];


const ul = document.querySelector("ul");
let users = ["Ali", "Ahmed", "Raza", "javad"];
// console.log(users[0]);
// console.log(users[1]);
// console.log(users[2]);
// console.log(users[3]);


for(let i = 0; i < users.length; i++){
    console.log(users[i]);
    // ul.innerHTML = ul.innerHTML + `<li>${users[i]}</li>`
    ul.innerHTML +=   `<li>${users[i]}</li>`
    
}