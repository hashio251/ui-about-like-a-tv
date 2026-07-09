// power
let isPowerOn = false;
const powerOn = document.querySelector('.power-on');
const powerOff = document.querySelector('.power-off');

// display
const tv = document.querySelector('.tv-display');

// buttons
const buttons = document.querySelectorAll('.button');
const images = [
  'https://hashio251.github.io/assets/images/gallery/flower.jpg',
  'https://hashio251.github.io/assets/images/gallery/fisshing&beer.jpg',
  'https://hashio251.github.io/assets/images/gallery/model.jpg',
  'https://hashio251.github.io/assets/images/gallery/aoi-coffe.jpg',
  'https://hashio251.github.io/assets/images/gallery/flower&butterfly.jpg',
  'https://hashio251.github.io/assets/images/gallery/aoi-cafe.jpg',
  'https://hashio251.github.io/assets/images/front/ai/gallery7.png',
  'https://hashio251.github.io/assets/images/production/production1.png',
  'https://hashio251.github.io/assets/images/production/production2.png'
];


powerOn.addEventListener('click', () => {
  tv.style.backgroundImage = `url(https://t3.ftcdn.net/jpg/02/67/34/78/240_F_267347838_Gf5fpCpVPqvTRuy9XftJHWEUmFbAKQLQ.jpg)`;
  powerOn.style.backgroundColor = 'brown';
  powerOff.style.backgroundColor = 'gray';
  powerOn.style.color = 'white';
  powerOff.style.color = 'black'
  isPowerOn = true;
});

powerOff.addEventListener('click', () => {
  tv.style.backgroundImage = '';
  powerOff.style.backgroundColor = 'darkolivegreen';
  powerOn.style.backgroundColor = 'gray';
  powerOn.style.color = 'black';
  powerOff.style.color = 'white';
  isPowerOn = false;
});

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (isPowerOn) {
      tv.style.backgroundImage = `url(${images[index]})`;
    }
  });
});