// console.log(document.getElementsByClassName("email")[0])
let error = false;
let isEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

document
    .getElementsByClassName("email")[0]
    .addEventListener('keydown', (event) => {
        let value = event.target.value;
        let email = document.getElementsByClassName("error")[0];
        if(!isEmail.test(value)) email.classList.remove("hidden");
        if(isEmail.test(value)) email.classList.add("hidden");

});

