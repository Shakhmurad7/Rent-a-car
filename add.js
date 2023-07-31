const accardion = document.querySelectorAll(".accardion-blok");
const sectionCard = document.querySelector(".section-card");

console.log(sectionCard);
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

fetch("https://rent-a-cart.vercel.app/posts")
  .then((req) => req.json())
  .then((data) => {
    console.log(data);
    data.forEach((elem) => {
      sectionCard.innerHTML += `
      <div class="card" data-aos="fade-down">
      <img src="${elem.img}" />

      <div class="card-text">
        <h2>${elem.name}</h2>
        <p>${elem.year} il</p>
        <p><span>${elem.price} AZN/gun</span></p>
      </div>

      <div class="card-icon">
        <div class="card-item-icon">
          <img src="./img/Vector.svg" alt="" />
          <p>${elem.motor}L</p>
        </div>

        <div class="card-item-icon">
          <img src="./img/karobka.svg" alt="" />
          <p>${elem.korobka}</p>
        </div>

        <div class="card-item-icon">
          <img src="./img/benzin.svg" alt="" />
          <p>${elem.fuel}</p>
        </div>
      </div>
      <div class="section-btn-a-card">
        <a href="">Ətraflı</a>
      </div>
    </div>
      `;
    });
  });

$(document).ready(function () {
  $("select").niceSelect();
});
