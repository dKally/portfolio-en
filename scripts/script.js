const scrollBtn1 = document.querySelector("#scroll-btn-1");
const scrollBtn2 = document.querySelector("#scroll-btn-2");
const scrollBtn3 = document.querySelector("#scroll-btn-3");
const scrollBtn4 = document.querySelector("#scroll-btn-4");

const section1 = document.querySelector("#section-1");
const section2 = document.querySelector("#section-2");
const section3 = document.querySelector("#section-3");
const section4 = document.querySelector("#section-4");

let currentSectionNumber = 1;
let currentSection = section1;
let currentScrollBtn = scrollBtn1;
const body = document.querySelector("body");

let section2HasShowed = false;

let lastScrollTop = 0;

let scrolled = false;
let scrolledMobile = false;

window.addEventListener("load", function () {
  window.location.hash = "#section-1";
  //   console.log("loaded");
  try {
    section2.classList.remove("scroll-btn-active");
  } catch (error) {
    // do nothing
  }
  try {
    section3.classList.remove("scroll-btn-active");
  } catch (error) {
    // do nothing
  }
  try {
    section4.classList.remove("scroll-btn-active");
  } catch (error) {
    // do nothing
  }
});

window.addEventListener(
  "touchmove",
  function (event) {
    event.preventDefault();
  },
  { passive: false }
);

let resizeTimeout;
window.addEventListener("resize", function () {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    window.location.hash = currentSection;
  }, 300);
});

window.addEventListener("resize", function () {});

// console.log(currentSectionNumber)

function toggleSection(number) {
  if (number == currentSectionNumber) {
    return;
  }
  if (scrolled && scrolledMobile === false) {
    return;
  }

  scrolled = true;
  if (!scrolledMobile) {
    body.classList.add("overflow-hidden");

    setTimeout(() => {
      scrolled = false;
      body.classList.remove("overflow-hidden");
    }, 1100);
  }

  switch (number) {
    case 1:
      toggleToSection1();

      break;
    case 2:
      toggleToSection2();

      break;
    case 3:
      toggleToSection3();

      break;
    case 4:
      toggleToSection4();

      break;
    default:
      break;
  }
}

function toggleDownSection() {
  switch (currentSectionNumber) {
    case 1:
      toggleToSection2();
      break;
    case 2:
      toggleToSection3();
      break;
    case 3:
      toggleToSection4();
      break;
    default:
      break;
  }
}

function toggleUpSection() {
  // console.log(currentSectionNumber);
  switch (currentSectionNumber) {
    case 2:
      toggleToSection1();
      break;
    case 3:
      toggleToSection2();
      break;
    case 4:
      toggleToSection3();
      break;
    default:
      break;
  }
}

window.addEventListener("scroll", function () {
  if (scrolledMobile) {
    return;
  }
  let currentScroll = window.scrollY || document.documentElement.scrollTop;

  //    console.log('current scroll: ' + currentScroll)
  //    console.log('top scroll: ' + lastScrollTop);

  if (scrolled) {
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

    return;
  }
  scrolled = true;
  body.classList.add("overflow-hidden");

  setTimeout(() => {
    scrolled = false;
    body.classList.remove("overflow-hidden");
  }, 1000);

  if (currentScroll > lastScrollTop) {
    toggleDownSection();
    // console.log('Scroll para baixo');
  } else {
    toggleUpSection();
    // console.log('Scroll para cima');
  }
});

window.addEventListener("touchstart", function (event) {
  startY = event.touches[0].clientY;
  scrolledMobile = true;
});

window.addEventListener("touchend", function (event) {
  endY = event.changedTouches[0].clientY;

  // if (scrolled) return;

  const swipeDistance = startY - endY;
  if (Math.abs(swipeDistance) >= 1) {
    // scrolled = true;

    if (swipeDistance > 0) {
      toggleDownSection();
    } else {
      toggleUpSection();
    }

    // setTimeout(() => {
    //   scrolled = false;
    // }, 1000);
  }
});

function toggleToSection1() {
  currentSection = section1;
  currentSectionNumber = 1;
  window.location.hash = "#section-1";

  scrollBtn1.classList.add("scroll-btn-active");
  currentScrollBtn.classList.remove("scroll-btn-active");
  currentScrollBtn = scrollBtn1;

  // console.log(currentSectionNumber)
}

function toggleToSection2() {
  currentSection = section2;
  currentSectionNumber = 2;
  window.location.hash = "#section-2";

  rotateRight();
  scrollBtn2.classList.add("scroll-btn-active");
  currentScrollBtn.classList.remove("scroll-btn-active");
  currentScrollBtn = scrollBtn2;

  // console.log(currentSectionNumber)
}

function toggleToSection3() {
  currentSection = section3;
  currentSectionNumber = 3;
  window.location.hash = "#section-3";

  scrollBtn3.classList.add("scroll-btn-active");
  currentScrollBtn.classList.remove("scroll-btn-active");
  currentScrollBtn = scrollBtn3;

  // console.log(currentSectionNumber)
}

function toggleToSection4() {
  currentSection = section4;
  currentSectionNumber = 4;
  window.location.hash = "#section-4";

  scrollBtn4.classList.add("scroll-btn-active");
  currentScrollBtn.classList.remove("scroll-btn-active");
  currentScrollBtn = scrollBtn4;

  // console.log(currentSectionNumber)
}
