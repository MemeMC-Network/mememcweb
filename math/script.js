// Extended question set with easy, medium, and difficult questions
const questions = [
    { question: "5 + 3", answer: 8 },
    { question: "12 - 4", answer: 8 },
    { question: "7 * 3", answer: 21 },
    { question: "18 / 2", answer: 9 },
    { question: "20 - 5", answer: 15 },
    { question: "50 / 10", answer: 5 },
    { question: "6 * 6", answer: 36 },
    { question: "100 - 45", answer: 55 },
    { question: "9 * 8", answer: 72 },
    { question: "81 / 9", answer: 9 },
    { question: "x + 5 = 10; Solve for x", answer: 5 },
    { question: "2x = 14; Solve for x", answer: 7 },
    { question: "x / 3 = 7; Solve for x", answer: 21 },
    { question: "4x = 40; Solve for x", answer: 10 },
    { question: "x - 12 = 8; Solve for x", answer: 20 },
    { question: "3x + 2 = 17; Solve for x", answer: 5 },
    { question: "5x - 10 = 20; Solve for x", answer: 6 },
    { question: "7x = 49; Solve for x", answer: 7 },
    { question: "8x + 4 = 36; Solve for x", answer: 4 },
    { question: "x^2 = 16; Solve for x", answer: 4 },
];

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

totalQuestions.textContent = questions.length;

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        currentQuestionNumber.textContent = currentQuestionIndex + 1;
        userAnswerInput.value = '';
        feedbackText.textContent = '';
        updateProgressBar();
    } else {
        questionText.textContent = `Quiz complete! Your score: ${score} / ${questions.length}`;
        submitButton.classList.add('hidden');
        userAnswerInput.classList.add('hidden');
    }
}

function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

submitButton.addEventListener('click', () => {
    const userAnswer = Number(userAnswerInput.value);
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer === correctAnswer) {
        feedbackText.textContent = 'Correct!';
        feedbackText.style.color = '#00f5d4';
        score++;
    } else {
        feedbackText.textContent = `Incorrect. The correct answer was ${correctAnswer}.`;
        feedbackText.style.color = '#ff006e';
    }

    currentQuestionIndex++;
    setTimeout(loadQuestion, 1000);
});

restartLink.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    submitButton.classList.remove('hidden');
    userAnswerInput.classList.remove('hidden');
    loadQuestion();
});

loadQuestion();
