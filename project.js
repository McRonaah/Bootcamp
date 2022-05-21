<registerForm.addEventlistener('submit', (event) => {
    event.preventDefault();
    if (password.value === conrfimPassword.value) {
    } else {
        console.log('password do match');
    }
});