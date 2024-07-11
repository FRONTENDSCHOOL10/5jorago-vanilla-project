import '/src/components/card-4/_card-4.scss';
import { insertLast } from 'kind-tiger';
import vertical1 from "/src/assets/Vertical_1.png";
import vertical2 from "/src/assets/Vertical_2.png";
import vertical3 from "/src/assets/Vertical_3.png";
import logo from "/src/assets/tvingoriginal_1.png";

const template = `
    <div class="mainFirstCard">
      <a href="/">
        <source media="(min-width: 768px)" srcset="${vertical2}" />
        <source media="(min-width: 320px)" srcset="${vertical3}" />
        <img src="${vertical1}" alt="" />
        <div class="mainFirstCard--card"></div>
        <img class="logo" src="${logo}" alt="" />
        <span class="mainFirstCard__videoTitle">보물찾기</span>
      </a>
    </div>`;

insertLast('.article__swiper1--slide1', template);
insertLast('.article__swiper1--slide2', template);
insertLast('.article__swiper1--slide3', template);
insertLast('.article__swiper1--slide4', template);
insertLast('.article__swiper1--slide5', template);
insertLast('.article__swiper1--slide6', template);
insertLast('.article__swiper1--slide7', template);
insertLast('.article__swiper1--slide8', template);
