document.getElementById('loginButton').addEventListener('click', function() {
    // Get username and password input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if username and password are correct (you can replace this with your own authentication logic)
    if (username === 'admin' && password === 'password') {
        // Redirect to another page or do any necessary action
        window.location.href = 'page.html'; // Redirect to another page
    } else {
        // Display error message
        document.getElementById('loginMessage').textContent = 'Incorrect username or password. Please try again.';
    }
});
