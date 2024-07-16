import css from '/src/components/header/_header.scss?inline';
import logo from '/public/assets/logo_1.png';
import live from '/public/assets/live_1_default.png';
import serch_default from '/public/assets/search_1_default.png';
import paramount from '/public/assets/paramount_1_default.png';
import usericon from '/public/assets/usericon_1.png';
import pb from '/src/api/pocketbase.js';
import getPbImageURL from '/src/api/getPbImageURL';

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
          <a href="/src/pages/main/" class="header__logo">
            <img src="${logo}" alt="타잉 로고" class="header__logo" />
          </a>

          <div class="header__menu-wrapper" aria-orientation="horizontal" >
            <ul class="header__menu">
              <li style="list-style: none">
                <a href="/src/pages/main/" class="header__menu-item" aria-label="Live">
                  <img
                    src="${live}"
                    alt="실시간 라이브 컨텐츠"
                    class="header__icon-live"
                  />
                  <span class="text">실시간</span>
                </a>
              </li>
              <li style="list-style: none">
                <a href="/src/pages/main/" class="header__menu-item" aria-label="TV Programs">
                  <span class="text">TV 프로그램</span>
                </a>
              </li>
              <li style="list-style: none">
                <a href="/src/pages/main/" class="header__menu-item" aria-label="Movies">
                  <span class="text">영화</span>
                </a>
              </li>
              <li style="list-style: none">
                <a href="/src/pages/main/" class="header__menu-item" aria-label="Paramount">
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
          <a href="/src/pages/search/" aria-label="Search">
            <img
              src="${serch_default}"
              alt="Search Icon"
              class="header__icon-search"
            />
          </a>
          <a  href="#" aria-label="Profile">
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

  async connectedCallback() {
    const { isAuth, avatar } = JSON.parse(localStorage.getItem('auth'));
    if (isAuth) {
      const logoImg = this.shadowRoot.querySelector('.header__icon-profile');
      const localAuth = JSON.parse(localStorage.getItem('auth'));
      const localName = localAuth.user.name;

      const userData = await pb.collection('users').getFullList();
      for (let data of userData) {
        if (localName === data.name) {
          if (data.avatar.length > 1) {
            let avatars = data.avatar[0];
            logoImg.src = `${import.meta.env.VITE_PB_API}/files/${data.collectionId}/${data.id}/${avatars}`;
          } else {
            logoImg.src = `${getPbImageURL(data, 'avatar')}`;
          }
        }
      }
    }
  }
}

customElements.define('c-header', Header);
