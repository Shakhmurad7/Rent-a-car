const Terms = document.querySelector(".Terms");
const features = document.querySelector(".features");


const id = new URLSearchParams(window.location.search).get("id");
const swiperSlideImages = document.querySelectorAll('.swiper_main .swiper-slide img')
const swiperSlideImg   = document.querySelectorAll('.swiper_thumbnail .swiper-slide img')
const mySlides = document.querySelectorAll(".mySlides img")
const demo = document.querySelectorAll(".demo")



fetch(`https://rent-a-cart.vercel.app/posts/${id}`).then((res)=> res.json()).then((data)=> {
  console.log(data);
  SetSingleItemData(data)
}).catch((error) => console.log(error))

function SetSingleItemData(data) {
  for (let i = 0; i < 4; i++) {
    swiperSlideImages[i].src = data.img
    swiperSlideImg[i].src = data.img
    mySlides[i].src = data.img
    demo[i].src = data.img
  }
}


const sectionHeaders = document.querySelectorAll(".section-top h3");
const sectionContaionerNext = document.querySelector(
  ".section-contaioner-next"
);
const tabContent = document.querySelectorAll(".tabContent");


sectionHeaders.forEach((header) => {
  tabContent[0].style.display = "flex";
  sectionHeaders[0].classList.add("active");
  header.addEventListener("click", (e) => {
    const tabName = e.target.dataset.id;
  

    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "flex";

    for (i = 0; i < sectionHeaders.length; i++) {
      sectionHeaders[i].classList.remove("active");
    }
    header.classList.add("active");
  });
});



// Open the Modal
function openModal(number) {
  console.log(number);
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
