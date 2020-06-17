function cl(arg) {
  console.log(arg);
}

function Alpinist(name, country, summits) {
  this.name = name;
  this.country = country;
  this.summits = summits;
}

let kukuczka = new Alpinist(
  "Jerzy Kukuczka",
  "Poland",
  "Korona Himalajów i Karakorum"
);

let czapkins = new Alpinist("Tomasz Mackiewicz", "Poland", "Nanga Parbat");

let herzog = new Alpinist("Maurice Herzog", "France", "Annapurna");

cl(kukuczka);
cl(czapkins.name);
cl(herzog.summits);
