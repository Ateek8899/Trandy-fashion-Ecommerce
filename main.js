// Horizontal image slider
const imageSlider = document.getElementById("imageSlider");
const sliderPrev = document.querySelector(".slider .box:first-of-type");
const sliderNext = document.querySelector(".slider .box:last-of-type");

window.addEventListener("load", () => {
  const imageWidth = imageSlider.querySelector("img").offsetWidth + 30;

  sliderNext.addEventListener("click", () => {
    imageSlider.scrollBy({ left: imageWidth, behavior: "smooth" });
  });

  sliderPrev.addEventListener("click", () => {
    imageSlider.scrollBy({ left: -imageWidth, behavior: "smooth" });
  });
});

// ===== Slider 1 =====
const track1 = document.querySelector(".cards-track");
const prevBtn1 = document.querySelector(".prev-btn");
const nextBtn1 = document.querySelector(".next-btn");
const card1 = track1.querySelector(".card");
const gap1 = parseInt(getComputedStyle(track1).gap) || 0;
const cardWidth1 = card1.offsetWidth + gap1;
const visibleCards1 = 4;
let index1 = 0;

nextBtn1.addEventListener("click", () => {
  if (index1 < track1.children.length - visibleCards1) {
    index1++;
    track1.style.transform = `translateX(-${index1 * cardWidth1}px)`;
  }
});

prevBtn1.addEventListener("click", () => {
  if (index1 > 0) {
    index1--;
    track1.style.transform = `translateX(-${index1 * cardWidth1}px)`;
  }
});

// ===== Slider 2 =====
const track2 = document.querySelector(".cards-tracks");
const prevBtn2 = document.querySelector(".prev-btns");
const nextBtn2 = document.querySelector(".next-btns");
const card2 = track2.querySelector(".card");
const cardStyle2 = getComputedStyle(card2);
const gap2 = parseInt(cardStyle2.marginRight) || 20;
const cardWidth2 = card2.offsetWidth + gap2;
let position2 = 0;

nextBtn2.addEventListener('click', () => {
  const trackWidth2 = track2.scrollWidth;
  const containerWidth2 = track2.parentElement.offsetWidth;

  if (Math.abs(position2) + containerWidth2 < trackWidth2) {
    position2 -= cardWidth2;
    track2.style.transform = `translateX(${position2}px)`;
  }
});

prevBtn2.addEventListener('click', () => {
  if (position2 < 0) {
    position2 += cardWidth2;
    track2.style.transform = `translateX(${position2}px)`;
  }
});

// ===== Slider 3 =====
const track3 = document.querySelector(".cards-tracks-3");
const prevBtn3 = document.querySelector(".prev-btns-3");
const nextBtn3 = document.querySelector(".next-btns-3");
const card3 = track3.querySelector(".card");
const cardStyle3 = getComputedStyle(card3);
const gap3 = parseInt(cardStyle3.marginRight) || 20;
const cardWidth3 = card3.offsetWidth + gap3;
let position3 = 0;

nextBtn3.addEventListener('click', () => {
  const trackWidth3 = track3.scrollWidth;
  const containerWidth3 = track3.parentElement.offsetWidth;

  if (Math.abs(position3) + containerWidth3 < trackWidth3) {
    position3 -= cardWidth3;
    track3.style.transform = `translateX(${position3}px)`;
  }
});

prevBtn3.addEventListener('click', () => {
  if (position3 < 0) {
    position3 += cardWidth3;
    track3.style.transform = `translateX(${position3}px)`;
  }
});
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");

// ✅ Open sidebar when menu button is clicked
menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
});

// ✅ Close sidebar when close button is clicked
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

// ✅ Optional: Close sidebar if user clicks outside it
document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
    sidebar.classList.remove("active");
  }
});