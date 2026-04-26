// Hoisting
// var username;

// console.log(username); // undefined
// var username = "Abdullah";

// console.log(city); // undefined
// let city = "Karachi";

// let or const hoisting support nahi krta.

// greetuser();

// function greetuser(){
//     console.log("hello world");

// }

// const greetuser = () => {
//   console.log("hello world");
// };


//Arrow function hoisting support nahi krta.

// arrow function

// function greetuser (username){
//     console.log( `hello ${username}`);
    
//     return `hello ${username}`
// }

// console.log(greetuser('abdullah'));


// jaha function call kra hua haa waha return hui wi value ajayegi

// const greetuser = (username) => {
//     return `hello ${username}`
// }

// const greetuser = username => `hello ${username}`


// const greetuser = username => (
//     `hello ${username}`
// )
 
// let greetings = greetuser('abdullah')
// console.log(greetings);










// Array of object

const users = [
  { id: 1, name: "Ali", age: 21, city: "Quetta" },
  { id: 2, name: "Sara", age: 19, city: "Karachi" },
  { id: 3, name: "Ahmed", age: 25, city: "Lahore" },
  { id: 4, name: "Ayesha", age: 22, city: "Islamabad" },
  { id: 5, name: "Usman", age: 24, city: "Peshawar" },
  { id: 6, name: "Zainab", age: 20, city: "Multan" },
  { id: 7, name: "Hassan", age: 23, city: "Faisalabad" },
  { id: 8, name: "Fatima", age: 18, city: "Quetta" },
  { id: 9, name: "Bilal", age: 26, city: "Hyderabad" },
  { id: 10, name: "Noor", age: 21, city: "Sukkur" },
];

// users[2].city = "Larkana"

// console.log(users[2])

// const ol = document.querySelector("ol");

// for(let i = 0; i < users.length; i++){
//     console.log(users[i].city);
//     ol.innerHTML += `<li>${users[i].city}</li>`
    
// }








// for(let i = 0; i < users.length; i++){
//     if(users[i].city.toLowerCase() === "karachi"){
//         console.log(users[i]);

//     }
// }




// for(let i = 0; i < users.length; i++){
//     // console.log(users[i]);
//     console.log(`${users[i].name} is ${users[i].age} years old.`);
    
    
// }


// let count = 0
// for(let i = 0; i < users.length; i++){
//     count += 1
    
// }

// console.log(count);



// const names = [];

// for(let i = 0; i < users.length; i++){
//     names.push(users[i].name)
    
// }

// console.log(names);




// 1. Print all user names from the array.
// 2. Print all users’ ages.
// 3. Print users whose age is greater than 20.
// 4. Print users who are from "Quetta".
// 5. Print each user in this format: `"Name is Age years old"`.
// 6. Count total number of users using a loop.
// 7. Find and print the user with `id = 5`.
// 8. Create a new array containing only user names.
// 9. Print users whose age is between 18 and 25.
// 10. Print all user details one by one using a loop.


















// call back and higher orderfunction
// foreach, map, filter