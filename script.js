// Function to launch confetti
function launchConfetti() {
    confetti({
        particleCount: 300,
        spread: 90,
        origin: { x: 0.5, y: 0.7 },
        colors: ['#ff0000', '#ffff00', '#0000ff', '#00ff00'], // Rainbow colors
        disableForReducedMotion: true, // Accessibility
    });
}

// Function to show the birthday message
function showBirthdayMessage() {
    // Replace the content with a message
    document.body.innerHTML = `
        <div class="final-message">
            🎂 <b>Happy Birthday, my cutie flof!</b> 🎂<br><br>
            You're the bestest flof to ever flof hehe...<br><br>
            Yus, I learnt koncham coding to make this for you...<br>
            Woi? I dunnoooo, just a littole something for you hehe. 😘<br><br>
            <b>I love you so so so soooooooooooo much, bear!</b> 🐻❤️<br><br>
            Oka now come bek on da col with me hehe :)
        </div>
    `;

    // Launch confetti when the message is shown
    launchConfetti();
}

// Add event listener to the button
const messageButton = document.getElementById("startMessageBtn");
messageButton.addEventListener("click", showBirthdayMessage);
