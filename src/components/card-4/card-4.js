import '/src/components/card-4/_card-4.scss';
import { insertLast } from 'kind-tiger';
import vertical1 from "/src/assets/Vertical_1.png";
import vertical2 from "/src/assets/Vertical_2.png";
import vertical3 from "/src/assets/Vertical_3.png";
import logo from "/src/assets/tvingoriginal_1.png";

const template = `
    <div class="mainFirstCard">
      <source media="(min-width: 768px)" srcset="${vertical2}" />
      <source media="(min-width: 320px)" srcset="${vertical3}" />
      <img src="${vertical1}" alt="" />
      <div class="mainFirstCard--card"></div>
      <img class="logo" src="${logo}" alt="" />
      <span class="mainFirstCard__videoTitle">보물찾기</span>
    </div>`;

insertLast('.sec-1', template);
insertLast('.sec-1-1', template);
insertLast('.sec-1-2', template);
insertLast('.sec-1-3', template);
insertLast('.sec-1-4', template);
insertLast('.sec-1-5', template);
insertLast('.sec-1-6', template);
insertLast('.sec-1-7', template);
