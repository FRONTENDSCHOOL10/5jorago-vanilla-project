import '/src/pages/profile/_profile.scss';
import css from '/src/components/profile/_profile.scss?inline';
import { Header } from '/src/components/header/l-header.js';
import { Footer } from '/src/components/footer/footer.js';
import { Profile } from '/src/components/profile/profile.js';
import { getNode, getNodes } from 'kind-tiger';
import pb from '/src/api/pocketbase.js';

(async function () {
  // * throttle 함수
  function throttle(func, delay) {
    let lastCall = 0;

    return function (...args) {
      const now = new Date().getTime();

      if (now - lastCall < delay) {
        return;
      }

      lastCall = now;
      return func(...args);
    };
  }

  // 로고 페이지 이동 함수 -------------------------------
  document.addEventListener('DOMContentLoaded', function () {
    const logos = getNodes('c-header');

    function moveToPage() {
      window.location.href = '/src/pages/main/index.html';
    }

    logos.forEach((logo) => {
      logo.addEventListener('click', moveToPage);
    });
  });

  // 프로필 -------------------------------------------
  const isAuth = JSON.parse(localStorage.getItem('auth'));
  const userData = await pb.collection('users').getFullList();
  let foundUser = null;

  // 사용자 데이터 가져오기
  async function loadData() {
    for (let i = 0; i < userData.length; i++) {
      if (isAuth.user.id === userData[i].id) {
        foundUser = userData[i];
        break;
      }
    }

    if (foundUser) {
      renderProfile(foundUser);
      profileBox(foundUser); // 프로필 박스 초기화
    }
  }

  // 프로필 이미지 URL 생성 함수
  // - api에 있는 기존의 함수랑 경로가 다름
  function getPbImageURL(item, fileName = 'avatar') {
    return `${import.meta.env.VITE_PB_API}/files/${item.collectionId}/${item.id}/${fileName}`;
  }

  // 프로필 템플릿 함수
  function profileTemplate(data, imageUrl, index, isEditMode = false) {
    const lockOrEditIcon = isEditMode ? 'profile__edit' : 'profile__lock';

    return `
    <style>${css}</style>
    <div class="profile">
      <div class="profile__img--overlay"></div>
      <img 
        src="${imageUrl}" 
        class="profile__img"
        alt="프로필 이미지" />
      <svg
        class="profile__icon ${lockOrEditIcon}"
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
      >
          <g clip-path="url(#clip0_5362_111)">
            <path d="M10.27 41.8863L9.23438 51.0171H18.3364L45.1804 24.1731L36.0784 15.0711L10.27 41.8863ZM49.3792 19.9731C49.977 19.3756 50.4513 18.6661 50.7748 17.8853C51.0984 17.1044 51.265 16.2674 51.265 15.4221C51.265 14.5769 51.0984 13.7399 50.7748 12.959C50.4513 12.1781 49.977 11.4687 49.3792 10.8711C48.7816 10.2733 48.0722 9.79903 47.2913 9.47546C46.5104 9.15189 45.6734 8.98535 44.8282 8.98535C43.9829 8.98535 43.1459 9.15189 42.3651 9.47546C41.5842 9.79903 40.8747 10.2733 40.2772 10.8711L38.6752 12.4731L47.7772 21.5751L49.3792 19.9731Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_5362_111">
              <rect width="60" height="60" fill="white"/>
            </clipPath>
          </defs>
      </svg>
      <span class="profile__name" aria-labelledby="profile__img-${data.id}">
        ${index === 0 ? data.name : foundUser.another_user[`user${index}`]}
      </span>
    </div>
  `;
  }

  // 프로필 렌더링 함수
  function renderProfile(data, isEditMode = false) {
    const profileBox = getNode('.profile-box');
    profileBox.innerHTML = '';

    // 모바일 화면일 때 그리드 템플릿 수정
    if (window.innerWidth < 768) {
      if (data.avatar.length > 1) {
        profileBox.style.gridTemplateColumns = '1fr 1fr';
      } else {
        profileBox.style.gridTemplateColumns = '1fr';
      }
    }

    // 아바타 프로필 이미지 넣기
    data.avatar.forEach((avatar, index) => {
      const imageUrl = getPbImageURL(data, avatar);
      const template = profileTemplate(data, imageUrl, index, isEditMode);

      profileBox.insertAdjacentHTML('beforeend', template);
    });
  }

  // 프로필 이벤트 함수
  function profileBox() {
    const profileFixButton = getNode('.profile-fix');
    const buttonText = getNode('.profile-title');
    const profiles = getNodes('.profile');

    profiles.forEach((profile) => {
      let isFirstClick = true;

      // 프로필 클릭 이벤트 함수
      profile.addEventListener('click', () => {
        // 첫 번째 클릭일 때 아이콘과 overlay 이미지 숨기기
        if (isFirstClick) {
          profile.querySelector('.profile__icon').style.display = 'none';
          profile.querySelector('.profile__img--overlay').style.display =
            'none';
          isFirstClick = false;

          // 두 번째 클릭일 때 메인 페이지로 이동
        } else {
          window.location.href = '/src/pages/main/index.html';
        }
      });
    });

    // 초기 UI 설정 (자물쇠 아이콘)
    profiles.forEach((profile) => {
      const icon = profile.querySelector('.profile__icon');

      icon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none" width="50" height="50">
        <g clip-path="url(#clip0_5352_3806)">
          <path d="M38.3304 39.8867H11.1094V19.4707H38.3304V39.8857V39.8867ZM24.7614 26.4427C24.2309 26.4427 23.7222 26.6534 23.3472 27.0285C22.9721 27.4036 22.7614 27.9123 22.7614 28.4427V31.5707C22.7614 32.1011 22.9721 32.6098 23.3472 32.9849C23.7222 33.36 24.2309 33.5707 24.7614 33.5707H24.8324C25.3628 33.5707 25.8715 33.36 26.2466 32.9849C26.6217 32.6098 26.8324 32.1011 26.8324 31.5707V28.4437C26.8324 27.9133 26.6217 27.4046 26.2466 27.0295C25.8715 26.6544 25.3628 26.4437 24.8324 26.4437L24.7614 26.4427Z" fill="white"/>
          <path d="M24.7943 9.14062C26.9537 9.14063 29.0247 9.99844 30.5516 11.5254C32.0785 13.0523 32.9363 15.1232 32.9363 17.2826V22.3716C32.9363 26.8716 16.8573 23.1366 16.6523 22.3716V17.2826C16.6523 15.1232 17.5102 13.0523 19.0371 11.5254C20.564 9.99844 22.635 9.14063 24.7943 9.14062V9.14062Z" stroke="white" stroke-width="4"/>
        </g>
        <defs>
          <clipPath id="clip0_5352_3806">
            <rect width="50" height="50" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    `;
    });

    // 프로필 편집 버튼 클릭 이벤트
    profileFixButton.addEventListener('click', () => {
      profileFixButton.classList.toggle('active');
      const isEditMode = profileFixButton.classList.contains('active');

      // 버튼 텍스트 변경
      buttonText.textContent = isEditMode ? '완료' : '프로필 편집';

      // 아이콘 SVG 변경
      profiles.forEach((profile) => {
        const icon = profile.querySelector('.profile__icon');

        if (isEditMode) {
          // 편집 모드에서 아이콘 변경
          icon.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" fill="none" width="60" height="60">
            <g clip-path="url(#clip0_5362_111)">
              <path d="M10.27 41.8863L9.23438 51.0171H18.3364L45.1804 24.1731L36.0784 15.0711L10.27 41.8863ZM49.3792 19.9731C49.977 19.3756 50.4513 18.6661 50.7748 17.8853C51.0984 17.1044 51.265 16.2674 51.265 15.4221C51.265 14.5769 51.0984 13.7399 50.7748 12.959C50.4513 12.1781 49.977 11.4687 49.3792 10.8711C48.7816 10.2733 48.0722 9.79903 47.2913 9.47546C46.5104 9.15189 45.6734 8.98535 44.8282 8.98535C43.9829 8.98535 43.1459 9.15189 42.3651 9.47546C41.5842 9.79903 40.8747 10.2733 40.2772 10.8711L38.6752 12.4731L47.7772 21.5751L49.3792 19.9731Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_5362_111">
                <rect width="60" height="60" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        `;
        } else {
          // 일반 모드에서 아이콘 변경
          icon.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="none" width="50" height="50">
            <g clip-path="url(#clip0_5352_3806)">
              <path d="M38.3304 39.8867H11.1094V19.4707H38.3304V39.8857V39.8867ZM24.7614 26.4427C24.2309 26.4427 23.7222 26.6534 23.3472 27.0285C22.9721 27.4036 22.7614 27.9123 22.7614 28.4427V31.5707C22.7614 32.1011 22.9721 32.6098 23.3472 32.9849C23.7222 33.36 24.2309 33.5707 24.7614 33.5707H24.8324C25.3628 33.5707 25.8715 33.36 26.2466 32.9849C26.6217 32.6098 26.8324 32.1011 26.8324 31.5707V28.4437C26.8324 27.9133 26.6217 27.4046 26.2466 27.0295C25.8715 26.6544 25.3628 26.4437 24.8324 26.4437L24.7614 26.4427Z" fill="white"/>
              <path d="M24.7943 9.14062C26.9537 9.14063 29.0247 9.99844 30.5516 11.5254C32.0785 13.0523 32.9363 15.1232 32.9363 17.2826V22.3716C32.9363 26.8716 16.8573 23.1366 16.6523 22.3716V17.2826C16.6523 15.1232 17.5102 13.0523 19.0371 11.5254C20.564 9.99844 22.635 9.14063 24.7943 9.14062V9.14062Z" stroke="white" stroke-width="4"/>
            </g>
            <defs>
              <clipPath id="clip0_5352_3806">
                <rect width="50" height="50" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        `;
        }

        // 선택 해제 시 img--overlay 이미지 다시 보이기
        if (!isEditMode) {
          const overlay = profile.querySelector('.profile__img--overlay');
          overlay.style.display = 'block';
        }
      });
    });
  }

  loadData();
})();
