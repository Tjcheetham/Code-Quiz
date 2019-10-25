//The user arrives at the landing page and is presented with a call-to-action to "Start Quiz." Also note the navigation option to "View Highscores" and the "Time" value set at 0.

// Clicking the "Start Quiz" button presents the user with a series of questions. The timer is initialized with a value and immediately begins countdown.

// Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).

// When time runs out and/or all questions are answered, the user is presented with their final score and asked to enter their initials. Their final score and initials are then stored in localStorage.

//The first view of the application displays a button that starts the quiz.

//Clicking the start button displays a series of questions.

//Once the quiz begins, a timer starts.

//If a question is answered incorrectly, additional time is subtracted from the timer.

//The timer stops when all questions have been answered or the timer reaches 0.

//After the game ends, the user can save their initials and score to a highscores view using local storage.
document.querySelector(".container1").style.display = "none";

var startButton = document.querySelector("#start-button");
var timeEl = document.getElementById("timeLeft")

startButton.addEventListener("click", function(){startTimer()});

function startTimer(){
  console.log("You startd the timer");
  var secondsLeft = 75;
  var timerInterval = setInterval(function(){
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000)
};

//toggling through show/hide of the first two containers
startButton.addEventListener("click", function(){nextQuestion()});

function nextQuestion() {
  var x = document.querySelector(".container0");
  var y = document.querySelector(".container1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }

}


//Should I be switching through html pages each question?
  //Display properties, how to hide an element in js

//How to keep my time going throughout clicks?

//Store highscores and save them in memory

