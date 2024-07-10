import '/src/components/card-1/_card-1.scss';
import { insertLast } from 'kind-tiger';

const template = `
<div class="quickVOD">
      <div class="quickVOD__content">
        <!-- Quick VOD 아이콘 -->
        <div class="quickVOD__icon">
          <p class="quickVOD__icon-title">Quick VOD</p>
        </div>

        <img
          class="quickVOD__content-img"
          src="/assets/quickVOD-card-1.png"
          alt="Quick VOD 첫 번째 콘텐츠 카드: JTBC 뉴스룸"
        />

        <span class="quickVOD__title">JTBC 뉴스룸</span>
        <span class="quickVOD__episode-number">0화</span>
      </div>
    </div>`;

insertLast('.sec-2', template);
insertLast('.sec-2-1', template);
insertLast('.sec-2-2', template);
insertLast('.sec-2-3', template);
insertLast('.sec-2-4', template);
insertLast('.sec-2-5', template);
insertLast('.sec-2-6', template);
insertLast('.sec-2-7', template);
