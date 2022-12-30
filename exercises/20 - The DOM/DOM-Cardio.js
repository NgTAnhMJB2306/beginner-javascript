console.log("it works");

const div = document.createElement('div');
div.classList.add('wrapper');
document.body.appendChild(div);

const ul = `
    <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
    </ul>
`;

div.innerHTML = ul;
console.log(div);

const img = document.createElement('img');
img.src = 'https://bom.so/usIhjx';
img.width = 250;
img.classList.add('cute');
img.alt = "Cute Puppy!";
div.appendChild(img);

const myHTML = `
    <div class="myDiv">
        <p>Paragraph One</p>
        <p>Paragraph Two</p>
    </div>
`;

const ulElement = div.querySelector('ul');
console.log(ulElement);

// ulElement.insertAdjacentElement('beforebegin', myHTML);
// Uncaught TypeError: Failed to execute 'insertAdjacentElement' on 'Element': parameter 2 is not of type 'Element'.

ulElement.insertAdjacentHTML('beforebegin', myHTML);

const myDiv = div.querySelector('.myDiv');
console.log(myDiv);
console.log(myDiv.children);
console.log(myDiv.children[1]);
myDiv.children[1].classList.add('warning');
myDiv.firstElementChild.remove();
// const myDiv1 = div.firstElementChild;
// console.log(myDiv1);

function generatePlayerCard(name, age, height) {
    const html = `
    <div class="playerCard">
        <h2>${name} - ${age}</h2>
        <p>Their height is ${height} and  they are ${age} years old. In Dog years this person would be ${age *
        7}. That would be a tall dog!</p>
        <button class="delete" type="button">&times Delete</button>
    </div>
`;
    return html;
}

const cards = document.createElement();
cards.classList.add('cards');

const cardsHTML = generatePlayerCard("Blue", 23, 176);
cardsHTML += generatePlayerCard("scott", 12, 150);
cardsHTML += generatePlayerCard("kait", 12, 150);
cardsHTML += generatePlayerCard("snickers", 12, 150);
console.log(cardsHTML);

cards.insertAdjacentHTML('afterbegin', generatePlayerCard("snickers", 12, 150));
cards.innerHTML = cardsHTML;
div.insertAdjacentElement('beforebegin', cards);

const buttons = document.querySelectorAll('.delete');
console.log(buttons)

function deleteCard() {
    console.log("DELETE CARD! TODO");
}
buttons.forEach(button => button.addEventListener("click", deleteCard));

function deleteCard(event) {
    const buttonThatGotClicked = event.currentTarget;
    buttonThatGotClicked.parentElement.remove();
}

buttonThatGotClicked.closest(".playerCard").remove();