const riddles = [
    {
        question: "Se mira pero no se toca. ¿Qué es?",
        answer: "espejo"
    },
    {
        question: "Blanco por dentro, verde por fuera. Si quieres que te lo diga, espera. ¿Qué es?",
        answer: "pera"
    },
    {
        question: "¿Qué tiene llaves pero no abre puertas?",
        answer: "piano"
    },
]

let currentRiddle;
let correctAnswer = 0;
let wrongAnswer = 0;
let remainingRiddles = [];

function shuffleRiddles() {
    remainingRiddles = [...riddles].sort(() => Math.random() - 0.5);
}

function loadNewRidde() {
    if (remainingRiddles.length === 0) {
        showCompletionModal();
        return;
    }
    currentRiddle = remainingRiddles.pop();
    document.getElementById("riddle").innerText = currentRiddle.question;
    document.getElementById("answer-input").value = "";
    document.getElementById("result").innerText = "";
}

function showCompletionModal() {
    document.getElementById("modal-correct").innerText = correctAnswer;
    document.getElementById("modal-wrong").innerText = wrongAnswer;
    document.getElementById("completion-modal").classList.add("show");
}

function closeModal() {
    document.getElementById("completion-modal").classList.remove("show");
    // Reset game
    correctAnswer = 0;
    wrongAnswer = 0;
    document.getElementById("correctCount").innerText = 0;
    document.getElementById("wrongCount").innerText = 0;
    document.getElementById("result").innerText = "";
    shuffleRiddles();
    loadNewRidde();
}

document.addEventListener("DOMContentLoaded", () => {
    shuffleRiddles();
    loadNewRidde();
});

function checkAnswer() {
    const userAnswer = document.getElementById("answer-input").value.trim().toLowerCase();

    if (!userAnswer) return;

    if (userAnswer === currentRiddle.answer) {
        document.getElementById('result').innerText = '¡Correcto! 🎉';
        document.getElementById('result').style.color = 'green';
        correctAnswer++;
        document.getElementById("correctCount").innerText = correctAnswer;
        loadNewRidde();
    } else {
        document.getElementById("result").innerText = '¡Intentalo de nuevo! 🤔';
        document.getElementById('result').style.color = 'red';
        wrongAnswer++;
        document.getElementById("wrongCount").innerText = wrongAnswer;
    }
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") checkAnswer();
});
