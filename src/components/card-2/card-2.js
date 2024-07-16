import '/src/components/card-2/_card-2.scss';
import { insertLast, getNode } from 'kind-tiger';
import pb from '/src/api/pocketbase.js';
import getPbImageURL from '/src/api/getPbImageURL';
import { watchedContent } from '../../pages/main/modules/watchedContent';

async function renderCard2() {
  const article3Wrapper = getNode('.article--swiper3 .swiper-wrapper');

  const data = await pb.collection('main_ranking').getFullList({
    sort: 'rank',
  });

  for (let i = 0; i < data.length; i++) {
    const dataObj = data[i];
    const imageURL = await getPbImageURL(dataObj);

    const template = `
      <div class="card-section">
        <div class="card">
          <a href="/src/pages/main/"><img class="card--img" src="${imageURL}" alt="${dataObj.title}" /></a>
          <div class="card--wrapper">
            <span class="card__wrapper--rank">${dataObj.rank}</span>
            <div class="scrap">
              <a class="scrap" href="/src/pages/main/"><span class="card__wrapper--title">${dataObj.title}</span></a>
              <div class="dot"><span class="card__wrapper--dot is-active"></span></div>
            </div>
          </div>
        </div>
      </div>`;

    const slide = document.createElement('div');
    slide.className = `swiper-slide article__swiper3--slide${i}`;
    article3Wrapper.appendChild(slide);

    insertLast(`.article__swiper3--slide${i}`, template);
  }

}

renderCard2();
