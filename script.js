// script.js

// Function to handle button click animation
function animateButtonClick(event) {
    event.target.classList.add('clicked');

    // Reset animation class after 0.5s
    setTimeout(() => {
        event.target.classList.remove('clicked');
    }, 500);
}

// Event listeners for buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn, .submit-btn');

    buttons.forEach(button => {
        button.addEventListener('click', animateButtonClick);
    });
});
