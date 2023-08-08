

const meniContainer = document.querySelector(".menu-container");
const close = document.querySelector(".close");
const headerTopIcon = document.querySelector('.header-right-top')

headerTopIcon.addEventListener('click' , function(){
  meniContainer.classList.toggle("menu-active");
  document.body.style.overflow = "hidden";
})

close.addEventListener("click", function () {
  meniContainer.classList.toggle("menu-active");
  document.body.style.overflow = "visible";
});