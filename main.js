const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

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

password.addEventListener("input", validatePasswords);
confirmPassword.addEventListener("input", validatePasswords);