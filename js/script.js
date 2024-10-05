// Homepage code validation
function checkCode() {
    const inputCode = document.getElementById('codeInput').value;
    if (inputCode === 'NZXT76') {
        alert('Correct!');
        window.location.href = 'riddle/riddle-game.html';
        // Proceed to the next page or show something else
    } else if (inputCode === '22') {
        window.location.href = 'elon-sigma.html';
    } else {
        alert('Incorrect code. Try again.');
    }
}

// Riddle generator
const riddles = [
    "Uwu ヾ(•ω•`)o",
    "Fun Fact: Haha",
    "Was that an earthquake? OR did chaseOh jump?",
    "lorem",
    "Jaaaauuu",
    "Elon Musk Is SIGMA",
    "Fun Fact: Did you know that spiders fly no kidding search it up",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, molestias nemo optio a consequatur at aut perspiciatis odio pariatur neque et corrupti, temporibus perferendis est? Obcaecati optio aliquam omnis saepe?",
    "The ROOOOCK",
    "\(@^0^@)/",
    "Arturinos",
    "22",
    "Free ROBUUUUUUUUUUUUUUX here kids!",
    "How to get candies for FREE? Jump in a van that says FREE CANDIES. Call us at xxxx-xxxx-xxxx",
    // Add more riddles up to 20
];

function generateRiddle() {
    const randomIndex = Math.floor(Math.random() * riddles.length);
    document.getElementById('riddleText').textContent = riddles[randomIndex];
}

// GitHub URL validation
function checkGitHub() {
    const githubInput = document.getElementById('githubInput').value;
    if (githubInput === 'https://github.com/UnknownDevPro' || githubInput === 'github.com/UnknownDevPro') {
        alert('Correct! You solved the puzzle. The code is NZXT76');
        // Redirect or display success
    } else {
        alert('Incorrect GitHub URL. Try again.');
    }
}
