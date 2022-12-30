console.log('it works');
const item = document.querySelector('.item');
console.log(item.innerHTML);

item.innerHTML = `
    <h1>Hey How are you?</h1>
    <div>
        <h1>Hey How are you?</h1>
    </div>
`;

const width = 500;
const src1 = `https://picsum.photos/${width}`;

const src = `https://bom.so/usIhjx`;
const desc = "Cute pup";
const myHTML = `
    <div>
    <h2>Cute ${desc}</h2>
    <img src="${src}" alt="${desc}"/>
    </div>
`;

console.log(typeof myHTML);
item.innerHTML = myHTML;

// myHTML.classList.add('special');

// const itemImage = document.querySelector('.wrapper img');
// itemImage.classList.add('round');

const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(myFragment.querySelector('img'));
console.log(myFragment);

document.body.appendChild(myFragment);