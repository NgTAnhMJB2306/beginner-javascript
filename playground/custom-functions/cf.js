// function definition
// function calculateBill() {
//     // this is a function body
//     console.log("Running Calculate Bill!!");
//     const total = 100 * 1.13;
//     return total;
// }

// function call or function invocation
// const myTotal = calculateBill();
// console.log(myTotal);
// console.log(`Your total is ${myTotal}`);
// console.log(`Your total is ${calculateBill()}`);

// const billAmount = 100;
// const taxRate = 0.13;

// function calculateBill(billAmount, taxRate) {
//     console.log(billAmount, taxRate);
//     console.log("Running calculate bill!!");
//     const total = billAmount * (1 + taxRate);
//     return total;
// }
// const myTotal = calculateBill(100, 0.15);
// const myTotal2 = calculateBill(200, 0.13);
// console.log(myTotal, myTotal2)

// const firstName = "Blue";

// function sayHiTo(firstName) {
//     return `Hello ${firstName}`;
// }

// const greeting = sayHiTo("Blue");
// console.log(greeting);

// function doctorize(name) {
//     return `Dr. ${name}`;
// }

// function yell(name) {
//     return `Hey. ${name.toUpperCase()}`;
// }

// function yell1(name = "Silly Goose") {
//     return `HEY ${name.toUpperCase()}`;
// }

// function yell2(name = "") {
//     return `HEY ${name.toUpperCase()}`;
// }

function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
    console.log(billAmount, taxRate);
    console.log("Running calculate bill!!");
    // const total = billAmount * (1 + taxRate);
    const total = billAmount + (billAmount * taxRate) + (billAmount * tipRate);
    return total;
}

// const myTotal = calculateBill(100, 0.13, 0.15);
// const myTotal2 = calculateBill(200, 0.13, 0.15);
// console.log(myTotal, myTotal2);