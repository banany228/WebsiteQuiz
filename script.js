const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Jupiter"
    },
    // Add more questions here
];

let currentQuestionIndex = 0;
let score = 0;
let quizContainer = document.getElementById('quiz');
let resultContainer = document.getElementById('result');
let nextButton = document.getElementById('next-button');
let restartButton = document.getElementById('restart-button');

function loadQuestion() {
    let question = questions[currentQuestionIndex];
    quizContainer.innerHTML = `
        <h2>Question ${currentQuestionIndex + 1} / ${questions.length}</h2>
        <p>${question.question}</p>
        ${question.options.map(option => `
            <button class="option" onclick="selectAnswer('${option}')">${option}</button>
        `).join('')}
    `;
}

function selectAnswer(selectedOption) {
    let question = questions[currentQuestionIndex];
    if (selectedOption === question.answer) {
        score++;
    }
    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        nextButton.style.display = 'none';
    } else {
        showResult();
    }
}

function showResult() {
    quizContainer.style.display = 'none';
    nextButton.style.display = 'none';
    resultContainer.innerHTML = `
        <p>Quiz finished!</p>
        <p>Your score: ${score} / ${questions.length}</p>
    `;
    restartButton.style.display = 'block';
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.style.display = 'block';
    resultContainer.innerHTML = '';
    restartButton.style.display = 'none';
    loadQuestion();
}

loadQuestion();
nextButton.style.display = 'none';
restartButton.style.display = 'none';
