// Array of riddles with answers
const riddles = [
    { riddle: "What has keys but can’t open locks?", answer: "piano", hint: "Something with music" },
    
];

// Choose a random riddle
let currentRiddle = riddles[Math.floor(Math.random() * riddles.length)];

// Display the riddle
document.getElementById('riddle').textContent = currentRiddle.riddle;

// Function to check the answer
function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const feedback = document.getElementById('feedback');

    if (userAnswer === currentRiddle.answer.toLowerCase()) {
        feedback.textContent = "Correct! Well done!";
        feedback.style.color = 'green';
        window.location.href = 'riddle-game1.html';
    } else {
        feedback.textContent = "Wrong answer. Try again!";
        feedback.style.color = 'red';
    }
}
function showHint() {
    alert(currentRiddle.hint); // Show hint using alert
}