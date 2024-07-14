import '/src/pages/profile/_profile.scss';
import css from '/src/components/profile/_profile.scss?inline';
import { Header } from '/src/components/header/l-header.js'
import { Footer } from '/src/components/footer/footer.js'
import { Profile } from '/src/components/profile/profile.js'
import pb from '/src/api/pocketbase.js';

// * throttle() 사용하기

// 1. 계정에 따른 UI 변경
// 신규 회원(막 회원가입 시): 친구 X -> 프로필에 1개만 보여줌
// 기존 회원: 친구 O -> 프로필에 여러 개 보여줌

// 신규 회원(회원가입)
const data = await pb.collection('users').getOne('ikb14ijlit23b0s');

// 기존 회원(로그인)
const data2 = await pb.collection('users').getOne('rmmyxczgm98lss0');

// 기존의 getPbImageURL()과 경로가 달라서 새로 만듦
function getPbImageURL(item,fileName = 'avatar'){
  return `${import.meta.env.VITE_PB_API}/files/${item.collectionId}/${item.id}/${fileName}`
}

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
      <!-- 자물쇠 아이콘(잠금 상태) / 연필 아이콘(수정 상태) -->
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


function profileBox(data) {
  const profileBox = document.querySelector('.profile-box');
  profileBox.innerHTML = '';

    // 초기 렌더링 시 모바일 화면일 때 초기 그리드 템플릿 설정
    if (window.innerWidth < 768) {
      if(data.avatar.length == 1) {
        profileBox.style.gridTemplateColumns = '1fr';

      } else if(data.avatar.length > 1) {
        profileBox.style.gridTemplateColumns = '1fr 1fr';
      }
    } 


  data.avatar.forEach(avatar => {
    const imageUrl = getPbImageURL(data, avatar);
    const template = profileTemplate(data, imageUrl);

    profileBox.insertAdjacentHTML('beforeend', template);
  });


  // 프로필 편집 버튼 클릭 이벤트 처리
  const profileFixButton = document.querySelector('.profile-fix');
  const buttonText = document.querySelector('.profile-title');

  profileFixButton.addEventListener('click', () => {
    profileFixButton.classList.toggle('active');
    const isEditMode = profileFixButton.classList.contains('active');

    // 버튼 텍스트 변경
    buttonText.textContent = isEditMode ? '완료' : '프로필 편집';

    // 모바일 화면일 때 그리드 템플릿 설정
    if (window.innerWidth < 768) {
      profileBox.style.gridTemplateColumns = isEditMode ? '1fr 1fr' : '1fr 1fr';
    }

    // 프로필 박스 업데이트
    profileBox.innerHTML = ''; // 기존 프로필 박스 내용 초기화


    data.avatar.forEach(avatar => {
      const imageUrl = getPbImageURL(data, avatar);
      const template = profileTemplate(data, imageUrl, isEditMode);

      profileBox.insertAdjacentHTML('beforeend', template);
    });
  });
}

profileBox(data);


