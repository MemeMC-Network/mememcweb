const grade7Questions = [
    { question: "5 + 3", answer: 8 },
    { question: "12 - 4", answer: 8 },
    { question: "7 * 2", answer: 14 },
    { question: "50 / 5", answer: 10 },
    { question: "100 - 37", answer: 63 },
];

const grade8Questions = [
    { question: "3x = 15; Solve for x", answer: 5 },
    { question: "x / 4 = 6; Solve for x", answer: 24 },
    { question: "8 * 7", answer: 56 },
    { question: "121 / 11", answer: 11 },
    { question: "72 / 9", answer: 8 },
];

const grade9Questions = [
    { question: "x^2 = 64; Solve for x", answer: 8 },
    { question: "4x - 8 = 16; Solve for x", answer: 6 },
    { question: "x^2 - 4 = 0; Solve for x", answer: 2 },
    { question: "5x = 45; Solve for x", answer: 9 },
    { question: "3x + 12 = 21; Solve for x", answer: 3 },
];

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

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

function loadQuestions(questions) {
    currentQuestions = questions;
    currentQuestionIndex = 0;
    score = 0;
    quizScreen.style.display = 'flex';
    homeScreen.style.display = 'none';
    loadQuestion();
}

function loadQuestion() {
    const currentQuestion = currentQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    feedbackText.textContent = '';
    progressBar.style.width = `${(currentQuestionIndex + 1) / currentQuestions.length * 100}%`;
    document.getElementById('current-question-number').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = currentQuestions.length;
}

grade7CardHome.addEventListener('click', () => loadQuestions(grade7Questions));
grade8CardHome.addEventListener('click', () => loadQuestions(grade8Questions));
grade9CardHome.addEventListener('click', () => loadQuestions(grade9Questions));

grade7CardModal.addEventListener('click', () => loadQuestions(grade7Questions));
grade8CardModal.addEventListener('click', () => loadQuestions(grade8Questions));
grade9CardModal.addEventListener('click', () => loadQuestions(grade9Questions));

restartLink.addEventListener('click', () => {
    quizScreen.style.display = 'none';
    homeScreen.style.display = 'flex';
});

selectGradeButton.addEventListener('click', () => {
    gradeSelectionModal.classList.add('active');
});

document.getElementById('home-screen').style.display = 'flex';
