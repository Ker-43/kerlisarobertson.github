// scripts.js (JavaScript for form validation)
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    
    form.addEventListener("submit", function (event) {
        const email = document.getElementById("email").value;
        if (!email) {
            alert("Please enter a valid email address.");
            event.preventDefault();
        }
    });
});