// ===========================
// BEFORE IMAGES
// ===========================

const beforeImages = [
  "./images/before/before-1.png",
  "./images/before/before-2.png",
  "./images/before/before-3.png",
  "./images/before/before-4.png",
  "./images/before/before-5.png",
  "./images/before/before-6.png",
];

// ===========================
// AFTER IMAGES
// ===========================

const afterImages = [
  "./images/after/after-1.png",
  "./images/after/after-2.png",
  "./images/after/after-3.png",
  "./images/after/after-4.png",
  "./images/after/after-5.png",
  "./images/after/after-6.png",
];

// ===========================
// ELEMENTS
// ===========================

const beforeImage = document.getElementById("before-image");
const beforePrev = document.getElementById("before-prev");
const beforeNext = document.getElementById("before-next");
const beforeDots = document.getElementById("before-dots");

// ===========================
// INDEX
// ===========================

let beforeIndex = 0;

// ===========================
// SHOW IMAGE
// ===========================

function showBeforeImage() {
  beforeImage.src = beforeImages[beforeIndex];

  const dots = document.querySelectorAll("#before-dots .dot");

  dots.forEach((dot) => dot.classList.remove("active"));

  dots[beforeIndex].classList.add("active");
}

// ===========================
// CREATE DOTS
// ===========================

beforeImages.forEach((image, index) => {
  const dot = document.createElement("span");

  dot.classList.add("dot");

  if (index === 0) {
    dot.classList.add("active");
  }

  dot.addEventListener("click", function () {
    beforeIndex = index;

    showBeforeImage();
  });

  beforeDots.appendChild(dot);
});

// ===========================
// SHOW FIRST IMAGE
// ===========================

showBeforeImage();

// ===========================
// NEXT BUTTON
// ===========================

beforeNext.addEventListener("click", function () {
  beforeIndex++;

  if (beforeIndex >= beforeImages.length) {
    beforeIndex = 0;
  }

  showBeforeImage();
});

// ===========================
// PREVIOUS BUTTON
// ===========================

beforePrev.addEventListener("click", function () {
  beforeIndex--;

  if (beforeIndex < 0) {
    beforeIndex = beforeImages.length - 1;
  }

  showBeforeImage();
});
// ===========================
// AFTER ELEMENTS
// ===========================

const afterImage = document.getElementById("after-image");
const afterPrev = document.getElementById("after-prev");
const afterNext = document.getElementById("after-next");
const afterDots = document.getElementById("after-dots");

let afterIndex = 0;
function showAfterImage() {
  afterImage.src = afterImages[afterIndex];

  const dots = document.querySelectorAll("#after-dots .dot");

  dots.forEach((dot) => dot.classList.remove("active"));

  dots[afterIndex].classList.add("active");
}
afterImages.forEach((image, index) => {
  const dot = document.createElement("span");

  dot.classList.add("dot");

  if (index === 0) {
    dot.classList.add("active");
  }

  dot.addEventListener("click", function () {
    afterIndex = index;

    showAfterImage();
  });

  afterDots.appendChild(dot);
});

showAfterImage();
afterNext.addEventListener("click", function () {
  afterIndex++;

  if (afterIndex >= afterImages.length) {
    afterIndex = 0;
  }

  showAfterImage();
});
afterPrev.addEventListener("click", function () {
  afterIndex--;

  if (afterIndex < 0) {
    afterIndex = afterImages.length - 1;
  }

  showAfterImage();
});
console.log(afterImage);
console.log(afterPrev);
console.log(afterNext);
console.log(afterDots);
// ===========================
// HIDE HEADER ON SCROLL
// ===========================

// ===========================
// HIDE HEADER
// ===========================

const header = document.querySelector("header");

let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 100) {
    header.classList.add("header-hidden");
  } else {
    header.classList.remove("header-hidden");
  }

  lastScroll = currentScroll;
});