import '/src/pages/profile/_profile.scss';
import css from '/src/components/profile/_profile.scss?inline';
import { Header } from '/src/components/header/l-header.js';
import { Footer } from '/src/components/footer/footer.js';
import { Profile } from '/src/components/profile/profile.js';
import { getNode } from 'kind-tiger';
import pb from '/src/api/pocketbase.js';

// * throttle 함수
function throttle(func, delay) {
  let lastCall = 0;

  return function(...args) {
    const now = new Date().getTime();

    if (now - lastCall < delay) {
      return;
    }

    lastCall = now;
    return func(...args);
  };
}


// 1. 계정에 따른 UI 변경
// - 신규 회원(막 회원가입 시): 친구 X -> 프로필에 1개만 보여줌
// - 기존 회원: 친구 O -> 프로필에 여러 개 보여줌

// 2. 버튼 클릭 시 UI 변경
// '프로필 편집' 버튼을 누르면
// - 버튼 UI 변경
// - 아이콘 변경(잠금 아이콘 -> 연필 아이콘)


// 데이터 함수
async function loadData() {
  try {
    // 신규 회원
    const newUser = await pb.collection('users').getOne('ikb14ijlit23b0s');

    // 기존 회원
    const existingUser = await pb.collection('users').getOne('rmmyxczgm98lss0');

    // 프로필 박스에 데이터 넣기
    // profileBox(newUser);
    profileBox(existingUser);

  } catch (error) {
    console.error('Error fetching user data:', error);
  }
}

loadData();


// 프로필 이미지 URL 함수
// - 기존 함수랑 약간 달라서 수정해서 씀
function getPbImageURL(item, fileName = 'avatar') {
  return `${import.meta.env.VITE_PB_API}/files/${item.collectionId}/${item.id}/${fileName}`;
}


// 프로필 템플릿 함수
// - 버튼 누르면 아이콘 변경(잠금(lock, 기본), 수정(edit))
function profileTemplate(data, imageUrl, isEditMode = false) {
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
        class="${lockOrEditIcon}"
        xmlns="http://www.w3.org/2000/svg"
        width="${isEditMode ? 60 : 50}"
        height="${isEditMode ? 60 : 50}"
        viewBox="0 0 ${isEditMode ? 60 : 50} ${isEditMode ? 60 : 50}"
        fill="none"
      >
        ${isEditMode ? `
          <g clip-path="url(#clip0_5362_111)">
            <path d="M10.27 41.8863L9.23438 51.0171H18.3364L45.1804 24.1731L36.0784 15.0711L10.27 41.8863ZM49.3792 19.9731C49.977 19.3756 50.4513 18.6661 50.7748 17.8853C51.0984 17.1044 51.265 16.2674 51.265 15.4221C51.265 14.5769 51.0984 13.7399 50.7748 12.959C50.4513 12.1781 49.977 11.4687 49.3792 10.8711C48.7816 10.2733 48.0722 9.79903 47.2913 9.47546C46.5104 9.15189 45.6734 8.98535 44.8282 8.98535C43.9829 8.98535 43.1459 9.15189 42.3651 9.47546C41.5842 9.79903 40.8747 10.2733 40.2772 10.8711L38.6752 12.4731L47.7772 21.5751L49.3792 19.9731Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_5362_111">
              <rect width="60" height="60" fill="white"/>
            </clipPath>
          </defs>
        ` : `
          <g clip-path="url(#clip0_5352_3806)">
            <path d="M38.3304 39.8867H11.1094V19.4707H38.3304V39.8857V39.8867ZM24.7614 26.4427C24.2309 26.4427 23.7222 26.6534 23.3472 27.0285C22.9721 27.4036 22.7614 27.9123 22.7614 28.4427V31.5707C22.7614 32.1011 22.9721 32.6098 23.3472 32.9849C23.7222 33.36 24.2309 33.5707 24.7614 33.5707H24.8324C25.3628 33.5707 25.8715 33.36 26.2466 32.9849C26.6217 32.6098 26.8324 32.1011 26.8324 31.5707V28.4437C26.8324 27.9133 26.6217 27.4046 26.2466 27.0295C25.8715 26.6544 25.3628 26.4437 24.8324 26.4437L24.7614 26.4427Z" fill="white"/>
            <path d="M24.7943 9.14062C26.9537 9.14063 29.0247 9.99844 30.5516 11.5254C32.0785 13.0523 32.9363 15.1232 32.9363 17.2826V22.3716C32.9363 26.8716 16.8573 23.1366 16.6523 22.3716V17.2826C16.6523 15.1232 17.5102 13.0523 19.0371 11.5254C20.564 9.99844 22.635 9.14063 24.7943 9.14062V9.14062Z" stroke="white" stroke-width="4"/>
          </g>
          <defs>
            <clipPath id="clip0_5352_3806">
              <rect width="50" height="50" fill="white"/>
            </clipPath>
          </defs>
        `}
      </svg>
      <span class="profile__name" aria-labelledby="profile__img">${data.name}</span>
    </div>
  `;
}


// 프로필 렌더링 함수
function renderProfile(data, isEditMode = false) {
  const profileBox = getNode('.profile-box');
  profileBox.innerHTML = '';

  // 모바일 화면일 때 그리드 템플릿 수정
  if (window.innerWidth < 768) {
    profileBox.style.gridTemplateColumns = data.avatar.length > 1 ? '1fr 1fr' : '1fr';
  }

  // 아바타 프로필 이미지 넣기
  data.avatar.forEach(avatar => {
    const imageUrl = getPbImageURL(data, avatar);
    const template = profileTemplate(data, imageUrl, isEditMode);

    profileBox.insertAdjacentHTML('beforeend', template);
  });
}


// 프로필 편집 버튼 이벤트 함수
function profileBox(data) {
  // 초기 프로필
  renderProfile(data);


  const profileFixButton = getNode('.profile-fix');
  const buttonText = getNode('.profile-title');

  // 버튼 누르면 UI 변경
  profileFixButton.addEventListener('click', () => {
    profileFixButton.classList.toggle('active');
    const isEditMode = profileFixButton.classList.contains('active');

    // 버튼 내부 텍스트 변경
    buttonText.textContent = isEditMode ? '완료' : '프로필 편집';

    // 프로필 재렌더링(아이콘 변경)
    renderProfile(data, isEditMode);
  });


  // 윈도우 리사이즈
  window.addEventListener('resize', throttle(() => 
    renderProfile(data, profileFixButton.classList.contains('active')), 200));
}

