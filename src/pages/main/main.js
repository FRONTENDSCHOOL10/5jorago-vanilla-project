import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import {Header} from '/src/components/header/header.js'
import {Footer} from '/src/components/footer/footer.js'
import '/src/components/card-2/card-2.js';
import '/src/components/card-1/card-1.js';
import '/src/components/banner/banner.js';
import '/src/components/card-4/card-4.js';

import '/src/pages/main/_main.scss';

/* 배너 스와이퍼 */
const swiper = new Swiper('.swiper-sec-banner', {
  direction: 'horizontal',
  hashNavigation: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  autoplay: {
    delay: 5000,
  },

  pagination: {
    el: '.swiper-pagination',
  },
  cssMode: true
});

/* 티빙에서 꼭봐야하는 컨텐츠 스와이퍼 */
const swiper1 = new Swiper('.swiper-sec-1', {
  slidesPerView: 7,
  spaceBetween: 240,
  autoplay: {
    delay: 500,
  },
  loop: true,
  // cssMode: true
});


/* Quick VOD 스와이퍼 */
const swiper2 = new Swiper('.swiper-sec-2', {
  slidesPerView: 4,
  spaceBetween: 16,
  autoplay: {
    delay: 500,
  },
  loop: true,
  cssMode: true
});

/* 실시간 인기 프로그램 스와이퍼 */
const swiper3 = new Swiper('.swiper-sec-3', {
  slidesPerView: 7,
  spaceBetween: 200,
  autoplay: {
    delay: 500,
  },
  loop: true,
  cssMode: true
});



/* 이벤트 스와이퍼 */

const swiperEvent = new Swiper('.swiper-event', {
  slidesPerView: 2,
  spaceBetween: 200,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 2  ,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: -100
        }
  // cssMode: true
}
});


