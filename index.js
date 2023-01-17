let slidePosition = 0;
const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clickTime = 0;
let timesClicked = 0;
let slides = document.getElementsByClassName("carousel_item");
let totalSlides = slides.length;

let nextBtn = document.getElementById("btn_next"),
  prevBtn = document.getElementById("btn_prev");

nextBtn.addEventListener("click", function () {
  moveToNextSlide();
});
prevBtn.addEventListener("click", function () {
  moveToPrevSlide();
});

function updateslidePosition() {
  for (let slide of slides) {
    slide.classList.remove("corusel_item---visible");
    slide.classList.add("corusel_item---hidden");
  }
  slides[slidePosition].classList.add("corusel_item---visible");
}
function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateslidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  updateslidePosition();
}

loveMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  const x = e.clientX;
  const y = e.clientY;

  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);

  times.innerHTML = ++timesClicked;

  setTimeout(() => heart.remove(), 1000);
};
