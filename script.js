
const riddles = [
    { question: "What has a face and two hands but no arms or legs?", answers: ["clock"] }, // Changed to lowercase
    { question: "What can you catch but not throw?", answers: ["cold"] }, // Changed to lowercase
    { question: "What is so fragile that saying its name breaks it?", answers: ["silence"] }, // Changed to lowercase
    { question: "What has cities but no houses, forests but no trees, and rivers but no water?", answers: ["map"] }, // Changed to lowercase
    { question: "What is always in front of you but can’t be seen?", answers: ["future"] }, // Changed to lowercase
    { question: "What has hands but can't clap?", answers: ["clock"] }, // Changed to lowercase
    { question: "What begins with T, ends with T, and has T in it?", answers: ["teapot"] }, // Changed to lowercase
    { question: "What can be broken but never held?", answers: ["promise"] }, // Changed to lowercase
    { question: "I’m light as a feather, yet the strongest person can’t hold me for 5 minutes. What am I?", answers: ["breath"] }, // Changed to lowercase
    { question: "What is the username of Nico?", answers: ["crigor24"] } // Changed to lowercase
];

let currentRiddle = 0;

const riddleText = document.getElementById("riddle-text");
const answerInput = document.getElementById("answer-input");
const submitButton = document.getElementById("submit-answer");
const feedback = document.getElementById("feedback");
const nextRiddleButton = document.getElementById("next-riddle");

function displayRiddle() {
    riddleText.textContent = riddles[currentRiddle].question;
    answerInput.value = "";
    feedback.textContent = "";
    nextRiddleButton.style.display = "none";
}

submitButton.addEventListener("click", () => {
    const userAnswer = answerInput.value.toLowerCase(); // Normalize user input
    const correctAnswers = riddles[currentRiddle].answers;

    if (correctAnswers.includes(userAnswer)) {
        feedback.textContent = "Correct! 🎉";
        nextRiddleButton.style.display = "block";
    } else {
        feedback.textContent = "Wrong! Try again.";
    }
});

nextRiddleButton.addEventListener("click", () => {
    currentRiddle++;
    if (currentRiddle < riddles.length) {
        displayRiddle();
    } else {
        // Redirect to another page when all riddles are completed
        window.location.href = "complete.html"; // Change to your desired URL
    }
});

// Initial display
displayRiddle();
