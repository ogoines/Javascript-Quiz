
var timerEl = document.getElementById("quiz-timer");
var timeLeft = document.getElementById("time-Left");
var timesUp = document.getElementById("quiz-over");
var highScore = document.getElementById("view-high-score");
var quizInfo = document.getElementById("quiz-directions");
const quizLength = 5;
var timerInterval;
//quiz object containing questions, answers and correct answer
const quiz = [
  {
    question: "Commonly used data types Do Not Include:",
    choice1: "string",
    choice2: "booleans",
    choice3: "alerts",
    choice4: "numbers",
    answer: 3
  },
  {
    question: "Arrays in Javascript can be used to store:",
    choice1: "numbers and strings",
    choice2: "other arrays",
    choice3: "booleans",
    choice4: "all of the above",
    answer: 4
  },
  {
    question: "A very useful tool during debugging for printer content to the debugger is:",
    choice1: "Javascript",
    choice2: "console log",
    choice3: "for loops",
    choice4: "terminal bash",
    answer: 4
  },
  {
    question: "String values must be enclosed with ______ when being assigned to variables.",
    choice1: "commas",
    choice2: "curly brackets",
    choice3: "quotes",
    choice4: "parenthesis",
    answer: 3
  },
  {
    question: "The condition in an if/else statement is enclosed with ______.",
    choice1: "parenthesis",
    choice2: "curly brackets",
    choice3: "quotes",
    choice4: "square brackets",
    answer: 1
  }
];



//links to elements in results section
//var  resultsContainer= document.getElementById("results-section");
var userScore = document.getElementById("user-score");
var initialInput = document.getElementById("initial-input");
var userInitials = document.getElementById("user-initials");
var highscoreContainer = document.getElementById("highscore-container");
var highscoreList = document.getElementById("highscore-list");
var backBtn = document.getElementById("btn-button");
var clearScoresBtn = document.getElementById("btn-clear-scores");
var quizIndex = 0;
var numCorrect = 0;


//links to elements in question container
var questionContainer = document.getElementById("question-container");
const question = document.getElementById("question");
//html collection converted to an array with datasets with custom properties
const choices = Array.from(document.getElementsByClassName("choice-text"));
let questionCounter = 0;
let currentQuestion = {};
//var checkAnswer = document.getElementById("check-answer");
let questionsAvailable = [...quiz];
console.log(questionsAvailable);
let receivingAnswers = true;


startQuiz = () => {
  quizInfo.style.display = "none";
  countdown();
  getQuestions();
  //displayResults();
}

document.getElementById("start-btn").onclick =
  function () { startQuiz() };
timeLeft = 50;

//g ets Quiz
getQuestions = () => {
  if (questionCounter === quizLength) {
    //end of page
    displayResults()
  } else {
    questionCounter++;
    console.log(questionCounter);
    questionContainer.style.display = "inline-block";
    currentQuestion = questionsAvailable[quizIndex];
    question.innerText = currentQuestion.question;
    choices.forEach(choice => {
      const number = choice.dataset['number'];
      choice.innerText = currentQuestion['choice' + number];
    });
    questionsAvailable.splice(quizIndex, 1);
    receivingAnswers = true;
  }
}

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    const penalty = 10;
    if (!receivingAnswers) return;

    receivingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset['number'];
    let checkAnswer = document.getElementById("check-answer");
    //let lineBreak = document.getElementById("line-break");
    //lineBreak.style.display = "block";
    checkAnswer.style.display = "inline-block";

    if (selectedAnswer == currentQuestion.answer) {
      numCorrect++;
      checkAnswer.textContent = 'Correct!';
      userScore.textContent = numCorrect;
    } else {
      checkAnswer.textContent = 'Incorrect';
      timeLeft = timeLeft - penalty;
    }
    if (timeLeft > 0) {
      getQuestions();
    }
    else { }

  });

});



displayResults = () => {
  questionContainer.style.display = "none";
  let resultsContainer = document.getElementById("results-section");
  resultsContainer.style.display = "inline-block";
  clearInterval(timeInterval)
}


// Timer that counts 
function countdown() {
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';

      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = "Time's up!!!";
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
    }
  }, 1000);
}





