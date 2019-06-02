document.title = "Draft";


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
document.getElementById("js-test1").addEventListener("click", () => alert("Thanks for clicking"))

let theForm = document.getElementById("todo-form")

theForm.addEventListener("submit", (e) => {
  e.preventDefault()
    alert("it works")
  })






















/* this is the end */
