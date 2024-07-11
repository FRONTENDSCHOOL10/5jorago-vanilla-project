import css from '/src/components/header/_header.scss?inline';
import logo from '/public/assets/logo_1.png';
import live from '/public/assets/live_1_default.png';
import serch_default from '/public/assets/search_1_default.png';
import paramount from '/public/assets/paramount_1_default.png';
import usericon from '/public/assets/usericon_1.png';

// 메인 페이지 컴포넌트
export class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>${css}</style>
      <header class="header">
      <nav class="nav">
        <div class="header__nav__logo-menu">
          <a href="#" class="header__logo">
            <img src="${logo}" alt="타잉 로고" class="header__logo" />
          </a>

          <div class="header__menu-wrapper" aria-orientation="horizontal" >
            <ul class="header__menu">
              <li style="list-style: none">
                <a href="#" class="header__menu-item" aria-label="Live">
                  <img
                    src="${live}"
                    alt="실시간 라이브 컨텐츠"
                    class="header__icon-live"
                  />
                  <span class="text">실시간</span>
                </a>
              </li>
              <li style="list-style: none">
                <a href="#" class="header__menu-item" aria-label="TV Programs">
                  <span class="text">TV 프로그램</span>
                </a>
              </li>
              <li style="list-style: none">
                <a href="#" class="header__menu-item" aria-label="Movies">
                  <span class="text">영화</span>
                </a>
              </li>
              <li style="list-style: none">
                <a href="#" class="header__menu-item" aria-label="Paramount">
                  <img
                    src="${paramount}"
                    alt="파라마운트 플러스 컨텐츠"
                    class="header__paramount"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="aside">
          <a href="#" aria-label="Search">
            <img
              src="${serch_default}"
              alt="Search Icon"
              class="header__icon-search"
            />
          </a>
          <a href="#" aria-label="Profile">
            <img
              src="${usericon}"
              alt="Profile Icon"
              class="header__icon-profile"
            />
          </a>
        </div>
      </nav>
    </header>
    `;
  }
}

customElements.define('c-header', Header);
