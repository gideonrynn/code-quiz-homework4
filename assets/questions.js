//* Store your questions as an array of objects in a separate file, `questions.js`, that follows this format: ```js//

var questions = [
  {
    title: "The Fifth Element was written by _______.",
    choices: ["John Stamos", "Luc Besson", "Sting", "Maggie Smith"],
    answer: "Luc Besson"
  },
  {
    title: "Ruby Rhod (character) is played by which actor/actress?",
    choices: ["Bruce Willis", "Chris Tucker", "Gary Oldman", "Milla Jovovich"],
    answer: "Chris Tucker"
  },
  {
    title: "Zorg's full name is ________.",
    choices: ["Jean Zorg", "Baptiste Zorg", "Jean Baptiste Emmanuel Zorg", "Gary Zorg"],
    answer: "Jean Baptiste Emmanuel Zorg"
  },
  {
    title: "The fifth element is _______.",
    choices: ["love", "water", "earth", "wind"],
    answer: "love"
  },
  {
    title: "Milla Jovovich was __ years old when she landed the role of Leloo.",
    choices: ["19", "21", "33", "80"],
    answer: "19"
  },
  {
    title: "Milla Jovovich was __ years old when she landed the role of Leloo.",
    choices: ["19", "21", "33", "80"],
    answer: "19"
  }

];

//Set variables that will be updated by JavaScript through timer and click events

var timer = document.querySelector("#seconds");

//Get variable that will be updated with text at different stages of the quiz, when time is up, when a correct or wrong answer has been selected
var progressUpdate = document.getElementById("progress");

//may not need this
var timeRemaining = "0";

//create variables for divs/ids
var choicesList = document.querySelector("#choices-list");
var starterSection = document.querySelector(".starter");
var titlePlaceholder = document.querySelector(".title");
var listItem = document.getElementById("li");

//Starts off as zero. This will be logged into localStorage so that the user can view high scores at a later date. The timer #seconds will pull into here as well
var score = "0";

//this is the question object/array we are currently on
var currentQuestion = "0";

//*******do I need this?
var userSelection = "";

//variables that store clicks from the user


//Question Function
//The following will create function that will display the questions 
function displayQuestions() {

  //set variable for the current question that we are on in the questions object
  var question = questions[currentQuestion];

  titlePlaceholder.innerHTML = questions[currentQuestion].title;

  //create for loop that will loop through each choice string in the object
  for (var i = 0; i < question.choices.length; i++) {

    //create the list and button elements

    var li = document.createElement("li");
    
    //var button = document.createElement("button");
    //button.textContent = questions[currentQuestion].choices[i];

    //pull the choice(s) associated with the current question
    li.textContent = questions[currentQuestion].choices[i];
    
    //add unique identifiers to newly created li
    li.setAttribute("id", questions[currentQuestion].choices[i]);
    li.setAttribute("class", "new");

    //append new button and new list item 
    choicesList.append(li); 
    //li.appendChild(button);//
  }

}

// //
function chooseAnswer() {
  
  var choiceClicked = event.target.id;
  var li = document.querySelectorAll("li");

  var currentAnswer = questions[currentQuestion].answer;

  if (choiceClicked === currentAnswer) {
    progressUpdate.innerHTML = "Correct! +15 points";
    timeRemaining = +15;
} 
  else {
    progressUpdate.innerHTML = "Wrong! -15 points";
  }

  if (timeRemaining > 0) {
    currentQuestion = +currentQuestion + 1;
    progressUpdate.innerHTML = "";
  }

  displayQuestions();
}



//Timer Script (remember to rename these variables and whatnot)
function setTime() {

  //var timeRemaining was created globally
  timeRemaining = "5";

  var timerInterval = setInterval(function() {
    timeRemaining--;
    timer.textContent = timeRemaining;

    if(timeRemaining === 0) {
      clearInterval(timerInterval);
      sendTimeIsUp();
    }

  }, 1000);

}

function sendTimeIsUp() {
  timer.textContent = "0";
  progressUpdate.innerHTML = ("Time is up!");

}

//hide the Starter section by changing the style: display on the start section div
function hideStart() {
  starterSection.setAttribute('style', 'display:none');
}

//kick off timer and hide the starter div with click events connected to the Start Button
startquizbtn.addEventListener("click", setTime);
startquizbtn.addEventListener("click", hideStart);
startquizbtn.addEventListener("click", displayQuestions);
choicesList.addEventListener("click", chooseAnswer);
