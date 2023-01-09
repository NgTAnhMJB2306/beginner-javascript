// function Slider(slider) {
//     if (!(slider instanceof Element)) {
//         throw new Error('No slider passed in');
//     }

//     let current;
//     let prev;
//     let next;

//     const slides = slider.querySelector('.slider');
//     const prevButton = document.querySelector('.goToPrev');
//     const nextButton = document.querySelector('.goToNext');

//     function startSlider() {
//         current = slider.querySelector('.current') || slides.firstElementChild;
//         prev = current.previousElementSibling || slides.lastElementChild;
//         next = current.nextElementSibling || slides.firstElementChild;
//         console.log(current, prev, next);
//     }

//     function applyClasses() {
//         current.classList.add('current');
//         prev.classList.add('prev');
//         next.classList.add('next');
//     }

//     function move(direction) {
//         // prev.classList.remove("prev", "current", "next");
//         // current.classList.remove("prev", "current", "next");
//         // next.classList.remove("prev", "current", "next");
//         const classesToRemove = ['prev', 'current', 'next'];
//         prev.classList.remove(...classesToRemove);
//         current.classList.remove(...classesToRemove);
//         next.classList.remove(...classesToRemove);
//         // ['prev', 'current', 'next'].forEach(el => el.classList.remove(...classesToRemove));
//         // if (direction === "back") {
//         //     [prev, current, next] = [prev.previousElementSibling, prev, current];
//         // } else {
//         //     [prev, current, next] = [current, next, next.nextElementSibling];
//         // }
//         if (direction === "back") {
//             [prev, current, next] = [
//                 // get the prev slide, if there is none, get the last slide from the entire slider for wrapping
//                 prev.previousElementSibling || slides.lastElementChild,
//                 prev,
//                 current,
//             ];
//         } else {
//             [prev, current, next] = [
//                 current,
//                 next,
//                 // get the next slide or if its at the end, loop around and grab the first
//                 next.nextElementSibling || slides.firstElementChild,
//             ];
//         }
//         applyClasses();
//     }

//     //when this slider is created, run the start slider function
//     startSlider();
//     move();

//     // Event listeners
//     prevButton.addEventListener('click', () => move('back'));
//     nextButton.addEventListener('click', move);
// }

// const mySlider = Slider(document.querySelector('.slider'));
// const dogSlider = Slider(document.querySelector('.dog-slider'));


function Slider(slider) {
    if (!(slider instanceof Element)) {
        throw new Error('No slider passed in');
    }
    // create some variables for working with the slider
    this.prev;
    this.current;
    this.next;

    // select the elements needed for the slider
    this.slides = slider.querySelector('.slides');
    this.slider = slider;
    const prevButton = slider.querySelector('.goToPrev');
    const nextButton = slider.querySelector('.goToNext');

    // when this slider is created, run the start slider function
    this.startSlider();
    this.applyClasses();

    // Event listeners
    prevButton.addEventListener('click', () => this.move('back'));
    nextButton.addEventListener('click', () => this.move());
}

Slider.prototype.startSlider = function () {
    this.current =
        this.slider.querySelector('.current') || this.slides.firstElementChild;
    this.prev =
        this.current.previousElementSibling || this.slides.lastElementChild;
    this.next = this.current.nextElementSibling || this.slides.firstElementChild;
};

Slider.prototype.applyClasses = function () {
    this.current.classList.add('current');
    this.prev.classList.add('prev');
    this.next.classList.add('next');
};

Slider.prototype.move = function (direction) {
    // first strip all the classes off the current slides
    const classesToRemove = ['prev', 'current', 'next'];
    this.prev.classList.remove(...classesToRemove);
    this.current.classList.remove(...classesToRemove);
    this.next.classList.remove(...classesToRemove);
    if (direction === 'back') {
        // make an new array of the new values, and destructure them over and into the prev, current and next variables
        [this.prev, this.current, this.next] = [
            // get the prev slide, if there is none, get the last slide from the entire slider for wrapping
            this.prev.previousElementSibling || this.slides.lastElementChild,
            this.prev,
            this.current,
        ];
    } else {
        [this.prev, this.current, this.next] = [
            this.current,
            this.next,
            // get the next slide, or if it's at the end, loop around and grab the first slide
            this.next.nextElementSibling || this.slides.firstElementChild,
        ];
    }

    this.applyClasses();
};

const mySlider = new Slider(document.querySelector('.slider'));
const dogSlider = new Slider(document.querySelector('.dog-slider'));

console.log(mySlider, dogSlider);

window.dogSlider = dogSlider;

window.addEventListener('keyup', function (e) {
    if (e.key === 'ArrowRight') {
        dogSlider.move();
    }
    if (e.key === 'ArrowLeft') {
        dogSlider.move('back');
    }
});