// Question sets for different grade levels
const grade7Questions = [
    { question: "5 + 3", answer: 8 },
    { question: "12 - 4", answer: 8 },
    { question: "7 * 2", answer: 14 },
    { question: "36 / 6", answer: 6 },
    { question: "15 + 20", answer: 35 },
];

const grade8Questions = [
    { question: "2x = 10; Solve for x", answer: 5 },
    { question: "x / 4 = 5; Solve for x", answer: 20 },
    { question: "8 * 7", answer: 56 },
    { question: "100 - 37", answer: 63 },
    { question: "81 / 9", answer: 9 },
];

const grade9Questions = [
    { question: "x^2 = 49; Solve for x", answer: 7 },
    { question: "3x + 5 = 20; Solve for x", answer: 5 },
    { question: "5x - 15 = 10; Solve for x", answer: 5 },
    { question: "x^2 - 4 = 0; Solve for x", answer: 2 },
    { question: "4x = 32; Solve for x", answer: 8 },
];

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById('question-text');
const userAnswerInput = document.getElementById('user-answer');
const submitButton = document.getElementById('submit-button');
const feedbackText = document.getElementById('feedback');
const currentQuestionNumber = document.getElementById('current-question-number');
const totalQuestions = document.getElementById('total-questions');
const progressBar = document.getElementById('progress-bar');
const restartLink = document.getElementById('restart-link');
const grade7Link = document.getElementById('grade-7-link');
const grade8Link = document.getElementById('grade-8-link');
const grade9Link = document.getElementById('grade-9-link');

function loadGradeQuestions(questions) {
    currentQuestions = questions;
    currentQuestionIndex = 0;
    score = 0;
    totalQuestions.textContent = currentQuestions.length;
    submitButton.classList.remove('hidden');
    userAnswerInput.classList.remove('hidden');
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex < currentQuestions.length) {
        const currentQuestion = currentQuestions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        currentQuestionNumber.textContent = currentQuestionIndex + 1;
        userAnswerInput.value = '';
        feedbackText.textContent = '';
        updateProgressBar();
    } else {
        questionText.textContent = `Quiz complete! Your score: ${score} / ${currentQuestions.length}`;
        submitButton.classList.add('hidden');
        userAnswerInput.classList.add('hidden');
    }
}

function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function submitAnswer() {
    const userAnswer = Number(userAnswerInput.value);
    const correctAnswer = currentQuestions[currentQuestionIndex].answer;

    if (userAnswer === correctAnswer) {
        feedbackText.textContent = 'Correct!';
        score++;
    } else {
        feedbackText.textContent = `Incorrect. The correct answer was ${correctAnswer}.`;
    }

    currentQuestionIndex++;
    setTimeout(loadQuestion, 1000);
}

submitButton.addEventListener('click', submitAnswer);

userAnswerInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        submitAnswer();
    }
});

restartLink.addEventListener('click', () => loadGradeQuestions(currentQuestions));
grade7Link.addEventListener('click', () => loadGradeQuestions(grade7Questions));
grade8Link.addEventListener('click', () => loadGradeQuestions(grade8Questions));
grade9Link.addEventListener('click', () => loadGradeQuestions(grade9Questions));

// Load 7th grade questions by default
loadGradeQuestions(grade7Questions);
