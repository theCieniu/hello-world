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
    greeting = "Good evening!";
    break;
  case 18:
  case 17:
  case 16:
  case 15:
  case 14:
  case 13:
  case 12:
    greeting = "Good afternoon!";
    break;
  case 11:
  case 10:
  case 9:
  case 8:
  case 7:
  case 6:
  case 5:
    greeting = "Good morning!";
    break;
  case 4:
  case 3:
  case 2:
  case 1:
  case 0:
    greeting = "Good night!";
    break;
  default:
    greeting = "Hi!";
}

let greetElement = document.getElementById("greetings");
greetElement.textContent = greeting;
