import '/src/components/card-4/_card-4.scss';
import { insertLast, getNode } from 'kind-tiger';
import logo from '/public/assets/tvingoriginal_1.png';
import pb from '/src/api/pocketbase.js';
import getPbImageURL from '/src/api/getPbImageURL';
import { watchedContent } from '/src/pages/main/modules/watchedContent';
import { animation } from '/src/pages/main/modules/animation';

(async function renderCard4() {
  const article1Wrapper = getNode('.article--swiper1 .swiper-wrapper');
  const data = await pb.collection('main_must_watch').getFullList();

  for (let i = 0; i < data.length; i++) {
    const dataObj = data[i];
    const imageURL = await getPbImageURL(dataObj);
    const template = `
    <div class="mainFirstCard">
      <a href="/src/pages/main/">
        <img src="${imageURL}" alt="${dataObj.title}" width="100%" height="100%" />
        <div class="mainFirstCard--card"></div>
        <img class="logo" src="${logo}" alt="타잉 오리지널 로고" />
        <span class="mainFirstCard__videoTitle">${dataObj.title}</span>
      </a>
    </div>`;

    const slide = document.createElement('div');
    slide.className = `swiper-slide article__swiper1--slide${i}`;
    article1Wrapper.appendChild(slide);

    insertLast(`.article__swiper1--slide${i}`, template);
  }
  watchedContent();
  animation();
})();

// <source media="(min-width: 768px)" srcset="${vertical2}" />
//         <source media="(min-width: 320px)" srcset="${vertical3}" />
