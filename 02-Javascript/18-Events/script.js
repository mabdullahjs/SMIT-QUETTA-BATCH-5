// JavaScipt Events

// let btn = document.querySelector(".btn");

// let img = document.querySelector(".image");
// let container = document.querySelector(".container");

// btn.addEventListener('click' ,() =>{
//     console.log('button clicked')
// })

// btn.addEventListener("dblclick", sum);

// function sum() {
//   console.log("testing");
// }

// container.addEventListener("mouseover", () => {
//   img.src =
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRD7Yqo2SjBl2MuIQwW9aeWk0gRikGVlpvkppb84kSLg&s&ec=121643229";
// });

// container.addEventListener('mouseout' , ()=>{
//     img.src =
//    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRD7Yqo2SjBl2MuIQwW9aeWk0gRikGVlpvkppb84kSLg&s&ec=121643229";
// })

// let parent = document.querySelector('.parent');

// let child = document.querySelector('.child');

// let second = document.querySelector('.secondChild')

// parent.addEventListener('click' , ()=>{
//     console.log('parent Clicked')
// })

// child.addEventListener('click' , (e)=>{

//     // e.stopPropagation()
//     console.log('child Clicked')
//     // console.log(e.target)
// })

// second.addEventListener('click' , (e)=>{
//     // e.stopPropagation()
//     console.log('second Child Clicked')
// })

let form = document.querySelector(".form");

let inputOne = document.querySelector(".name");
let inputTwo = document.querySelector(".email");
let inputThree = document.querySelector(".pass");

form.addEventListener("submit", (event) => {

  event.preventDefault();
  console.log(event);

  let name = inputOne.value;
  let email = inputTwo.value;
  let password = inputThree.value;

  //   console.log(name, email, password);

  let user = {
    name,
    email,
    password,
  };

  console.log(user);
});
