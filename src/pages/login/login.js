// import '/src/pages/login/_login.scss';

// import { getStorage, setStorage } from 'kind-tiger';
// import { Header } from '/src/components/header/l-header.js';
// import { Footer } from '/src/components/footer/footer.js';

// import pb from '/src/api/pocketbase.js';

// document.addEventListener('DOMContentLoaded', () => {
//   const userIdInput = document.querySelector('#user-id');
//   const passwordInput = document.querySelector('#user-pw');
//   const findIdButton = document.querySelector('#findID');
//   const findPWButton = document.querySelector('#findPW');
//   const loginButton = document.querySelector('.login-btn');
//   const singupButton = document.querySelector('#signup-btn');

//   loginButton.addEventListener('click', async (event) => {
//     event.preventDefault();

//     const userId = userIdInput.value;
//     const password = passwordInput.value;

//     if (userId.length == 0) {
//       alert('아이디를 입력해주세요');
//       userIdInput.focus();
//       return;
//     }

//     if (password.length == 0) {
//       alert('비밀번호를 입력해주세요');
//       passwordInput.focus();
//       return;
//     }

//     pb.collection('users')
//       .authWithPassword(userId, password)
//       .then(
//         async () => {
//           const { model, token } = await getStorage('pocketbase_auth');

//           setStorage('auth', {
//             isAuth: !!model,
//             user: model,
//             token,
//           });

//           const userID = JSON.parse(localStorage.getItem('auth')).user.username;

//           alert('환영합니다. ' + userID + '님');
//           location.href = '/src/pages/main/index.html';
//         },
//         () => {
//           userIdInput.value = ''; // 입력값 초기화
//           passwordInput.value = ''; // 입력값 초기화

//           alert('아이디 또는 비밀번호가 일치하지 않습니다.');
//         }
//       );
//   });

//   findIdButton.addEventListener('click', () => {
//     location.href = '/src/pages/findID/index.html';
//   });

//   findPWButton.addEventListener('click', () => {
//     location.href = '/src/pages/findPW/index.html';
//   });

//   singupButton.addEventListener('click', () => {
//     location.href = '/src/pages/signup/index.html';
//   });
// });

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

  const userIdError = document.querySelector('#user-id-error');
  const passwordError = document.querySelector('#user-pw-error');

  const validateInput = throttle(() => {
    const userIdPattern = /^[a-zA-Z0-9]{6,12}$/;
    const passwordPattern =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*])[a-zA-Z\d~!@#$%^&*]{8,15}$/;

    if (!userIdPattern.test(userIdInput.value)) {
      userIdError.textContent = '형식이 맞지 않습니다';
    } else {
      userIdError.textContent = '';
    }

    if (!passwordPattern.test(passwordInput.value)) {
      passwordError.textContent = '형식이 맞지 않습니다';
    } else {
      passwordError.textContent = '';
    }
  }, 1000);

  userIdInput.addEventListener('input', validateInput);
  passwordInput.addEventListener('input', validateInput);

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
          location.href = '/src/pages/main/index.html';
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
