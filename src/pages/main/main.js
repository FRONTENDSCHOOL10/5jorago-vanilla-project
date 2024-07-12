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
    delay: 2000,
  },

  pagination: {
    el: '.swiper-pagination',
  },
  cssMode: true
});

/* 티빙에서 꼭봐야하는 컨텐츠 스와이퍼 */
const swiper1 = new Swiper('.article--swiper1', {
   keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 6,
  spaceBetween: 16,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  // cssMode: true
});


/* Quick VOD 스와이퍼 */
const swiper2 = new Swiper('.article--swiper2', {
   keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  // slidesPerView: 3,
  // spaceBetween: 10,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  // cssMode: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: -60
    },
    640: {
      slidesPerView: 4,
      spaceBetween: -20
    },
    768: {
      slidesPerView: 5,
      spaceBetween: -19
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 240
        }
}
});

/* 실시간 인기 프로그램 스와이퍼 */
const swiper3 = new Swiper('.article--swiper3', {
   keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  slidesPerView: 6,
  spaceBetween: 16,
  loop: true,
  // cssMode: true
  breakpoints: {
    320: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 7,
      spaceBetween: 16
    },
    768: {
      slidesPerView: 6,
      spaceBetween: -170
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 10
        }
}});


/* 오직 티빙에만 있어요 스와이퍼 */
const swiper5 = new Swiper('.article--swiper5', {
   keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  // slidesPerView: 5,
  spaceBetween: -50,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 6
    },
    640: {
      slidesPerView: 4,
      spaceBetween: -300
    },
    768: {
      slidesPerView: 4,
      spaceBetween: -180
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 10
        }
  }
  // cssMode: true,
});



/* 이벤트 스와이퍼 */

const swiperEvent = new Swiper('.swiper-event', {
   keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
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


