const timerAtScreen = document.querySelector(".timer");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");
const container = document.querySelector(".container");
let seconds = 0;
let timer;

function getTimeFromSeconds(segundos) {
  let hour = new Date(segundos * 1000);

  return hour.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "GMT",
  });
}

function startClock() {
  timer = setInterval(function () {
    seconds++;
    timerAtScreen.innerHTML = getTimeFromSeconds(seconds);
  }, 1000);
}

document.addEventListener("click", function (e) {
  const el = e.target;

  if (el.classList.contains("start")) {
    timerAtScreen.classList.remove("paused");
    clearInterval(timer);
    startClock();
  }

  if (el.classList.contains("reset")) {
    clearInterval(timer);
    timerAtScreen.innerHTML = "00:00:00";
    seconds = 0;
    timerAtScreen.classList.remove('paused')
  }

  if (el.classList.contains("pause")) {
    clearInterval(timer);
    timerAtScreen.classList.add("paused");
  }
});

// start.addEventListener("click", function (event) {
//   if (!called) {
//     startClock();
//     called = true;
//   }
// });

// pause.addEventListener("click", function (event) {
//   if (called) {
//     clearInterval(timer);
//     timerAtScreen.style.color = "red";
//     called = false;
//     paused = true;
//   }
// });

// reset.addEventListener("click", function (event) {
//   if (called || paused) {
//     clearInterval(timer);
//     timerAtScreen.innerHTML = "00:00:00";
//     seconds = 0;
//     timerAtScreen.style.color = "black";
//     called = false;
//     paused = false;
//   }
// });
