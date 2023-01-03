function handleCardButtonClick(event) {
    const button = event.currentTarget;
    const card = button.closet('.card');
    console.log(card);
}
const cardButtons = document.querySelectorAll('.card button');
cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick))
// const button = event.currentTarget;

function handleCardButtonClick() {
    const button = event.currentTarget;
    const card = button.closest('.card');
    // grab the image src
    const imgSrc = card.querySelector('img').src;
    console.log(imgSrc);
}

const name = card.querySelector('h2').textContent;
const modalInner = document.querySelector('.modal-inner');
function handleCardButtonClick(event) {
    const button = event.currentTarget;
    const card = button.closest('.card');
    // Grab the image src
    const imgSrc = card.querySelector('img').src;
    const desc = card.dataset.description;
    const name = card.querySelector('h2').textContent;
    // populate the modal with the new info
    modalInner.innerHTML = `
      <img  src="${imgSrc.replace('200', '600')}" alt="${name}" />
      <p>${desc}</p>
    `;
    // show the modal
    modalOuter.classList.add('open');
}

modalInner.innerHTML = `
  <img width="600" height="600" src="${imgSrc.replace(
    '200',
    '600'
)}" alt="${name}" />
  <p>${desc}</p>
`;

const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function closeModal() {
    modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function (event) {
    // console.log(event.target);
    // console.log(event.currentTarget);
    const isOutside = !event.target.closest('.modal-inner');
    if (isOutside) {
        closeModal();
    }
})

window.addEventListener('keydown', event => {
    console.log(event);
    if (event.key === 'Escape') {
        closeModal();
    }
});