// Hoisting
// var username;

// const { use } = require("react");

// // console.log(username); // undefined
// var username = "Abdullah";

// // console.log(city); // undefined
// let city = "Karachi";

// let or const hoisting support nahi krta.

// greetuser();

// function greetuser(){
//     // console.log("hello world");

// }

// const greetuser = () => {
//   // console.log("hello world");
// };

//Arrow function hoisting support nahi krta.

// arrow function

// function greetuser (username){
//     // console.log( `hello ${username}`);

//     return `hello ${username}`
// }

// // console.log(greetuser('abdullah'));

// jaha function call kra hua haa waha return hui wi value ajayegi

// const greetuser = (username) => {
//     return `hello ${username}`
// }

// const greetuser = username => `hello ${username}`

// const greetuser = username => (
//     `hello ${username}`
// )

// let greetings = greetuser('abdullah')
// // console.log(greetings);

// Array of object

// const users = [
//   { id: 1, name: "Ali", age: 21, city: "Quetta" },
//   { id: 2, name: "Sara", age: 19, city: "Karachi" },
//   { id: 3, name: "Ahmed", age: 25, city: "Lahore" },
//   { id: 4, name: "Ayesha", age: 22, city: "Islamabad" },
//   { id: 5, name: "Usman", age: 24, city: "Peshawar" },
//   { id: 6, name: "Zainab", age: 20, city: "Multan" },
//   { id: 7, name: "Hassan", age: 23, city: "Faisalabad" },
//   { id: 8, name: "Fatima", age: 18, city: "Quetta" },
//   { id: 9, name: "Bilal", age: 26, city: "Hyderabad" },
//   { id: 10, name: "Noor", age: 21, city: "Sukkur" },
// ];

// users[2].city = "Larkana"

// // console.log(users[2])

// const ol = document.querySelector("ol");

// for(let i = 0; i < users.length; i++){
//     // console.log(users[i].city);
//     ol.innerHTML += `<li>${users[i].city}</li>`

// }

// for(let i = 0; i < users.length; i++){
//     if(users[i].city.toLowerCase() === "karachi"){
//         // console.log(users[i]);

//     }
// }

// for(let i = 0; i < users.length; i++){
//     // // console.log(users[i]);
//     // console.log(`${users[i].name} is ${users[i].age} years old.`);

// }

// let count = 0
// for(let i = 0; i < users.length; i++){
//     count += 1

// }

// // console.log(count);

// const names = [];

// for(let i = 0; i < users.length; i++){
//     names.push(users[i].name)

// }

// // console.log(names);

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

// users.forEach() // method
// alert() // function

// for(let i = 0; i < users.length; i++){
//     // console.log(users[i]);

// }

// users.forEach(function (item , index , arr) {
//     // console.log(item , index , arr)
// });

// users.forEach(()=>{})

// users.forEach((item , index)=>{
//     // console.log(item , index);

// })

// callback function wo function hota ha jo kisi dosra function ka argument ma ata ha.

// highrt order function wo function hota ha jiska argument ma callback ata ha.

const ol = document.querySelector("ol");
// const iteration = users.forEach(item => {
//     ol.innerHTML += `<li>${item.city}</li>`

//     return 'hello'
// })
// // console.log(iteration);

// foreach ka function kuch bhi return nahi krta.

// const iteration = users.map(item => {
//     ol.innerHTML += `<li>${item.city}</li>`
//     return item.name
// })

// // console.log(iteration);

// foreach or map ka farq sirf itna ha k foreach kuch return nahi krta or map return krta.

// map hum use krta hain array ko modify krna ka liya or iteration chalana ka liya bhi.

// // console.log(users.map(item => item.name + " updated"));

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const filteredArr = num.filter(item => {
//     return item > 5
// })

// // console.log(filteredArr);

// const filterUsers = users.filter(item => item.age > 22)
// // console.log(filterUsers);

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // accumulator
// // currentValue
// const sum = num.reduce((acc , cval)=>{
//     return acc + cval
// } , 0)

// // 0 + 1
// // 1 + 2
// // 3 + 3
// // 6 + 4

// // console.log(sum);

// let sum = 0
// for(let i = 0; i < num.length; i++){
//     sum += num[i]

// }

// // console.log(sum);

//Revision

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 22 },
//   { name: "Diana", age: 28 },
// ];

// let nums = [1, 2, 3, 4, 5];

// nums.forEach((item) =>{
//   // console.log(item * 3)
// })

// let container = document.querySelector(".container");

// let modified = users.map((item) => {
//   return (container.innerHTML += `
//    <div class="name">name :${item.name}</div>
//       <div class="age">Age: ${item.age}</div>`);
// });

// // console.log(modified);

// const numbers = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
//   42, 43, 44, 45, 46, 47, 48, 49, 50,
// ];
// let categoris = []
// products.map((item)=>{
//   if(!categoris.includes(item.category)){
//     categoris.push(item.category)

//   }
// })

// // // console.log(categoris)

// const cart = [
//   {
//     id: 1,
//     name: "Laptop",
//     price: 800,
//     quantity: 4
//   },
//   {
//     id: 2,
//     name: "Headphones",
//     price: 50,
//     quantity: 10
//   },
//   {
//     id: 3,
//     name: "Mouse",
//     price: 25,
//     quantity: 15
//   },
//   {
//     id: 4,
//     name: "Keyboard",
//     price: 45,
//     quantity: 1
//   },
//   {
//     id: 5,
//     name: "Keyboard",
//     price: 2000,
//     quantity: 1
//   }
// ];

// let sum = cart.reduce((acc , val)=>{
// return acc + val.quantity
// } , 0)

// // console.log(sum)

// let product = products.find(item => item.id == 4);

// // console.log(product)


// let product = products.findIndex(item => item.id == 56);

// // console.log(product)

// let greaterThanTen = numbers.filter((item)=>{

//   if(item > 20){
//     // console.log(item)
//   }

// })
// users.forEach((item, index, arr) => {
//   // console.log(item, index, arr);
// });



























const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 800, stock: 10 },
  { id: 2, name: "Phone", category: "Electronics", price: 500, stock: 25 },
  { id: 3, name: "Tablet", category: "Electronics", price: 300, stock: 15 },
  { id: 4, name: "Headphones", category: "Electronics", price: 100, stock: 40 },
  { id: 5, name: "Keyboard", category: "Electronics", price: 50, stock: 30 },

  { id: 6, name: "Shirt", category: "Clothing", price: 25, stock: 50 },
  { id: 7, name: "Jeans", category: "Clothing", price: 40, stock: 35 },
  { id: 8, name: "Jacket", category: "Clothing", price: 80, stock: 20 },
  { id: 9, name: "Shoes", category: "Clothing", price: 60, stock: 45 },
  { id: 10, name: "Cap", category: "Clothing", price: 15, stock: 60 },

  { id: 11, name: "Rice", category: "Grocery", price: 20, stock: 100 },
  { id: 12, name: "Flour", category: "Grocery", price: 18, stock: 90 },
  { id: 13, name: "Sugar", category: "Grocery", price: 22, stock: 80 },
  { id: 14, name: "Milk", category: "Grocery", price: 10, stock: 70 },
  { id: 15, name: "Tea", category: "Grocery", price: 12, stock: 60 },

  { id: 16, name: "Chair", category: "Furniture", price: 45, stock: 25 },
  { id: 17, name: "Table", category: "Furniture", price: 120, stock: 10 },
  { id: 18, name: "Sofa", category: "Furniture", price: 400, stock: 5 },
  { id: 19, name: "Bed", category: "Furniture", price: 600, stock: 8 },
  { id: 20, name: "Wardrobe", category: "Furniture", price: 350, stock: 6 },

  { id: 21, name: "Watch", category: "Accessories", price: 150, stock: 20 },
  { id: 22, name: "Bag", category: "Accessories", price: 70, stock: 30 },
  { id: 23, name: "Belt", category: "Accessories", price: 20, stock: 40 },
  { id: 24, name: "Sunglasses", category: "Accessories", price: 90, stock: 25 },
  { id: 25, name: "Wallet", category: "Accessories", price: 35, stock: 50 },

  { id: 26, name: "Book A", category: "Books", price: 15, stock: 60 },
  { id: 27, name: "Book B", category: "Books", price: 18, stock: 55 },
  { id: 28, name: "Book C", category: "Books", price: 22, stock: 50 },
  { id: 29, name: "Notebook", category: "Books", price: 8, stock: 100 },
  { id: 30, name: "Pen", category: "Books", price: 2, stock: 200 },

  { id: 31, name: "Football", category: "Sports", price: 30, stock: 40 },
  { id: 32, name: "Cricket Bat", category: "Sports", price: 75, stock: 20 },
  { id: 33, name: "Tennis Racket", category: "Sports", price: 120, stock: 15 },
  { id: 34, name: "Gym Gloves", category: "Sports", price: 25, stock: 35 },
  { id: 35, name: "Skipping Rope", category: "Sports", price: 10, stock: 60 },

  { id: 36, name: "Perfume", category: "Beauty", price: 55, stock: 25 },
  { id: 37, name: "Face Wash", category: "Beauty", price: 12, stock: 70 },
  { id: 38, name: "Shampoo", category: "Beauty", price: 18, stock: 65 },
  { id: 39, name: "Lotion", category: "Beauty", price: 20, stock: 50 },
  { id: 40, name: "Lipstick", category: "Beauty", price: 25, stock: 45 },

  { id: 41, name: "Toy Car", category: "Toys", price: 15, stock: 80 },
  { id: 42, name: "Doll", category: "Toys", price: 20, stock: 60 },
  { id: 43, name: "Puzzle", category: "Toys", price: 10, stock: 70 },
  { id: 44, name: "Board Game", category: "Toys", price: 35, stock: 30 },
  { id: 45, name: "Action Figure", category: "Toys", price: 25, stock: 40 },

  { id: 46, name: "Fan", category: "Appliances", price: 60, stock: 25 },
  { id: 47, name: "Iron", category: "Appliances", price: 35, stock: 20 },
  { id: 48, name: "Blender", category: "Appliances", price: 80, stock: 15 },
  { id: 49, name: "Microwave", category: "Appliances", price: 150, stock: 10 },
  { id: 50, name: "Fridge", category: "Appliances", price: 500, stock: 5 },

  { id: 51, name: "Camera", category: "Electronics", price: 700, stock: 8 },
  { id: 52, name: "Tripod", category: "Electronics", price: 45, stock: 20 },
  { id: 53, name: "Speaker", category: "Electronics", price: 120, stock: 25 },
  { id: 54, name: "Monitor", category: "Electronics", price: 200, stock: 12 },
  { id: 55, name: "Mouse", category: "Electronics", price: 25, stock: 50 },

  { id: 56, name: "T-shirt", category: "Clothing", price: 20, stock: 60 },
  { id: 57, name: "Sweater", category: "Clothing", price: 50, stock: 25 },
  { id: 58, name: "Shorts", category: "Clothing", price: 30, stock: 40 },
  { id: 59, name: "Sandals", category: "Clothing", price: 35, stock: 30 },
  { id: 60, name: "Socks", category: "Clothing", price: 5, stock: 100 },

  { id: 61, name: "Eggs", category: "Grocery", price: 5, stock: 120 },
  { id: 62, name: "Butter", category: "Grocery", price: 8, stock: 80 },
  { id: 63, name: "Cheese", category: "Grocery", price: 15, stock: 70 },
  { id: 64, name: "Chicken", category: "Grocery", price: 40, stock: 50 },
  { id: 65, name: "Fish", category: "Grocery", price: 45, stock: 45 },

  { id: 66, name: "Desk Lamp", category: "Furniture", price: 25, stock: 35 },
  { id: 67, name: "Bookshelf", category: "Furniture", price: 150, stock: 10 },
  {
    id: 68,
    name: "Office Chair",
    category: "Furniture",
    price: 180,
    stock: 12,
  },
  { id: 69, name: "Coffee Table", category: "Furniture", price: 130, stock: 8 },
  { id: 70, name: "TV Stand", category: "Furniture", price: 160, stock: 9 },
];

const div = document.querySelector(".container");
const checkoutBtn = document.querySelector("#checkout-btn");

const categoryArr = ['all'];
const getCartItems = JSON.parse(localStorage.getItem("cartItem"));
console.log(getCartItems);
const cartItems = getCartItems;

const renderItem = (arr) => {
  div.innerHTML = "";
  arr.map((item) => {
    div.innerHTML += `
     <div class="card">
            <h3>${item.name}</h3>
            <p>Category: ${item.category}</p>
            <p class="price">$${item.price}</p>
            <p>Stock: ${item.stock}</p>
            <button onclick="addToCart(${item.id})">add to cart</button>
        </div>
    `;
  });
};

renderItem(products)


// add to cart

function addToCart(id){
  // console.log(id);

  const singleProduct = products.find(item => item.id === id);
  // console.log(item);
  if(cartItems.includes(singleProduct)){
    console.log('item already mujood ha.');
    const index = cartItems.findIndex(item => item.id === singleProduct.id)


    console.log(index);
    cartItems[index].quantity += 1
    
    
  }else {
    singleProduct.quantity = 1
    cartItems.push(singleProduct);
    console.log('item mujood nahi tha');
    
    
    
  }
  
  console.log(cartItems);
  
  
}


checkoutBtn.addEventListener('click' , ()=>{
  localStorage.setItem('cartItem' , JSON.stringify(cartItems))

  window.location = "cart.html"
})


// category array
products.map((item) => {
  if (!categoryArr.includes(item.category)) {
    categoryArr.push(item.category);
  }
});


// rendering category array
const btnDiv = document.querySelector(".btns");

categoryArr.map((item, index) => {
  btnDiv.innerHTML += `<button onclick="changeCategory(${index})">${item}</button>`;
});


// render product according to the category
function changeCategory(index) {
  // console.log(categoryArr[index]);
  if(index === 0){
    renderItem(products)
    return
  }

  const filteredProduct = products.filter(
    (item) => item.category === categoryArr[index],
  );

  // console.log(filteredProduct);
  renderItem(filteredProduct)
}






























// call back and higher orderfunction
// foreach, map, filter , reduce , find , findindex
// project
// local storage
// event
// promises async await
// api calling
