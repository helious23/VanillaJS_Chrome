const body = document.querySelector("body");

const IMG_NUMBER = 5;

const paintImage = (imgNumber) => {
  const image = new Image();
  image.src = `./images/${imgNumber}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
};

const genRandom = () => {
  const number = Math.floor(Math.random() * IMG_NUMBER) + 1;
  return number;
};

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
