import '/src/pages/main/_main.scss';
import '/src/components/banner/_banner.scss';
import '/src/components/footer/_footer.scss';
import '/src/components/card-1/_card-1.scss';

const swiper = new Swiper('.swiper-sec-1', {
  direction: 'horizontal',
  hashNavigation: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  autoplay: true,
  autoplay: {
    delay: 500,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
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
});
