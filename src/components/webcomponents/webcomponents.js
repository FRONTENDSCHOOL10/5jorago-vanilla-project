// 푸터(footer) ----------------------------------
class CFooter extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const template = document.getElementById('footer-template').content;

    shadow.appendChild(template.cloneNode(true));
  }
}

customElements.define('c-footer', CFooter);


// 메인 헤더(header) ----------------------------------
class CMainHeader extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const template = document.getElementById('main-header-template').content;

    shadow.appendChild(template.cloneNode(true));
  }
}

customElements.define('c-main-header', CMainHeader);


// 랜딩 헤더(header) ----------------------------------
class CLandingHeader extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const template = document.getElementById('landing-header-template').content;

    shadow.appendChild(template.cloneNode(true));
  }
}

customElements.define('c-landing-header', CLandingHeader);



// 방법 2
// class MyFooter extends HTMLElement {
//   constructor() {
//     super();
//     const shadow = this.attachShadow({ mode: 'open' });

//     // 스타일 추가
//     const style = document.createElement('style');
//     style.textContent = `
//     @use '@/styles/scss/' as *;

//     body {
//       background-color: $black;
//     }
    
//     .footer--contents {
//       width: 100%;
//       margin: 0, 4.25rem;
//       border: 0.0625rem solid $gray-800;
//       border-right: 0;
//       border-bottom: 0;
//       border-left: 0;
//     }
    
//     footer {
//       margin-top: 8.75rem;
//       margin-bottom: 10.52rem;
//       margin-left: 4.25rem;
//       margin-right: 4.25rem;
//       @include display(column, null, flex-start, null);
//       align-self: stretch;
//       gap: 1.5rem;
    
//       @include font(1.333rem, 400, 160%, Pretendard, $gray-500);
    
//       .footer--util {
//         margin-top: 1.69rem;
//         display: flex;
//         gap: 2.25rem;
    
//         span {
//           color: $gray-200;
//           font-family: Pretendard;
//           font-size: 0.75019rem;
//           font-style: normal;
//           font-weight: 400;
//           line-height: 160%;
//         }
//       }
    
//       ul {
//         margin: 1.5rem 0;
//         padding: 0;
//         display: flex;
//         align-items: flex-start;
//         gap: 1.25rem;
    
//         li {
//           @include display(row, null, center, center);
//           @include size(3.25rem, 3.25rem, 3.25rem, 3.25rem);
//           background-color: $gray-800;
//           border-radius: 1.875rem;
//         }
    
//         li img {
//           @include size(50%, 50%, 50%, 50%);
//         }
//       }
    
//       p {
//         @include display(row, null, center, null);
//         position: relative;
//         font-size: 0.75019rem;
//         font-style: normal;
//         font-weight: 400;
//         line-height: 160%;
//         gap: 0.5rem;
//         align-self: stretch;
    
//         span:not(:first-child)::before {
//           content: '';
//           display: inline-block;
//           width: 1px;
//           height: 11px;
//           background-color: $gray-800;
//           vertical-align: middle; /* 구분선 중앙 정렬 */
//           margin-right: 0.5rem;
//         }
    
//         .textunderline {
//           text-decoration: underline;
//         }
//       }
//     }
    
//     @media (max-width: $breakpoint-tablet) {
//       .footer--p {
//         display: none;
//       }
//       footer {
//         .footer--util {
//           display: flex;
//           flex-direction: column;
//           gap: 0px;
//         }
//       }
//     }
//     `;

//     // 템플릿 추가
//     const footer = document.createElement('footer');
//     footer.innerHTML = `
//     <link rel="stylesheet" href="../footer/_footer.scss" />
//     <div id="app">
//       <footer>
//         <div class="footer--contents">
//           <div class="footer--util">
//             <a href=""><span>고객센터</span></a>
//             <a href=""><span>이용약관</span></a>
//             <a href=""><span>개인정보처리방침</span></a>
//             <a href=""><span>청소년 보호정책</span></a>
//             <a href=""><span>법적고지</span></a>
//             <a href=""><span>이벤트</span></a>
//             <a href=""><span>인재채용</span></a>
//           </div>
//           <div class="footer--p">
//             <p>
//               <span> 대표이사: YANG JIEUL</span>
//               <span>사업자 등록 번호: 188-88-01893</span>
//               <span>통신판매신고 번호: 2020-서울마포-3641호</span>
//             </p>
//             <p>
//               <span
//                 >사업장: 서울특별시 마포구 상암산로 34, DMC디지털큐브 15층
//                 (상암동)</span
//               >
//               <span>호스팅 사업자 비제이올리브네트웍스(주)</span>
//             </p>
//             <p>
//               <span class="textunderline">
//                 <a href="/"><span>고객 문의 바로가기</span></a>
//               </span>
//               <span class="textunderline">
//                 <span>대표 메일:</span>
//                 <a href="mailto:tving@cl.net">tving@cl.net</a>
//               </span>
//               <span class="textunderline">
//                 고객센터: 1670-1525 (평일/주말 09시~18시, 공휴일 휴무)
//               </span>
//             </p>
//             <p>
//               <span>ENM 시청자 상담실 (편성 문의 및 시청자 의견):</span>
//               080-080-0780
//               <span>Mnet 고객센터 (반송 편성 문의):1855-1631</span>
//             </p>
//           </div>
//           <ul>
//             <a href="">
//               <li class="assets--youtube">
//                 <img src="./../../assets/youtube-1.png" alt="" />
//               </li>
//             </a>
//             <a href="">
//               <li class="assets--instargram">
//                 <img src="./../../assets/instagram-1.png" alt="" />
//               </li>
//             </a>
//             <a href="">
//               <li class="assets--twitter">
//                 <img src="./../../assets/twitter-1.png" alt="" />
//               </li>
//             </a>
//             <a href="">
//               <li class="asset--facebook">
//                 <img src="./../../assets/facebook-1.png" alt="facebook icon" />
//               </li>
//             </a>
//           </ul>
//           <p>Copyright © 주식회사 티빙 All right reserved.</p>
//         </div>
//       </footer>
//     </div>
//     `;

//     shadow.appendChild(style);
//     shadow.appendChild(footer);
//   }
// }

// customElements.define('my-footer', MyFooter);
