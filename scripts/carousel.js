const arrowRight = document.querySelector(".arrow-right");
const arrowLeft = document.querySelector(".arrow-left");

const project1 = document.querySelector(".project-1");
const project2 = document.querySelector(".project-2");
const project3 = document.querySelector(".project-3");
const project4 = document.querySelector(".project-4");

let projectActive = 2;

let position1 = 1;
let position2 = 2;
let position3 = 3;

let rotating = false;

arrowRight.addEventListener("click", () => {
  rotateLeft();
});

arrowLeft.addEventListener("click", () => {
  rotateRight();
});

function removeAnimationClasses() {
  project1.classList.remove("project-position-2-to-3");
  project1.classList.remove("project-position-3-to-4");
  project1.classList.remove("project-position-4-to-1");
  project1.classList.remove("project-position-1-to-2");

  project1.classList.remove("project-position-3-to-2");
  project1.classList.remove("project-position-4-to-3");
  project1.classList.remove("project-position-1-to-4");
  project1.classList.remove("project-position-2-to-1");

  project2.classList.remove("project-position-2-to-3");
  project2.classList.remove("project-position-3-to-4");
  project2.classList.remove("project-position-4-to-1");
  project2.classList.remove("project-position-1-to-2");

  project2.classList.remove("project-position-3-to-2");
  project2.classList.remove("project-position-4-to-3");
  project2.classList.remove("project-position-1-to-4");
  project2.classList.remove("project-position-2-to-1");

  project3.classList.remove("project-position-2-to-3");
  project3.classList.remove("project-position-3-to-4");
  project3.classList.remove("project-position-4-to-1");
  project3.classList.remove("project-position-1-to-2");

  project3.classList.remove("project-position-3-to-2");
  project3.classList.remove("project-position-4-to-3");
  project3.classList.remove("project-position-1-to-4");
  project3.classList.remove("project-position-2-to-1");

  project4.classList.remove("project-position-2-to-3");
  project4.classList.remove("project-position-3-to-4");
  project4.classList.remove("project-position-4-to-1");
  project4.classList.remove("project-position-1-to-2");

  project4.classList.remove("project-position-3-to-2");
  project4.classList.remove("project-position-4-to-3");
  project4.classList.remove("project-position-1-to-4");
  project4.classList.remove("project-position-2-to-1");
}

function rotateRight() {
  if (rotating) {
    return;
  }
  rotating = true;

  switch (projectActive) {
    case 1:
      projectActive = 4;

      project1.classList.remove("project-active");
      project2.classList.remove("project-position-3");
      project3.classList.remove("project-position-4");
      project4.classList.remove("project-position-1");

      project1.classList.add("project-position-3");
      project1.classList.add("project-position-2-to-3");

      project2.classList.add("project-position-4");
      project2.classList.add("project-position-3-to-4");

      project3.classList.add("project-position-1");
      project3.classList.add("project-position-4-to-1");

      project4.classList.add("project-active");
      project4.classList.add("project-position-1-to-2");

      setTimeout(() => {
        rotating = false;
        removeAnimationClasses();
      }, 2000);

      break;

    case 2:
      projectActive = 1;

      project1.classList.remove("project-position-1");
      project2.classList.remove("project-active");
      project3.classList.remove("project-position-3");
      project4.classList.remove("project-position-4");

      project1.classList.add("project-active");
      project1.classList.add("project-position-1-to-2");

      project2.classList.add("project-position-3");
      project2.classList.add("project-position-2-to-3");

      project3.classList.add("project-position-4");
      project3.classList.add("project-position-3-to-4");

      project4.classList.add("project-position-1");
      project4.classList.add("project-position-4-to-1");

      setTimeout(() => {
        rotating = false;
        removeAnimationClasses();
      }, 2000);
      break;

    case 3:
      projectActive = 2;

      project1.classList.remove("project-position-4");
      project2.classList.remove("project-position-1");
      project3.classList.remove("project-active");
      project4.classList.remove("project-position-3");

      project1.classList.add("project-position-1");
      project1.classList.add("project-position-4-to-1");

      project2.classList.add("project-active");
      project2.classList.add("project-position-1-to-2");

      project3.classList.add("project-position-3");
      project3.classList.add("project-position-2-to-3");

      project4.classList.add("project-position-4");
      project4.classList.add("project-position-3-to-4");

      setTimeout(() => {
        rotating = false;
        removeAnimationClasses();
      }, 2000);
      break;

    case 4:
      projectActive = 3;

      project1.classList.remove("project-position-3");
      project2.classList.remove("project-position-4");
      project3.classList.remove("project-position-1");
      project4.classList.remove("project-active");

      project1.classList.add("project-position-4");
      project1.classList.add("project-position-3-to-4");

      project2.classList.add("project-position-1");
      project2.classList.add("project-position-4-to-1");

      project3.classList.add("project-active");
      project3.classList.add("project-position-1-to-2");

      project4.classList.add("project-position-3");
      project4.classList.add("project-position-2-to-3");

      setTimeout(() => {
        rotating = false;
        removeAnimationClasses();
      }, 2000);
      break;
  }
}

function rotateLeft() {
  if (rotating) {
    return;
  }
  rotating = true;

  switch (projectActive) {
    case 1:
      projectActive = 2;

      project1.classList.remove("project-active");
      project2.classList.remove("project-position-3");
      project3.classList.remove("project-position-4");
      project4.classList.remove("project-position-1");

      project1.classList.add("project-position-1");
      project1.classList.add("project-position-2-to-1");

      project2.classList.add("project-active");
      project2.classList.add("project-position-3-to-2");

      project3.classList.add("project-position-3");
      project3.classList.add("project-position-4-to-3");

      project4.classList.add("project-position-4");
      project4.classList.add("project-position-1-to-4");

      setTimeout(() => {
        rotating = false;
        removeAnimationClasses();
      }, 2000);
      break;

    case 2:
      projectActive = 3;

      project1.classList.remove("project-position-1");
      project2.classList.remove("project-active");
      project3.classList.remove("project-position-3");
      project4.classList.remove("project-position-4");

      project1.classList.add("project-position-4");
      project1.classList.add("project-position-1-to-4");

      project2.classList.add("project-position-1");
      project2.classList.add("project-position-2-to-1");

      project3.classList.add("project-active");
      project3.classList.add("project-position-3-to-2");

      project4.classList.add("project-position-3");
      project4.classList.add("project-position-4-to-3");

      setTimeout(() => {
        rotating = false;
        removeAnimationClasses();
      }, 2000);
      break;

    case 3:
      projectActive = 4;

      project1.classList.remove("project-position-4");
      project2.classList.remove("project-position-1");
      project3.classList.remove("project-active");
      project4.classList.remove("project-position-3");

      project1.classList.add("project-position-3");
      project1.classList.add("project-position-4-to-3");

      project2.classList.add("project-position-4");
      project2.classList.add("project-position-1-to-4");

      project3.classList.add("project-position-1");
      project3.classList.add("project-position-2-to-1");

      project4.classList.add("project-active");
      project4.classList.add("project-position-3-to-2");

      setTimeout(() => {
        rotating = false;
        removeAnimationClasses();
      }, 2000);
      break;

    case 4:
      projectActive = 1;

      project1.classList.remove("project-position-3");
      project2.classList.remove("project-position-4");
      project3.classList.remove("project-position-1");
      project4.classList.remove("project-active");

      project1.classList.add("project-active");
      project1.classList.add("project-position-3-to-2");

      project2.classList.add("project-position-3");
      project2.classList.add("project-position-4-to-3");

      project3.classList.add("project-position-4");
      project3.classList.add("project-position-1-to-4");

      project4.classList.add("project-position-1");
      project4.classList.add("project-position-2-to-1");

      setTimeout(() => {
        rotating = false;
        removeAnimationClasses();
      }, 2000);
      break;
  }
}
