// ======================
// State
// ======================
let isPowerOn = false;
let clockInterval = null;
let currentChannel = null;


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
const firstViewImage =   "assets/images/loading/loading_1.jpg";

const loadingImages = [
  "assets/images/loading/loading_1.jpg",
  "assets/images/loading/loading_1.jpg",
  "assets/images/loading/loading_1.jpg",
  "assets/images/loading/loading_1.jpg",
  "assets/images/loading/loading_1.jpg",
  "assets/images/loading/loading_1.jpg",
  "assets/images/loading/loading_1.jpg",
  "assets/images/loading/loading_cage0.jpg",
  "assets/images/loading/loading_cage1.jpg",
  "assets/images/loading/loading_cage2.jpg",
  "assets/images/loading/loading_cage3.jpg",
  "assets/images/loading/oading_cage4.jpg",
  "assets/images/loading/loading_cage5.jpg",
  "assets/images/loading/loading_cage6.jpg",
  "assets/images/loading/loading_cage7.jpg",
  "assets/images/loading/loading_cage8.jpg",
  "assets/images/loading/loading_cage9.jpg",
  "assets/images/loading/loading_cage10.jpg",
  "assets/images/loading/loading_success.jpg",
  "assets/images/loading/loading_success.jpg",
  "assets/images/loading/loading_success.jpg"
];

const WELCOME_IMAGE = "assets/images/welcome_enjoy.jpg";

const channels = [
  {
    title: "ch1 about portfolio",
    image: "assets/images/ui/portfolio-thumbnail.jpg",
    url:"https://hashio251.github.io/index.html",
    description: "ch1 about portfolio"
  },
  {
    title: "ch2 about website",
    image: "assets/images/ui/website-shumbnail.jpg",
    url:"https://hashio251.github.io/frontend/website/index.html",
    description: "ch2 about website"
  },
  {
    title: "ch3 about collection",
    image: "assets/images/ui/collection-thumbnail.jpg",
    url:"https://hashio251.github.io/frontend/collection/index.html",
    description: "ch3 about collection"
  },
  {
    title: "ch4 about figma",
    image: "assets/images/ui/figma-thumbnail.jpg",
    url:"https://www.figma.com/board/yDzidSITPcv3zB1YrIYiRK/hashio%E3%81%AE%E4%BD%9C%E5%93%81%E9%9B%86?node-id=6-212",
    description: "ch4 about figma"
  },
  {
    title: "ch5 about ps",
    image: "assets/images/ui/ps-thumbnail.jpg",
    url:"https://www.figma.com/board/yDzidSITPcv3zB1YrIYiRK/hashio%E3%81%AE%E4%BD%9C%E5%93%81%E9%9B%86?node-id=0-1",
    description: "ch5 about ps"
  },
  {
    title: "ch6 about ai",
    image: "assets/images/ui/ai-thumbnail.jpg",
    url:"https://www.figma.com/board/yDzidSITPcv3zB1YrIYiRK/hashio%E3%81%AE%E4%BD%9C%E5%93%81%E9%9B%86?node-id=3-234",
    description: "ch6 about ai"
  },
  {
    title: "ch7 about openprocessing",
    image: "assets/images/ui/op-shumbnail.jpg",
    url:"https://openprocessing.org/user/532184/#sketches",
    description: "ch7 about openprocessing"
  },
  {
    title: "ch8 about git hub",
    image: "https://as1.ftcdn.net/jpg/04/90/51/96/1000_F_490519649_qsokgPPBzCpGoSKAykf3gLmMuLev21rm.webp",
    url:"https://github.com/hashio251",
    description: "ch8"
  },
  {
    title: "ch9 about clock",
    type: "clock",
    description: "ch9 about clock"
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

  if (clockInterval) {
    clearInterval(clockInterval);
    clockInterval = null;
  }

  tvScreen.textContent = "";
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

function showClock() {

  tvScreen.style.backgroundImage = "none";

  function updateClock() {
    const now = new Date();
    tvScreen.textContent = now.toLocaleTimeString("ja-JP");
  }

  updateClock();

  if (clockInterval) {
    clearInterval(clockInterval);
  }

  clockInterval = setInterval(updateClock, 1000);
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

const channel = channels[index];

currentChannel = channel;

if (channel.type === "clock") {
  showClock();
} else {
  changeScreen(channel.image);
}
  });
});

tvScreen.addEventListener("click", () => {
  if (!currentChannel) return;

  if (!currentChannel.url) return;

  window.open(currentChannel.url, "_blank");
});