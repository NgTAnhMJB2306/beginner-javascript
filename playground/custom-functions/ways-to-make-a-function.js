// Function expression
// const doctorize = function (firstName) {
//     doesntExist();
//     return `Dr. ${firstName}`;
// }

// console.log(doctorize2("wes"));

// const doctorize = function (firstName) {
//     return `Dr. ${firstName}`;
// };
// function doctorize2(firstName) {
//     return `Dr. ${firstName}`;
// }

// function inchToCM(inches) {
//     // const cm = inches * 2.54;
//     // return cm;
//     return inches * 2.54;
// }

// covert it to an anonymous function
// const inchToCM = function (inches) {
//     return inches * 2.54;
// };

// different ways to write arrow functions
// const inchToCM = (inches) => {
//     return inches * 2.54;
// };

// explicit return : 
// const inchToCM = (inches) => inches * 2.54;
const inchToCM = inches => inches * 2.54;


// function add(a, b = 3) {
//     const total = a + b;
//     return total;
// }

const add = (a, b = 3) => a + b;

// function makeABaby(first, last) {
//     const baby = {
//         name: `${first}${last}`,
//         age: 0,
//     };
//     return baby;
// }

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });