//list of variables targeting the right element on the DOM
var timeCount = document.getElementById("time");
var startButton = document.getElementById("start");
var startScreen = document.getElementById("start-screen");
var questionsMain = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var choicesLi = document.getElementById("choices");
var endScreen = document.getElementById("end-screen");
var finalScore = document.getElementById("final-score");
var hsInitials = document.getElementById("initials");
var hsButton = document.getElementById("submit");
//---------- end ----------

var increment = 0
var questionValues = Object.values(quizQuestions[1])
var questionTitleValue = Object.values(quizQuestions[0])
var changeQuestion = questionTitle.textContent = questionTitleValue[increment]

//timer variable to hold starting time
var timer = 5;
//--- end ---

function loadQuestions(){
  for (var i = 0; i < questionValues.length; i++){
      var liEl = document.createElement("button")
      choicesLi.append(liEl)
      liEl.textContent = questionValues[i]
      liEl.classList.add("choicesLi")
    }
};

//event listener on the start button
startButton.addEventListener("click", function countdown(){
    startScreen.setAttribute("class", "hide")
    questionsMain.setAttribute("class", "show")
    choicesLi.setAttribute("class", "show")
    choicesLi.addEventListener("click", function(){
    increment ++
    questionTitle.textContent = questionTitleValue[increment]
    })
  //function counting down the timer once button is clicked 
  var timerInterval = setInterval(function(){
    timer--;
    timeCount.textContent = timer
  //error handler to stop count at 0  
  if(timer <= 0 || increment > 4){
    clearInterval(timerInterval)
    endScreen.setAttribute("class", "show")
    choicesLi.setAttribute("class", "hide")
    questionTitle.setAttribute("class", "hide")
    finalScore.textContent = timer
  }
  }, 1000)
  loadQuestions();
  
    
}) //----- end -----

//loop for creating each answers and questions button


