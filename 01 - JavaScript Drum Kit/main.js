let btn = document.querySelectorAll(".keyss");
window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (key.dataset.key == e.keyCode) {
    key.classList.add("playing");
  } else {
    key.classList.remove("playing");
  }
});

window.addEventListener("keyup", (e) => {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (key.dataset.key == e.keyCode) {
    key.classList.remove("playing");
  }
});
