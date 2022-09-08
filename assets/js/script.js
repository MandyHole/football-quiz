// https://bobbyhadz.com/blog/javascript-import-json-file

import myJson from './data.json' assert {type: 'json'};
const footballQuestions = myJson;

/**Run the game once the DOM content is loaded */
document.addEventListener("DOMContentLoaded", function () {
    runGame();
    document.getElementById("show-rules").style.display = "none";});

/** Activated when user clicks submit
 * Calculate answer and league. Add 1 to attempts
 * End game if attempts = 10*/    
function submitAnswer() {
    calculateAnswer();
    calculateLeague();
    addAttempt();
    document.getElementById("rules").style.display = "none";
    document.getElementById("show-rules").style.display = "block";
    let attempts = parseInt(document.getElementById("attempts").textContent);
    if (attempts == 10) {
        document.getElementById("next-question-box").style.display = "none";
        document.getElementById("get-results").style.display = "block";
    } else if (attempts > 10){
        document.getElementById("final-message").style.display = "block";
        document.getElementById("final-message").innerHTML =
        `You have had too many attempts (more than 10): ${attempts}. <form><button type="button" onclick="${playAgain()}">Play Again</button></form>`;
        throw `Too many attempts: ${attempts}`;
    } else {
        document.getElementById("next-question-box").style.display = "block";

    }
}

/**
 * Insert random question / submit button
 * set "feedback-gif" to none
 */

//  https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
var randomElement = footballQuestions[Math.floor(Math.random() * footballQuestions.length)];



function runGame() {
    randomElement = footballQuestions[Math.floor(Math.random() * footballQuestions.length)];
    // let questionID = Math.floor(Math.random() * 50)
        document.getElementById("feedback-gif").style.display = "none";
        document.getElementById("final-message").style.display = "none";
        document.getElementById("get-results").style.display = "none";
        document.getElementById("next-question-box").style.display = "none";
        document.getElementById("question").textContent = randomElement.question;
        document.getElementById("question-options").innerHTML =
            `<form id="question-form" method="post">
                <p><input type="radio" id="q1a" name="q1" value="${randomElement.a}" required="required">
                <label for "q1a">${randomElement.a}</label><br>
                <input type="radio"" id="q1b" name="q1" value="${randomElement.b}" required="required"> 
                <label for "q1b">${randomElement.b}</label><br>
                <input type="radio" id="q1c" name="q1" value="${randomElement.c}" required="required">
                <label for "q1c">${randomElement.c}</label><br>
                <input type="radio" id="q1d" name="q1" value="${randomElement.d}" required="required">
                <label for "q1d">${randomElement.d}</label><br></p>
            <p><button type="button" id="submit-answer">Submit</button></p>
            </form>`;
            let footballForm = document.getElementById("submit-answer");
            footballForm.addEventListener('click', submitAnswer);
            footballForm.addEventListener('click', handleSubmit);
        
        }

        let getResults = document.getElementById("get-results");
        getResults.addEventListener('click', endGame);
        getResults.addEventListener('click', handleSubmit);


/**
 * see if radio value === correct answer
 * if yes, show correct message and score gif
 * if no, show wrong message and miss gif
 * all - remove options and submit button
 * show next question button
 */
function calculateAnswer() {
    let correctAnswer = randomElement.correct;
    console.log(correctAnswer, "correct");
    let selectedAnswer = document.querySelector('input[name="q1"]:checked').value;

// let myFormData = []; 
// // https://stackoverflow.com/questions/33570492/storing-html-form-information-in-to-an-js-array
// myFormData.push(selectedAnswer);
// console.log(myFormData, "myformdata");
    // https://stackoverflow.com/questions/15839169/how-to-get-value-of-selected-radio-button
    if (correctAnswer == selectedAnswer) {
        addScore();
        showGoalGif();
        document.getElementById("question-options").innerHTML =
        `<h3 class="feedback miss-feedback">Well done, you scored! You chose the correct answer: ${randomElement.correct}.</h3>`;
    } else {
        document.getElementById("question-options").innerHTML =
        `<h3 class="feedback miss-feedback">Oh no - you missed! The correct answer is ${randomElement.correct}.</h3>`;
    }
    document.getElementById("feedback-gif").style.display = "grid";
    // add innerhtml for feedback-gif box

}
let nextQuestionButton = document.getElementById("next-question");
nextQuestionButton.addEventListener('click', runGame);
nextQuestionButton.addEventListener('click', handleSubmit);
nextQuestionButton.addEventListener('click', hideRules);

let showRulesButton = document.getElementById("show-rules");
showRulesButton.addEventListener('click', showRules);

/**show rules section, bring user to top of page and hide show rules button */
function showRules(){
    document.getElementById("rules").style.display = "block";
    // https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
    document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  document.getElementById("show-rules").style.display = "none";
}
/** Hide rules and show button*/
function hideRules(){
    document.getElementById("rules").style.display = "none";
    document.getElementById("show-rules").style.display = "block";
}
/**
 * add one to score
 */
function addScore() {
    let score = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++score;
}
/**
 * add one to attempts
 */
function addAttempt() {
    let attempts = parseInt(document.getElementById("attempts").innerText);
    document.getElementById("attempts").innerText = ++attempts;
}
/**
 * Advance league each time the score increases by two
 */
function calculateLeague() {
    let score = parseInt(document.getElementById("score").innerText);
    if (score === 2 || score === 3) {
        document.getElementById("league").innerText = "League 2";
    } else if (score === 4 || score === 5) {
        document.getElementById("league").innerText = "League 1";
    } else if (score === 6 || score === 7) {
        document.getElementById("league").innerText = "Championship";
    } else if (score === 8 || score === 9) {
        document.getElementById("league").innerText = "Premier League";
    } else if (score === 10) {
        document.getElementById("league").innerText = "Champions League";
    } else {
        document.getElementById("league").innerText = "Grassroots";
    }
}

/**Remove questions/gifs/rules
 * Add feedback message based on score
 * Add button to play again
 */
function endGame() {
    console.log("endgame");
    // https://stackoverflow.com/questions/4147112/how-to-jump-to-top-of-browser-page
    scroll(0,0);
    let score = parseInt(document.getElementById("score").innerText);
    document.getElementById("feedback-gif").style.display = "none";
    document.getElementById("question-box").style.display = "none";
    document.getElementById("rules").style.display = "none";
    document.getElementById("final-message").style.display = "block";

    if (score < 3){
    document.getElementById("final-message").innerHTML = 
    `<p class="final-message poor">Out of your 10 attempts to score, you only managed to convert ${score}. It looks like you need a bit more practice! Why not play again to see if you can advance further? </p><form><button onclick="playAgain()">Play Again</button></form>`;
} else if (score < 6) {
    document.getElementById("final-message").innerHTML = 
    `<p class="final-message medium">Out of your 10 attempts to score, you managed to convert ${score}. Well done on advancing up the leagues. With a bit more practice, you will be playing in the Premier or Champions Leagues! </p><form><button onclick="playAgain()">Play Again</button></form>`;
} else if (score < 10) {
    document.getElementById("final-message").innerHTML = 
    `<p class="final-message good">What a game! Out of your 10 attempts, you scored ${score} times. You are so close to the Champions League. Why not try again to see if you can make it to the top?</p> <form><button onclick="playAgain()">Play Again</button></form>`;
} else if (score < 11) { 
    document.getElementById("final-message").innerHTML = 
    `<p class="final-message good">Wow - you scored on all 10 attempts! You know your football and deserve your place in the Champions League. Why not try again to see if you can maintain your title? </p><form><button onclick="playAgain()">Play Again</button></form>`;
} else {
    document.getElementById("final-message").innerHTML = 
    `Game over due to suspected cheating. Your score can't be more than 10: ${score} <form><button onclick="playAgain()">Play Again</button></form>`;
    throw `Too many goals: ${score}`;
}}
/**
 * Reset score/attempts to 0 and league to grassroots
 * insert random question?
 */
function playAgain() {
    document.getElementById("attempts").innerText = 0;
    document.getElementById("score").innerText = 0;
    document.getElementById("league").innerText = "Grassroots";
    document.getElementById("feedback-gif").style.display = "none";
    document.getElementById("final-message").style.display = "none";
    document.getElementById("rules").style.display = "block";
    runGame();
}

function handleSubmit(event) {
    event.preventDefault();
}
function showGoalGif() {
        let footballGoalGif = [{
                gifFilename: 'messi.gif',
                gifAlt: 'Messi goal - sourced from https://giphy.com/gifs/fcbarcelona-PnPU9GhN3V7oVizSHG'
            },
            {
                gifFilename: 'barcelona-goal.gif',
                gifAlt: 'Barcelona goal - sourced from https://giphy.com/gifs/fcbarcelona-skills-goals-Ns4RG72Ay6t0s'
            },
            {
                gifFilename: 'ronaldo.gif',
                gifAlt: 'Ronaldo goal - sourced from https://giphy.com/gifs/manutd-united-mufc-ggmu-CXOiDARnwHOG9ajo1s'
            },
            {
                gifFilename: 'rooney.gif',
                gifAlt: 'Rooney goal - sourced from https://giphy.com/gifs/manutd-manchester-united-mufc-ggmu-fYurZZ9YPdHMA31cWl'
            },
            {
                gifFilename: 'vanpersie.gif',
                gifAlt: 'Van Persie goal - sourced from https://giphy.com/gifs/sbnation-sbnation-robin-iaOhvZuaVprxe'
            },
            {
                gifFilename: 'chelsea.gif',
                gifAlt: 'Chelsea goal - sourced from https://giphy.com/gifs/nss-sports-U8CZMODTWvST8YppXg'
            },
            {
                gifFilename: 'header.gif',
                gifAlt: 'Goal from a header - sourced from https://giphy.com/gifs/nss-sports-wZsYA7tcpsO8NY412w'
            },
            {
                gifFilename: 'realmadrid.gif',
                gifAlt: 'Goal from Real Madrid - sourced from https://giphy.com/gifs/nss-sports-wZsYA7tcpsO8NY412w'
            }
        ];
        var randomGoalGif = footballGoalGif[Math.floor(Math.random() * footballGoalGif.length)];
        document.getElementById("feedback-gif").innerHTML = `<img src="assets/images/${randomGoalGif.gifFilename}" alt="${randomGoalGif.gifAlt}" width = "80%">`;
    }
    