const swiper_thumbnail = new Swiper(".swiper_thumbnail", {
  slidesPerView: 3,
});
const swiper = new Swiper(".swiper_main", {
  loop: true,
  // autoplay: {
  //   delay: 2000,
  // },
  autoplay:false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper_thumbnail,
  },
});
