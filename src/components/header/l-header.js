import css from '/src/components/header/_header.scss?inline';
import logo from '/src/assets/logo_1.png';

// 랜딩 페이지 컴포넌트
export class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>${css}</style>
      <header class="header" style="background-color: transparent;">
      <nav class="nav">
        <div class="header__nav__logo-menu">
          <a href="#" class="header__logo">
            <img src="${logo}" alt="Logo" class="header__logo" />
          </a>
        </div>
      </nav>
    </header>
    `;
  }
}

customElements.define('c-header', Header);
