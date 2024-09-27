alert("Your passwords are currently visible to us, this site is in testing mode.")

const signUp = document.getElementById('signUp');

signUp.addEventListener("click", () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('password_confirmation').value;

    if (confirmPassword === password) {
        if (!userExists(email)) {
            const success = addUser(name, email, password);
            if (success) {
                alert("User successfully registered!");
            } else {
                alert("Error: User could not be registered.");
            }
        } else {
            alert("Error: A user with this email already exists.");
        }
    } else {
        alert("Error: Passwords do not match.");
    }
});