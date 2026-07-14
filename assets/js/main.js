// ======================
// State
// ======================
let isPowerOn = false;



// ======================
// DOM Elements
// ======================
const tvScreen = document.querySelector(".tv-display");

const powerOnButton = document.querySelector(".power-on");
const powerOffButton = document.querySelector(".power-off");

const channelButtons = document.querySelectorAll(".button");



// ======================
// Images
// ======================
const DEFAULT_IMAGE =
  "https://t3.ftcdn.net/jpg/02/67/34/78/240_F_267347838_Gf5fpCpVPqvTRuy9XftJHWEUmFbAKQLQ.jpg";

const images = [
  "https://hashio251.github.io/assets/images/gallery/flower.jpg",
  "https://hashio251.github.io/assets/images/gallery/fisshing&beer.jpg",
  "https://hashio251.github.io/assets/images/gallery/model.jpg",
  "https://hashio251.github.io/assets/images/gallery/aoi-coffe.jpg",
  "https://hashio251.github.io/assets/images/gallery/flower&butterfly.jpg",
  "https://hashio251.github.io/assets/images/gallery/aoi-cafe.jpg",
  "https://hashio251.github.io/assets/images/front/ai/gallery7.png",
  "https://hashio251.github.io/assets/images/production/portfolio.png",
  "https://hashio251.github.io/assets/images/production/z-axis.png",
];



// ======================
// Functions
// ======================
function changeScreen(imageUrl) {
  tvScreen.style.backgroundImage = `url(${imageUrl})`;
}

function updatePowerButtonStyle() {
  if (isPowerOn) {
    powerOnButton.style.backgroundColor = "brown";
    powerOffButton.style.backgroundColor = "gray";

    powerOnButton.style.color = "white";
    powerOffButton.style.color = "black";
  } else {
    powerOffButton.style.backgroundColor = "darkolivegreen";
    powerOnButton.style.backgroundColor = "gray";

    powerOnButton.style.color = "black";
    powerOffButton.style.color = "white";
  }
}

function turnOnTV() {
  isPowerOn = true;

  changeScreen(DEFAULT_IMAGE);

  updatePowerButtonStyle();
}

function turnOffTV() {
  isPowerOn = false;

  tvScreen.style.backgroundImage = "";

  updatePowerButtonStyle();
}



// ======================
// Event Listeners
// ======================
powerOnButton.addEventListener("click", turnOnTV);

powerOffButton.addEventListener("click", turnOffTV);

channelButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (!isPowerOn) return;

    changeScreen(images[index]);
  });
});