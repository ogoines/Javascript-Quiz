var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var choicesE1 = document.getElementsByClassName('answers');



const quizQuestions = [
  {question: "Commonly used data types Include:",
   answers:["1. strings", "2. booleans", "3. alerts", "4. numbers"],
   correct: ""
  }
  
  {question= "The condition in an if/else statement is enclosed with ______.",
   answers: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
   correct: ""
  }

  {question = "Arrays in Javascript can be used to store:",
   answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
   correct: ""
  }
  {question = "String values must be enclosed with ______ when being assigned to variables",
   answers: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
   correct: ""
  
 }
 {question = 'A very useful/tool during debugging for printer content to the debugger is:',
  answers: ["1. Javascript", "2. terminal bash", "3. for loops", "4. console log"],
  correct: ""

 }
]




  const quiz = ["Commonly used data types Include:",
              "The condition in an if/else statement is enclosed with ______.",
              "Arrays in Javascript can be used to store:",
              "String values must be enclosed with ______ when being assigned to variables",
              "A very useful/tool during debugging for printer content to the debugger is:"];

const answers1 = ["strings", "booleans", "alerts", "numbers"];
const answers2 = ["quotes", "curly brackets", "parenthesis", "square brackets"];
const answers3 = ["numbers and strings", "other arrays", "booleans", "all of the above"];
const answers4 = ["commas", "curly brackets", "quotes", "parenthesis"];
const answers5 = ["Javascript", "terminal bash", "for loops", "console log"];




// Timer that counts down from 5
function countdown() {
  var timeLeft = 5;

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
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      displayMessage();
    }
  }, 1000);
}

// Displays the message one word at a time
function displayMessage() {
  var count = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
   
    // If there are no more words left in the message
    if (words[count] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else { 
            mainEl.textContent=quiz[count];
       count++;
    }
  }, 5000);


}
countdown();

