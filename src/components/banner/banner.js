import '/src/components/banner/_banner.scss';
import { insertLast, getNode } from 'kind-tiger';
import pb from '/src/api/pocketbase.js';
import getPbImageURL from '/api/getPbImageURL';

(async function () {
  const data = await pb.collection('main_swiper').getFullList();
  const bannerWrapper = getNode('.top-banner--swiper .swiper-wrapper');

  for (let i = 0; i < data.length; i++) {
    const dataObj = data[i];
    const imageURL = await getPbImageURL(dataObj);
    const logoURL = await getPbImageURL(dataObj, 'logo');
    const template = `
  <section class="banner">
        <a href="/src/pages/main/" class="banner__link">
          <div class="banner__link--container">
            <img
              class="banner__link__container--img"
              src="${imageURL}"
              alt="${dataObj.title} 이미지"
            />
            <div class="banner__link__container--group">
              <img
                class="banner__link__container__group--logo"
                src="${logoURL}"
                alt="${dataObj.title} 로고"
              />
  
              <p class="banner__link__container__group--desc">
                ${dataObj.description1}
              </p>
              <p class="banner__link__container__group--desc">
                ${dataObj.description2}
              </p>
            </div>
          </div>
        </a>
      </section>`;

    const slide = document.createElement('div');
    slide.className = `swiper-slide top-banner__swiper--slide${i}`;
    bannerWrapper.appendChild(slide);

    insertLast(`.top-banner__swiper--slide${[i]}`, template);
  }
})();
