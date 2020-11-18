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
		    'Phoenix Feather',
		    'Unicorn Tail Hair',
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
  score: 0
};

/********** RENDER FUNCTION(S) **********/
 /* Your app should include a render() function, that regenerates the view each time the store is updated. 
  * This function conditionally replaces the contents of the <main> tag based on the state of the store
  *
  * render title screen -
  *   if store.quizStarted = false
  *   generate html ~
  *     h1 title text
  *     Start button
  */
function renderTitle(){

/* 
    <section>
      <h2>Welcome to Hogwarts!</h2>
    </section>
    <section>
      <button class="startButton">Begin</button>
    </section>
*/
}

/* render question page -
 *   event listener for button click
 *   loop through store 
 *   generate html for 1st question ~
 *     h2 text for question
 *     form for answers w/ button to submit form
 */
function renderQuestion(){

/*  
*/
}

/* render feedback page -
 *   event listener for button click
 *   retrieve user input
 *   compare input to correct answer
 *   generate html for feedback ~
 *     h3 text displays if answer was correct
 *     button to continut
 *     .hide to hide button after submit
 */
function renderFeedback(){

}

 /*
  *repeat render question page and render feedback page untill all questions are answered
  */

/* render results page -
 *   retrieve number of correct answers
 *   generate results html ~
 *     h1 text for x out of 5 correct
 *     h2 text for great job or try again
 *     try again button
 */
function renderResults(){

}

/********** TEMPLATE GENERATION FUNCTIONS **********/
// These functions return HTML templates
function generateTitle(){

}

function generateQuestion(){

}

function generateFeedback(){

}

function generateResults(){

}

/********** EVENT HANDLER FUNCTIONS **********
 These functions handle events (submit, click, etc) */

function handleClick(){

}

function handleSubmit(){

}

function main(){

  }

  $(main)