import css from '/src/components/header/_header.scss?inline';
import logo from '/assets/logo_1.png';
import live from '/assets/live_1_default.png';
import serch_default from '/assets/search_1_default.png';
import paramount from '/assets/paramount_1_default.png';
import usericon from '/assets/usericon_1.png';
import pb from '/src/api/pocketbase.js';
import getPbImageURL from '/src/api/getPbImageURL';
import defaultAuth from '/src/api/defaultAuth';
const localAuth = JSON.parse(localStorage.getItem('auth'));
import { insertLast, getNode, setStorage, getStorage } from 'kind-tiger';
const localName = localAuth.user.name;

const userData = await pb.collection('users').getFullList();
for (let data of userData) {
  if (localName === data.name) {
    var dataName = data.name;
    let avatars = data.avatar[0];
    var profileImg = `${import.meta.env.VITE_PB_API}/files/${
      data.collectionId
    }/${data.id}/${avatars}`;
  }
}

export class Header extends HTMLElement {
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
              <img src="${usericon}" alt="Profile Icon" class="header__icon-profile" />
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
                   
                      <li id='user-out'>회원탈퇴</li>
                   
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
            <p>로그아웃 하시겠습니까?</p>
            <div class="logout-modal-footer">
              <button id="cancelLogout" class="cancelLogout">취소</button>
              <button id="confirmLogout" class="confirmLogout">확인</button>
            </div>
        </div>
    </div>
               <div id="userout" class="userout"">
        <div class="userout-content">
            <p>회원탈퇴 하시겠습니까?</p>
            <div class="userout-footer">
                <div class="btn-noborder">
                    <button class="confirm-userout" id="confirm-userout">확인</button>
                </div>
                <span class="line"></span>
                <div class="btn-noborder">
                    <button class="cancel-userout" id="cancel-userout">취소</button>
                </div>
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
  async connectedCallback() {
    const profileIcon = this.shadowRoot.querySelector('.header__icon-profile');
    const profileModal = this.shadowRoot.querySelector('.profile-modal');
    const logoutButton = this.shadowRoot.querySelector('.logoutButton');
    const logoutModal = this.shadowRoot.querySelector('.logout-modal');
    const cancelLogoutButton = logoutModal.querySelector('.cancel-Logout');
    const confirmLogoutButton = logoutModal.querySelector('.confirm-Logout');
    const userOut = this.shadowRoot.querySelector('#user-out');
    const userOutModal = this.shadowRoot.querySelector('.userout');
    const cancelButton = userOutModal.querySelector('.cancel-userout');
    const confirmButton = userOutModal.querySelector('.confirm-userout');
    console.log(cancelButton);

    userOut.addEventListener('click', () => {
      userOutModal.style.display = 'block';
    });
    cancelButton.addEventListener('click', () => {
      userOutModal.style.display = 'none';
    });
    confirmButton.addEventListener('click', async () => {
      try {
        let user = await getStorage('auth');
        const userId = user.user['id'];
        console.log('Attempting to delete user with ID:', userId);

        await pb.collection('users').delete(userId);
        console.log('User deleted successfully');
        setStorage('auth', defaultAuth);

        // 추가적인 작업 (예: 로그아웃, 페이지 리다이렉트 등)
      } catch (error) {
        console.error('Error deleting user:', error);
        // 사용자에게 오류 메시지 표시
      }
      window.location.href = '/src/pages/login/index.html';
      userOutModal.style.display = 'none';
    });

    userOutModal.style.display = 'none';
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
