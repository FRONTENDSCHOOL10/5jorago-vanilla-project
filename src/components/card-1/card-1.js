import '/src/components/card-1/_card-1.scss';
import { insertLast, getNode } from 'kind-tiger';
import pb from '/src/api/pocketbase.js';
import getPbImageURL from '/src/api/getPbImageURL';

async function renderCard3() {
  const article3Wrapper = getNode('.article--swiper2 .swiper-wrapper');
  const data = await pb.collection('main_vod').getFullList();
  for (let i = 0; i < data.length; i++) {
    const dataObj = data[i];
    const imageURL = await getPbImageURL(dataObj);
    const template = `
  <div class="quickVOD">
    <div class="quickVOD__content">
      <!-- Quick VOD 아이콘 -->
      <a href="">
        <div class="quickVOD__icon">
          <p class="quickVOD__icon-title">Quick VOD</p>
        </div>
        <img
          class="quickVOD__content-img"
          src="${imageURL}"
          alt="${dataObj.sub_title}"
        />
        <span class="quickVOD__title">${dataObj.sub_title}</span>
      </a>
      <span class="quickVOD__episode-number">0화</span>
    </div>
  </div>`;

    const slide = document.createElement('div');
    slide.className = `swiper-slide article__swiper2--slide${i}`;
    article3Wrapper.appendChild(slide);

    insertLast(`.article__swiper2--slide${i}`, template);
  }
}

renderCard3();
