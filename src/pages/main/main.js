import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import {Header} from '/src/components/header/header.js'
import {Footer} from '/src/components/footer/footer.js'
import '/src/components/card-2/card-2.js';
import '/src/components/card-1/card-1.js';
import '/src/components/banner/banner.js';
import '/src/components/card-4/card-4.js';

import '/src/pages/main/_main.scss';

const swiper = new Swiper('.swiper-sec-1', {
  direction: 'horizontal',
  hashNavigation: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  autoplay: {
    delay: 500,
  },

  pagination: {
    el: '.swiper-pagination',
  },
  cssMode: true
});

const swiper2 = new Swiper('.swiper-sec-2', {
  slidesPerView: 4,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 500,
  },
  navigation: {
    nextEl: '.swiper-button-next',
  },
  cssMode: true
});


const swiper3 = new Swiper('.swiper-sec-3', {
  slidesPerView: 7,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 500,
  },
  navigation: {
    nextEl: '.swiper-button-next',
  },
  cssMode: true
});


const swiper4 = new Swiper('.swiper-sec-10', {
  slidesPerView: 4,
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 500,
  },
  cssMode: true
});