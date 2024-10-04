const questions = [
    {
        question: "What is my favorite color?",
        options: ["Red", "Blue", "Green"],
        answer: "Blue"
    },
    {
        question: "What is your favorite food?",
        options: ["Pizza", "Sushi", "Ice Cream"],
        answer: "Ice Cream"
    },
    {
        question: "Whos your favorite ex?",
        options: ["Rea GIn..", "Rea Gabani"],
        answer: "Rea Gabani"
    },
    {
        question: "Whats your best memories with me?",
        options: ["maglagaw", "magkaon", "magtulog"],
        answer: "magtulog"
    },
    {
        question: "Crush moko?",
        options: ["OO", "Yes", "Medyo"],
        answer: "Yes"
    }
];

let currentQuestion = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.querySelector(".options");
    optionsElement.innerHTML = ""; // Clear previous options
    questionElement.innerText = questions[currentQuestion].question;

    questions[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => nextQuestion(index);
        optionsElement.appendChild(button);
    });
}

function nextQuestion(selectedIndex) {
    if (currentQuestion < questions.length) {
        const result = document.getElementById("result");
        if (questions[currentQuestion].options[selectedIndex] === questions[currentQuestion].answer) {
            result.innerText = "Correct! VeryGood Gingging!";
        } else {
            result.innerText = "Oops! That's not quite right.";
        }
        result.classList.remove("hidden");

        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            result.innerText += "\nThanks for playing!";
        }
    }
}

window.onload = loadQuestion;
