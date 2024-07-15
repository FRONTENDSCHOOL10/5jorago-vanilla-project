import { insertLast, getNode, getPbImageURL } from 'kind-tiger';
import './modules/index.js';
import '/src/pages/main/_main.scss';
import pb from '/src/api/pocketbase.js';

/* 이미지 추가 */

async function renderCard5() {
  const data = await pb.collection('main_only_taing').getFullList();

  for (let i = 0; i < data.length; i++) {
    const dataObj = data[i];

    const template = `
  <div class="swiper-slide article__swiper5--slide${i}">
    <a href="/src/pages/main/">
    <img src="${getPbImageURL(dataObj)}" alt="${dataObj.title}" />
    </a>
  </div>
  `;
    insertLast(`.article--swiper5 .swiper-wrapper`, template);
  }
}

renderCard5();

async function renderEvent() {
  const data2 = await pb.collection('main_events').getFullList();

  for (let i = 0; i < data2.length; i++) {
    const dataObj2 = data2[i];

    const template = `
  <div class="swiper-slide article__swiper6--slide${i}">
    <a href="/src/pages/main/">
    <img src="${getPbImageURL(dataObj2)}" alt="${dataObj2.title}" />
    </a>
  </div>
  `;

    insertLast('.article__swiper--events .swiper-wrapper', template);
  }
}

renderEvent();
