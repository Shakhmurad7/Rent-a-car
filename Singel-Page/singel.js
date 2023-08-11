const Terms = document.querySelector(".Terms");
const features = document.querySelector(".features");

const id = new URLSearchParams(window.location.search).get("id");
const swiperSlideImages = document.querySelectorAll(
  ".swiper-slide .swiper-slider-img "
);
const swiperSlideImg = document.querySelectorAll(
  ".swiper_thumbnail .swiper-slide img"
);
const mySlides = document.querySelectorAll(".mySlides img");
const demo = document.querySelectorAll(".demo");
const mainrightP = document.querySelector(".main-right p");
const mainrighth2 = document.querySelector(".main-right h2");
const mainrighth3 = document.querySelector(".main-right h3");
const sectionTextColom = document.querySelectorAll('.section-text-col span')
const mainTextRow = document.querySelectorAll('.main-text-row .opaciti-p')
;


fetch(`https://rent-a-cart.vercel.app/posts/${id}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    SetSingleItemData(data);
  })
  .catch((error) => console.log(error));

function SetSingleItemData(data) {

  demo.forEach((element,i) => {
    element.src = data.img[i].img
  });
  
  mySlides.forEach((element,i) => {
    element.src = data.img[i].img
  });
  
  swiperSlideImg.forEach((element,i) => {
    element.src = data.img[i].img
  });


  swiperSlideImages.forEach((element,i) => {
      element.src=data.img[i].img
       console.log(element);
  });

  
  // swiperSlideImages.forEach((element,i) => {
  //   element.src = data.img[i].img
  // });
  

       mainrightP.innerHTML = data.class;
       mainrighth3.innerHTML = `${data.price} AZN/gun `;
       mainrighth2.innerHTML = data.name;
     
       sectionTextColom[0].innerHTML = data.year
       sectionTextColom[1].innerHTML = data.class
       sectionTextColom[2].innerHTML = data.korobka
       sectionTextColom[3].innerHTML = `${data.price} AZN/gun `
       sectionTextColom[4].innerHTML = `${data.motor}L `

       mainTextRow[0].innerHTML = `${data.price} AZN/gun`
       mainTextRow[1].innerHTML = `${(data.price)-(data.price/10)} AZN/gun`
       mainTextRow[2].innerHTML = `${(data.price)-parseInt(data.price/3)} AZN/gun`
 
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
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
