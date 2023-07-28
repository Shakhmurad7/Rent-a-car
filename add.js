const accardion = document.querySelectorAll(".accardion-blok");
console.log(accardion);
for (i = 0; i < accardion.length; i++) {
  accardion[i].addEventListener("click", function () {
    this.classList.toggle("accardion-active");
  });
}

const menu = document.querySelector(".hamburger");
const meniContainer = document.querySelector(".menu-container");
const close = document.querySelector(".close");
menu.addEventListener("click", function () {
  meniContainer.classList.toggle("menu-active");
  document.body.style.overflow = "hidden";
});
close.addEventListener("click", function () {
  meniContainer.classList.toggle("menu-active");
  document.body.style.overflow = "visible";
});

fetch("http://localhost:3000/posts")
  .then((req) => req.json())
  .then((data) => {
    console.log(data);
  });

$(document).ready(function () {
  $("select").niceSelect();
});
