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
const now = Date.now();
const firstViewImage =   "assets/images/loading_1.jpg";

const loadingImages = [
  "assets/images/loading_1.jpg",
  "assets/images/loading_1.jpg",
  "assets/images/loading_1.jpg",
  "assets/images/loading_1.jpg",
  "assets/images/loading_1.jpg",
  "assets/images/loading_1.jpg",
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
  "assets/images/loading_success.jpg",
  "assets/images/loading_success.jpg",
  "assets/images/loading_success.jpg"
];

const WELCOME_IMAGE = "assets/images/welcome.jpg";

const channels = [
  {
    title: "ch1 about portfolio",
    image: "https://as1.ftcdn.net/v2/jpg/16/35/56/20/1000_F_1635562014_fOnN9qkIkTRHt2CAtMZe9GUY7wiCpnyp.jpg",
    url:"https://hashio251.github.io/index.html",
    description: "ch1 about portfolio"
  },
  {
    title: "ch2 about website",
    image: "https://as2.ftcdn.net/v2/jpg/06/20/72/59/1000_F_620725999_DkEzjt1dDWSTGwSNNAo4xTN6TffQjSHa.jpg",
    url:"https://hashio251.github.io/frontend/website/index.html",
    description: "ch2 about website"
  },
  {
    title: "ch3 about collection",
    image: "https://as2.ftcdn.net/v2/jpg/03/88/89/75/1000_F_388897532_oX60vTQtoqmjE77txvTOuaDWw8wXuVKY.jpg",
    url:"https://hashio251.github.io/frontend/collection/index.html",
    description: "ch3 about collection"
  },
  {
    title: "ch4 about figma",
    image: "https://as1.ftcdn.net/v2/jpg/20/61/14/80/1000_F_2061148019_zd8XXgFNqSnbL5tGeGOS084G2xCHNHyS.webp",
    url:"https://www.figma.com/board/yDzidSITPcv3zB1YrIYiRK/hashio%E3%81%AE%E4%BD%9C%E5%93%81%E9%9B%86?node-id=6-212",
    description: "ch4 about figma"
  },
  {
    title: "ch5 about ps",
    image: "https://as1.ftcdn.net/v2/jpg/20/14/36/62/1000_F_2014366236_59UNoyHJBU99C6x8lJTnoeAQNsb9kNp3.jpg",
    url:"https://www.figma.com/board/yDzidSITPcv3zB1YrIYiRK/hashio%E3%81%AE%E4%BD%9C%E5%93%81%E9%9B%86?node-id=0-1",
    description: "ch5 about ps"
  },
  {
    title: "ch6 about ai",
    image: "https://as2.ftcdn.net/v2/jpg/18/89/19/79/1000_F_1889197901_m4I9ilnwagK9L2UltSmCC4DWAOJc123W.jpg",
    url:"https://www.figma.com/board/yDzidSITPcv3zB1YrIYiRK/hashio%E3%81%AE%E4%BD%9C%E5%93%81%E9%9B%86?node-id=3-234",
    description: "ch6 about ai"
  },
  {
    title: "ch7 about openprocessing",
    image: "https://as1.ftcdn.net/v2/jpg/04/90/51/96/1000_F_490519655_gsswVAXQtfFwm76Ozz0geFoba9IoaZAT.jpg",
    url:"https://openprocessing.org/user/532184/#sketches",
    description: "ch7 about openprocessing"
  },
  {
    title: "ch8",
    image: "https://as1.ftcdn.net/jpg/04/90/51/96/1000_F_490519649_qsokgPPBzCpGoSKAykf3gLmMuLev21rm.webp",
    url:"",
    description: "ch8"
  },
  {
    title: "ch9",
    image: now,
    url:"",
    description: "ch9"
  }
];




// ======================
// Display Times
// ======================
const FIRST_VIEW_TIME = 300;
const LOADING_INTERVAL = 300;
const WELCOME_TIME = 1000;



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

  // changeScreen(WELCOME_IMAGE);

  updatePowerButtonStyle();
}

function loadingTV() {
  setTimeout(() => {
    changeScreen(firstViewImage);
  }, FIRST_VIEW_TIME);

  loadingImages.forEach((image, index) => {
    setTimeout(() => {
      changeScreen(image);
    }, FIRST_VIEW_TIME + index * LOADING_INTERVAL);
  });

  setTimeout(() => {
    changeScreen(WELCOME_IMAGE);
  }, FIRST_VIEW_TIME + loadingImages.length * LOADING_INTERVAL);
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

powerOnButton.addEventListener("click", loadingTV);

powerOffButton.addEventListener("click", turnOffTV);

channelButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (!isPowerOn) return;

    changeScreen(channels[index].image);
  });
});