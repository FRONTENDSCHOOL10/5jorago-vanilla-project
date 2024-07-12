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

  for (let i = 0; i < data.img.length; i++) {

    const template = `
    <div class="swiper-slide">
      <img src="${import.meta.env.VITE_PB_API}/files/${data.collectionId}/${data.id}/${data.img[i]}" alt="">
    </div>
    `
    document.querySelector('.swiper-wrapper').insertAdjacentHTML('beforeend', template);
    // insertLast('.swiper-wrapper', template);
  }

  
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

      320: {
        spaceBetween: -5, // 이미지 간격
      },

      768: {
        speed: 8000,
        spaceBetween: -470, // 이미지 간격
      }
    }
  });
}

image();


// 하단 스와이퍼 
// 클래스명, 함수명 수정하기**********
async function image2() {

  const data = await pb.collection('render_contents').getOne('spn9eneezrzuue8');

  for (let i = 0; i < data.img.length; i++) {

    const template = `
    <div class="swiper-slide">
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
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: -1110,

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



// 페이지 이동 함수-------------------------------
const button = document.getElementById('button');

function moveToPage() {
  window.location.href = "main/index.html";
}


button.addEventListener('click', moveToPage)

