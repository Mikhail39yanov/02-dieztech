import Swiper, { Navigation, Pagination, Keyboard, Scrollbar, FreeMode } from 'swiper'

const categorySlider = new Swiper('.category-slider', {
  modules: [Navigation, Pagination, Keyboard, Scrollbar, FreeMode,],
  // Свои классы
  wrapperClass: 'category-slider__wrapper',
  slideClass: 'category-slider__slide',
  spaceBetween: 30,
  slidesPerView: 1,
  grabCursor: true,
  speed: 800,
  // keyboard: {
  //   enabled: true,
  //   onlyInViewport: true,
  // },
  navigation: {
    nextEl: '.category-slider-button-next',
    prevEl: '.category-slider-button-prev',
  },
  pagination: {
    el: '.category-slider-pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: 'category-slider-bullet',
    bulletActiveClass: 'category-slider-bullet--active',
  },
  breakpoints: {
    426: {
      slidesPerView: 1,
      // slidesPerGroup: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      // slidesPerGroup: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      // slidesPerGroup: 2,
      spaceBetween: 30,
    },
    1025: {
      slidesPerView: 4,
      // slidesPerGroup: 3,
      spaceBetween: 30,
    },
  },
})
