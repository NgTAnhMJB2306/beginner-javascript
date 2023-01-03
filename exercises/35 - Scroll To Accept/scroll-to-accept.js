const terms = document.querySelector('terms-and-conditions');
function scrollToAccept() {
    if (!terms) {
        return; //quit this there isn't that item on tha page
    }
    terms.addEventListener('scroll', function (e) {
        console.log(e.currentTarget.scrollTop);
        console.log(e.currentTarget.scrollHeight);
    });
}
scrollToAccept();

const watch = document.querySelector('.watch');

function obCallBack(payload) {
    console.log(payload[0]);
    console.log(payload[0].isIntersecting);
    console.log(payload[0].intersectionRatio);
    if (payload[0].intersectionRatio === 1) {
        button.disable = false;
        // Stop observing the button
        ob.unobserve(terms.lastElementChild);
        console.log('REMOVING DISABLED');
    } else {
        button.disabled = true;
    }
}
const ob = new IntersectionObserver(obCallBack, {
    root: terms,
    threshold: 0.1,
});
ob.observe(watch);
// ob.observe(terms.lastElementChild);

const button = document.querySelector('.accept');
