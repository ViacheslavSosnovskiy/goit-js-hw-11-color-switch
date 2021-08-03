const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const startBtn = document.querySelector('[data-value="start"]');
const stopBtn = document.querySelector('[data-value="stop"]');

startBtn.addEventListener("click", onStartChangeColor);
stopBtn.addEventListener("click", onStopChangeColor);

function startChangeColor() {
  console.log("start"); // ???
}

function stopChangeColor() {
  console.log("stop"); // ???
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColorBody() {
  body.style.backgroundColor = colors; // ???
}
