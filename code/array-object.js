function cl(arg) {
  console.log(arg);
}

// ========== FILTERING ALPINISTS =====================

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
  //"Wanda Anonimowa",
];

let parentElementAlpinists = document.querySelector("#alpinists span");
let filterAlpinistsPolishBtn = document.querySelector(
  "#alpinists button.polish"
);
let filterAlpinistsAllBtn = document.querySelector("#alpinists button.all");
let polishAlpinists = alpinists.filter((name) => name.includes("PL"));

function writingAlpinists(alpinistsArray) {
  let alpinistsHtml = document.createElement("ul");
  alpinistsArray.forEach((i) => {
    let text = document.createTextNode(i);
    let mountain = document.createElement("li");
    mountain.appendChild(text);
    alpinistsHtml.appendChild(mountain);
  });
  parentElementAlpinists.appendChild(alpinistsHtml);
}
writingAlpinists(alpinists);

filterAlpinistsPolishBtn.addEventListener("click", () => {
  parentElementAlpinists.innerHTML = "";
  writingAlpinists(polishAlpinists);
  filterAlpinistsPolishBtn.classList.add("invisible");
  filterAlpinistsAllBtn.classList.remove("invisible");
});

filterAlpinistsAllBtn.addEventListener("click", () => {
  parentElementAlpinists.innerHTML = "";
  writingAlpinists(alpinists);
  filterAlpinistsAllBtn.classList.add("invisible");
  filterAlpinistsPolishBtn.classList.remove("invisible");
});

// ========== SOTING SUMMITS =====================
let summits = [
  { name: "Lhotse", elevation: 8516 },
  { name: "Everest", elevation: 8848 },
  { name: "K2", elevation: 8641 },
  { name: "Rysy", elevation: 2499 },
  { name: "Nanga Parbat", elevation: 8126 },
  { name: "Annapurna", elevation: 8091 },
];

let parentElementSummits = document.querySelector("#summits span");
let sortSummitsBtnLow = document.querySelector("#summits button.lowest");
let sortSummitsBtnHigh = document.querySelector("#summits button.highest");

function createSummits() {
  let summitsHtml = document.createElement("ol");
  summits.forEach((i) => {
    let text = document.createTextNode(i.name + ": " + i.elevation + " m ");
    let mountain = document.createElement("li");
    mountain.appendChild(text);
    summitsHtml.appendChild(mountain);
  });
  parentElementSummits.appendChild(summitsHtml);
}

createSummits();

sortSummitsBtnLow.addEventListener("click", () => {
  parentElementSummits.innerHTML = "";
  summits.sort((a, b) => a.elevation - b.elevation);
  createSummits();
});

sortSummitsBtnHigh.addEventListener("click", () => {
  parentElementSummits.innerHTML = "";
  summits.sort((a, b) => b.elevation - a.elevation);
  createSummits();
});

/* ===== JUST SOME NOTES FOR MYSELF =====

let polishAlpinists = alpinists.filter((name) => name.includes("PL"));
//cl("(filter) Polish alpinists: " + polishAlpinists);

//===== SOME AND EVERY ==============
every returns true or false - are every item fullfiling the condition? 
good tool to check if everyting is ok with an array, 
aren't there any empty elements etc. 
let greatAlpinists1 = alpinists.every((name) => {
  return name.includes("PL");
});
//cl("(every) Are all great alpinists from Poland? " + greatAlpinists1);

let greatAlpinists2 = alpinists.some((name) => {
  return name.includes("PL");
});
//cl("(some) Are there any great alpinists from Poland? " + greatAlpinists2);

//if else ternary operator
let visitor = "alpinist";
let isVisitorAlpinist =
  visitor == "alpinist" ? "You are an alpinist" : "You are not an alpinist";
//cl(isVisitorAlpinist);

// SORTING
alpinists.sort();
//cl("(sort) Sorted by alphabet: " + alpinists); */
