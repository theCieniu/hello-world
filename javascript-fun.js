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

/*
function activateItem() {
  theHeadline.innerHTML = this.innerHTML;
  for (i = 0; i < listItems.length; i++) {
    listItems[i].classList.remove("highlight");
  }
  this.classList.add("highlight")
}

for (i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", activateItem)
}*/

/*function activateItem() {
  alert("Click detected!")
}
for (i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", newHeadline)
}
*/




/* ========= 10 DAYS WITH JAVA SCRIPT TUTORIALS ============= */
var name = "Anonymaus"
function hello(name, favFood) {
  //alert("Hello there, I'm " + name + " and my favourite food is "+ favFood + " ! <O(/\)_")
}
document.addEventListener("scroll", hello(name, "cheese"))

function tripleMe(a) {
  return 3 * a
}

//alert(tripleMe(16))































/* this is the end */
