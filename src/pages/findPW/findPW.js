import '/src/pages/findPW/_findPW.scss';

import { Header } from '/src/components/header/l-header.js';
import { Footer } from '/src/components/footer/footer.js';

import pb from '/src/api/pocketbase.js';

document.addEventListener('DOMContentLoaded', () => {
  const userIdInput = document.querySelector('#user-id');
  const confirmButton = document.querySelector('.confirm-btn');

  // 입력값이 변할 때마다 확인 버튼 활성화 여부를 체크하는 함수
  const checkInput = () => {
    if (userIdInput.value.trim().length > 0) {
      confirmButton.classList.add('confirm-btn--active'); // 입력값이 있을 때 활성화 클래스 추가
    } else {
      confirmButton.classList.remove('confirm-btn--active'); // 입력값이 없을 때 활성화 클래스 제거
    }
  };

  // 입력값 변화를 감지하는 이벤트 리스너 등록
  userIdInput.addEventListener('input', checkInput);

  confirmButton.addEventListener('click', async (event) => {
    event.preventDefault();

    const userId = userIdInput.value;

    if (userId.length === 0) {
      alert('아이디를 입력해주세요');
      userIdInput.focus();
      return;
    }

    try {
      // 입력받은 아이디로 사용자 조회
      const user = await pb
        .collection('users')
        .getFirstListItem(`username="${userId}"`);

      // 사용자 이메일로 비밀번호 재설정 이메일 요청
      await pb.collection('users').requestPasswordReset(user.email);

      // 이메일 발송 성공 메시지 출력
      alert(
        user.email +
          '로 비밀번호 초기화 이메일을 발송했습니다. 비밀번호 재설정 후 로그인하세요.'
      );

      // 로그인 페이지로 이동
      window.location.href = '/src/pages/login/index.html';
    } catch (error) {
      console.error(error);
      userIdInput.value = ''; // 입력값 초기화
      alert('입력하신 아이디로 등록된 정보가 존재하지 않습니다.');
    }
  });
});
