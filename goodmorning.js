let today = new Date();
let hourNow = today.getHours();
//above code is from "JavaScript and jQuery" book by J. Duckett
var greeting = "Hi!"

if (hourNow > 19) {
  greeting = "Good evening!"
} else if (hourNow > 12) {
  greeting = "Good afternoon!"
} else if (hourNow > 5) {
  greeting = "Good morning!"
} else if (hourNow > 0) {
  greeting = "Good night!"
} else {
  greeting = "Hello!"
}

/*
I HAVE NO IDEA WHY MY SWITCH/CASE CODE DIDN'T WORK WHILE ABOVE IF/ELSE WORKS...

switch (hourNow) {
  case (hourNow > 19):
    greeting = "Good evening!"
    break;
  case (hourNow > 12):
    greeting = "Good afternoon!"
    break;
  case (hourNow > 5):
    greeting = "Good morning!"
    break;
  case (hourNow > 0):
    greeting = "Good night!"
    break;
  default:
    greeting = "Hello!"
    break;
}
*/

document.write("<h2>" + greeting + "</h2>")
