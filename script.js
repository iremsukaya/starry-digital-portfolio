// Function to create background stars (Works on all pages)
function createStars() {
    const numStars = 30; // Number of yellow stars appearing on screen
    for (let i = 0; i < numStars; i++) {
        let star = document.createElement("div");
        star.className = "bg-star";
        star.innerHTML = "★";

        // Calculate height dynamically to spread stars across the entire page
        let pageHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        star.style.left = Math.random() * 95 + "vw";
        star.style.top = Math.random() * pageHeight + "px";
        star.style.animationDelay = (Math.random() * 4) + "s";
        star.style.fontSize = (Math.random() * 15 + 10) + "px"; // Size between 10px-25px
        document.body.appendChild(star);
    }
}

// Add stars when the page loads
document.addEventListener("DOMContentLoaded", createStars);

const button = document.getElementById('btnGreet');
const messageArea = document.getElementById('messageArea');
const nameInput = document.getElementById('nameInput');

// Guard added so Contact page logic only runs on contact.html
if (nameInput && button && messageArea) {
    // Event listener allowing only alphabetical characters (Removes numbers and special chars)
    nameInput.addEventListener('input', function () {
        // \p{L} matches any kind of letter from any language, 'u' flag enables unicode
        this.value = this.value.replace(/[^\p{L}\s]/gu, '');
    });

    button.addEventListener('click', function () {
        let name = nameInput.value.trim();
        if (name === "") {
            name = "Guest";
        }

        // Reset style for message animation
        messageArea.style.opacity = '0';
        messageArea.style.transform = 'translateY(10px)';

        setTimeout(() => {
            messageArea.textContent = "Hello " + name + "! The stars are shining for you. ✨";
            messageArea.style.color = "#6a5acd";
            messageArea.style.fontWeight = "bold";
            messageArea.style.marginTop = "20px";
            messageArea.style.transition = "all 0.5s ease";
            messageArea.style.opacity = '1';
            messageArea.style.transform = 'translateY(0)';
        }, 100);
    });
}