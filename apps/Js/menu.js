const menu = document.querySelector(".nav__menu");
const openMenu = document.querySelector(".open__btn__menu");
const closeMenu = document.querySelector(".close__btn__menu");
const about = document.getElementById("about");

const closeTheMenu = () => {
  menu.style.left = "-1024px";
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
  menuOpen = false;
};

closeMenu.addEventListener("click", closeTheMenu);

let menuOpen = false; // Initialise la variable menuOpen à false pour indiquer que le menu est fermé

const linkAbout = document.querySelector("#aboutMenu"); // Sélectionne l'élément de menu "à propos"
linkAbout.addEventListener("click", () => {
  // Ajoute un écouteur d'événement de clic à l'élément de menu
  if (menuOpen) {
    // Si le menu est ouvert
    closeTheMenu(); // Appelle la fonction closeTheMenu pour fermer le menu
  }
  const about = document.querySelector("#about"); // Sélectionne l'élément de section "à propos"
  about.scrollIntoView({ behavior: "smooth" }); // Fait défiler la page vers l'élément de section "à propos"
});

openMenu.addEventListener("click", () => {
  // Ajoute un écouteur d'événement de clic à l'élément d'ouverture de menu
  menu.style.left = "0px"; // Déplace le menu vers la gauche de l'écran
  openMenu.style.display = "none"; // Masque l'élément d'ouverture de menu
  closeMenu.style.display = "block"; // Affiche l'élément de fermeture de menu
  menuOpen = true; // Met à jour la variable menuOpen pour indiquer que le menu est maintenant ouvert
});

window.addEventListener("resize", function () {
  // Ajoute un écouteur d'événement de redimensionnement de fenêtre
  if (window.innerWidth > 1024) {
    // Si la largeur de la fenêtre est supérieure à 1024px
    openMenu.style.display = "none"; // Masque l'élément d'ouverture de menu
    if (menuOpen) {
      // Si le menu est ouvert
      closeTheMenu(); // Appelle la fonction closeTheMenu pour fermer le menu
    }
  } else {
    openMenu.style.display = "block"; // Affiche l'élément d'ouverture de menu
  }
});
