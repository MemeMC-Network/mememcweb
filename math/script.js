// Define skills for each grade
const gradeSkills = {
    1: ["Addition", "Subtraction"],
    2: ["Multiplication", "Division"],
    3: ["Fractions", "Decimals"],
    4: ["Geometry", "Word Problems"],
    5: ["Data Analysis", "Algebra Basics"],
    6: ["Ratios", "Exponents"],
    7: ["Proportions", "Probability"],
    8: ["Linear Equations", "Functions"],
    9: ["Quadratic Equations", "Polynomials"],
};

// Define questions for each skill
const skillQuestions = {
    "Addition": [
        { question: "5 + 3 =", answer: "8" },
        { question: "12 + 7 =", answer: "19" },
        { question: "9 + 6 =", answer: "15" },
    ],
    "Subtraction": [
        { question: "10 - 4 =", answer: "6" },
        { question: "15 - 9 =", answer: "6" },
        { question: "8 - 3 =", answer: "5" },
    ],
    "Multiplication": [
        { question: "3 × 4 =", answer: "12" },
        { question: "6 × 7 =", answer: "42" },
        { question: "9 × 5 =", answer: "45" },
    ],
    "Division": [
        { question: "12 ÷ 4 =", answer: "3" },
        { question: "18 ÷ 3 =", answer: "6" },
        { question: "20 ÷ 5 =", answer: "4" },
    ],
    "Algebra Basics": [
        { question: "Solve for x: 2x + 3 = 11", answer: "4" },
        { question: "Solve for y: 3y - 6 = 9", answer: "5" },
    ],
};

// Screen elements
const homeScreen = document.getElementById("home-screen");
const skillsScreen = document.getElementById("skills-screen");
const quizScreen = document.getElementById("quiz-screen");
const skillsList = document.getElementById("skills-list");
const questionText = document.getElementById("question-text");
const userAnswer = document.getElementById("user-answer");
const feedback = document.getElementById("feedback");
const submitButton = document.getElementById("submit-button");
const progressBar = document.getElementById("progress-bar");
const backToHomeButton = document.getElementById("back-to-home");

let currentSkill = "";
let currentQuestionIndex = 0;
let correctAnswers = 0;

// Handle grade selection
document.querySelectorAll(".grade-button").forEach(button => {
    button.addEventListener("click", () => {
        const grade = button.dataset.grade;
        loadSkills(grade);
    });
});

// Load skills for selected grade
function loadSkills(grade) {
    homeScreen.classList.add("hidden");
    skillsScreen.classList.remove("hidden");
    skillsList.innerHTML = "";
    gradeSkills[grade].forEach(skill => {
        const skillButton = document.createElement("button");
        skillButton.textContent = skill;
        skillButton.className = "action-button";
        skillButton.addEventListener("click", () => startQuiz(skill));
        skillsList.appendChild(skillButton);
    });
}

// Start quiz for selected skill
function startQuiz(skill) {
    currentSkill = skill;
    currentQuestionIndex = 0;
    correctAnswers = 0;
    skillsScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    showQuestion();
}

// Display current question
function showQuestion() {
    const questions = skillQuestions[currentSkill];
    if (currentQuestionIndex < questions.length) {
        questionText.textContent = questions[currentQuestionIndex].question;
        userAnswer.value = "";
        feedback.textContent = "";
    } else {
        showResults();
    }
}

// Handle answer submission
submitButton.addEventListener("click", checkAnswer);
userAnswer.addEventListener("keypress", (e) => {
    if (e.key === "Enter") checkAnswer();
});

// Check if the user's answer is correct
function checkAnswer() {
    const userResponse = userAnswer.value.trim();
    const correctAnswer = skillQuestions[currentSkill][currentQuestionIndex].answer;
    if (userResponse === correctAnswer) {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
        correctAnswers++;
    } else {
        feedback.textContent = `Incorrect! The correct answer is ${correctAnswer}.`;
        feedback.style.color = "red";
    }
    updateProgress();
    currentQuestionIndex++;
    setTimeout(showQuestion, 1000);
}

// Update progress bar based on correct answers
function updateProgress() {
    const totalQuestions = skillQuestions[currentSkill].length;
    const progress = (correctAnswers / totalQuestions) * 100;
    progressBar.style.width = `${progress}%`;
}

// Show quiz results
function showResults() {
    quizScreen.classList.add("hidden");
    alert(`Quiz complete! You got ${correctAnswers} out of ${skillQuestions[currentSkill].length} correct.`);
    backToHome();
}

// Return to home screen
backToHomeButton.addEventListener("click", backToHome);

function backToHome() {
    skillsScreen.classList.add("hidden");
    quizScreen.classList.add("hidden");
    homeScreen.classList.remove("hidden");
    progressBar.style.width = "0";
}
