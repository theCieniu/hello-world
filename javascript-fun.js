document.title = "Draft";


/* ========= GREETINGS ============= */

let today = new Date();
let hourNow = today.getHours();
//above code is from "JavaScript and jQuery" book by J. Duckett
let greeting = "";

switch (hourNow) {
  case 23:
  case 22:
  case 21:
  case 20:
  case 19:
    greeting = "Good evening!"
    break;
  case 18:
  case 17:
  case 16:
  case 15:
  case 14:
  case 13:
  case 12:
    greeting = "Good afternoon!"
    break;
  case 11:
  case 10:
  case 9:
  case 8:
  case 7:
  case 6:
  case 5:
    greeting = "Good morning!"
    break;
  case 4:
  case 3:
  case 2:
  case 1:
  case 0:
    greeting = "Good night!"
    break;
  default:
    greeting = "Hi!"
}

let greetElement = document.getElementById("greetings");
greetElement.textContent = greeting


/* ========= JAVA SCRIPT IN 30 MINUTES TUTORIAL ============= */
var listItems = document.getElementById('list-items').getElementsByTagName('li')
var theButton = document.getElementById('list-button')
var theList = document.getElementById('list-items')
var theCounter = 1;
var theHeadline = document.getElementById('headline')

for (i = 0; i < listItems.length; i++) {
  listItems[i].innerHTML = "It's a kind of magic"
}

listItems[0].innerHTML = "This is first item"

theButton.addEventListener('click', newItem)

function newItem() {
  theList.innerHTML += "<li>Something new " + theCounter + "</li>";
  theCounter++
}

theList.addEventListener("click", newHeadline);

function newHeadline(l) {
  if (l.target.nodeName == "LI") {
    theHeadline.innerHTML = l.target.innerHTML;
    for (i = 0; i < l.target.parentNode.children.length; i++) {
      l.target.parentNode.children[i].classList.remove('highlight')
    };
    l.target.classList.add("highlight");
  }
}




/* ========= 10 DAYS WITH JAVA SCRIPT TUTORIALS ============= */
/* ========= TO DO APP ====================================== */
document.getElementById("js-test1").addEventListener("click", () => alert("Thanks for clicking"))

let todoForm = document.getElementById("todo-form")
let todoInput = document.getElementById("todo-input")
let todoList = document.getElementById("todo-list")

todoForm.addEventListener("submit", (e) => {
  e.preventDefault()
  createLi(todoInput.value)
})

function createLi(x) {
  let todoTask = `<li>${x} <button class="delete" onclick="deleteTask(this)">Delete</button></li>`
  todoList.insertAdjacentHTML("beforeend", todoTask)
  todoInput.value = ""
  todoInput.focus()
}

function deleteTask(doneTask) {
  doneTask.parentElement.remove()
}



/* ========= RANDOM NUMBER GENERATOR  ============= */

let randomForm = document.getElementById("random")

randomForm.addEventListener("submit", (e) => {
  let minimal = document.getElementById("range-min").value;
  let mini = parseInt(minimal);
  let maximum = document.getElementById("range-max").value;
  let maxi = parseInt(maximum);
  let randomResult = Math.floor(Math.random() * (maxi - mini + 1) + mini);
  let writeRandom = `<p>Your random number from ${mini} to ${maxi} is <strong>${randomResult}</strong>.</p>`;
  randomForm.insertAdjacentHTML("beforeend", writeRandom);
  e.preventDefault();
})





/* ========= CREATIVE JAVASCRIPT COURSE BY DEVED ============= */
/* ========= GUESS A NUMBER ====================================== */
let minMaxSubmit = document.getElementById("submitRandom");
let guessForm = document.getElementById("guessForm");
let randomNumber = 0

minMaxSubmit.addEventListener("click", (e) => {
  let minimal
  let mini = parseInt(document.getElementById("guess-min").value);
  let maximum;
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
    let writeMissed = `<br>It's not ${guess}, try again!`
    checkNumber.insertAdjacentHTML("afterend", writeMissed)
    f.preventDefault();
  }
})

/* =============================================================
The code below is based on a tutorial from The Creative JS Course by DevEd
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

/* ========= CREATIVE JAVASCRIPT COURSE BY DEVED ============= */
/* ========= ANOTHER TO DO APP BECAUSE WHY NOT  ============= */

let anotherList = document.getElementById("another-list");
let anotherButton = document.getElementById("another-button");
let anInput = document.getElementById("an-input")
let anItemNr = document.getElementById("an-item-number-display")
let anItemList = anotherList.children;
anItemNr.textContent = anItemList.length;

anotherButton.addEventListener("click", () => {
  //console.log(anInput.value);
  let aNewItem = document.createElement("li");
  aNewItem.textContent = anInput.value;
  anotherList.appendChild(aNewItem);
  anItemNr.textContent = anItemList.length;
  for (it of anItemList) {
    it.addEventListener("click", anDeleteItem)
  }
  anInput.value = "";
  anInput.focus();
})

function anDeleteItem(it) {
  it.stopPropagation();
  //console.log(it.target);
  it.target.remove();
  anItemNr.textContent = anItemList.length;
}





/* ========= CSS GRID AND THINGS I like ============= */

let lastGrid = document.getElementById("grid-h");
let gridLikes = document.querySelectorAll(".grid-like");

for (item of gridLikes) {
  item.addEventListener("click", discover)
}

function discover(e) {
  let i = e.target;
  lastGrid.classList.toggle("grid-opacity");
  i.classList.toggle("grid-opacity");
  lastGrid = i;
}



/* ========= ============================== ============= */

/* this is the end */
