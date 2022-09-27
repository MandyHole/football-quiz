const footballQuestions = [{
    id: 1,
    question: "When is the FA Cup typically held?",
    a: "The Saturday after the Premier League season finishes in May",
    b: "The Sunday after the Premier League season finishes in May",
    c: "The second Saturday after the Premier League season finishes in May",
    d: "The second Sunday after the Premier League season finishes in May",
    correct: "The Saturday after the Premier League season finishes in May"
},
{
    id: 2,
    question: "Which country was the first to host the World Cup for a second time?",
    a: "France",
    b: "Italy",
    c: "Mexico",
    d: "Uruguay",
    correct: "Mexico"

},
{
    id: 3,
    question: "Who was the 1966 World Cup winning captain?",
    a: "Bobby Charlton",
    b: "Geoff Hurst",
    c: "Martin Peters",
    d: "Bobby Moore",
    correct: "Bobby Moore"
},
{
    id: 4,
    question: "Who did FIFA name as Football Coach of the Century in 1999?",
    a: "Mario Zagollo",
    b: "Rinus Michels",
    c: "Matt Busby",
    d: "Sir Alex Ferguson",
    correct: "Rinus Michels"
},
{
    id: 5,
    question: "For how many years was Sir Alex Ferguson in charge of Manchester United F.C.?",
    a: "18 years",
    b: "21 years",
    c: "23 years",
    d: "26 years",
    correct: "26 years"
},
{
    id: 6,
    question: "If a player distracts an opponent whilst taking a throw-in, what decision can the referee give?",
    a: "Yellow card",
    b: "Red card",
    c: "Direct free kick",
    d: "Indirect free kick",
    correct: "Yellow card"
}, {
    id: 7,
    question: "In 2018-2019, three Premier League players shared the Golden Boot, each scoring 22 goals. Which of these players did NOT receive the award that year, having scored 21 goals?",
    a: "Mohamed Salah",
    b: "Sergio Aguero",
    c: "Pierre-Emerick Aubameyang",
    d: "Sadio Mane",
    correct: "Sergio Aguero"
}, {
    id: 8,
    question: "The 2015 Super Cup saw the most goals in the history of the competition; how many were scored?",
    a: "8",
    b: "9",
    c: "10",
    d: "11",
    correct: "9"
}, {
    id: 9,
    question: "In the 1974 World Cup, which British team were knocked out on goal difference, but were the only unbeaten side in the tournament?",
    a: "England",
    b: "Republic of Ireland",
    c: "Scotland",
    d: "Wales",
    correct: "Scotland"
}, {
    id: 10,
    question: "What is the name of Fulham’s football stadium?",
    a: "Craven Cottage",
    b: "Carrow Road",
    c: "Fratton Park",
    d: "St James Park",
    correct: "Craven Cottage"
}, {
    id: 11,
    question: "Which football club play at the Bernabeu Stadium?",
    a: "Barcelona FC",
    b: "Real Madrid FC",
    c: "Athletic Bilbao",
    d: "Atlético Madrid",
    correct: "Real Madrid FC"
}, {
    id: 12,
    question: "Which country hosted the 1990 World Cup?",
    a: "Mexico",
    b: "Italy",
    c: "United States",
    d: "France",
    correct: "Italy"
}, {
    id: 13,
    question: "What are the dimensions of an adult football goal?",
    a: "9ft x 23ft",
    b: "10ft x 23ft",
    c: "9ft x 24ft",
    d: "8ft x 24ft",
    correct: "8ft x 24ft"
}, {
    id: 14,
    question: "Which two players scored for England in the 1998 World Cup match versus Colombia?",
    a: "Darren Anderton and David Beckham",
    b: "Michael Owen and Alan Shearer",
    c: "Michael Owen and Darren Anderton",
    d: "Alan Shearer and David Beckham",
    correct: "Darren Anderton and David Beckham"
}, {
    id: 15,
    question: "Which club plays at Goodison Park?",
    a: "Reading",
    b: "Leicester",
    c: "Everton",
    d: "Liverpool",
    correct: "Everton"
}, {
    id: 16,
    question: "How far must the wall be away from a direct free kick (in yards)?",
    a: "5 yards",
    b: "10 yards",
    c: "12 yards",
    d: "15 yards",
    correct: "10 yards"
}, {
    id: 17,
    question: "Who is the youngest player ever to score a goal at the World Cup finals (as of summer 2022)?",
    a: "Norman Whiteside",
    b: "Samuel Eto",
    c: "Salomon Olembé",
    d: "Pelé",
    correct: "Pelé"
}, {
    id: 18,
    question: "What is the maximum weight of a football at the start of a game, under FIFA regulations?",
    a: "16 ounces",
    b: "18 ounces",
    c: "20 ounces",
    d: "12 ounces",
    correct: "16 ounces"
}, {
    id: 19,
    question: "Who is the first English footballer to have scored in three consecutive World Cups?",
    a: "Wayne Rooney",
    b: "David Beckham",
    c: "Bobby Charlton",
    d: "Rio Ferdinand",
    correct: "David Beckham"
},
{
    id: 20,
    question: "Who is Arsenal’s all-time leading goal scorer (as of summer 2022)?",
    a: "Ian Wright",
    b: "Cliff Bastin",
    c: "Thierry Henry",
    d: "John Radford",
    correct: "Thierry Henry"
},
{
    id: 21,
    question: "In which year did all four British teams qualify for the World Cup?",
    a: "1958",
    b: "1962",
    c: "1966",
    d: "1970",
    correct: "1958"
}, {
    id: 22,
    question: "What year did Maradona have his ‘Hand of God’ goal?",
    a: "1978",
    b: "1982",
    c: "1986",
    d: "1990",
    correct: "1986"
}, {
    id: 23,
    question: "Which team won fourth place at the 1994 World Cup?",
    a: "Bulgaria",
    b: "Italy",
    c: "Romania",
    d: "Sweden",
    correct: "Bulgaria"
}, {
    id: 24,
    question: "Which South American team won the 2021 Copa América?",
    a: "Argentina",
    b: "Brazil",
    c: "Chile",
    d: "Uruguay",
    correct: "Argentina"
}, {
    id: 25,
    question: "Which club has won the most Premier League titles (as of summer 2022)?",
    a: "Arsenal",
    b: "Everton",
    c: "Liverpool",
    d: "Manchester United",
    correct: "Manchester United"
}, {
    id: 26,
    question: "Which was the top club in 2020/2021 based on total revenue (644.9 million Euro)?",
    a: "Bayern Munich",
    b: "FC Barcelona",
    c: "Manchester City",
    d: "Real Madrid",
    correct: "Manchester City"
}, {
    id: 27,
    question: "Which team has the most consecutive UEFA Champions League match victories (as of summer 2022)?",
    a: "Barcelona",
    b: "Bayern Munich",
    c: "Manchester City",
    d: "Real Madrid",
    correct: "Bayern Munich"
}, {
    id: 28,
    question: "In which country would you find La Liga?",
    a: "Italy",
    b: "Mexico",
    c: "Portugal",
    d: "Spain",
    correct: "Spain"
}, {
    id: 29,
    question: "Which manager was awarded Premier Manager of the Month with four different clubs?",
    a: "Harry Redknapp",
    b: "David Moyes",
    c: "Roy Hodgson",
    d: "José Mourinho",
    correct: "Harry Redknapp"
},
{
    id: 30,
    question: "What year did Wayne Rooney score his 50th international goal?",
    a: "2013",
    b: "2014",
    c: "2015",
    d: "2016",
    correct: "2015"
},
{
    id: 31,
    question: "What is the minimum length of a football pitch?",
    a: "100 yards",
    b: "110 yards",
    c: "120 yards",
    d: "130 yards",
    correct: "100 yards"
}, {
    id: 32,
    question: "Alan Shearer was the top goal scorer in the Euro ’96 finals; how many goals did he score?",
    a: "4",
    b: "5",
    c: "6",
    d: "7",
    correct: "5"
}, {
    id: 33,
    question: "Which year did Phil Neville leave Manchester United to join Everton?",
    a: "2002",
    b: "2003",
    c: "2004",
    d: "2005",
    correct: "2005"
}, {
    id: 34,
    question: "In which year was the number of teams competing in a World Cup increased to 32?",
    a: "1990",
    b: "1994",
    c: "1998",
    d: "2002",
    correct: "1998"
}, {
    id: 35,
    question: "What position did Sir Alex Ferguson play during his football career?",
    a: "Goalie",
    b: "Defender",
    c: "Midfielder",
    d: "Striker",
    correct: "Striker"
}, {
    id: 36,
    question: "A match may not start or continue if either team has fewer than how many players?",
    a: "6 players",
    b: "7 players",
    c: "8 players",
    d: "9 players",
    correct: "7 players"
}, {
    id: 37,
    question: "Which Chelsea player scored the most goals in the Champions League (as of summer 2022)?",
    a: "Didier Drogba",
    b: "Frank Lampard",
    c: "John Terry",
    d: "Fernando Torres",
    correct: "Didier Drogba"
}, {
    id: 38,
    question: "How many England managers were there between 1947 and 1973?",
    a: "2",
    b: "3",
    c: "4",
    d: "5",
    correct: "2"
}, {
    id: 39,
    question: "Three teams have had eight FA Cup final defeats (as of summer 2022). Which one of these teams does not share this record?",
    a: "Chelsea",
    b: "Everton",
    c: "Liverpool",
    d: "Manchester United",
    correct: "Liverpool"
},
{
    id: 40,
    question: "How many players were sent off during the Battle of Santiago between Italy and Chile in 1962?",
    a: "2",
    b: "4",
    c: "6",
    d: "8",
    correct: "2"
},
{
    id: 41,
    question: "When did Pelé retire?",
    a: "1969",
    b: "1971",
    c: "1974",
    d: "1976",
    correct: "1974"
}, {
    id: 42,
    question: "Which football position requires the most running (based on an average distance covered of 11.2km)?",
    a: "Central Midfielders",
    b: "Full-Backs",
    c: "Strikers",
    d: "Wingers",
    correct: "Central Midfielders"
}, {
    id: 43,
    question: "What is the most common score line in a Premier League football match (2015/16 to 2019/20)?",
    a: "0-0",
    b: "1-0",
    c: "1-1",
    d: "2-1",
    correct: "1-0"
}, {
    id: 44,
    question: "Which English team has the most consecutive seasons in the top flight football league?",
    a: "Arsenal",
    b: "Everton",
    c: "Liverpool",
    d: "Manchester United",
    correct: "Arsenal"
}, {
    id: 45,
    question: "Which country has the highest number of ‘FIFA World Player of the Year’ winners?",
    a: "Argentina",
    b: "Brazil",
    c: "Italy",
    d: "Portugal",
    correct: "Brazil"
}, {
    id: 46,
    question: "Who is the only player to have won a trophy with both Liverpool and Manchester United?",
    a: "Peter Beardsley",
    b: "Steven Gerrard",
    c: "Paul Ince",
    d: "Michael Owen",
    correct: "Michael Owen"
}, {
    id: 47,
    question: "Which team has the most appearances in top flight football?",
    a: "Arsenal",
    b: "Aston Villa",
    c: "Everton",
    d: "Liverpool",
    correct: "Everton"
}, {
    id: 48,
    question: "What is the least amount of shots a team can take to win a penalty shootout?",
    a: "2",
    b: "3",
    c: "4",
    d: "5",
    correct: "3"
}, {
    id: 49,
    question: "Who won the golden boot award in the Premier League for the 2020/2021 season?",
    a: "Bruno Fernandes",
    b: "Harry Kane",
    c: "Mohamed Salah",
    d: "Jamie Vardy",
    correct: "Harry Kane"
},
{
    id: 50,
    question: "Which footballer’s wife was nicknamed 'Wagatha Christie'?",
    a: "Frank Lampard",
    b: "Cristiano Ronaldo",
    c: "Wayne Rooney",
    d: "Jamie Vardy",
    correct: "Wayne Rooney"
}
];

const rulesArea =  document.getElementById("rules");
const feedbackGifArea = document.getElementById("feedback-gif");
const showRulesButton = document.getElementById("show-rules");
const nextQuestionArea = document.getElementById("next-question-box")
const getResultsButton = document.getElementById("get-results")
const finalMessageArea = document.getElementById("final-message")
const questionOptionsArea = document.getElementById("question-options")
const leagueArea = document.getElementById("league")



//  https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
var randomElement = footballQuestions[Math.floor(Math.random() * footballQuestions.length)];

/**Run the game once the DOM content is loaded */
document.addEventListener("DOMContentLoaded", function () {
    runGame();
    showRulesButton.style.display = "none";
});

/** Activated when user clicks submit
 * Calculate answer and league. Add 1 to attempts
 * End game if attempts = 10
 * Hide rules area and show button to see rules again
 * Display next question box (if attempts <10)*/
function submitAnswer() {
    calculateAnswer();
    calculateLeague();
    addAttempt();
    rulesArea.style.display = "none";
    showRulesButton.style.display = "block";
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    let attempts = parseInt(document.getElementById("attempts").textContent);
    if (attempts == 10) {
        nextQuestionArea.style.display = "none";
        getResultsButton.style.display = "block";
    } else if (attempts > 10) {
        finalMessageArea.style.display = "block";
        finalMessageArea.innerHTML =
            `You have had too many attempts (more than 10): ${attempts}. <form><button type="button">Play Again</button></form>`;
        throw `Too many attempts: ${attempts}`;
    } else {
        nextQuestionArea.style.display = "block";
    }
}

/**
 * Insert random question / submit button
 * Hide unneccessary elements
 */
function runGame(e) {

    randomElement = footballQuestions[Math.floor(Math.random() * footballQuestions.length)];
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    feedbackGifArea.style.display = "none";
    finalMessageArea.style.display = "none";
    getResultsButton.style.display = "none";
    nextQuestionArea.style.display = "none";
    document.getElementById("question").textContent = randomElement.question;
    questionOptionsArea.innerHTML =
        `<form id="question-form" method="post">
                <p><input type="radio" id="${randomElement.a}" name="q1" value="${randomElement.a}" required="required">
                <label for "${randomElement.a}">${randomElement.a}</label><br>
                <input type="radio"" id="${randomElement.b}" name="q1" value="${randomElement.b}" required="required"> 
                <label for "${randomElement.b}">${randomElement.b}</label><br>
                <input type="radio" id="${randomElement.c}" name="q1" value="${randomElement.c}" required="required">
                <label for "${randomElement.c}">${randomElement.c}</label><br>
                <input type="radio" id="${randomElement.d}" name="q1" value="${randomElement.d}" required="required">
                <label for "${randomElement.d}">${randomElement.d}</label><br></p>
            <p><button type="button" id="submit-answer">Submit</button></p>
            </form>`;
    let footballForm = document.getElementById("submit-answer");
    footballForm.addEventListener('click', submitAnswer);
    footballForm.addEventListener('click', handleSubmit);
    let footballFormWhole = document.getElementById("question-form");
    footballFormWhole.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            submitAnswer();
            handleSubmit();
        }
    });

}

/**
 * see if radio value === correct answer
 * if yes, show correct message and score gif
 * if no, show wrong message and miss gif
 * all - remove options and submit button
 * show next question button
 */
function calculateAnswer() {
    let correctAnswer = randomElement.correct;
    let selectedAnswer = document.querySelector('input[name="q1"]:checked').value;
    // https://stackoverflow.com/questions/15839169/how-to-get-value-of-selected-radio-button
    if (correctAnswer == selectedAnswer) {
        addScore();
        showGoalGif();
        questionOptionsArea.innerHTML =
            `<h3 class="feedback miss-feedback">Well done, you scored! You chose the correct answer: ${randomElement.correct}.</h3>`;
    } else {
        questionOptionsArea.innerHTML =
            `<h3 class="feedback miss-feedback">Oh no - you missed! The correct answer is ${randomElement.correct}.</h3>`;
        showMissGif();
    }
}

/**show rules section, bring user to top of page and hide show rules button */
function showRules() {
    rulesArea.style.display = "block";
    // https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    showRulesButton.style.display = "none";
}
/** Hide rules and show button*/
function hideRules() {
    rulesArea.style.display = "none";
    showRulesButton.style.display = "block";
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
        leagueArea.innerText = "League 2";
    } else if (score === 4 || score === 5) {
        leagueArea.innerText = "League 1";
    } else if (score === 6 || score === 7) {
        leagueArea.innerText = "Championship";
    } else if (score === 8 || score === 9) {
        leagueArea.innerText = "Premier League";
    } else if (score === 10) {
        leagueArea.innerText = "Champions League";
    } else {
        leagueArea.innerText = "Grassroots";
    }
}

/**Remove questions/gifs/rules
 * Add feedback message based on score
 * Add button to play again
 */
function endGame() {
    // https://stackoverflow.com/questions/4147112/how-to-jump-to-top-of-browser-page
    scroll(0, 0);
    let score = parseInt(document.getElementById("score").innerText);
    feedbackGifArea.style.display = "none";
    document.getElementById("question-box").style.display = "none";
    rulesArea.style.display = "none";
    finalMessageArea.style.display = "block";
    if (score == 0) {
        displayFinalMessage("poor", "Out of your 10 attempts to score, you weren't able to convert any and so have ", "points. You are still playing for Grassroots Football. It looks like you need a bit more practice! Why not play again to see if you can do better?")
    } else if (score < 2) {
        displayFinalMessage("poor", "Out of your 10 attempts to score, you only managed to convert ", "and are still playing for Grassroots Football. It looks like you need a bit more practice! Why not play again to see if you can advance?")
    } else if (score < 4) {
        displayFinalMessage("medium", "Out of your 10 attempts to score, you managed to convert ", ". Well done on advancing up to League 2. Why not play again to see if you can advance even further?")
    } else if (score < 6) {
        displayFinalMessage("medium", "Out of your 10 attempts to score, you managed to convert ", ". Well done on advancing up to League 1. Why not play again to see if you can advance even further?")
    } else if (score < 8) {
        displayFinalMessage("medium", "Out of your 10 attempts to score, you managed to convert ", ". Well done on advancing up to the Championship. You're so close to playing in the Premier League - why not play again to see if you can advance even further")
    } else if (score < 10) {
        displayFinalMessage("good", "What a game! Out of your 10 attempts, you scored ", "times and have advanced all the way up to the Premier League! You are so close to the Champions League. Why not try again to see if you can make it to the very top?")
    } else if (score < 11) {
        displayFinalMessage("good", "Wow - you scored on all ", " attempts! You know your football and deserve your place in the Champions League. Why not try again to see if you can maintain your title?")
    } else {
        displayFinalMessage("poor", "Game over due to suspected cheating. Your score can't be more than 10: ", "Try again!")
        throw `Too many goals: ${score}`;
    }
}
function displayFinalMessage(class3, text1, text2) {
    let score = parseInt(document.getElementById("score").innerText);
    finalMessageArea.innerHTML = 
    `<p class="final-message ${class3}">${text1} ${score} ${text2}</p> <form><button id="play-again-button">Play Again</button></form>`
}




/**
 * Reset score/attempts to 0 and league to grassroots
 * insert random question?
 */
function playAgain() {
    document.getElementById("attempts").innerText = 0;
    document.getElementById("score").innerText = 0;
    leagueArea.innerText = "Grassroots";
    feedbackGifArea.style.display = "none";
    finalMessageArea.style.display = "none";
    rulesArea.style.display = "block";
    runGame();
}
/**Prevent forms from refreshing page */
function handleSubmit(event) {
     event.preventDefault();
}
/**Show a gif of a goal when correct answer is given*/
function showGoalGif() {
    let footballGoalGif = [{
        giphySource: "https://giphy.com/embed/PnPU9GhN3V7oVizSHG",
        giphyHref: "https://giphy.com/gifs/fcbarcelona-PnPU9GhN3V7oVizSHG"
    },
    {
        giphySource: "https://giphy.com/embed/Ns4RG72Ay6t0s",
        giphyHref: "https://giphy.com/gifs/fcbarcelona-skills-goals-Ns4RG72Ay6t0s"
    },
    {
        giphySource: "https://giphy.com/embed/CXOiDARnwHOG9ajo1s",
        giphyHref: "https://giphy.com/gifs/manutd-united-mufc-ggmu-CXOiDARnwHOG9ajo1s"
    },
    {
        giphySource: "https://giphy.com/embed/fYurZZ9YPdHMA31cWl",
        giphyHref: "https://giphy.com/gifs/manutd-manchester-united-mufc-ggmu-fYurZZ9YPdHMA31cWl"
    },
    {
        giphySource: "https://giphy.com/embed/iaOhvZuaVprxe",
        giphyHref: "https://giphy.com/gifs/sbnation-sbnation-robin-iaOhvZuaVprxe"
    },
    {
        giphySource: "https://giphy.com/embed/U8CZMODTWvST8YppXg",
        giphyHref: "https://giphy.com/gifs/nss-sports-U8CZMODTWvST8YppXg"
    },
    {
        giphySource: "https://giphy.com/embed/wZsYA7tcpsO8NY412w",
        giphyHref: "https://giphy.com/gifs/nss-sports-wZsYA7tcpsO8NY412w"
    },
    {
        giphySource: "https://giphy.com/embed/8cyro9Vo2FNhZ5mucq",
        giphyHref: "https://giphy.com/gifs/messi-goal-fk-8cyro9Vo2FNhZ5mucq"
    },
    {
        giphySource: "https://giphy.com/embed/4LVVqf0WhbkmVuL3eR",
        giphyHref: "https://giphy.com/gifs/fcbayern-penalty-lewandowski-robert-4LVVqf0WhbkmVuL3eR"
    },
    ];
    var randomGoalGif = footballGoalGif[Math.floor(Math.random() * footballGoalGif.length)];
    feedbackGifArea.style.display = "grid";
    // embed code from giphy.com
    feedbackGifArea.innerHTML = `<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="${randomGoalGif.giphySource}" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="${randomGoalGif.giphyHref}">via GIPHY</a></p>`;
}
/**Show a gif of someone missing a goal when an incorrect answer is given*/
function showMissGif() {
    let footballMissGif = [{
        giphySource: "https://giphy.com/embed/3ohhwyqTKZQB2C1VIs",
        giphyHref: "https://giphy.com/gifs/spursofficial-football-soccer-3ohhwyqTKZQB2C1VIs"
    },
    {
        giphySource: "https://giphy.com/embed/F1ywhxHnJj5T2",
        giphyHref: "https://giphy.com/gifs/roma-save-as-roma-szczesny-F1ywhxHnJj5T2"
    },
    {
        giphySource: "https://giphy.com/embed/hZvjPBn88kLcY",
        giphyHref: "https://giphy.com/gifs/league-slips-gifrific-hZvjPBn88kLcY"
    },
    {
        giphySource: "https://giphy.com/embed/3o6UBjSY4OO6jOpDRm",
        giphyHref: "https://giphy.com/gifs/fail-sporza-3o6UBjSY4OO6jOpDRm"
    },
    {
        giphySource: "https://giphy.com/embed/3oEjHRI8390hTUFs88",
        giphyHref: "https://giphy.com/gifs/univisiondeportes-chile-ca2016-copa-america-centenario-3oEjHRI8390hTUFs88"
    },
    {
        giphySource: "https://giphy.com/embed/85DHpkfxH3yeSFzng6",
        giphyHref: "https://giphy.com/gifs/nss-sports-milan-penalty-higuain-85DHpkfxH3yeSFzng6"
    },
    {
        giphySource: "https://giphy.com/embed/L4TegGTvLKLK9Z3sGs",
        giphyHref: "https://giphy.com/gifs/ElevenSportsBE-elevensports-elevensportsgif-forthefans-L4TegGTvLKLK9Z3sGs"
    },
    {
        giphySource: "https://giphy.com/embed/3oxRmFQQgyj9zEA4hi",
        giphyHref: "https://giphy.com/gifs/fail-sporza-3oxRmFQQgyj9zEA4hi"
    },
    ];
    var randomMissGif = footballMissGif[Math.floor(Math.random() * footballMissGif.length)];
    feedbackGifArea.style.display = "grid";
    // embed code from giphy.com
    feedbackGifArea.innerHTML = `<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="${randomMissGif.giphySource}" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="${randomMissGif.giphyHref}">via GIPHY</a></p>`;
}

let nextQuestionButton = document.getElementById("next-question");

nextQuestionButton.addEventListener('click',() => {    
    runGame();
    handleSubmit();
    hideRules();    
});
// nextQuestionButton.addEventListener('click', runGame);
// nextQuestionButton.addEventListener('click', handleSubmit);
// nextQuestionButton.addEventListener('click', hideRules);

let qform = document.getElementById('next-question-button')
qform.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        runGame();
        handleSubmit();
        hideRules()
    }
});



showRulesButton.addEventListener('click', showRules);

getResultsButton.addEventListener('click',() => {    
    endGame();
    handleSubmit();    
});
// getResultsButton.addEventListener('click', endGame);
// getResultsButton.addEventListener('click', handleSubmit);

let playAgainButton = document.getElementById("play-again-button");
playAgainButton.addEventListener('click', playAgain);