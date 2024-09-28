document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const onlineId = document.getElementById('online-id').value;
    const password = document.getElementById('password').value;

    if (onlineId === "" || password === "") {
        alert("Please fill in all fields.");
    } else if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
    } else {
        alert("Form Submitted Successfully!");
    }
});

// Toggle Password Visibility
const togglePassword = document.getElementById('toggle-password');
const passwordField = document.getElementById('password');

togglePassword.addEventListener('click', function() {
    // Toggle the password field between 'password' and 'text'
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;

    // Change the inner text of the toggle based on the field type
    togglePassword.textContent = type === 'password' ? 'Show' : 'Hide';
});
