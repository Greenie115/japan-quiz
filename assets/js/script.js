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

questionValues = Object.values(quizQuestions[1])

//timer variable to hold starting time
var timer = 60;
//--- end ---

//event listener on the start button
startButton.addEventListener("click", function countdown(){
  //function counting down the timer once button is clicked 
  startScreen.setAttribute("class", "hide")
  questionsMain.setAttribute("class", "show")
  var timerInterval = setInterval(function(){
        timer--;
        timeCount.textContent = timer
      //error handler to stop count at 0  
      if(timer <= 0){
        clearInterval(timerInterval)
      }
    }, 1000);
}) //----- end -----

//loop for creating each answers and questions li

for (var i = 0; i < questionValues.length; i++){
  var liEl = document.createElement("li")
  var attachLi = choices.append(liEl)
  liEl.textContent = questionValues[i]
}

