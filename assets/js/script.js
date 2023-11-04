//list of variables targeting the right element on the DOM
var timeCount = document.getElementById("time");
var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var questionsMain = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choices = document.getElementById("choices");
var endScreen = document.getElementById("end-screen");
var finalScore = document.getElementById("final-score");
var hsInitials = document.getElementById("initials");
var hsButton = document.getElementById("submit");
//---------- end ----------


//timer variable to hold starting time
var timer = 5;
//--- end ---

//function to count down the timer 
function countdown(){
  var timerInterval = setInterval(function(){
        timer--;
        timeCount.textContent = timer
      if(timer <= 0){
        clearInterval(timerInterval)
      }
    }, 1000);
} 

startButton.addEventListener("click", countdown())  