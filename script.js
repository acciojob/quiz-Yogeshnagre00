//your JS code here. If required.
// Data for the questions
const questions = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  }
];

// Initialize variables
let currentQuestion = 0;
let score = 0;

// Get DOM elements
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");
const questionEl = document.getElementById("question");
const aText = document.getElementById("a_text");
const bText = document.getElementById("b_text");
const cText = document.getElementById("c_text");
const dText = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");
const scoreEl = document.getElementById("score");

// Function to show current question
function showQuestion() {
  const currentQ = questions[currentQuestion];
  questionEl.textContent = currentQ.question;
  aText.textContent = currentQ.a;
  bText.textContent = currentQ.b;
  cText.textContent = currentQ.c;
  dText.textContent = currentQ.d;
}

// Function to reset the quiz
function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  showQuestion();
  quiz.classList.remove("hidden");
  result.classList.add("hidden");
}

// Event listener for submit button
submitBtn.addEventListener("click", () => {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) {
    alert("Please select an option.");
    return;
  }
  const answer = selected.value;
  if (answer === questions[currentQuestion].correct) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    console.log("score:", score);
    scoreEl.textContent = score;
    console.log("scoreEl:", scoreEl);
    quiz.classList.add("hidden");
    result.classList.remove("hidden");
    console.log("quiz:", quiz);
    console.log("result:", result);
  }
});


// Event listener for reset button
resetBtn.addEventListener("click", resetQuiz);

// Show first question
showQuestion();