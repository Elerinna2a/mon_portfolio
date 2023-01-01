// const menu = document.querySelector(".nav__menu1");
// const openMenu = document.querySelector("#open-btn");
// const closeMenu = document.querySelector("#close-btn");

// openMenu.addEventListener("click", () => {
//   menu.style.display = "flex";
//   openMenu.style.display = "none";
//   closeMenu.style.display = "block";
// });

// const closeTheMenu = () => {
//   menu.style.display = "none";
//   openMenu.style.display = "flex";
//   closeMenu.style.display = "none";
// };

// closeMenu.addEventListener("click", closeTheMenu);

//  ========== slide img ============
//  initialisation des variable
var i = 0;
var images = ["/img/img1.jpg", "/img/img2.png", "/img/img3.jpg"];
var time = 3000;

// Definition de la fonction permettant le slide en boucle
// qui se base sur le tableau d'images fait plus haut

function changeImg() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  // setTimeout qui permet d'implementer un timer
  //   & qui relance la fonction en mode recursif avec la variable time
  setTimeout("changeImg()", time);
}
//  lancement du slide au chargement de la page
window.onload = changeImg;
