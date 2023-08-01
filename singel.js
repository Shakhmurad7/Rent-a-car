const Terms = document.querySelector(".Terms");
const features = document.querySelector(".features");

const sectionHeaders = document.querySelectorAll(".section-top h3");
const sectionContaionerNext = document.querySelector(
  ".section-contaioner-next"
);
const tabContent = document.querySelectorAll(".tabContent");

sectionHeaders.forEach((header) => {
  header.addEventListener("click", (e) => {
    const tabName = e.target.dataset.id;

    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "flex";


    for (i = 0; i < sectionHeaders.length; i++) {
      sectionHeaders[i].classList.remove("active");
      header.classList.add("active");
    }
  });
});


Terms.addEventListener("click" , function(){
  features.classList.toggle("active-fearures")
})
features.addEventListener("click" , function(){
  features.classList.toggle("active-fearures")
})
