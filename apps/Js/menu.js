const menu = document.querySelector(".nav__menu");
const openMenu = document.querySelector(".open__btn__menu");
const closeMenu = document.querySelector(".close__btn__menu");
const about = document.getElementById("about");

// openMenu.addEventListener("click", () => {
//   menu.style.left = "0px";
//   openMenu.style.display = "none";
//   closeMenu.style.display = "block";
// });

// const closeTheMenu = () => {
//   menu.style.left = "-1024px";
//   openMenu.style.display = "block";
//   closeMenu.style.display = "none";
// };
// closeMenu.addEventListener("click", closeTheMenu);

// window.addEventListener("resize", function () {
//   if (window.innerWidth > 1024) {
//     openMenu.style.display = "none";
//   } else {
//     openMenu.style.display = "block";
//   }
// });

let menuOpen = false;
const linkAbout = document.querySelector("#aboutMenu");
linkAbout.addEventListener("click", () => {
  if (menuOpen) {
    closeTheMenu();
  }
  const about = document.querySelector("#about");
  about.scrollIntoView({ behavior: "smooth" });
});

const closeTheMenu = () => {
  menu.style.left = "-1024px";
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
  menuOpen = false;
};

closeMenu.addEventListener("click", closeTheMenu);

openMenu.addEventListener("click", () => {
  menu.style.left = "0px";
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
  menuOpen = true;
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 1024) {
    openMenu.style.display = "none";
    if (menuOpen) {
      closeTheMenu();
    }
  } else {
    openMenu.style.display = "block";
  }
});
