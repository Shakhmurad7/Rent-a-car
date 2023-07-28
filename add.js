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

fetch("http://localhost:3000/posts")
  .then((req) => req.json())
  .then((data) => {
    console.log(data);
    data.forEach((elem) => {
      sectionCard.innerHTML += `
      <div class="card" data-aos="fade-down">
      <img src="${elem.img}" />

      <div class="card-text">
        <h2>Mercedes AMG GT</h2>
        <p>${elem.year}-ci il</p>
        <p><span>300 AZN/gün</span></p>
      </div>

      <div class="card-icon">
        <div class="card-item-icon">
          <img src="./img/Vector.svg" alt="" />
          <p>4.0L</p>
        </div>

        <div class="card-item-icon">
          <img src="./img/karobka.svg" alt="" />
          <p>Auto</p>
        </div>

        <div class="card-item-icon">
          <img src="./img/benzin.svg" alt="" />
          <p>Yanacaq</p>
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
