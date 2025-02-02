const messages = [
    "sure?",
    "Really sure??",
    "Amoon pookie",
    "Pweeeeze",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "Yhdik I will be very sad...",
    "fine, I will stop asking...",
    "Nfdlk, say yes plsss! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}