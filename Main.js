document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded credentials (for demonstration purposes)
    const validUsername = 'Test1';
    const validPassword = 'Test';

    // Validate credentials
    if (username === validUsername && password === validPassword) {
        // Redirect to the dashboard page
        window.location.href = 'Basic.html';
    } else {
        // Show error message
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = 'Invalid username or password.';
        errorMessage.classList.remove('hidden');
    }
});
