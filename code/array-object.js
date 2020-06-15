function cl(arg) {
  console.log(arg);
}

let alpinists = [
  "Tenzing Norgay Sherpa",
  "Edmund Hillary NZ",
  "Jerzy Kukuczka PL",
  "Wanda Rutkiewicz PL",
  "Andrzej Zawada PL",
  "Krzysztof Wielicki PL",
  "Wojciech Kurtyka PL",
  "Reinhold Messner IT",
  "Elizabeth Revol FR",
  "Tomasz Mackiewicz PL",
  "Simone Moro IT",
  "Rob Hall NZ",
  "Wanda Anonimowa",
];

cl("(array) Alpinists: " + alpinists);

//======== FIND AND FILTER ===========

let womanAlpinist = alpinists.find((name) => {
  return name.includes("Wanda");
});
cl("(find) Woman alpinist: " + womanAlpinist);

let polishAlpinists = alpinists.filter((name) => name.includes("PL"));
cl("(filter) Polish alpinists: " + polishAlpinists);

//===== SOME AND EVERY ==============
/* every returns true or false - are every item fullfiling the condition? 
good tool to check if everyting is ok with an array, 
aren't there any empty elements etc. */
let greatAlpinists1 = alpinists.every((name) => {
  return name.includes("PL");
});
cl("(every) Are all great alpinists from Poland? " + greatAlpinists1);

let greatAlpinists2 = alpinists.some((name) => {
  return name.includes("PL");
});
cl("(some) Are there any great alpinists from Poland? " + greatAlpinists2);

//if else ternary operator
let visitor = "alpinist";
let isVisitorAlpinist =
  visitor == "alpinist" ? "You are an alpinist" : "You are not an alpinist";
cl(isVisitorAlpinist);
