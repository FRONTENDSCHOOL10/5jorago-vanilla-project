import '/src/components/card-1/_card-1.scss';
import { insertLast } from 'kind-tiger';
import card from '/src/assets/quickVOD-card-1.png';

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
        src="${card}"
        alt="Quick VOD 첫 번째 콘텐츠 카드: JTBC 뉴스룸"
      />

      <span class="quickVOD__title">JTBC 뉴스룸</span>
    </a>
    <span class="quickVOD__episode-number">0화</span>
  </div>
</div>`;

insertLast('.article__swiper2--slide1', template);
insertLast('.article__swiper2--slide2', template);
insertLast('.article__swiper2--slide3', template);
insertLast('.article__swiper2--slide4', template);
insertLast('.article__swiper2--slide5', template);
insertLast('.article__swiper2--slide6', template);
insertLast('.article__swiper2--slide7', template);
insertLast('.article__swiper2--slide8', template);
