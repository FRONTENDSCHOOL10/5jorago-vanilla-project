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

