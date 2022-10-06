
var timerEl = document.getElementById("quiz-timer");
var timeLeft = document.getElementById("time-Left");
var timesUp = document.getElementById("quiz-over");
var highScore= document.getElementById("view-high-score");
var quizInfo = document.getElementById("quiz-directions");


//quiz object containing questions, answers and correct answer
const quiz = [
 {
   question: "Commonly used data types Do Not Include:",
   choice1: "<string>",
   choice2: "<booleans>", 
   choice3: "<alerts>",
   choice4: "<numbers>",
   answer: 3
 },
 {
   question: "Arrays in Javascript can be used to store:",
   choice1: "<numbers and strings>",
   choice2: "<other arrays>", 
   choice3: "<booleans>", 
   choice4: "<all of the above>",
   answer: 4
 }, 
 {
   question: "A very useful/tool during debugging for printer content to the debugger is:",
   choice1: "<Javascript>",
   choice2: "<console log>",
   choice3: "<for loops>",    
   choice4: "<terminal bash>",
  answer: 4
 },
 {
   question: "String values must be enclosed with ______ when being assigned to variables.",    
   choice1: "<commas>", 
   choice2: "<curly brackets>", 
   choice3: "<quotes>", 
   choice4: "<parenthesis>",
   answer: 3
 },
 {
   question: "The condition in an if/else statement is enclosed with ______.",
   choice1: "<parenthesis>",
   choice2: "<curly brackets>", 
   choices3: "<quotes>", 
   choice4: "<square brackets>",
   answer: 1
 }
];

//links to elements in question container
var questionContainer = document.getElementById("question-container");




var choice1 = document.getElementById("btn-0");
var choice2 = document.getElementById("btn-1");
var choice3 = document.getElementById("btn-2");
var choice4 = document.getElementById("btn-3");

const question= document.getElementById("question");
//html collection converted to an array with datasets with custom properties
const choices = Array.from(document.getElementsByClassName("choice-text"));
var checkAnswer = document.getElementById("check-answer");

//links to elements in results section
var  resultsContainer= document.getElementById("results-section");
var  userScore = document.getElementById("user-score");
var  initialInput = document.getElementById("initial-input");
var  userInitials = document.getElementById("btn-user-initials");
var  highscoreContainer = document.getElementById("highscore-container");
var  highscoreList = document.getElementById("highscore-list");
var  backBtn = document.getElementById("btn-button");
var  clearScoresBtn = document.getElementById("btn-clear-scores");

var quizIndex = 4;
console.log(quiz[quizIndex].question);
console.log(quiz[quizIndex].answers[3]);
let currentQuestion = {};

const question= document.getElementById("question");
//html collection converted to an array with datasets with custom properties
const choices = Array.from(document.getElementsByClassName("choice-text"));
var checkAnswer = document.getElementById("check-answer");


getNewQuestion = () => {
    questionCounter++;
    currentQuestion = quiz[quizIndex];
    question.innerText = currentQuestion.question;
    choices.forEach( choice  => {
        const number = choice.dataset['number'];
        choice.innerText =currentQuestion['choice' + number];
    })
};

//function displayQuestion(quiz, quizIndex) {
//  questionContainer.style.display = "inline-block";
// question.textContent = quiz[quizIndex].question;
//  answerA.textContent = quiz[quizIndex].answers[0];
//  answerB.textContent = quiz[quizIndex].answers[1];
//  answerC.textContent = quiz[quizIndex].answers[2];
//  answerD.textContent = quiz[quizIndex].answers[3];
//}

console.log("answerD");


// Timer that counts 
function countdown() {
 var timeLeft =20;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
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



function startQuiz(quiz, quizIndex) {
   quizInfo.style.display = "none";
   countdown();
   displayQuestion(quiz,quizIndex);
}
document.getElementById("start-btn").onclick = function() {startQuiz(quiz,quizIndex)};


function displayMessage() {
  var questionCount = 1;
 
  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are questions left in the message
    if (quiz[questionCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
     displayQuestion(quiz, questionCount);
     questionCount++;
    }
  }, 10000);
}
 displayMessage();