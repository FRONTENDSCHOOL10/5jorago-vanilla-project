import '/src/components/input/input.js';
import '/src/pages/signup/_signup.scss';
import { Header } from '/src/components/header/header.js';
import { Footer } from '/src/components/footer/footer.js';
import { getNode, getNodes, getPbImageURL } from 'kind-tiger';
import pb from '/src/api/pocketbase';
import { ClientResponseError } from 'pocketbase';
import downloadImage from '../../utils/downloadImage';

(async function () {
  const inputNodes = getNodes('.input-component--input');
  const inputNode = inputNodes[0];
  const inputNode2 = inputNodes[1];
  const inputNode3 = inputNodes[2];
  const inputNode4 = inputNodes[3];
  const checkedAll = document.querySelector('input[name=agree_all]');
  const checkboxes = document.querySelectorAll('input[name=agree]');
  //객체로 만들고 키벨류로 만들기

  const img = await pb.collection('default').getOne('ptez07w3bofbpy5');

  const defaultAvatarUrl = getPbImageURL(img, 'field');

  // const defaultAvatarUrl = img.avatar;

  let usersData = {
    username: '',
    password: '',
    passwordConfirm: '',
    email: '',
    avatar: img.avatar,
  };

  function isValidString(str) {
    const regex = /^[a-zA-Z0-9]{6,12}$/;
    return regex.test(str);
  }

  function isValidPassword(password) {
    const regex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*])[a-zA-Z\d~!@#$%^&*]{8,15}$/;
    return regex.test(password);
  }
  function validateEmail(email) {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  }

  inputNode.addEventListener('input', (e) => {
    const p = getNodes('.input-component p');
    const p1 = p[0];

    const target = e.target.value;
    if (isValidString(target)) {
      p1.classList.add('display-none');
      usersData.username = target;
    } else {
      p1.classList.remove('display-none');
      p1.classList.add('red');
      p1.textContent =
        '영문 소문자 또는 영문 소문자, 숫자 조합 6~12 자리로 입력해주세요.';
      if (target === '') {
        p.textContent = '입력값이 없습니다.';
      }
    }
  });

  inputNode2.addEventListener('input', (e) => {
    const p = getNodes('.input-component p');
    const p2 = p[1];

    const target = e.target.value;
    if (isValidPassword(target)) {
      p2.classList.add('display-none');
      usersData.password = target;
    } else {
      p2.classList.remove('display-none');
      p2.classList.add('red');
      p2.textContent = '영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15자리';
      if (target === '') {
        p2.textContent = '입력값이 없습니다.';
      }
    }
  });

  inputNode3.addEventListener('input', (e) => {
    const target = e.target.value;
    const checkpw = getNode('.input--component__checkedpw');

    if (target === inputNode2.value) {
      checkpw.classList.add('display-none');
      usersData.passwordConfirm = target;
    } else {
      checkpw.classList.remove('display-none');
      checkpw.classList.add('red');
    }
  });

  inputNode4.addEventListener('input', async (e) => {
    const input = getNode('.input--component__email');
    const target = e.target.value;
    console.log(usersData);
    if (validateEmail(target)) {
      input.classList.add('display-none');
      return (usersData.email = target);
    } else {
      input.classList.remove('display-none');
      input.classList.add('red');
      input.textContent = '이메일 형식으로 입력해주세요';
      if (target === '') {
        input.textContent = '입력값이 없습니다.';
      }
    }
  });
  //포켓베이스에 저장된 Email 값을 확인하여, 동일한 값이 있을경우 alert

  // 전체 동의 체크박스 클릭 이벤트 핸들러
  checkedAll.addEventListener('click', () => {
    const isChecked = checkedAll.checked;
    checkboxes.forEach((checkbox) => {
      checkbox.checked = isChecked;
    });
  });

  // 개별 체크박스 클릭 이벤트 핸들러
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
      // 모든 체크박스가 체크되어 있는지 확인
      const allChecked = Array.from(checkboxes).every((cb) => cb.checked);
      checkedAll.checked = allChecked;
    });
  });

  const specificCheckboxes = Array.from(checkboxes).slice(0, 4); // 특정 4개 체크박스 선택
  const submitButton = document.querySelector('input[type=button]');
  console.log(submitButton);

  function checkButtonStatus() {
    const allSpecificChecked = specificCheckboxes.every((checkbox) => {
      return checkbox.checked;
    });
    console.log(allSpecificChecked);
    if (!allSpecificChecked) {
      submitButton.disabled = true;
      submitButton.classList.remove('on', allSpecificChecked); // 특정 4개 모두 체크되었을 때 'on' 추가
    } else {
      submitButton.disabled = false;
      submitButton.classList.add('on', allSpecificChecked); // 특정 4개 모두 체크되었을 때 'on' 추가
    }

    // submitButton.removeAttribute('disabled');
  }

  // 초기 버튼 상태 확인
  checkButtonStatus();

  // 각 체크박스에 이벤트 리스너 추가
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', checkButtonStatus);
  });
  checkedAll.addEventListener('change', checkButtonStatus);

  submitButton.addEventListener('click', async () => {
    async function createUser({ email, password, username, passwordConfirm }) {
      if (!email || !password || !username || !passwordConfirm) {
        alert('모든 필드를 채워주세요');
        return;
      }

      if (password !== passwordConfirm) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }

      try {
        // 이메일 중복 확인
        const emailExists = await pb.collection('users').getList(1, 1, {
          filter: `email = "${usersData.email}"`,
        });
        console.log(emailExists.totalItems);

        if (emailExists.totalItems > 0) {
          alert('이미 사용 중인 이메일 주소입니다.');
          return;
        }

        // 사용자명 중복 확인
        const usernameExists = await pb.collection('users').getList(1, 1, {
          filter: `username="${username}"`,
        });

        if (usernameExists.totalItems > 0) {
          alert('이미 사용 중인 사용자명입니다.');
          return;
        }

        const imgBlob = await downloadImage(defaultAvatarUrl);

        console.log(imgBlob);

        // 유저 생성
        const formData = new FormData();

        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('passwordConfirm', password);
        formData.append('avatar', imgBlob, 'avatar.jpg');

        console.log(formData);

        const response = await pb.collection('users').create(formData);

        alert('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
        location.href = '/src/pages/login/index.html';
        return {
          username: '',
          password: '',
          passwordConfirm: '',
          email: '',
          avatar: defaultAvatarUrl,
        };
      } catch (error) {
        console.error('유저 생성 실패:', error);
        if (error instanceof ClientResponseError) {
          console.error('Error details:', error.data);
        }
        alert('회원가입에 실패했습니다: ' + '동일한 이메일 주소가 있습니다.');
      }
    }
    createUser(usersData);
  });
  // 유저 정보를 생성하는 함수
  //버튼을 클릭하였을때, idinput 에 값은 username
  //                  pwinput 에 값은 password,passwordConfirm 으로
  //                  email 에 값은   email 에 넣어서 객체로 만들기
  //생성된 객체를 포켓베이스 Collections/users 로 보내기
  // 인풋에 값이 비어있으면 통신을 못하게.
})();
