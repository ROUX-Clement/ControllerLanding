// Carousel

const items = document.querySelectorAll("img");
const nbSlide = items.length;
const suivant = document.querySelector(".right");
const precedent = document.querySelector(".left");
let count = 0;

function slideSuivante() {
  items[count].classList.remove("active");

  if (count < nbSlide - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add("active");
  console.log(count);
}
suivant.addEventListener("click", slideSuivante);

function slidePrecedente() {
  items[count].classList.remove("active");

  if (count > 0) {
    count--;
  } else {
    count = nbSlide - 1;
  }

  items[count].classList.add("active");
}
precedent.addEventListener("click", slidePrecedente);

function keyPress(e) {
  console.log(e);

  if (e.keyCode === 37) {
    slidePrecedente();
  } else if (e.keyCode === 39) {
    slideSuivante();
  }
}
document.addEventListener("keydown", keyPress);

// LightBox

const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

const images = document.querySelectorAll("img");
images.forEach((image) => {
  image.addEventListener("click", (e) => {
    lightbox.classList.add("active");
    const img = document.createElement("img");
    img.src = image.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(img);
  });
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove("active");
});

// Animation GreenSock

const navSpans = document.querySelectorAll("li span");
const medias = document.querySelectorAll(".medias");
const logo = document.querySelector(".logo");
const buy = document.querySelector(".acheter");

window.addEventListener("load", () => {
  const TL = gsap.timeline({ paused: true });

  TL.staggerFrom(
    navSpans,
    1,
    { top: -100, opacity: 0, ease: "power2.out" },
    0.8
  )
    .from(logo, 0.4, { transform: "scale(0)", ease: "power2.out" }, "-=2")
    .from(buy, 1, { transform: "scale(0)", ease: "elastic.out" }, "-=2")
    .from(medias, 1.5, { transform: "scale(0)", ease: "bounce.out" }, "-=2");

  TL.play();
});
