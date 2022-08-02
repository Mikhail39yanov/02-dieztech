import Swiper, { Navigation, Keyboard, Scrollbar, FreeMode } from 'swiper'

const meropriyatiaSlider = new Swiper('.meropriyatia-slider', {
  modules: [Navigation, Keyboard, Scrollbar, FreeMode,],
  // Свои классы
  wrapperClass: 'meropriyatia-slider__wrapper',
  slideClass: 'meropriyatia-slider__slide',
  spaceBetween: 30,
  slidesPerView: 1,
  grabCursor: true,
  speed: 800,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  // Скролл
  scrollbar: {
    el: '.meropriyatia-slider-scrollbar',
    dragClass: 'meropriyatia-slider__drag-scroll',
    // Возможность перетаскивать скролл
    draggable: true,
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
