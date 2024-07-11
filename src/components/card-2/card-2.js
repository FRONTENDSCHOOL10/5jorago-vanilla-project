import '/src/components/card-2/_card-2.scss';
import { insertLast } from 'kind-tiger';
import poster from '/public/assets/poster-1.png';

const template = `
<div class="card-section">
      <div class="card">
        <a href="/"><img class="card--img" src="${poster}" alt="이미지" /></a>
        <div class="card--wrapper">
          <span class="card__wrapper--rank">1</span>
          <div class="scrap">
            <a href="/"><span class="card__wrapper--title">재벌집 막내아들</span></a>
            <div class="dot"><span class="card__wrapper--dot is-active"></span></div>
          </div>
        </div>
      </div>
    </div>`;

insertLast('.article__swiper3--slide1', template);
insertLast('.article__swiper3--slide2', template);
insertLast('.article__swiper3--slide3', template);
insertLast('.article__swiper3--slide4', template);
insertLast('.article__swiper3--slide5', template);
insertLast('.article__swiper3--slide6', template);
insertLast('.article__swiper3--slide7', template);
insertLast('.article__swiper3--slide8', template);
