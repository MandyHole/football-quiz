// https://bobbyhadz.com/blog/javascript-import-json-file

import myJson from './data.json' assert {type: 'json'};
console.log("myJson", myJson)
const footballQuestions = myJson
// const footballQuestions = [{
//         id: 1,
//         question: "When is the FA Cup typically held?",
//         a: "The Saturday after the Premier League season finishes in May",
//         b: "The Sunday after the Premier League season finishes in May",
//         c: "The second Saturday after the Premier League season finishes in May",
//         d: "The second Sunday after the Premier League season finishes in May",
//         correct: "The Saturday after the Premier League season finishes in May",
//         scoreGif: "score1.gif",
//         missGif: "miss1.gif",
//     },
//     {
//         id: 2,
//         question: "Which country was the first to host the World Cup for a second time?",
//         a: "France",
//         b: "Italy",
//         c: "Mexico",
//         d: "Uruguay",
//         correct: "Mexico",
//         scoreGif: "score2.gif",
//         missGif: "miss2.gif",
//     },
//     {
//         id: 3,
//         question: "Who was the 1966 World Cup winning captain?",
//         a: "Bobby Charlton",
//         b: "Geoff Hurst",
//         c: "Martin Peters",
//         d: "Bobby Moore",
//         correct: "Bobby Moore",
//         scoreGif: "score3.gif",
//         missGif: "miss3.gif",
//     },
//     {
//         id: 4,
//         question: "Who did FIFA name as Football Coach of the Century in 1999?",
//         a: "Mario Zagollo",
//         b: "Rinus Michels",
//         c: "Matt Busby",
//         d: "Sir Alex Ferguson",
//         correct: "Rinus Michels",
//         scoreGif: "score4.gif",
//         missGif: "miss4.gif",
//     },
//     {
//         id: 5,
//         question: "For how many years was Sir Alex Ferguson in charge of Manchester United F.C.?",
//         a: "18 years",
//         b: "21 years",
//         c: "23 years",
//         d: "26 years",
//         correct: "26 years",
//         scoreGif: "score5.gif",
//         missGif: "miss5.gif",
//     },
//     {
//         id: 6,
//         question: "If a player distracts an opponent whilst taking a throw-in, what decision can the referee give?",
//         a: "Yellow card",
//         b: "Red card",
//         c: "Direct free kick",
//         d: "Indirect free kick",
//         correct: "Yellow card",
//         scoreGif: "score6.gif",
//         missGif: "miss6.gif",
//     }, {
//         id: 7,
//         question: "In 2018-2019, three Premier League players shared the Golden Boot, each scoring 22 goals. Which of these players did NOT receive the award that year, having scored 21 goals?",
//         a: "Mohamed Salah",
//         b: "Sergio Aguero",
//         c: "Pierre-Emerick Aubameyang",
//         d: "Sadio Mane",
//         correct: "Sergio Aguero",
//         scoreGif: "score7.gif",
//         missGif: "miss7.gif",
//     }, {
//         id: 8,
//         question: "The 2015 Super Cup saw the most goals in the history of the competition; how many were scored?",
//         a: "8",
//         b: "9",
//         c: "10",
//         d: "11",
//         correct: "9",
//         scoreGif: "score8.gif",
//         missGif: "miss8.gif",
//     }, {
//         id: 9,
//         question: "In the 1974 World Cup, which British team were knocked out on goal difference, but were the only unbeaten side in the tournament?",
//         a: "England",
//         b: "Republic of Ireland",
//         c: "Scotland",
//         d: "Wales",
//         correct: "Scotland",
//         scoreGif: "score9.gif",
//         missGif: "miss9.gif",
//     }, {
//         id: 10,
//         question: "What is the name of Fulham’s football stadium?",
//         a: "Craven Cottage",
//         b: "Carrow Road",
//         c: "Fratton Park",
//         d: "St James Park",
//         correct: "Craven Cottage",
//         scoreGif: "score10.gif",
//         missGif: "miss10.gif",
//     }, {
//         id: 11,
//         question: "Which football club play at the Bernabeu Stadium?",
//         a: "Barcelona FC",
//         b: "Real Madrid FC",
//         c: "Athletic Bilbao",
//         d: "Atlético Madrid",
//         correct: "Real Madrid FC",
//         scoreGif: "score1.gif",
//         missGif: "miss1.gif",
//     }, {
//         id: 12,
//         question: "Which country hosted the 1990 World Cup?",
//         a: "Mexico",
//         b: "Italy",
//         c: "United States",
//         d: "France",
//         correct: "Italy",
//         scoreGif: "score2.gif",
//         missGif: "miss2.gif",
//     }, {
//         id: 13,
//         question: "What are the dimensions of an adult football goal?",
//         a: "9ft x 23ft",
//         b: "10ft x 23ft",
//         c: "9ft x 24ft",
//         d: "8ft x 24ft",
//         correct: "8ft x 24ft",
//         scoreGif: "score3.gif",
//         missGif: "miss3.gif",
//     }, {
//         id: 14,
//         question: "Which two players scored for England in the 1998 World Cup match versus Colombia?",
//         a: "Darren Anderton and David Beckham",
//         b: "Michael Owen and Alan Shearer",
//         c: "Michael Owen and Darren Anderton",
//         d: "Alan Shearer and David Beckham",
//         correct: "Darren Anderton and David Beckham",
//         scoreGif: "score4.gif",
//         missGif: "miss4.gif",
//     }, {
//         id: 15,
//         question: "Which club plays at Goodison Park?",
//         a: "Reading",
//         b: "Leicester",
//         c: "Everton",
//         d: "Liverpool",
//         correct: "Everton",
//         scoreGif: "score5.gif",
//         missGif: "miss5.gif",
//     }, {
//         id: 16,
//         question: "How far must the wall be away from a direct free kick (in yards)?",
//         a: "5 yards",
//         b: "10 yards",
//         c: "12 yards",
//         d: "15 yards",
//         correct: "10 yards",
//         scoreGif: "score6.gif",
//         missGif: "miss6.gif",
//     }, {
//         id: 17,
//         question: "Who is the youngest player ever to score a goal at the World Cup finals (as of summer 2022)?",
//         a: "Norman Whiteside",
//         b: "Samuel Eto",
//         c: "Salomon Olembé",
//         d: "Pelé",
//         correct: "Pelé",
//         scoreGif: "score7.gif",
//         missGif: "miss7.gif",
//     }, {
//         id: 18,
//         question: "What is the maximum weight of a football at the start of a game, under FIFA regulations?",
//         a: "16 ounces",
//         b: "18 ounces",
//         c: "20 ounces",
//         d: "12 ounces",
//         correct: "16 ounces",
//         scoreGif: "score8.gif",
//         missGif: "miss8.gif",
//     }, {
//         id: 19,
//         question: "Who is the first English footballer to have scored in three consecutive World Cups?",
//         a: "Wayne Rooney",
//         b: "David Beckham",
//         c: "Bobby Charlton",
//         d: "Rio Ferdinand",
//         correct: "David Beckham",
//         scoreGif: "score9.gif",
//         missGif: "miss9.gif",
//     },
//     {
//         id: 20,
//         question: "Who is Arsenal’s all-time leading goal scorer (as of summer 2022)?",
//         a: "Ian Wright",
//         b: "Cliff Bastin",
//         c: "Thierry Henry",
//         d: "John Radford",
//         correct: "Thierry Henry",
//         scoreGif: "score10.gif",
//         missGif: "miss10.gif",
//     },
//     {
//         id: 21,
//         question: "In which year did all four British teams qualify for the World Cup?",
//         a: "1958",
//         b: "1962",
//         c: "1966",
//         d: "1970",
//         correct: "1958",
//         scoreGif: "score1.gif",
//         missGif: "miss1.gif",
//     }, {
//         id: 22,
//         question: "What year did Maradona have his ‘Hand of God’ goal?",
//         a: "1978",
//         b: "1982",
//         c: "1986",
//         d: "1990",
//         correct: "1986",
//         scoreGif: "score2.gif",
//         missGif: "miss2.gif",
//     }, {
//         id: 23,
//         question: "Which team won fourth place at the 1994 World Cup?",
//         a: "Bulgaria",
//         b: "Italy",
//         c: "Romania",
//         d: "Sweden",
//         correct: "Bulgaria",
//         scoreGif: "score3.gif",
//         missGif: "miss3.gif",
//     }, {
//         id: 24,
//         question: "Which South American team won the 2021 Copa América?",
//         a: "Argentina",
//         b: "Brazil",
//         c: "Chile",
//         d: "Uruguay",
//         correct: "Argentina",
//         scoreGif: "score4.gif",
//         missGif: "miss4.gif",
//     }, {
//         id: 25,
//         question: "Which club has won the most Premier League titles (as of summer 2022)?",
//         a: "Arsenal",
//         b: "Everton",
//         c: "Liverpool",
//         d: "Manchester United",
//         correct: "Manchester United",
//         scoreGif: "score5.gif",
//         missGif: "miss5.gif",
//     }, {
//         id: 26,
//         question: "Which was the top club in 2020/2021 based on total revenue (644.9 million Euro)?",
//         a: "Bayern Munich",
//         b: "FC Barcelona",
//         c: "Manchester City",
//         d: "Real Madrid",
//         correct: "Manchester City",
//         scoreGif: "score6.gif",
//         missGif: "miss6.gif",
//     }, {
//         id: 27,
//         question: "Which team has the most consecutive UEFA Champions League match victories (as of summer 2022)?",
//         a: "Barcelona",
//         b: "Bayern Munich",
//         c: "Manchester City",
//         d: "Real Madrid",
//         correct: "Bayern Munich",
//         scoreGif: "score7.gif",
//         missGif: "miss7.gif",
//     }, {
//         id: 28,
//         question: "In which country would you find La Liga?",
//         a: "Italy",
//         b: "Mexico",
//         c: "Portugal",
//         d: "Spain",
//         correct: "Spain",
//         scoreGif: "score8.gif",
//         missGif: "miss8.gif",
//     }, {
//         id: 29,
//         question: "Which manager was awarded Premier Manager of the Month with four different clubs?",
//         a: "Harry Redknapp",
//         b: "David Moyes",
//         c: "Roy Hodgson",
//         d: "José Mourinho",
//         correct: "Harry Redknapp",
//         scoreGif: "score9.gif",
//         missGif: "miss9.gif",
//     },
//     {
//         id: 30,
//         question: "What year did Wayne Rooney score his 50th international goal?",
//         a: "2013",
//         b: "2014",
//         c: "2015",
//         d: "2016",
//         correct: "2015",
//         scoreGif: "score10.gif",
//         missGif: "miss10.gif",
//     },
//     {
//         id: 31,
//         question: "What is the minimum length of a football pitch?",
//         a: "100 yards",
//         b: "110 yards",
//         c: "120 yards",
//         d: "130 yards",
//         correct: "100 yards",
//         scoreGif: "score1.gif",
//         missGif: "miss1.gif",
//     }, {
//         id: 32,
//         question: "Alan Shearer was the top goal scorer in the Euro ’96 finals; how many goals did he score?",
//         a: "4",
//         b: "5",
//         c: "6",
//         d: "7",
//         correct: "5",
//         scoreGif: "score2.gif",
//         missGif: "miss2.gif",
//     }, {
//         id: 33,
//         question: "Which year did Phil Neville leave Manchester United to join Everton?",
//         a: "2002",
//         b: "2003",
//         c: "2004",
//         d: "2005",
//         correct: "2005",
//         scoreGif: "score3.gif",
//         missGif: "miss3.gif",
//     }, {
//         id: 34,
//         question: "In which year was the number of teams competing in a World Cup increased to 32?",
//         a: "1990",
//         b: "1994",
//         c: "1998",
//         d: "2002",
//         correct: "1998",
//         scoreGif: "score4.gif",
//         missGif: "miss4.gif",
//     }, {
//         id: 35,
//         question: "What position did Sir Alex Ferguson play during his football career?",
//         a: "Goalie",
//         b: "Defender",
//         c: "Midfielder",
//         d: "Striker",
//         correct: "Striker",
//         scoreGif: "score5.gif",
//         missGif: "miss5.gif",
//     }, {
//         id: 36,
//         question: "A match may not start or continue if either team has fewer than how many players?",
//         a: "6 players",
//         b: "7 players",
//         c: "8 players",
//         d: "9 players",
//         correct: "7 players",
//         scoreGif: "score6.gif",
//         missGif: "miss6.gif",
//     }, {
//         id: 37,
//         question: "Which Chelsea player scored the most goals in the Champions League (as of summer 2022)?",
//         a: "Didier Drogba",
//         b: "Frank Lampard",
//         c: "John Terry",
//         d: "Fernando Torres",
//         correct: "Didier Drogba",
//         scoreGif: "score7.gif",
//         missGif: "miss7.gif",
//     }, {
//         id: 38,
//         question: "How many England managers were there between 1947 and 1973?",
//         a: "2",
//         b: "3",
//         c: "4",
//         d: "5",
//         correct: "2",
//         scoreGif: "score8.gif",
//         missGif: "miss8.gif",
//     }, {
//         id: 39,
//         question: "Three teams have had eight FA Cup final defeats (as of summer 2022). Which one of these teams does not share this record?",
//         a: "Chelsea",
//         b: "Everton",
//         c: "Liverpool",
//         d: "Manchester United",
//         correct: "Liverpool",
//         scoreGif: "score9.gif",
//         missGif: "miss9.gif",
//     },
//     {
//         id: 40,
//         question: "How many players were sent off during the Battle of Santiago between Italy and Chile in 1962?",
//         a: "2",
//         b: "4",
//         c: "6",
//         d: "8",
//         correct: "2",
//         scoreGif: "score10.gif",
//         missGif: "miss10.gif",
//     },
//     {
//         id: 41,
//         question: "When did Pelé retire?",
//         a: "1969",
//         b: "1971",
//         c: "1974",
//         d: "1976",
//         correct: "1974",
//         scoreGif: "score1.gif",
//         missGif: "miss1.gif",
//     }, {
//         id: 42,
//         question: "Which football position requires the most running (based on an average distance covered of 11.2km)?",
//         a: "Central Midfielders",
//         b: "Full-Backs",
//         c: "Strikers",
//         d: "Wingers",
//         correct: "Central Midfielders",
//         scoreGif: "score2.gif",
//         missGif: "miss2.gif",
//     }, {
//         id: 43,
//         question: "What is the most common score line in a Premier League football match (2015/16 to 2019/20)?",
//         a: "0-0",
//         b: "1-0",
//         c: "1-1",
//         d: "2-1",
//         correct: "1-0",
//         scoreGif: "score3.gif",
//         missGif: "miss3.gif",
//     }, {
//         id: 44,
//         question: "Which English team has the most consecutive seasons in the top flight football league?",
//         a: "Arsenal",
//         b: "Everton",
//         c: "Liverpool",
//         d: "Manchester United",
//         correct: "Arsenal",
//         scoreGif: "score4.gif",
//         missGif: "miss4.gif",
//     }, {
//         id: 45,
//         question: "Which country has the highest number of ‘FIFA World Player of the Year’ winners?",
//         a: "Argentina",
//         b: "Brazil",
//         c: "Italy",
//         d: "Portugal",
//         correct: "Brazil",
//         scoreGif: "score5.gif",
//         missGif: "miss5.gif",
//     }, {
//         id: 46,
//         question: "Who is the only player to have won a trophy with both Liverpool and Manchester United?",
//         a: "Peter Beardsley",
//         b: "Steven Gerrard",
//         c: "Paul Ince",
//         d: "Michael Owen",
//         correct: "Michael Owen",
//         scoreGif: "score6.gif",
//         missGif: "miss6.gif",
//     }, {
//         id: 47,
//         question: "Which team has the most appearances in top flight football?",
//         a: "Arsenal",
//         b: "Aston Villa",
//         c: "Everton",
//         d: "Liverpool",
//         correct: "Everton",
//         scoreGif: "score7.gif",
//         missGif: "miss7.gif",
//     }, {
//         id: 48,
//         question: "What is the least amount of shots a team can take to win a penalty shootout?",
//         a: "2",
//         b: "3",
//         c: "4",
//         d: "5",
//         correct: "3",
//         scoreGif: "score8.gif",
//         missGif: "miss8.gif",
//     }, {
//         id: 49,
//         question: "Who won the golden boot award in the Premier League for the 2020/2021 season?",
//         a: "Bruno Fernandes",
//         b: "Harry Kane",
//         c: "Mohamed Salah",
//         d: "Jamie Vardy",
//         correct: "Harry Kane",
//         scoreGif: "score9.gif",
//         missGif: "miss9.gif",
//     },
//     {
//         id: 50,
//         question: "Which footballer’s wife was nicknamed 'Wagatha Christie'?",
//         a: "Frank Lampard",
//         b: "Cristiano Ronaldo",
//         c: "Wayne Rooney",
//         d: "Jamie Vardy",
//         correct: "Wayne Rooney",
//         scoreGif: "score10.gif",
//         missGif: "miss10.gif",
//     },
// ]

/**Run the game once the DOM content is loaded */
document.addEventListener("DOMContentLoaded", function () {
    runGame();})

/** Activated when user clicks submit
 * Calculate answer and league. Add 1 to attempts
 * End game if attempts = 10*/    
function submitAnswer() {
    calculateAnswer();
    calculateLeague()
    addAttempt();
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

    };
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
    scroll(0,0)
    let score = parseInt(document.getElementById("score").innerText);
    document.getElementById("feedback-gif").style.display = "none";
    document.getElementById("question-box").style.display = "none";
    document.getElementById("rules").style.display = "none";
    document.getElementById("final-message").style.display = "block";

    if (score < 3){
    document.getElementById("final-message").innerHTML = 
    `<p class="final-message poor">Out of your 10 attempts to score, you only managed to convert ${score}. It looks like you need a bit more practice! Why not play again to see if you can advance further? <form><button onclick="playAgain()">Play Again</button></form></p>`
} else if (score < 6) {
    document.getElementById("final-message").innerHTML = 
    `<p class="final-message medium">Out of your 10 attempts to score, you managed to convert ${score}. Well done on advancing up the leagues. With a bit more practice, you will be playing in the Premier or Champions Leagues! <form><button onclick="playAgain()">Play Again</button></form>`
} else if (score < 10) {
    document.getElementById("final-message").innerHTML = 
    `<p class="final-message good">What a game! Out of your 10 attempts, you scored ${score} times. You are so close to the Champions League. Why not try again to see if you can make it to the top? <form><button onclick="playAgain()">Play Again</button></form>`
} else if (score < 11) { 
    document.getElementById("final-message").innerHTML = 
    `<p class="final-message good">Wow - you scored on all 10 attempts! You know your football and deserve your place in the Champions League. Why not try again to see if you can maintain your title? <form><button onclick="playAgain()">Play Again</button></form>`
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
    runGame()
}

function handleSubmit(event) {
    event.preventDefault();
}


// video script from https://digiztal.blogspot.com/2021/04/embed-youtube-video-autoplay-but-muted.html

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    width: '100%',
    videoId: '4Dk7eYoj5GI',
    playerVars: { 'autoplay': 1, 'playsinline': 1 },
    events: {
      'onReady': onPlayerReady
    }
  });
}




// let footballForm = document.getElementById("footballForm");
//         function handleForm(event) { event.preventDefault(); } 
//         footballForm.addEventListener('submit', handleForm);