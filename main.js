import '/src/styles/style.scss';
import '/src/styles/scss/_reset.scss';
import pb from '/src/api/pocketbase.js';

// 웹 컴포넌트
import { Header } from '/src/components/header/l-header.js'
import { Footer } from '/src/components/footer/footer.js'

// 랜딩 버튼 컴포넌트
import '/src/components/rendingbutton/rendingbutton.js'


// 스와이퍼
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// 스와이퍼
document.addEventListener('DOMContentLoaded', function () {

  // 섹션2 슬라이드
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },

    speed: 6000, // 슬라이드 전환 속도
    slidesPerView: 1, // 화면에 표시할 슬라이드 수
    centeredSlides: true, // 슬라이드를 가운데 정렬
    spaceBetween: -485, // 이미지 간격

    breakpoints: {
      768: {
        speed: 4000,
        spaceBetween: -470, // 이미지 간격
      }
    }
  });


  // 섹션3 슬라이드
  const swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
    loop: true,

    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },

    speed: 6000, 
    slidesPerView: 1, 
    centeredSlides: true, 
    spaceBetween: -1110,

    // 반응형 
    breakpoints: {

      320: {
        spaceBetween: 150, // 이미지 간격
      },

      768: {
        speed: 4000,
        spaceBetween: -580, // 이미지 간격
      },

      1024: {
        spaceBetween: -280, // 이미지 간격
      }
    }
  });
});

