function calculateAge(userBirth) {
  let birthdate = new Date(userBirth);
  let currentdate = new Date();

  let Birthmillisecond = birthdate.getTime();
  let currentmillisecond = currentdate.getTime();

  let remainingMillisecond = currentmillisecond - Birthmillisecond;

  let myBirthDate = remainingMillisecond / 1000 / 60 / 60 / 24 / 365;

//   console.log(Math.round(myBirthDate));

  return Math.round(myBirthDate)
}

console.log(calculateAge("February 26, 1997"));
console.log(calculateAge("February 26, 2003"));


// get methods

// console.log(date.getDay())
// console.log(date.getTime())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getFullYear())
// console.log(date.toString())

// set Date Methods

// let date = new Date('2026-01-18');

// console.log(date)
// date.setDate(12)
// date.setMonth(12)
//  date.setDate(23)
// console.log(date)
// console.log(date.setMonth(12))
// console.log(date.setDate(16))

// formating methods

// console.log(date.getUTCHours())
// console.log(date.toISOString())
// console.log(date.toDateString())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleString())
// console.log(date.getDay())

// sunday = 0
// Month = january

// console.log(Date.now())

// let date = new Date()
