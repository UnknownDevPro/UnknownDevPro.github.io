let points = 0;
let multiplier = 1;

// DOM Elements
const pointsDisplay = document.getElementById('points');
const statusDisplay = document.getElementById('status');
const multiplierDisplay = document.getElementById('multiplier');
const clickerBtn = document.getElementById('clicker');
const secretInput = document.getElementById('secretInput');
const addMoneyBtn = document.getElementById('addMoneyBtn');
const toggleSecretBtn = document.getElementById('toggleSecretBtn');

// Click event to increase points
clickerBtn.addEventListener('click', () => {
    points += multiplier;
    updateStatus();
});

// Function to update status and multiplier based on points
function updateStatus() {
    pointsDisplay.textContent = `Money: ${points}`;
    
    if (points >= 100000000) {
        statusDisplay.textContent = 'GOD 👑';
        statusDisplay.style.color = 'gold';
        multiplier = 10000;
    } else if (points >= 100000) {
        statusDisplay.textContent = 'Jef Bezos 💀';
        statusDisplay.style.color = 'purple';
        multiplier = 1000;
    } else if (points >= 10000) {
        statusDisplay.textContent = 'The BEST!';
        statusDisplay.style.color = 'red';
        multiplier = 100;
    } else if (points >= 1000) {
        statusDisplay.textContent = 'Rich 😎 kinda';
        statusDisplay.style.color = 'yellow';
        multiplier = 10;
    } else if (points >= 500) {
        statusDisplay.textContent = 'Average Joe';
        statusDisplay.style.color = 'green';
        multiplier = 5;
    } else if (points >= 100) {
        statusDisplay.textContent = 'BROKE :(';
        statusDisplay.style.color = 'brown';
        multiplier = 2;
    } else {
        statusDisplay.textContent = 'BROKE :(';
        statusDisplay.style.color = 'brown';
        multiplier = 1;
    }

    multiplierDisplay.textContent = `Multiplier: x${multiplier}`;
}

// Add a secret input to manually add money
addMoneyBtn.addEventListener('click', () => {
    let amount = parseInt(secretInput.value);
    if (!isNaN(amount)) {
        points += amount;
        updateStatus();
    }
});

// Toggle the secret input using the button (mobile-friendly)
toggleSecretBtn.addEventListener('click', () => {
    secretInput.classList.toggle('hidden');
    addMoneyBtn.classList.toggle('hidden');
});
