import '/src/components/card-2/card-2';
import { insertLast } from 'kind-tiger';

const template = `
<div class="card-section">
      <div class="card">
        <img class="card--img" src="/src/assets/poster-1.png" alt="이미지" />
        <div class="card--wrapper">
          <span class="card__wrapper--rank">1</span>
          <div class="scrap">
            <span class="card__wrapper--title">재벌집 막내아들</span>
            <div class="dot"><span class="card__wrapper--dot is-active"></span></div>
          </div>
        </div>
      </div>
    </div>`;

insertLast('.sec-3', template);
insertLast('.sec-3-1', template);
insertLast('.sec-3-2', template);
insertLast('.sec-3-3', template);
insertLast('.sec-3-4', template);
insertLast('.sec-3-5', template);
insertLast('.sec-3-6', template);
insertLast('.sec-3-7', template);
