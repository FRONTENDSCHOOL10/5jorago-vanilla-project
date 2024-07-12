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


// 랜딩 버튼 페이지 이동 함수 -------------------------------
document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelectorAll('.button');

  function moveToPage() {
    window.location.href = '/src/pages/login/index.html';
  }

  button.forEach(button => {
    button.addEventListener('click', moveToPage);
  });
});


// getPbImageURL 파일 만들어야됨
// import getPbImageURL from '../../../api/getPbImageURL';
// const data = await pb.collection('render_contents').getOne('i0vjd5h4d763hk2');
// console.log(getPbImageURL(data,'img'))


// const data = await pb.collection('render_contents').getOne('spn9eneezrzuue8');
// // console.log(`${import.meta.env.VITE_PB_API}/files/${data.collectionId}/${data.id}/${data.img[0]}`);

// for (let i = 0; i < data.img.length; i++) {
//   console.log(`${import.meta.env.VITE_PB_API}/files/${data.collectionId}/${data.id}/${data.img[i]}`);
// }


//?????????????????
// const record = await pb.collection('render_contents').getOne('i0vjd5h4d763hk2');

// console.log(getPblimageURL(data, 'title'));


// const record = await pb.collection('render_contents').getFullList();

// console.log(record);
// console.log(record[0].img);


// 상단 스와이퍼
async function image() {
  const data = await pb.collection('render_contents').getOne('i0vjd5h4d763hk2');
  const data2 = await pb.collection('render_contents').getOne('rki6i5rdc9u7mnr');
  const swiperWrapper = document.querySelector('.swiper-wrapper');

  function loadImages(imageData) {
    swiperWrapper.innerHTML = ''; // 기존 이미지 초기화

    for (let i = 0; i < imageData.img.length; i++) {
      const template = `
        <div class="swiper-slide" style="transition-timing-function: linear;">
          <img src="${import.meta.env.VITE_PB_API}/files/${imageData.collectionId}/${imageData.id}/${imageData.img[i]}" alt="">
        </div>
      `;
      swiperWrapper.insertAdjacentHTML('beforeend', template);
    }
  }

  function initializeSwiper() {
    return new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,

      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },

      speed: 6000, // 슬라이드 전환 속도
      slidesPerView: "auto", // 화면에 표시할 슬라이드 수
      centeredSlides: true, // 슬라이드를 가운데 정렬
      spaceBetween: -485, // 이미지 간격

      transition: {
        duration: 0, // 기본값
        timingFunction: 'linear' // linear 효과 적용
      },

      breakpoints: {
        320: {
          spaceBetween: -5, // 이미지 간격
        },
        768: {
          speed: 8000, // 슬라이드 전환 속도
          spaceBetween: -470, // 이미지 간격
        }
      }
    });
  }

  function loadAppropriateImages() {
    if (window.innerWidth >= 1024) {
      loadImages(data);
    } else {
      loadImages(data2);
    }
  }

  // 처음 로드 시 적절한 이미지를 로드하고 Swiper를 초기화
  loadAppropriateImages();
  let swiper = initializeSwiper();

  // 창 크기 변경 시 다시 로드 및 Swiper 초기화
  window.addEventListener('resize', () => {
    loadAppropriateImages();
    swiper.destroy(true, true); // 기존 Swiper 인스턴스를 삭제
    swiper = initializeSwiper(); // 새로운 Swiper 인스턴스를 초기화
  });


  // if (window.innerWidth >= 1024) {

  //   for (let i = 0; i < data.img.length; i++) {
  //     const template = `
  //    <div class="swiper-slide">
  //      <img src="${import.meta.env.VITE_PB_API}/files/${data.collectionId}/${data.id}/${data.img[i]}" alt="">
  //    </div>
  //    `
  //     swiperWrapper.insertAdjacentHTML('beforeend', template);
  //   }

  // } 
  // else if (window.innerWidth < 1023 && window.innerWidth) {

  //   for (let i = 0; i < data2.img.length; i++) {
  //     const template = `
  //     <div class="swiper-slide">
  //       <img src="${import.meta.env.VITE_PB_API}/files/${data2.collectionId}/${data2.id}/${data2.img[i]}" alt="">
  //     </div>
  //     `
  //     swiperWrapper.insertAdjacentHTML('beforeend', template);
  //   }
  // }

  // const swiper = new Swiper('.swiper', {
  //   direction: 'horizontal',
  //   loop: true,

  //   autoplay: {
  //     delay: 0,
  //     disableOnInteraction: false,
  //   },

  //   speed: 6000, // 슬라이드 전환 속도
  //   slidesPerView: "auto",
  //   centeredSlides: true, // 슬라이드를 가운데 정렬
  //   spaceBetween: -485, // 이미지 간격

  //   breakpoints: {

  //     320: {
  //       spaceBetween: -5, // 이미지 간격
  //     },

  //     768: {
  //       speed: 8000,
  //       spaceBetween: -470, // 이미지 간격
  //     }
  //   }
  // });
}

image();


// 하단 스와이퍼 
// 클래스명, 함수명 수정하기**********
async function image2() {

  const data = await pb.collection('render_contents').getOne('spn9eneezrzuue8');

  for (let i = 0; i < data.img.length; i++) {

    const template = `
    <div class="swiper-slide" >
      <img src="${import.meta.env.VITE_PB_API}/files/${data.collectionId}/${data.id}/${data.img[i]}" alt="">
    </div>
    `
    document.querySelector('.swiper-wrapper2').insertAdjacentHTML('beforeend', template);
    document.querySelector('.swiper-wrapper3').insertAdjacentHTML('beforeend', template);
    // insertLast('.swiper-wrapper', template);
  }


  const swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
    loop: true,

    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },

    speed: 6000,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: -1110,
    allowTouchMove: false, // 사용자가 스와이프할 수 없도록 설정

    // 반응형 
    breakpoints: {

      320: {
        spaceBetween: -130, // 이미지 간격
      },

      768: {
        speed: 4000,
        spaceBetween: -580,
      },

      1024: {
        speed: 7000,
        spaceBetween: -280, // 이미지 간격
      }
    }
  });
}

image2();

