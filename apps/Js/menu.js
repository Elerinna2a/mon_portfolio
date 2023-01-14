const menu = document.querySelector(".nav__menu");
const openMenu = document.querySelector(".open__btn__menu");
const closeMenu = document.querySelector(".close__btn__menu");
const about = document.getElementById("about");

openMenu.addEventListener("click", () => {
  menu.style.left = "0px";
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
});

const closeTheMenu = () => {
  menu.style.left = "-1024px";
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
  if (about) {
    window.location.href = "#about";
  }
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
