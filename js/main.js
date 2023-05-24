let startButton = document.querySelector("#button-start");

startButton.addEventListener("click", function () {
  let min = document.getElementById("min");
  let max = document.getElementById("max");
  let randomNumberHtml = document.getElementById("randomNumber");
  if (+min.value === 0 || +max.value === 0) {
    randomNumberHtml.innerHTML = "son kiriting !";
    return;
  }
  // -------------------------------
  let random = (min, max) => {
    return Math.trunc(Math.random() * (max - min + 1) + min);
  };
  // -------------------------------
  let randomNumber = random(+min.value, +max.value);
  randomNumberHtml.innerHTML = randomNumber;
});
