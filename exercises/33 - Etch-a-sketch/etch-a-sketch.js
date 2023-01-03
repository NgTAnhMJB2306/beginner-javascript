console.log("it works");

// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebutton = document.querySelector('.shake');
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
ctx.moveTo(200, 200);
ctx.lineTo(200, 200);
ctx.stroke();
// const width = canvas.width;
// const height = canvas.height;

// set up our canvas for drawing
const { width, height } = canvas;
let x = Math.floor(Math.random() * width);
ctx.beginPath();
ctx.moveTo(x, 200);
ctx.lineTo(x, 200);
ctx.stroke();
let y = Math.floor(Math.random() * height);
ctx.moveTo(x, y);
ctx.lineTo(x, y);
console.log(width, height);

// write a draw function
function draw({ key }) {
    const hue = 0;
    // ctx.strokeStyle = `hsl(100, 100%, 50%)`;
    // ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
}


function draw(options) {
    console.log(options.key);
}
function draw(options) {
    console.log(options.key);
}

function draw({ key }) {
    console.log(key);
    // start the path
    ctx.beginPath();
    ctx.moveTo(x, y);
    // move our x and y values depending on what the user did
    x = x - 10;
    y = y - 10;
    ctx.lineto(x, y);
    ctx.stroke();
    const MOVE_AMOUNT = 10;
    x -= MOVE_AMOUNT;
    y -= MOVE_AMOUNT;
    // if (key == 'ArrowUp') {
    // } else if (key == 'OtherValue') {
    // }
    switch (key) {
        case "ArrowUp":
            y -= MOVE_AMOUNT;
            break;
        case "ArrowRight":
            x += MOVE_AMOUNT;
            break;
        case "ArrowDown":
            y += MOVE_AMOUNT;
            break;
        case "ArrowLeft":
            x -= MOVE_AMOUNT;
            break;
        default:
            break;
    }
}

// write a handler for the keys
function handleKey() {
    console.log("HANDLING KEY");
}
window.addEventListener('keydown', handleKey);
function handleKey(e) {
    // e.preventDefault();
    console.log(e.key);
    console.log("HANDLING KEY");
}

if (e.key.includes("Arrow")) {
    e.preventDefault();
    console.log(e.key);
    console.log("HANDLING KEY");
}

function functionHandleKey(e) {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw({ key: e.key });
        console.log(e.key);
        console.log('HANDLING KEY');
    }
}

// clear or shake function
function clearCanvas() {
    canvas.classList.add('shake');
    canvas.addEventListener("animationend", function () {
        console.log("done the shake!");
        canvas.classList.remove("shake");
    },
        { once: true }
    );
}

shakebutton.addEventListener("click", clearCanvas);
// ctx.clearRect(0, 0, 500, 500);
ctx.clearRect(0, 0, width, height);

// listen for arrow keys