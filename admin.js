function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginResult = document.getElementById('loginResult');

    // Simulate server-side authentication (replace this with actual server-side logic)
    if (username === 'admin' && password === 'adminpass') {
        loginResult.innerHTML = '<span class="success-message">Login successful</span>';
        // Redirect to the admin page or perform other actions as needed
        window.location.href = 'admin-dashboard.html';
        return false; // Returning false to prevent the form from submitting (no actual submission in this example)
    } else {
        loginResult.innerHTML = '<span class="error-message">Invalid username or password</span>';
        return false;
    }
}
