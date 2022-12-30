// function init() {
//     const p = document.querySelector('p');
//     console.log(p);
// }
// document.addEventListener('DOMContentLoaded', init);

// const p = document.querySelector("p");
// const divs = document.querySelectorAll("div");
// console.log(p);
// console.log(divs);

// document.querySelectorAll('.item');
// document.querySelectorAll("div.item");
// const divs = document.querySelectorAll('.item img');
// document.querySelector('.item img');
// const item2 = document.querySelector('.item2');
// console.log(item2);


// const item2Image = item2.querySelector('img');
// const heading = document.querySelector('h2');
// console.dir(heading.textContent);
// console.log(heading.innerText);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);
// pizzaList.textContent = `${pizzaList.textContent} 🍕`;
// pizzaList.insertAdjacentText('beforeend', '🍕');

// const pic = document.querySelector('.nice');
// console.log(pic.classList);
// pic.classList.remove('cool');
// pic.classList.add('round');

// function toggleRound() {
//     pic.classList.toggle('round');
// }
// pic.addEventListener('click', toggleRound);
// pic.classList.contains('open');

const custom = document.querySelector('.custom');
console.log(custom.data);

custom.addEventListener('click', function () {
    alert(`Welcome ${custom.dataset.name} ${custom.dataset.last} `);
});