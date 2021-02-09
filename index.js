let error = false;
let isEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

document
    .getElementsByClassName("email")[0]
    .addEventListener('keydown', (event) => {
        let value = event.target.value;
        let error = document.getElementsByClassName("error")[0];
        let email = document.getElementsByClassName("email-container")[0];
        let exError = document.getElementsByClassName("ex-error")[0];

        if(!isEmail.test(value)) {
            error.classList.remove("hidden");
            email.classList.add("error-outline");
            exError.classList.remove("hidden");
        }

        if(isEmail.test(value)) {
            error.classList.add("hidden");
            email.classList.remove("error-outline");
            exError.classList.add("hidden");
        }
});

