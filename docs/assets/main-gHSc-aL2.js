import"./modulepreload-polyfill-9p4a8sJU.js";import"./footer-kQhptZPP.js";function n(s,c=document){if(typeof s!="string")throw new Error("getNode 함수의 인수는 문자 타입 이어야 합니다.");return c.nodeType!==document.DOCUMENT_NODE&&(c=document.querySelector(c)),c.querySelector(s)}function r(s){return Object.prototype.toString.call(s).slice(8,-1).toLowerCase()}const g=s=>r(s)==="object",m=s=>r(s)==="number";function e(s,c){typeof s=="string"&&(s=n(s)),s.insertAdjacentHTML("beforeend",c)}n(".first");n(".second");const t={shouldReject:!1,timeout:1e3,data:"아싸 성공!",errorMessage:"알 수 없는 오류가 발생했습니다."};function k(s){let c={...t};m(s)&&(c.timeout=s),g(s)&&(c={...t,...s});let{timeout:l,shouldReject:o,errorMessage:_,data:p}=c;return new Promise((d,u)=>{setTimeout(()=>{o?u({message:_}):d(p)},l)})}k(1e3);const v=`
<section class="banner">
      <a href="/" class="banner__link">
        <div class="banner__link--container">
          <img
            class="banner__link__container--img"
            src="../../assets/baekpacker_img.webp"
            alt="백패커 이미지"
          />
          <div class="banner__link__container--group">
            <img
              class="banner__link__container__group--logo"
              src="../../assets/baekpacker_logo.webp"
              alt="백패커 로고"
            />

            <p class="banner__link__container__group--desc">
              우리가 가는 곳이 곧 주방!
            </p>
            <p class="banner__link__container__group--desc">
              극한의 출장 요리단이 간다!
            </p>
          </div>
        </div>
      </a>
    </section>`;e(".banner-container",v);const a=`
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
    </div>`;e(".sec-2",a);e(".sec-2-1",a);e(".sec-2-2",a);e(".sec-2-3",a);e(".sec-2-4",a);e(".sec-2-5",a);e(".sec-2-6",a);e(".sec-2-7",a);const i=`
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
    </div>`;e(".sec-3",i);e(".sec-3-1",i);e(".sec-3-2",i);e(".sec-3-3",i);e(".sec-3-4",i);e(".sec-3-5",i);e(".sec-3-6",i);e(".sec-3-7",i);
