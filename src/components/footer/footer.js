import css from '/src/components/footer/_footer.scss?inline';
import youtube from '/src/assets/youtube-1.png';
import instagram from '/src/assets/instagram-1.png';
import twitter from '/src/assets/twitter-1.png';
import facebook from '/src/assets/facebook-1.png';

export class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>${css}</style>
      <footer>
        <div class="footer--contents">
          <div class="footer--util">
            <a href=""><span>고객센터</span></a>
            <a href=""><span>이용약관</span></a>
            <a href=""><span>개인정보처리방침</span></a>
            <a href=""><span>청소년 보호정책</span></a>
            <a href=""><span>법적고지</span></a>
            <a href=""><span>이벤트</span></a>
            <a href=""><span>인재채용</span></a>
          </div>
          <div class="footer--p">
            <p>
              <span> 대표이사: YANG JIEUL</span>
              <span>사업자 등록 번호: 188-88-01893</span>
              <span>통신판매신고 번호: 2020-서울마포-3641호</span>
            </p>
            <p>
              <span
                >사업장: 서울특별시 마포구 상암산로 34, DMC디지털큐브 15층
                (상암동)</span
              >
              <span>호스팅 사업자 비제이올리브네트웍스(주)</span>
            </p>
            <p>
              <span class="textunderline">
                <a href="/"><span>고객 문의 바로가기</span></a>
              </span>
              <span class="textunderline">
                <span>대표 메일:</span>
                <a href="mailto:tving@cl.net">tving@cl.net</a>
              </span>
              <span class="textunderline">
                고객센터: 1670-1525 (평일/주말 09시~18시, 공휴일 휴무)
              </span>
            </p>
            <p>
              <span>ENM 시청자 상담실 (편성 문의 및 시청자 의견):</span>
              080-080-0780
              <span>Mnet 고객센터 (반송 편성 문의):1855-1631</span>
            </p>
          </div>
          <ul>
            <a href="">
              <li class="assets--youtube">
                <img src="${youtube}" alt="" />
              </li>
            </a>
            <a href="">
              <li class="assets--instargram">
                <img src="${instagram}" alt="" />
              </li>
            </a>
            <a href="">
              <li class="assets--twitter">
                <img src="${twitter}" alt="" />
              </li>
            </a>
            <a href="">
              <li class="asset--facebook">
                <img src="${facebook}" alt="facebook icon" />
              </li>
            </a>
          </ul>
          <p>Copyright © 주식회사 티빙 All right reserved.</p>
        </div>
      </footer>
    `
  }
}

customElements.define('c-footer', Footer);

