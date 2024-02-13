const hh = document.querySelector(".hour-hand");
const mh = document.querySelector(".min-hand");
const sh = document.querySelector(".second-hand");
const deg = 6;

function clock() {
  setInterval(() => {
    const day = new Date();

    const hours = day.getHours() * 30;
    const minutes = day.getMinutes() * deg;
    const seconds = day.getSeconds() * deg;

    hh.style.transform = `rotate(${hours + minutes / 12}deg)`;
    mh.style.transform = `rotate(${minutes}deg)`;
    sh.style.transform = `rotate(${seconds}deg)`;
  }, 0);
}

clock();
