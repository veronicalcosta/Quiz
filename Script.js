const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
        correct: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Venus", "Jupiter"],
        correct: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: ["Atlantic", "Indian", "Pacific", "Arctic"],
        correct: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    const answerButtons = document.querySelectorAll(".answer-btn");
    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index];
    });
    document.getElementById("result-box").style.display = "none";
    document.getElementById("answers-list").style.display = "block";
}

function selectAnswer(index) {
    const currentQuestion = questions[currentQuestionIndex];
    if (index === currentQuestion.correct) {
        document.getElementById("result-message").textContent = "Correct!";
        score++;
    } else {
        document.getElementById("result-message").textContent = "Incorrect!";
    }
    document.getElementById("result-box").style.display = "block";
    document.getElementById("answers-list").style.display = "none";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-box").innerHTML = `<h2>Quiz Completed!</h2>
            <p>Your score: ${score} out of ${questions.length}</p>
            <button onclick="restartQuiz()">Restart Quiz</button>`;
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
}

loadQuestion();
