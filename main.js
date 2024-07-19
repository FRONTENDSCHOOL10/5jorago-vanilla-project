import '/src/styles/style.scss';
import '/src/styles/scss/_reset.scss';
import pb from '/src/api/pocketbase.js';
import '/src/components/loading/loading.js';

// 웹 컴포넌트
import { Header } from '/src/components/header/l-header.js';
import { Footer } from '/src/components/footer/footer.js';

// 랜딩 버튼 컴포넌트
import '/src/components/rendingbutton/rendingbutton.js';

// 스와이퍼
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// GSAP 애니메이션 -------------------------------
import { gsap } from 'gsap';
import defaultAuthData from '/src/api/defaultAuth.js';

gsap.from(
  ['.section-1__text-box', '.button1', '.text-box', '.section-3__swiper-box'],
  {
    opacity: 0,
    y: 50, // 아래에서 위로 올라오는 애니메이션
    duration: 1,
    stagger: 0.6, // 올라오는 카드 간의 시간 간격
  }
);

const { isAuth } = JSON.parse(localStorage.getItem('auth'));
if (!isAuth) {
  localStorage.setItem('auth', JSON.stringify(defaultAuthData));
}

// 랜딩 버튼 페이지 이동 함수 -------------------------------
document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelectorAll('.button');

  function moveToPage() {
    window.location.href = '/src/pages/login/index.html';
  }

  button.forEach((button) => {
    button.addEventListener('click', moveToPage);
  });
});

// 상단 스와이퍼 -------------------------------
async function topSwiper() {
  // 두 개의 이미지 데이터를 비동기적으로 가져옴
  const data = await pb.collection('render_contents').getOne('i0vjd5h4d763hk2');
  const data2 = await pb
    .collection('render_contents')
    .getOne('rki6i5rdc9u7mnr');
  const swiperWrapper = document.querySelector('.swiper-wrapper');

  let swiper; // Swiper 인스턴스 변수

  // 이미지 데이터를 기반으로 슬라이드를 로드하는 함수
  function loadImages(imageData) {
    swiperWrapper.innerHTML = ''; // 기존 이미지 초기화

    for (let i = 0; i < imageData.img.length; i++) {
      const template = `
        <div class="swiper-slide" 
             style="transition-timing-function: linear;">
          <img src="${import.meta.env.VITE_PB_API}/files/${imageData.collectionId}/${imageData.id}/${imageData.img[i]}" alt="">
        </div>
      `;
      swiperWrapper.insertAdjacentHTML('beforeend', template);
    }
  }

  const SWIPER_OPTIONS = {
    direction: 'horizontal',
    loop: true,
    speed: 6000,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: -485,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        spaceBetween: -5,
      },
      768: {
        speed: 8000,
        spaceBetween: -470,
      },
    },
    transition: {
      duration: 0,
      timingFunction: 'linear',
    },
  };

  // Swiper를 초기화하는 함수
  function initializeSwiper() {
    return new Swiper('.swiper', SWIPER_OPTIONS);
  }

  // 이미지 경로를 업데이트하고 Swiper를 재설정하는 함수
  function updateAndResetSwiper(imageData) {
    updateImagePaths(imageData); // 이미지 경로 업데이트

    if (swiper) {
      swiper.destroy(true, true); // 기존 Swiper 인스턴스 파기
    }

    swiper = initializeSwiper(); // Swiper 새로 초기화
  }

  // 이미지 경로를 업데이트하는 함수
  function updateImagePaths(imageData) {
    const images = swiperWrapper.querySelectorAll('.swiper-slide img');

    images.forEach((img, i) => {
      img.src = `${import.meta.env.VITE_PB_API}/files/${imageData.collectionId}/${imageData.id}/${imageData.img[i]}`;
    });
  }

  // 처음 로드 시 적절한 이미지를 로드하고 Swiper를 초기화
  loadImages(data); // 초기에는 큰 화면의 이미지를 로드
  swiper = initializeSwiper(); // Swiper 초기화

  // 창 크기 변경 시 이미지 경로만 업데이트하고 Swiper 재설정
  window.addEventListener('resize', () => {
    const imageData = window.innerWidth >= 1024 ? data : data2;
    updateAndResetSwiper(imageData);
  });
}

topSwiper();

// 하단 스와이퍼 -------------------------------
async function bottomSwiper() {
  const data = await pb.collection('render_contents').getOne('spn9eneezrzuue8');
  const swiperWrapper2 = document.querySelector('.swiper-wrapper2');
  const swiperWrapper3 = document.querySelector('.swiper-wrapper3');

  for (let i = 0; i < data.img.length; i++) {
    const template = `
    <div class="swiper-slide" >
      <img src="${import.meta.env.VITE_PB_API}/files/${data.collectionId}/${data.id}/${data.img[i]}" alt="">
    </div>
    `;
    swiperWrapper2.insertAdjacentHTML('beforeend', template);
    swiperWrapper3.insertAdjacentHTML('beforeend', template);
  }

  const SWIPER_OPTIONS = {
    direction: 'horizontal',
    loop: true,
    speed: 6000,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: -1110,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },

    breakpoints: {
      320: {
        spaceBetween: -130,
      },

      768: {
        speed: 4000,
        spaceBetween: -580,
      },

      1024: {
        speed: 7000,
        spaceBetween: -280,
      },
    },
  };

  new Swiper('.swiper2', SWIPER_OPTIONS);
}

bottomSwiper();
