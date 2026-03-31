const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const phone = document.querySelector("#phone");

function validatePasswords() {
    if (!confirmPassword.value) {
        confirmPassword.setCustomValidity("");
        return;
    }

    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords do not match");
    } else {
        confirmPassword.setCustomValidity("");
    }

}

function validatePhone() {

    if (!/^[0-9()+\- ]*$/.test(phone.value)) {
        phone.setCustomValidity("Only digits and characters + ( ) - are allowed");
    } else {
        phone.setCustomValidity("");
    }

}

password.addEventListener("input", validatePasswords);
confirmPassword.addEventListener("input", validatePasswords);
phone.addEventListener("input", validatePhone);

