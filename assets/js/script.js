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
var answerPText = document.getElementById('correct');
//---------- end ----------

var questionIndex = 0
// var choicesLength = quizQuestions.question1.choices.length



// var changeQuestion = questionTitle.textContent = questionTitleValue[increment]

//timer variable to hold starting time
var timer = 60;
//--- end ---
var currentQuestion = quizQuestions[questionIndex]

function loadQuestions() {
  choicesLi.innerHTML = ''
  questionTitle.textContent = currentQuestion.question
  currentQuestion.choices.forEach(function (choice) {
    var liBtn = document.createElement("button")
    liBtn.textContent = choice
    liBtn.classList.add("choicesLi")
    liBtn.onclick = answerClick
    choicesLi.append(liBtn)

  }
  )

  // for (var i = 0; i < choicesLength; i++) {


}

function answerClick(){
  var userChoice = this.innerHTML
  var correctAnswer = currentQuestion.answer
  answerPText.setAttribute('class', 'show')

  if(userChoice === correctAnswer){
    answerPText.textContent = "===== Correct ====="
  } else {
    answerPText.textContent = "===== Wrong ====="
    timer -= 10 
  }
    setTimeout(function(){
      answerPText.setAttribute('class', 'hide')
      questionIndex ++
      currentQuestion = quizQuestions[questionIndex]
      loadQuestions()
    }, 1000)
  // console.log(userChoice, correctAnswer)
}
// };

// event listener on the start button
startButton.addEventListener("click", function () {
  startScreen.setAttribute("class", "hide")
  questionsMain.setAttribute("class", "show")
  choicesLi.setAttribute("class", "show")

  //function counting down the timer once button is clicked 
  var timerInterval = setInterval(function () {
    timer--;
    timeCount.textContent = timer
    //error handler to stop count at 0  
    if (timer <= 0 || questionIndex > 4) {
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


console.log()