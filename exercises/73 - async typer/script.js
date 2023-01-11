document.querySelectorAll('[data-type]').forEach(draw);

function wait(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
    return Math.floor(randomNumber * (max - min) + min);
}

async function draw(el) {
    let index = 1;
    const text = el.textContent;
    const { typeMin, typeMax } = el.dataset;
    async function drawLetter() {
        el.textContent = text.slice(0, index);
        index += 1;
        const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
        // exit condition
        await wait(10);
        if (index <= text.length) {
            drawLetter();
        }
    }
    // when this function draw() runs, kick off drawLetter
    drawLetter();
    // for (const letter of text) {
    //     console.log(letter);
    //     soFar += letter;
    //     console.log(soFar);
    //     const amountOfTimeToWait = getRandomBetween();
    //     await wait(10);
    // }
}
document.querySelectorAll('[data-type]').forEach(draw);