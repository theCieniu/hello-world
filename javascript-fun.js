document.title = "Draft";


/* ========= GREETINGS ============= */

let today = new Date();
let hourNow = today.getHours();
//above code is from "JavaScript and jQuery" book by J. Duckett
let greeting = "";

switch(hourNow) {
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
  default: greeting = "Hi!"
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




/* this is the end */
