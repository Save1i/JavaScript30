let countDown;

const timerDisplay = document.querySelector(".display__time-left");
const customTimeMinutes = document.querySelector("[minutes]");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");

function timer(seconds) {
  // clear any axisting times
  clearInterval(countDown);

  const now = Date.now();
  const then = now + seconds * 1000;

  displayTimeLeft(seconds);
  displayEndTime(then);

  countDown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countDown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minuts = end.getMinutes();
  endTime.textContent = `Be back at ${hour}:${minuts < 10 ? "0" : ""}${minuts}`;
}

// timer(parseFloat(prompt()));

function startTimer() {
  const timeSec = this.dataset.time;
  console.log(this.dataset.time);
  timer(timeSec);
}

buttons.forEach((button) => button.addEventListener("click", startTimer));
document.customForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  console.log(mins);
  this.reset();
});
