console.log('it works');
const name1 = 'Wes';
const middle = "topher";
const last = `bos`;

const sentence = 'she\'s so cool \\';
console.log(sentence);

let hello2 = "hello my name is ";
hello2 = hello2 + name1;
hello2 = hello2 + " Nice to meet you";

const hello = `hello my name is ${name1}. Nice to meet you`;
const hello1 = `hello my name is ${name1}. Nice to meet you. I am ${1 + 100} years old`;

const html = `
  <div>
    <h2>${name1}</h2>
    <p>${hello1}</p>
  </div>
`;
console.log(html);

const age = 100;
const name = "wes";

const person = {
    first: "wes",
    last: "bos",
    age: 100,
};
console.log(person.first);
console.log(person.last);
console.log(person.age);
console.log(person);

let dog;
console.log(dog); // out put: undefined

let somethingUndefined;
const somethingNull = null;
console.log(somethingNull);

const cher = {
    first: "Cher",
};
const teller = {
    first: "Raymond",
    last: "Teller",
};
teller.first = "Teller";
teller.last = null;
console.log(teller.first); // out put: Teller
console.log(teller.last); // out put: null

let isDrawing = false;
const age1 = 18;
const ofAge = age1 > 19;
console.log(ofAge);

console.log(Date.now());