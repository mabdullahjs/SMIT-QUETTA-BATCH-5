// console.log('hello world');

// setTimeout(function(){
// console.log('running in timeout')
// } , 2000)

// console.log('after timeout');

// setInterval(function(){
// console.log('running in interval')
// }, 2000)

// clearInterval(function(){

// })

// console.log(add(10 , 30))

// function add(num1 , num2){
//     return num1 + num2
// }

// let name = 'abdul'
// console.log(name)

// const add = (num1, num2) => num1 + num2;

// console.log(add(30, 30));

// setTimeout(() => {
//     console.log('running in timeout')
// }, (2000));

let time = document.querySelector(".time");

let seconds = 0;
let minutes = 0;
let hours = 0;

let interval;

function start() {
  interval = setInterval(() => {
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
    time.innerHTML = `${hours} : ${minutes} : ${seconds}`;
  }, 1000);
}

function stop() {
  clearInterval(interval)
}
function reset() {
 clearInterval(interval)
 seconds = 0;
 minutes = 0 ;
 hours = 0;

 time.innerHTML = "00 : 00 : 00 "
}
