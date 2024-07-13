import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { insertLast, getNode } from 'kind-tiger';
import {Header} from '/src/components/header/header.js'
import {Footer} from '/src/components/footer/footer.js'
import '/src/components/card-2/card-2.js';
import '/src/components/card-1/card-1.js';
import '/src/components/card-3/card-3.js';
import '/src/components/banner/banner.js';
import '/src/components/card-4/card-4.js';
// import {Header, Footer, card2,card1,banner,card4} from './index.js';
import '/src/pages/main/_main.scss';
import pb from '/src/api/pocketbase.js';
import getPbImageURL from '../../../api/getPbImageURL';


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
});


/* Quick VOD 스와이퍼 */
const swiper2 = new Swiper('.article--swiper2', {
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
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





/*  */
const swiper4= new Swiper('.article--swiper4', {
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
    320: {
      slidesPerView: 2,
      spaceBetween: -50
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 16
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 16
        }
  }
});



/* 오직 티빙에만 있어요 스와이퍼 */
const swiper5 = new Swiper('.article--swiper5', {
    keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  // slidesPerView: 5,
  spaceBetween: -50,
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

const swiperEvent = new Swiper('.article__swiper--events', {
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 60
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: -30
        }
}
});



/* 이미지 추가 */

async function renderCard5(){
  const data = await pb.collection('main_only_taing').getFullList();

for(let i = 0; i< data.length ; i ++) {
  const dataObj = data[i];
  
  const template = `
  <div class="swiper-slide article__swiper5--slide${i}">
    <a href="/src/pages/main/">
    <img src="${getPbImageURL(dataObj)}" alt="${dataObj.title}" />
    </a>
  </div>
  `
  insertLast(`.article--swiper5 .swiper-wrapper`, template)
}

}

renderCard5();



async function renderEvent(){
  const data2 = await pb.collection('main_events').getFullList();

for(let i = 0; i< data2.length ; i ++) {
  const dataObj2 = data2[i];
  
  const template = `
  <div class="swiper-slide article__swiper6--slide${i}">
    <a href="/src/pages/main/">
    <img src="${getPbImageURL(dataObj2)}" alt="${dataObj2.title}" />
    </a>
  </div>
  `


  insertLast('.article__swiper--events .swiper-wrapper', template)
}
}

renderEvent();