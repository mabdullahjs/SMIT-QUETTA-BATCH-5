// strict and non-strict mode
// Deep copy and shallow copy




// Objects in js
// const obj = new Object()
// const student = {
//     fullName : 'abdul salam' ,
//     email : 'abdul@gmail.com' ,
//     age : 24
// }

// console.log(obj.fullName)
// console.log(obj.age)
// console.log(obj.email)

// obj.age = 55 ;
// obj.phone = 74837
// delete obj.phone
// console.log(console)
// console.log(obj);
// console.log(obj.phone)
// console.log(obj.age)

// let card = document.querySelector(".card");

// const student = {
//   name: {
//     firstName: "abdul",
//     lastName: "salam",
//   },

//   address: {
//     city: "quetta",
//     ZIP: 87300,
//   },

//   email: "abdul@gmail.com",
// };

// card.innerHTML = `<h1>${student.name.firstName}</h1>
//         <p>${student.address.city}</p>
//         <p>${student.email}</p>`;
// console.log(Object.keys(student));

// console.log(Object.values(student));

// // console.log(student.name.firstName)

// // console.log(student.address.city)

// let container = document.querySelector(".students");

// const students = [
//   {
//     id: 1,
//     name: "Ali Khan",
//     age: 20,
//     grade: "A",
//   },
//   {
//     id: 2,
//     name: "Sara Ahmed",
//     age: 21,
//     grade: "B",
//   },
//   {
//     id: 3,
//     name: "Usman Tariq",
//     age: 19,
//     grade: "A+",
//   },
//   {
//     id: 4,
//     name: "Ayesha Malik",
//     age: 22,
//     grade: "A",
//   },
//   {
//     id: 5,
//     name: "Hassan Raza",
//     age: 20,
//     grade: "C",
//   },
//   {
//     id: 6,
//     name: "Fatima Noor",
//     age: 18,
//     grade: "B+",
//   },
//   {
//     id: 7,
//     name: "Bilal Hussain",
//     age: 23,
//     grade: "B",
//   },
//   {
//     id: 8,
//     name: "Zain Ali",
//     age: 21,
//     grade: "A-",
//   },
//   {
//     id: 9,
//     name: "Mariam Iqbal",
//     age: 19,
//     grade: "A",
//   },
//   {
//     id: 10,
//     name: "Omar Farooq",
//     age: 22,
//     grade: "B+",
//   },
// ];


// console.log(students[0])
// for (let i = 0; i < students.length; i++) {
//   container.innerHTML += ` <div class="card">
//             <div class="name">${students[i].name}</div>
//             <div class="info">Age: ${students[i].age}</div>
//             <div class="grade">Grade: ${students[i].grade}</div>
//         </div>`;
// }






// Object

// collection of (keys / properties) and values is called object.


const user = {
    fullName: "Muhammad Abdullah",
    age: 22,
    isLoggedIn: true,
    hobbies: ['swimming' , 'eating' , 'sleeping'],
    manager: {
        name: "Usman",
        age: 32,
    },
    greetUser: function (){
        // console.log("testing " , this.fullName)
        // console.log(this);
        
    }
} 
console.log(user.fullName);
console.log(user['fullName']);


// user.greetUser()
// console.log()

// user.lastName = "Khan"
// user.age = 32
// delete user.fullName
// console.log(user);


// console.log(user.manager.age);



// console.log(user.hobbies[1])
// console.log(user.age)
// console.log(user.fullName)
// console.log(user.isLoggedIn)


// Non-strict mode

// this

// console.log(this)
// window.alert("asd")
// window.console.log("hello world")


// function testingThis(element){
//     console.log(element);
    
// }