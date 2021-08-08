const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
  "#FBCEB1",
  "#B5B8B1",
  "#FF18ED",
  "#FCFF18",
  "#18FFD7",
  "#FF1838",
  "#FF7918",
  "#6618FF",
];

refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

refs.startBtn.addEventListener("click", onStartChangeColor);
refs.stopBtn.addEventListener("click", onStopChangeColor);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColorBody() {
  document.body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}

let intervalId = null;

function onStartChangeColor() {
  refs.startBtn.setAttribute("disabled", true);
  intervalId = setInterval(changeColorBody, 500);
}

function onStopChangeColor() {
  refs.startBtn.removeAttribute("disabled", true);
  clearInterval(intervalId);
}
