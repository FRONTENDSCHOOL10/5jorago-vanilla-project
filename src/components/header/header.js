import css from '/src/components/header/_header.scss?inline';
import logo from '/assets/logo_1.png';
import live from '/assets/live_1_default.png';
import serch_default from '/assets/search_1_default.png';
import paramount from '/assets/paramount_1_default.png';
import usericon from '/assets/usericon_1.png';
import pb from '/src/api/pocketbase.js';
import getPbImageURL from '/src/api/getPbImageURL';
import defaultAuth from '/src/api/defaultAuth';
import { insertLast, getNode, setStorage } from 'kind-tiger';

async function fetchData() {
  const { user } = JSON.parse(localStorage.getItem('auth'));
  const userData = await pb.collection('users').getOne(user.id);

  const dataName = userData.name;
  const profileImg = getPbImageURL(user, 'avatar');

  class Header extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          ${css}
          
        </style>
        <header class="header">
          <nav class="nav">
            <div class="header__nav__logo-menu">
              <a href="/src/pages/main/" class="header__logo">
                <img src="${logo}" alt="타잉 로고" class="header__logo" />
              </a>
              <div class="header__menu-wrapper" aria-orientation="horizontal">
                <ul class="header__menu">
                  <li style="list-style: none">
                    <a href="/src/pages/main/" class="header__menu-item" aria-label="Live">
                      <img src="${live}" alt="실시간 라이브 컨텐츠" class="header__icon-live" />
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
                      <img src="${paramount}" alt="파라마운트 플러스 컨텐츠" class="header__paramount" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="aside">
              <a href="/src/pages/search/" aria-label="Search">
                <img src="${serch_default}" alt="Search Icon" class="header__icon-search" />
              </a>
              <a href="#" aria-label="Profile">
                <img src="${profileImg ? profileImg : usericon}" alt="Profile Icon" class="header__icon-profile" />
                <section class="profile-modal">
                  <div class="profile-modal__profile-group">
                    <div class="wrapper">
                      <img src="${profileImg}" alt="" />
                      <div class="profile-modal__profile-group__info-group">
                        <h3 class="profile-modal__profile-group__info-group--name">${dataName} 님</h3>
                        <a href="/src/pages/profile/">
                          <div class="profile-modal__profile-group__info-group--edit-group">
                            <p class="profile-modal__profile-group__info-group--edit">프로필 전환</p>
                            <i class="fas fa-angle-right"></i>
                          </div>
                        </a>
                      </div>
                    </div>
                    <hr>
                    <ul class="profile-modal__menu">
                      <a href="/src/pages/profile/">
                        <li>MY</li>
                      </a>
                      <a href="/src/pages/main/">
                        <li>이용권</li>
                      </a>
                      <a href="">
                        <li>회원탈퇴</li>
                      </a>
                      <a href="">
                        <li id="logoutButton" class="logoutButton">로그아웃</li>
                      </a>
                    </ul>
                  </div>
                </section>
              </a>
            </div>
          </nav>
          <div id="logout-modal" class="logout-modal">
          <div class="logout-modal-content">
            <span class="logout-close">&times;</span>
            <p>로그아웃 하시겠습니까?</p>
            <div class="logout-modal-footer">
              <button id="cancelLogout" class="cancelLogout">취소</button>
              <button id="confirmLogout" class="confirmLogout">확인</button>
            </div>
          </div>
        </div>
        </header>
        
      `;
    }

    async connectedCallback() {
      const profileIcon = this.shadowRoot.querySelector(
        '.header__icon-profile'
      );
      const profileModal = this.shadowRoot.querySelector('.profile-modal');
      const logoutButton = this.shadowRoot.querySelector('.logoutButton');
      const logoutModal = this.shadowRoot.querySelector('.logout-modal');
      const closeButton = logoutModal.querySelector('.logout-close');
      const cancelLogoutButton = logoutModal.querySelector('.cancelLogout');
      const confirmLogoutButton = logoutModal.querySelector('.confirmLogout');

      profileIcon.addEventListener('mouseenter', () => {
        profileModal.classList.add('is-active');
      });

      profileIcon.addEventListener('mouseleave', () => {
        setTimeout(() => {
          if (!profileModal.matches(':hover')) {
            profileModal.classList.remove('is-active');
          }
        }, 300);
      });

      logoutButton.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('로그아웃 버튼 클릭했음');
        logoutModal.style.display = 'block';
      });

      closeButton.addEventListener('click', () => {
        logoutModal.style.display = 'none';
      });

      cancelLogoutButton.addEventListener('click', () => {
        logoutModal.style.display = 'none';
      });

      confirmLogoutButton.addEventListener('click', () => {
        setStorage('auth', defaultAuth);
        window.location.href = '/src/pages/login/index.html';
      });
    }
  }

  customElements.define('c-header', Header);

  return Header;
}

const Header = fetchData();

export { Header };
