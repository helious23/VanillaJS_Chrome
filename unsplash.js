const body = document.querySelector("body");
const ACCESS_KEY = "Qh6TRLwZ3tKATlBD1HZHalJNEiKjM05hHxuwymwqM_I";

const getImage = (imgNumber) => {
  fetch(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`)
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      const image = new Image();
      const bgimage = json[imgNumber];
      console.log(bgimage);
      const backgroundImage = bgimage.urls.full;
      image.src = backgroundImage;
      image.classList.add("bgImage");
      body.prepend(image);
    });
};

const genRandom = () => {
  const number = Math.floor(Math.random() * 10);
  return number;
};

function init() {
  const randomNumber = genRandom();
  getImage(randomNumber);
}

init();
