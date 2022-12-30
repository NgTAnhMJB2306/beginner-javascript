const wes = document.querySelector(".wes");

wes.addEventListener("click", function (event) {
    console.log("YOU CLICKED IT");
    event.preventDefault();
    const shouldChangePage = confirm(
        "This website might be malicious! Do you wish to proceed?"
    );

    if (shouldChangePage) {
        window.location = event.currentTarget.href;
    } else if (!shouldChangePage) {
        event.preventDefault();
    }
    console.log(shoudChagePage);
});

const signupForm = document.querySelectorAll('[name="signup"]');
signupForm.addEventListener("submit", function (event) {
    console.log(event);
    event.preventDefault();
    console.log(event.currentTarget.name);
    console.log(event.currentTarget.email);
    console.log(event.currentTarget.name.value);
    console.log(event.currenTarget.email.value);
    console.log(event.currentTarget.agree.checked);
});

function logEvent(event) {
    console.log(event.type);
}
signupForm.name.addEventListener("keyup", logEvent);
