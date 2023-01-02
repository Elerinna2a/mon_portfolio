const menu = document.querySelector(".nav__menu");
const openMenu = document.querySelector(".open__btn__menu");
const closeMenu = document.querySelector(".close__btn__menu");

openMenu.addEventListener("click", () => {
  menu.style.display = "flex";
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
});

const closeTheMenu = () => {
  menu.style.display = "none";
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
};

closeMenu.addEventListener("click", closeTheMenu);
