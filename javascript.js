const guess = document.querySelector(".guess");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const numScore = document.querySelector("#numScore");
const check = document.querySelector(".check");
let randNum = Math.floor(Math.random() * 100) + 1; 
const userGuess = document.querySelector(".userGuess");
const p1 = document.querySelector(".bottomLeft p:first-child");
let down = 10;

check.addEventListener("click", () => {
    if (down < 1) {
        p1.textContent = "You lose";
    } else {
        if (numScore.value < 0 || numScore.value > 100) {
            p1.textContent = "Out of bounds";
        } else if (randNum == numScore.value) {
            p1.textContent = "Correct";
            highscore.textContent = score.textContent;
        } else if (numScore.value < randNum) {
            p1.textContent = "Too low";
            down = down - 1; 
            score.textContent = down;
        } else if (numScore.value > randNum) {
            p1.textContent = "Too high";
            down = down - 1; 
            score.textContent = down;
        }
    }
});





