import '/src/pages/login/_login.scss';

import { getStorage, setStorage } from 'kind-tiger';
import { Header } from '/src/components/header/l-header.js';
import { Footer } from '/src/components/footer/footer.js';
import pb from '/src/api/pocketbase.js';

document.addEventListener('DOMContentLoaded', () => {
  const userIdInput = document.querySelector('#user-id');
  const passwordInput = document.querySelector('#user-pw');
  const findIdButton = document.querySelector('#findID');
  const findPWButton = document.querySelector('#findPW');
  const loginButton = document.querySelector('.login-btn');
  const passwordToggle = document.querySelector('.visible-icon');
  const cancelIdToggle = document.querySelector('.cancel-id-icon');
  const cancelPwToggle = document.querySelector('.cancel-pw-icon');

  const userIdError = document.querySelector('#user-id-error');
  const passwordError = document.querySelector('#user-pw-error');

  function isValidString(str) {
    const regex = /^[a-zA-Z0-9]{6,12}$/;
    return regex.test(str);
  }

  function isValidPassword(password) {
    const regex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*])[a-zA-Z\d~!@#$%^&*]{8,15}$/;
    return regex.test(password);
  }

  userIdInput.addEventListener('input', (e) => {
    const idValue = e.target.value;
    if (isValidString(idValue)) {
      userIdError.textContent = '';
    } else {
      userIdError.textContent = '형식이 맞지 않습니다';
    }
    console.log(idValue);
    console.log(isValidString(idValue));
  });

  passwordInput.addEventListener('input', (e) => {
    const pwValue = e.target.value;
    if (isValidPassword(pwValue)) {
      passwordError.textContent = '';
    } else {
      passwordError.textContent = '형식이 맞지 않습니다';
    }
    console.log(pwValue);
    console.log(isValidPassword(pwValue));
  });

  loginButton.addEventListener('click', async (event) => {
    event.preventDefault();

    const userId = userIdInput.value;
    const password = passwordInput.value;

    if (userId.length == 0) {
      alert('아이디를 입력해주세요');
      userIdInput.focus();
      return;
    }

    if (password.length == 0) {
      alert('비밀번호를 입력해주세요');
      passwordInput.focus();
      return;
    }

    pb.collection('users')
      .authWithPassword(userId, password)
      .then(
        async () => {
          const { model, token } = await getStorage('pocketbase_auth');

          setStorage('auth', {
            isAuth: !!model,
            user: model,
            token,
          });

          const userName = JSON.parse(localStorage.getItem('auth')).user.name;

          alert('환영합니다. ' + userName + '님');
          location.href = '/src/pages/profile/index.html';
        },
        () => {
          userIdInput.value = ''; // 입력값 초기화
          passwordInput.value = ''; // 입력값 초기화

          alert('아이디 또는 비밀번호가 일치하지 않습니다.');
        }
      );
  });

  findIdButton.addEventListener('click', () => {
    location.href = '/src/pages/findID/index.html';
  });

  findPWButton.addEventListener('click', () => {
    location.href = '/src/pages/findPW/index.html';
  });

  // 비밀번호 토글 기능
  passwordToggle.addEventListener('click', () => {
    const type =
      passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    passwordToggle.src =
      type === 'password'
        ? '/public/assets/unvisibleId_1.png'
        : '/public/assets/visibleId_1.png';
  });

  cancelIdToggle.addEventListener('click', () => {
    userIdInput.value = ''; // 입력값 초기화
    userIdError.textContent = ''; // 에러 메시지 초기화
  });

  cancelPwToggle.addEventListener('click', () => {
    passwordInput.value = ''; // 입력값 초기화
    passwordError.textContent = ''; // 에러 메시지 초기화
  });
});

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
