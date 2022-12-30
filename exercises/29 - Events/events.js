console.log("it works");
const buyButton = document.querySelectorAll("button.buy");
// const butts = document.querySelector('.butts');
// const coolButton = document.querySelector('.cool');

// function handleClick() {
//     console.log('IT GOT CLICKED!!!!!!!!');
// }

// butts.addEventListener('click', handleClick);
// coolButton.addEventListener('click', handleClick);

// // butts.removeEventListener('click', handleClick);

// const hooray = () => console.log("HOORAY!");
// coolButton.addEventListener('click', hooray);

function buyItem() {
    console.log('BUYING ITEM');
}
// console.log(buyButtons);
// // buyButtons.addEventListener('click', buyItem);
// // buyButtons.addEventListener is not a function
// console.dir(butts);

// // buyButtons.forEach(function (buyButton) {
// //     console.log('Binding the buy button');
// //     buyButton.addEventListener('click', buyItem);
// // });

function handleBuyButtonClick(buyButton) {
    console.log('Binding the buy button');
    buyButton.addEventListener("click", buyItem);
}
// buyButtons.forEach(handleBuyButtonClick);

// buyButtons.forEach((button) => {
//     button.addEventListener('click', () => {
//         console.log("You clicked it!");
//     });
// });

buyButton.forEach(function (buyButton) {
    buyButton.addEventListener("click", handleBuyButtonClick);
});

function handleBuyButtonClick(event) {
    console.log('You are buying it');
    console.log(event.target.dataset);
    console.log(parseFloat(event.target.dataset.price));
}

function handleBuyButtonClick(event) {
    const button = event.target;
    // console.log(button.textContent);
    // console.log(parseFloat(event.target.dataset.price));
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.target === event.currentTarget);
}

window.addEventListener('click', function (event) {
    console.log('you clicked the window');
    console.log(event.target);
},
    // { capture: true }
)

function handleBuyButtonClick(e) {
    const button = e.target;
    // console.log(button.textContent);
    // console.log(parseFloat(e.target.dataset.price));
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.target === e.currentTarget);
    // stop this event from bubbling up
    e.stopPropagation();
}

window.addEventListener("click", function (event) {
    console.log("you clicked the window");
    console.log(event.target);
    console.log(event.type);
    console.log(event.bubbles);
},
    { capture: true }
);

const photoEl = document.querySelector(".photo");
photoEl.addEventListener("mousemove", (e) => {
    console.log(e.currentTarget);
    console.count(e.currentTarget);
    console.log(this);
});
