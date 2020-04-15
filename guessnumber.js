/* ========= CREATIVE JAVASCRIPT COURSE BY DEVED ============= */
/* ========= GUESS A NUMBER ====================================== */
let minMaxSubmit = document.getElementById("submitRandom");
let guessForm = document.getElementById("guessForm");
let randomNumber = 0

minMaxSubmit.addEventListener("click", (e) => {
  let minimal
  let mini = parseInt(document.getElementById("guess-min").value);
  let maximum  ;
  let maxi = parseInt(document.getElementById("guess-max").value);
  console.log(mini)
  console.log(maxi)

  randomNumber = Math.floor(Math.random() * (maxi - mini + 1) + mini);
  console.log(randomNumber)

  guessForm.classList.remove("hiddenElement")

  e.preventDefault()
  return randomNumber
})


let checkNumber = document.getElementById("submitGuessButton")
checkNumber.addEventListener("click", (f) => {
      let guess = document.getElementById("numberGuessInput").value;
      console.log(guess)
      if (randomNumber == guess) {
        console.log(`That's it, it's ${randomNumber}`);
        alert(`That's it, it's ${randomNumber}`)
      } else {
      let  writeMissed = `<br>It's not ${guess}, try again!`
      checkNumber.insertAdjacentHTML("afterend", writeMissed)
      f.preventDefault();
      }
})

/* =============================================================
The code based on a tutorial from The Creative JS Course by DevEd
https://developedbyed.com/courses/844150/lectures/15338720
===============================================================

function guessGame(){
  let randomNr = Math.floor(Math.random() * 10 + 1);
  let guess;
  do {
    guess = prompt("Guess a number between 1 and 10")
    console.log(guess, randomNr)
    if (guess > randomNr) {
      console.log("Too high")
    } else if (guess < randomNr) {
      console.log("Too low")
    }
    } while (randomNr != guess);
alert(`You've win! It's ${randomNr}!`)
}

guessGame()

*/
