const questions = [
    {
        question: "Kurš uzņēmums ražo modeli 'Civic'?",
        options: ["Toyota", "Honda", "Nissan", "Mitsubishi"],
        answer: "Honda"
    },
    {
        question: "Kurš uzņēmums ražo modeli 'Golf'?",
        options: ["Volkswagen", "Ford", "BMW", "Audi"],
        answer: "Volkswagen"
    },
    {
        question: "Kurš uzņēmums ražo modeli '911'?",
        options: ["Ferrari", "Porsche", "Lamborghini", "Bugatti"],
        answer: "Porsche"
    },
    {
        question: "Kurš uzņēmums ražo modeli 'Camaro'?",
        options: ["Chevrolet", "Ford", "Dodge", "Buick"],
        answer: "Chevrolet"
    },
    {
        question: "Kurš uzņēmums ražo modeli 'Accord'?",
        options: ["Honda", "Toyota", "Nissan", "Mazda"],
        answer: "Honda"
    },
    {
        question: "Kurš uzņēmums ražo modeli 'Mustang'?",
        options: ["Ford", "Chevrolet", "Dodge", "Buick"],
        answer: "Ford"
    },
    {
        question: "Kurš uzņēmums ražo modeli 'A4'?",
        options: ["Audi", "BMW", "Mercedes-Benz", "Volkswagen"],
        answer: "Audi"
    },
    {
        question: "Kurš uzņēmums ražo modeli 'Wrangler'?",
        options: ["Jeep", "Chevrolet", "Ford", "Toyota"],
        answer: "Jeep"
    },
    {
        question: "Kurš uzņēmums ražo modeli '911 Turbo S'?",
        options: ["Porsche", "Ferrari", "Lamborghini", "Aston Martin"],
        answer: "Porsche"
    },
    {
        question: "Kurš uzņēmums ražo modeli 'Corolla'?",
        options: ["Toyota", "Honda", "Nissan", "Mitsubishi"],
        answer: "Toyota"
    }
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
        <h2>Jautājums ${currentQuestionIndex + 1} / ${questions.length}</h2>
        <p>${question.question}</p>
        ${question.options.map((option, index) => `
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
        <p>Viktorīna pabeigta!</p>
        <p>Jūsu rezultāts: ${score} / ${questions.length}</p>
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
