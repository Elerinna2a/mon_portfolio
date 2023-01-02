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

// ========= intersection observer =========
let ratio = 0.3;
let options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

const handleIntersect = (entries, observer) => {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("reveal-visible");
      observer.unobserve(entry.target);
    }
  });
};
//
let observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll(".reveal").forEach(function (r) {
  observer.observe(r);
});
