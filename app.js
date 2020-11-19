'use strict';

/*
 *User should start on Title Screen
 *User must click Start button to begin quiz
 * Page will update to first question
 * User will click their selection from a multiple choice question
 * User will click Final Answer button
 * Page will update with feedback about the user's answer
 * User will click Continue button
 * Page will update with next question and repeat until all questions are answered
 * Page will display quiz results and Try Again button to begin quiz again
 */

//array of quiz questions as objects
const store = {
  questions: [
    {
      question: 'What color are Harry’s eyes?',
      answers: [
	      'Blue',
	      'Green',
	      'Brown',
        'Gray'
      ],
      correctAnswer: 'Green'
    }, 

    {
      question: 'What is Harry’s Aunt’s name?',
      answers: [
		    'Rosemary',
	      'Poppy',
	  	  'Petunia',
        'Karen'
      ],
      correctAnswer: 'Petunia'
    },

    {
      question: 'What is the core of Harry’s wand?',
      answers: [
        'Unicorn Tail Hair',
		    'Phoenix Feather',
		    'Dragon Heartstring',
        'Mermaid Scales'
      ],
      correctAnswer: 'Phoenix Feather'
    },

    {
      question: 'What color is Hagrid’s umbrella?',
      answers: [
		    'Black',
		    'Purple',
		    'Red',
        'Pink',
      ],
      correctAnswer: 'Pink'
    },

    {
      question: 'When is Harry’s birthday?',
      answers: [
		    'June 22nd',
		    'July 31st',
		    'August 14th',
        'January 9th',
      ],
      correctAnswer: 'July 31st'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  userName: '',
  activateFeedback: false
};

/********** TEMPLATE GENERATION FUNCTIONS **********/
// These functions return HTML templates

//  Title screen -
function generateTitle(){
  return `<section>
      <h2>Welcome to Hogwarts!</h2>
    </section>

    <section id='title'>
      <form>
        <label for="userName">What should I call you, young wizard?</label>
        <br>
        <input type="text" id="userName" name="userName" required>
        <br>
        <input type= submit id= 'startButton' value='Begin'> 
      </form>
    </section>

    <div><img src="images/opener.jpg" alt="Three young wizards facing the camera."></div>`
}




//  Question screen after quiz has been started
function generateQuestion(){
  let question = store.questions[store.questionNumber];

  let answers = question.answers.map((answer, idx) => {
    if(idx === 0){
      return `<input type='radio' id=${answer} name='answer' value=${answer} required>
    <label for='answer${idx}'>${answer}</label>
    <br>`}
    return `<input type='radio' id='${answer}' name='answer' value=${answer}>
    <label for='answer${idx}'>${answer}</label>
    <br>`
  });

  return `<section id='questionPage'>
        <div id= 'progressAndScore'>Question: ${store.questionNumber + 1} of ${store.questions.length}</div
        <div id= 'score'>Current Score: ${store.score}</div>
        <h2>${question.question}</h2>
        <form id='question'>
          ${answers.join('')}
          <button id= 'submitAnswer'>Answer</button>
        </form>
      </section>`
}



//  Feedback screen after question is answered
function generateFeedback(){
    let userAnswer = $('input[name="answer"]:checked').attr('id');
    let correctAnswer = store.questions[store.questionNumber].correctAnswer;

    if ( userAnswer === correctAnswer){
      store.score ++;
console.log(store.score);
    return `<section>
          <h3 class=yourAnswer'>Well done! See here everyone, ${store.userName}'s done it!</h3>
          <button id= 'continue'>Continue</button>
        </section>

        <div><img src="images/correct.jpg" alt="Three young wizards facing the camera."></div>`
        
    } else {
    return `<section>
          <h3 class='yourAnswer'>Tut, tut. Fame clearly isn't everything...</h3>
            <h2 class='correctAnswer'>The correct answer is ${store.questions[store.questionNumber].correctAnswer} </h2>
            <button id= 'continue'>Continue</button>
        </section>

        <div><img src="images/wrong.jpg" alt="Three young wizards facing the camera."></div>`
    }
}


//  Results screen after quiz is complete
function generateResults(){
console.log('generating results');
  if (store.score >= 3){
console.log('more than 3');
    return `<section id="results">
    <h2 class='finalResults'>You got ${store.score} out of ${store.questions.length} correct!</h2>
      <h3 class='howdYouDo'>Yer a WIZARD, ${store.userName}!</h3>
    <button id='playAgain'>Play Again</button>
  </section>

  <div><img src="images/win.jpg" alt="Three young wizards facing the camera."></div>`

  } else {
console.log('bad score');
    return `<section id="results">
        <h2 class='finalResults'>You got ${store.score} out of ${store.questions.length} correct!</h2>
          <h3 class='howdYouDo'>Let me guess -- you're secretly a wizard who was raised by muggles?</h3>
        <button id= 'playAgain'>Play Again</button>
      </section>

      <div><img src="images/lose.jfif" alt="Three young wizards facing the camera."></div>`
  }
}

/********** EVENT HANDLER FUNCTIONS **********/
//these functions listen for events and run appropriate generation functions

function handleStart(){
  $('main').on('click', '#startButton', function(event){
    event.preventDefault();

    store.quizStarted = true;

    store.userName = $('input[type="text"]').val();
console.log('start clicked')
    render();
  });
}

function handleAnswer(){
  $('main').on('submit', '#question', function(event){
    event.preventDefault();
console.log('submit clicked');
let userAnswer = $('input[name="answer"]:checked').attr('id');
let currentQuestion= store.questionNumber;
let correctAnswer = store.questions[store.questionNumber].correctAnswer;
console.log(`on question ${currentQuestion}`);
console.log(`${store.userName} selected ${userAnswer}, the correct answer was ${correctAnswer}`);
    store.activateFeedback = true;
    render();
  });
}

function handleContinue(){
  $('main').on('click', '#continue', function(event){
    event.preventDefault();
console.log('continue clicked');
     store.questionNumber++;
     store.activateFeedback = false;
    render();
  });
}

function handleReplay(){
  $('main').on('click', '#playAgain', function(event){
    event.preventDefault();
console.log('resetting');

    store.quizStarted= false,
    store.questionNumber= 0,
    store.score= 0,
    store.userName= '',
    store.activateFeedback= false;

    render();
  });
}

/********** RENDER FUNCTION **********/
//This function conditionally replaces the contents of the <main> tag based on the state of the store

function render(){
console.log('render ran')
  let html = '';
  if (store.quizStarted === false){
    html = generateTitle();
console.log('generateTitle');

  } else if (store.quizStarted === true && store.activateFeedback === false && store.questionNumber < store.questions.length){
    html = generateQuestion();
console.log('generateQuestion');

  } else if (store.activateFeedback === true){
    html = generateFeedback();
console.log('generateFeedback');
  
  } else if (store.quizStarted === true && store.questionNumber === store.questions.length){
console.log('generateResults');
    html = generateResults();
  }
  
  $('main').html(html);
}


/*************** PAGE LOAD FUNCTION ***************/
//this functions runs once the page loads and deploys all other functions
function main(){
  render();
  handleStart();
  handleContinue();
  handleAnswer();
  handleReplay();
}

$(main);