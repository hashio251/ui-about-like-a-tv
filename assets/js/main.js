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
// Channnels
// ======================
const date = new Date().now;

const loadingImages = [
  "assets/images/loading_1.jpg",
  "assets/images/loading_cage0.jpg",
  "assets/images/loading_cage1.jpg",
  "assets/images/loading_cage2.jpg",
  "assets/images/loading_cage3.jpg",
  "assets/images/loading_cage4.jpg",
  "assets/images/loading_cage5.jpg",
  "assets/images/loading_cage6.jpg",
  "assets/images/loading_cage7.jpg",
  "assets/images/loading_cage8.jpg",
  "assets/images/loading_cage9.jpg",
  "assets/images/loading_cage10.jpg",
  "assets/images/loading_success.jpg"
];

const WELCOME_IMAGE = "assets/images/welcome.jpg";

const channels = [
  {
    title: "ch1 about portfolio",
    image: "",
    url:"https://hashio251.github.io/index.html",
    description: "ch1 about portfolio"
  },
  {
    title: "ch2 about website",
    image: "",
    url:"https://hashio251.github.io/frontend/website/index.html",
    description: "ch2 about website"
  },
  {
    title: "ch3 about collection",
    image: "",
    url:"https://hashio251.github.io/frontend/collection/index.html",
    description: "ch3 about collection"
  },
  {
    title: "ch4 about figma",
    image: "",
    url:"https://www.figma.com/board/yDzidSITPcv3zB1YrIYiRK/hashio%E3%81%AE%E4%BD%9C%E5%93%81%E9%9B%86?node-id=6-212",
    description: "ch4 about figma"
  },
  {
    title: "ch5 about ps",
    image: "",
    url:"https://www.figma.com/board/yDzidSITPcv3zB1YrIYiRK/hashio%E3%81%AE%E4%BD%9C%E5%93%81%E9%9B%86?node-id=0-1",
    description: "ch5 about ps"
  },
  {
    title: "ch6 about ai",
    image: "",
    url:"https://www.figma.com/board/yDzidSITPcv3zB1YrIYiRK/hashio%E3%81%AE%E4%BD%9C%E5%93%81%E9%9B%86?node-id=3-234",
    description: "ch6 about ai"
  },
  {
    title: "ch7 about openprocessing",
    image: "",
    url:"https://openprocessing.org/user/532184/#sketches",
    description: "ch7 about openprocessing"
  },
  {
    title: "ch8",
    image: "",
    url:"",
    description: ""
  },
  {
    title: "ch9",
    image: "",
    url:"",
    description: ""
  }
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

  changeScreen(WELCOME_IMAGE);

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