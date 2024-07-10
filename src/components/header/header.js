import css from '/src/components/header/_header.scss?inline';
import logo from '/src/assets/logo_1.png';

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
            <img src="${logo}" alt="Logo" class="header__logo" />
          </a>

          <div class="header__menu-wrapper">
            <ul class="header__menu">
              <li style="list-style: none">
                <a href="#" class="header__menu-item" aria-label="Live">
                  <img
                    src="/src/assets/live_1_default.png"
                    alt="Live Icon"
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
                    src="/src/assets/paramount_1_default.png"
                    alt="Paramount Icon"
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
              src="/src/assets/search_1_default.png"
              alt="Search Icon"
              class="header__icon-search"
            />
          </a>
          <a href="#" aria-label="Profile">
            <img
              src="/src/assets/usericon_1.png"
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
