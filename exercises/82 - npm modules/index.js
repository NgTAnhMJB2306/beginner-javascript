// index.js

import wait from 'waait';
// import { name } from 'faker';
import { formatDistance, format } from "date-fns";
// import axios from "axios";
import { intersection, isEqual } from "lodash";
import to from "await-to-js";

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = [5, 3, 8, 3, 7, 453, 34];

const sameValues = intersection(a, b);
console.log(sameValues);

const person1 = { name: "wes" };
const person2 = { name: "wes" };
console.log(person1 === person2);
console.log(isEqual(person1, person2))

// const fakeNames = Array.from({ length: 10 },
//     () => `${name.firstName()} ${name.lastName()}`
// );

const diff = formatDistance(
    new Date(1986, 3, 4, 11, 32, 0),
    new Date(1986, 3, 4, 10, 32, 0),
    { addSuffix: true }
); // "in about 1 hour"
console.log(diff);

// const formatted = format(date, `LLLL 'the' do y`);
// console.log(formatted);

async function go() {
    console.log("Going!");
    await wait(200);
    console.log("Ending!");
}

// async function getJoke() {
//     const { data } = await axios.get("https://icanhazdadjoke.com", {
//         headers: {
//             Accept: "application/json",
//         },
//     });
//     console.log(data);
// }
// getJoke();

function checkIfNameIsCool(firstName) {
    return new Promise(function (resolve, reject) {
        if (firstName === "Wes") {
            resolve("Cool name");
            return;
        }
        reject(new Error("Not a cool name"));
    });
}

// async function checkName() {
//     const nameDesc = await checkIfNameIsCool("Wes");
//     console.log(nameDesc);
// }

async function checkName() {
    // const response = await to(checkIfNameIsCool("snickers"));
    const [err, successValue] = await to(checkIfNameIsCool("snickers"));
    if (err) {
        // deal with it
        console.log(err);
    } else {
        console.log(successValue);
    }
    // console.log(response);
}

checkName();

go();

