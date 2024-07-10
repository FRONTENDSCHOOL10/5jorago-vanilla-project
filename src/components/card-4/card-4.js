import '/src/components/card-4/card-4';
import '/components/card-4/_card-4.scss';
import { insertLast } from 'kind-tiger';

const template = `
<div class="mainFirstCard">
      <source media="(min-width: 768px)" srcset="/assets/Vertical_2.png" />
      <source media="(min-width: 320px)" srcset="/assets/Vertical_3.png" />
      <img src="/assets/Vertical_1.png" alt="" />
      <div class="mainFirstCard--card"></div>
      <img class="logo" src="/assets/tvingoriginal_1.png" alt="" />
      <span class="mainFirstCard__videoTitle">보물찾기</span>
    </div>`;

insertLast('.sec-10', template);
insertLast('.sec-10-1', template);
insertLast('.sec-10-2', template);
insertLast('.sec-10-3', template);
insertLast('.sec-10-4', template);
insertLast('.sec-10-5', template);
insertLast('.sec-10-6', template);
insertLast('.sec-10-7', template);
