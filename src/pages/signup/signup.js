
import '/src/components/input/input.js';
import '/src/pages/signup/_signup.scss';
import { Header } from '/src/components/header/header.js';
import { Footer } from '/src/components/footer/footer.js';
import { getNode, getNodes } from 'kind-tiger';

const inputNodes = getNodes('.input-component--input');
const inputNode = inputNodes[0];
const inputNode2 = inputNodes[1];
const inputNode3 = inputNodes[2];
const inputNode4 = inputNodes[3];

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
  } else {
    checkpw.classList.remove('display-none');
    checkpw.classList.add('red');
  }
});

inputNode4.addEventListener('input', (e) => {
  const input = getNode('.input--component__email');
  const target = e.target.value;

  if (validateEmail(target)) {
    input.classList.add('display-none');
  } else {
    input.classList.remove('display-none');
    input.classList.add('red');
    input.textContent = '이메일 형식으로 입력해주세요';
    if (target === '') {
      input.textContent = '입력값이 없습니다.';
    }
  }
});













