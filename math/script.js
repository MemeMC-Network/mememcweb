// Question sets for each grade level
const grade7Questions = [
    { question: "5 + 3", answer: 8 },
    { question: "12 - 4", answer: 8 },
    { question: "7 * 2", answer: 14 },
    { question: "50 / 5", answer: 10 },
    { question: "100 - 37", answer: 63 },
    { question: "36 / 6", answer: 6 },
    { question: "45 + 20", answer: 65 },
    { question: "90 - 50", answer: 40 },
    { question: "9 * 7", answer: 63 },
    { question: "72 / 8", answer: 9 },
];

const grade8Questions = [
    { question: "3x = 15; Solve for x", answer: 5 },
    { question: "x / 4 = 6; Solve for x", answer: 24 },
    { question: "8 * 7", answer: 56 },
    { question: "121 / 11", answer: 11 },
    { question: "72 / 9", answer: 8 },
    { question: "81 + 19", answer: 100 },
    { question: "50 * 2", answer: 100 },
    { question: "35 + 45", answer: 80 },
    { question: "63 / 9", answer: 7 },
    { question: "100 - 58", answer: 42 },
];

const grade9Questions = [
    { question: "Solve 5x + 3 = 23", answer: 4 },
    { question: "x^2 = 49; Solve for x", answer: 7 },
    { question: "12x = 96; Solve for x", answer: 8 },
    { question: "45 + 32", answer: 77 },
    { question: "18 * 3", answer: 54 },
    { question: "72 - 50", answer: 22 },
    { question: "21 * 5", answer: 105 },
    { question: "81 / 9", answer: 9 },
    { question: "88 + 12", answer: 100 },
    { question: "56 / 7", answer: 8 },
];

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeRemaining = 60;

const homeScreen = document.getElementById('home-screen');
const quizScreen = document.getElementById('quiz-screen');
const grade7CardHome = document.getElementById('home-grade-7');
const grade8CardHome = document.getElementById('home-grade-8');
const grade9CardHome = document.getElementById('home-grade-9');
const grade7CardModal = document.getElementById('grade-7');
const grade8CardModal = document.getElementById('grade-8');
const grade9CardModal = document.getElementById('grade-9');
const questionText = document.getElementById('question-text');
const userAnswerInput = document.getElementById('user-answer');
const submitButton = document.getElementById('submit-button');
const feedbackText = document.getElementById('feedback');
const progressBar = document.getElementById('progress-bar');
const restartLink = document.getElementById('restart-link');
const selectGradeButton = document.getElementById('select-grade');
const gradeSelectionModal = document.getElementById('grade-selection-modal');
const timerDisplay = document.getElementById('timer');

// Function to start the timer
function startTimer() {
    timer = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            timerDisplay.textContent = `Time Left: ${timeRemaining}`;
        } else {
            clearInterval(timer);
            feedbackText.textContent = "Time's up!";
        }
    }, 1000);
}

// Load questions and start quiz
function loadQuestions(questions) {
    currentQuestions = questions;
    currentQuestionIndex = 0;
    score = 0;
    timeRemaining = 60;
    quizScreen.style.display = 'flex';
    homeScreen.style.display = 'none';
    loadQuestion();
    startTimer();
}

// Load a single question
function loadQuestion() {
    const currentQuestion = currentQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    feedbackText.textContent = '';
    progressBar.style.width = `${(currentQuestionIndex + 1) / currentQuestions.length * 100}%`;
    document.getElementById('current-question-number').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = currentQuestions.length;
}

// Handle answer submission
function submitAnswer() {
    const currentQuestion = currentQuestions[currentQuestionIndex];
    const userAnswer = parseFloat(userAnswerInput.value);

    if (userAnswer === currentQuestion.answer) {
        feedbackText.textContent = "Correct!";
        score++;
    } else {
        feedbackText.textContent = `Incorrect! The right answer is ${currentQuestion.answer}`;
    }

    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        clearInterval(timer);
        feedbackText.textContent = `Quiz Complete! Your Score: ${score}`;
    }
}

// Event listeners
grade7CardHome.addEventListener('click', () => loadQuestions(grade7Questions));
grade8CardHome.addEventListener('click', () => loadQuestions(grade8Questions));
grade9CardHome.addEventListener('click', () => loadQuestions(grade9Questions));

grade7CardModal.addEventListener('click', () => loadQuestions(grade7Questions));
grade8CardModal.addEventListener('click', () => loadQuestions(grade8Questions));
grade9CardModal.addEventListener('click', () => loadQuestions(grade9Questions));

restartLink.addEventListener('click', () => {
    quizScreen.style.display = 'none';
    homeScreen.style.display = 'flex';
    clearInterval(timer);
});

selectGradeButton.addEventListener('click', () => {
    gradeSelectionModal.classList.add('active');
});

document.getElementById('home-screen').style.display = 'flex';

// Submit answer on Enter key press
userAnswerInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        submitAnswer();
    }
});

submitButton.addEventListener('click', submitAnswer);
