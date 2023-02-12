const videoPlayer = document.querySelector("#videoPlayer");
const fileInput = document.querySelector("#fileInput");
const forwardButton = document.querySelector(".fa-forward");
const backwardButton = document.querySelector(".fa-backward");
const playerContainer = document.querySelector(".player-container");

fileInput.addEventListener("change", function() {
  const file = this.files[0];
  videoPlayer.src = URL.createObjectURL(file);
  videoPlayer.load();
  videoPlayer.play();
});

forwardButton.addEventListener("click", function() {
  videoPlayer.currentTime += 10;
});

backwardButton.addEventListener("click", function() {
  videoPlayer.currentTime -= 10;
});

playerContainer.addEventListener("click", function() {
  playerContainer.classList.toggle("ambient-mode");
});

playerContainer.addEventListener("dblclick", function() {
  playerContainer.classList.toggle("dark-mode");
  playerContainer.classList.toggle("light-mode");
});
