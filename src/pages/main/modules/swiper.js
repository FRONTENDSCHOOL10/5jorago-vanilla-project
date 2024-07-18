import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

/* 배너 스와이퍼 */
const swiper = new Swiper('.top-banner--swiper', {
  direction: 'horizontal',
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
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
    clickable: true,
    position: 'top',
    type: 'bullets',
  },
  cssMode: true,
});
const stopButton = document.querySelector('.slide-btn i');
let isPlaying = true;

stopButton.addEventListener('click', function () {
  if (isPlaying) {
    swiper.autoplay.stop();
    stopButton.classList.remove('fa-pause');
    stopButton.classList.add('fa-play');
  } else {
    swiper.autoplay.start();
    stopButton.classList.remove('fa-play');
    stopButton.classList.add('fa-pause');
  }
  isPlaying = !isPlaying;
});

/* 티빙에서 꼭봐야하는 컨텐츠 스와이퍼 */
const swiper1 = new Swiper('.article--swiper1', {
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 6,
  spaceBetween: 4,
  breakpoints: {
    360: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    630: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 7,
      spaceBetween: 2,
    },
    1024: {
      slidesPerView: 7,
      spaceBetween: 8,
    },
  },
});

/* Quick VOD 스와이퍼 */
const swiper2 = new Swiper('.article--swiper2', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    360: {
      slidesPerView: 2,
      spaceBetween: -40,
    },
    630: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 2,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 2,
    },
    1366: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

/* 실시간 인기 프로그램 스와이퍼 */
const swiper3 = new Swiper('.article--swiper3', {
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 6,
  spaceBetween: 4,
  breakpoints: {
    360: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    630: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 7,
      spaceBetween: 2,
    },
    1024: {
      slidesPerView: 7,
      spaceBetween: 8,
    },
  },
});

/* 인기 라이브 채널 */
const swiper4 = new Swiper('.article--swiper4', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  /*   slidesPerView: 4,
  spaceBetween: 16, */
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
  },
  cssMode: true,
  breakpoints: {
    360: {
      slidesPerView: 2,
      spaceBetween: -40,
    },
    630: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 2,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 2,
    },
    1366: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

/* 오직 티빙에만 있어요 스와이퍼 */
const swiper5 = new Swiper('.article--swiper5', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  // slidesPerView: 5,
  spaceBetween: -50,
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 6,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: -300,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: -180,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },
  // cssMode: true,
});

/* 이벤트 스와이퍼 */

const swiperEvent = new Swiper('.article__swiper--events', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  slidesPerView: 3,
  spaceBetween: 2,
  breakpoints: {
    360: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 5,
      spaceBetween: 60,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 150,
    },
  },
});

const watchedSwiper = new Swiper('.watched-content__container', {
  autoplay: {
    delay: 5000,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  autoplay: {
    delay: 5000,
  },
  slidesPerView: 6,
  spaceBetween: 4,
  breakpoints: {
    360: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    630: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 7,
      spaceBetween: 2,
    },
    1024: {
      slidesPerView: 7,
      spaceBetween: 8,
    },
  },
});
