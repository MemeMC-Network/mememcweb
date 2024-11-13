// Question data
const grade7Questions = [
    { question: "7 + 3", answer: 10 },
    { question: "12 - 4", answer: 8 },
    { question: "5 × 6", answer: 30 },
    { question: "9 ÷ 3", answer: 3 },
    // Add more questions for 7th grade
];

const grade8Questions = [
    { question: "14 × 5", answer: 70 },
    { question: "16 ÷ 4", answer: 4 },
    { question: "25 + 19", answer: 44 },
    { question: "81 ÷ 9", answer: 9 },
    // Add more questions for 8th grade
];

const grade9Questions = [
    { question: "2x + 3 = 11, find x", answer: 4 },
    { question: "3x - 5 = 10, find x", answer: 5 },
    { question: "(x + 4)² = 81, find x", answer: 5 },
    { question: "12 ÷ (3 + 1)", answer: 3 },
    // Add more questions for 9th grade
];

let currentGradeQuestions = [];
let currentQuestionIndex = 0;
let totalQuestions = 0;
let timeLeft = 60; // Timer value

const selectGradeButton = document.getElementById("select-grade");
const gradeSelectionModal = document.getElementById("grade-selection-modal");
const restartLink = document.getElementById("restart-link");

const questionText = document.getElementById("question-text");
const userAnswer = document.getElementById("user-answer");
const submitButton = document.getElementById("submit-button");
const feedback = document.getElementById("feedback");
const progressBar = document.getElementById("progress-bar");
const progressBarContainer = document.getElementById("progress-bar-container");
const currentQuestionNumber = document.getElementById("current-question-number");
const totalQuestionsElement = document.getElementById("total-questions");
const timer = document.getElementById("timer");

const homeScreen = document.getElementById("home-screen");
const quizScreen = document.getElementById("quiz-screen");

// Function to load the selected grade's questions
function loadQuestions(questions) {
    currentGradeQuestions = questions;
    currentQuestionIndex = 0;
    totalQuestions = questions.length;
    homeScreen.style.display = "none";
    quizScreen.style.display = "block";
    totalQuestionsElement.textContent = totalQuestions;
    loadQuestion();
    startTimer();
}

// Load the current question
function loadQuestion() {
    if (currentQuestionIndex < totalQuestions) {
        const currentQuestion = currentGradeQuestions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        currentQuestionNumber.textContent = currentQuestionIndex + 1;
        feedback.textContent = "";
        userAnswer.value = "";
        updateProgressBar();
    } else {
        finishQuiz();
    }
}

// Update the progress bar
function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    progressBar.style.width = progress + "%";
}

// Timer function
function startTimer() {
    const timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timer.textContent = `Time Left: ${timeLeft}`;
        } else {
            clearInterval(timerInterval);
            finishQuiz();
        }
    }, 1000);
}

// Submit the answer
function submitAnswer() {
    const currentQuestion = currentGradeQuestions[currentQuestionIndex];
    const userAnswerValue = parseInt(userAnswer.value);
    if (userAnswerValue === currentQuestion.answer) {
        feedback.textContent = "Correct!";
        feedback.style.color = "#00f5d4";
    } else {
        feedback.textContent = `Incorrect. The correct answer is ${currentQuestion.answer}`;
        feedback.style.color = "#ff6f61";
    }
    currentQuestionIndex++;
    setTimeout(loadQuestion, 1500); // Load next question after a short delay
}

// Finish the quiz
function finishQuiz() {
    questionText.textContent = "Quiz Completed!";
    feedback.textContent = `Your score: ${currentQuestionIndex} out of ${totalQuestions}`;
    submitButton.disabled = true; // Disable the submit button after quiz completion
}

// Restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    timeLeft = 60;
    feedback.textContent = "";
    submitButton.disabled = false;
    loadQuestion();
}

// Event Listeners

// Select grade button behavior
selectGradeButton.addEventListener("click", () => {
    gradeSelectionModal.classList.toggle("active");
});

// Close the grade selection modal if any grade is clicked
document.querySelectorAll(".grade-card").forEach((card) => {
    card.addEventListener("click", (e) => {
        const grade = e.target.id;
        if (grade === "grade-7") loadQuestions(grade7Questions);
        if (grade === "grade-8") loadQuestions(grade8Questions);
        if (grade === "grade-9") loadQuestions(grade9Questions);
        gradeSelectionModal.classList.remove("active");
    });
});

// Close the modal when clicking outside
window.addEventListener("click", (e) => {
    if (e.target === gradeSelectionModal) {
        gradeSelectionModal.classList.remove("active");
    }
});

// Handle the submit button click
submitButton.addEventListener("click", submitAnswer);

// Allow users to press 'Enter' to submit their answer
userAnswer.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        submitAnswer();
    }
});

// Restart quiz behavior
restartLink.addEventListener("click", () => {
    homeScreen.style.display = "flex";
    quizScreen.style.display = "none";
    restartQuiz();
});

// Initially, show the home screen
homeScreen.style.display = "flex";
quizScreen.style.display = "none";
