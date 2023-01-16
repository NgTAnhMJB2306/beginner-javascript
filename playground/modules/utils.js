// Utils.js

// var promise = import("module-name");

const first = "Wes";
const last = "M.J.Blue";
const middle = "Bielsa";

async function returnHi(name) {
    return `Hi ${name} ${last}`;
}

// name exports
export { last, middle, returnHi };
export default first;