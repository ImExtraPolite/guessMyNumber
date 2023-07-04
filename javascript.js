const guess = document.querySelector(".guess");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const numScore = document.querySelector("#numScore");
const check = document.querySelector(".check");
let randNum = Math.floor(Math.random() * 100) + 1; 
const userGuess = document.querySelector(".userGuess");

check.addEventListener("click", () => {
    // console.log(randNum);
    if (numScore.textContent < 0 || numScore.textContent > 100) {
        userGuess.textContent == "Out of bounds";
    } 
    
    // else if (randNum == numScore.textContent) {
    //     userGuess.textContent = "Correct";
    // } else if (randNum < numScore.textContent) {
    //     userGuess.textContent = "too high";
    // } 
});



