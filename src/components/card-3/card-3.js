import '/src/components/card-3/_card-3.scss';
import { insertLast, getNode } from 'kind-tiger';
import pb from '/src/api/pocketbase.js';
import getPbImageURL from '/src/api/getPbImageURL';
import { watchedContent } from '../../pages/main/modules/watchedContent';
import { animation } from '../../pages/main/modules/animation';

async function renderCard3() {
  const article3Wrapper = getNode('.article--swiper4 .swiper-wrapper');

  const data = await pb.collection('main_live').getFullList({
    sort: 'rank',
  });

  for (let i = 0; i < data.length; i++) {
    const dataObj = data[i];
    const imageURL = await getPbImageURL(dataObj);
    const template = `
    <div class="liveChannel">
        <div class="liveChannel__content">
            <img
                class="liveChannel__content-img"
                src="${imageURL}"
                alt="${dataObj.title}"
            />
            <div class="liveChannel__wrap">
                <div class="liveChannel__icon">    
                    <p class="liveChannel__icon-title">${dataObj.rank}</p>
                </div>
                <div class="liveChannel__info">
                    <div class="liveChannel__title">${dataObj.broadcast}</div>
                    <div class="liveChannel__description">${dataObj.title}</div>
                    <div class="liveChannel__viewer">27.9%</div>
                </div>
            </div>
        </div>
    </div>
        `;

    const slide = document.createElement('div');
    slide.className = `swiper-slide article__swiper4--slide${i}`;
    article3Wrapper.appendChild(slide);
    insertLast(`.article__swiper4--slide${i}`, template);
    animation();
  }
}

renderCard3();
