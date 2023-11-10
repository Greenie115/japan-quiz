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
var choicesLength = quizQuestions.question1.choices.length

// var changeQuestion = questionTitle.textContent = questionTitleValue[increment]

//timer variable to hold starting time
var timer = 5;
//--- end ---

function loadQuestions(){
  for (var i = 0; i < choicesLength; i++){
      var liBtn = document.createElement("button")
      choicesLi.append(liBtn)
      liBtn.classList.add("choicesLi")
      liBtn.textContent = quizQuestions[i].choices
    }
};

// event listener on the start button
startButton.addEventListener("click", function(){
    startScreen.setAttribute("class", "hide")
    questionsMain.setAttribute("class", "show")
    choicesLi.setAttribute("class", "show")
    choicesLi.addEventListener("click", function(){
    increment ++
    questionTitle.textContent = questionsArray[increment]
    choicesLi.textContent = quizQuestions.choices[increment]
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