// Basic form validation
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const onlineId = document.getElementById('online-id').value;
    const password = document.getElementById('password').value;

    if (onlineId === "" || password === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Form Submitted Successfully!");
    }
});
