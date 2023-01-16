// import defaultExport from "module-name";
// import * as name from "module-name";
// import { export1 } from "module-name";
// import { export1 as alias1 } from "module-name";
// import { export1, export2 } from "module-name";
// import { foo, bar } from "module-name/path/to/specific/un-exported/file";
// import { export1, export2 as alias2, [...] } from "module-name";
// import defaultExport, { export1 [, [...]] } from "module-name";
// import defaultExport, * as name from "module-name";
// import "module-name";
// var promise = import("module-name");


// Script.js

import first, { returnHi as sayHi, last, middle } from "./utils.js";
// import Blue from "./wes.js";
import * as everything from "./wes.js";
import { handleButtonClick } from "./handlers.js";

const name = "blue";
console.log(sayHi);
// console.log(returnHi(name));
console.log("Its working...");
console.log(last, middle);
// console.log(Blue);
console.log(first);

const button = document.querySelector("button");
button.addEventListener("click", handleButtonClick);