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
