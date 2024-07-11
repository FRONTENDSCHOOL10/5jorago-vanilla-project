import '/src/components/card-3/_card-3.scss';
import { insertLast } from 'kind-tiger';
import poster from '/public/assets/jtbcLIVE-1.png';

const template = `
<div class="liveChannel">
    <div class="liveChannel__content">
        <img
            class="liveChannel__content-img"
            src="${poster}"
            alt="JTBC 뉴스룸"
        />
        <div class="liveChannel__wrap">
            <div class="liveChannel__icon">    
                <p class="liveChannel__icon-title">1</p>
            </div>
            <div class="liveChannel__info">
                <div class="liveChannel__title">JTBC</div>
                <div class="liveChannel__description">JTBC 뉴스룸</div>
                <div class="liveChannel__viewer">27.9%</div>
            </div>
        </div>
       
    </div>
</div>
    `;

insertLast('.sec-5', template);
insertLast('.sec-5-1', template);
insertLast('.sec-5-2', template);
insertLast('.sec-5-3', template);
insertLast('.sec-5-4', template);
insertLast('.sec-5-5', template);
insertLast('.sec-5-6', template);
insertLast('.sec-5-7', template);


