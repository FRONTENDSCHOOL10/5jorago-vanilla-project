import '/src/components/input/_input.scss';
import { insertFirst } from 'kind-tiger';

const idtemplate = /*html */ `

<div class="input-component">
  <label for="user-id"></label>
  <input
    placeholder="아이디"
    class="input-component--input"
    type="text"
    id="user-id"
    name="user-id"
    pattern="[a-zA-Z0-9]{6,12}"
    required
  />
  <p>영문 또는 영문, 숫자 조합 6~12자리</p>

</div>
`;
const pwtemplate = /*html */ `

<div class="input-component">
  <label for="user-id"></label>
  <input
    placeholder="비밀번호"
    class="input-component--input"
    type="text"
    id="user-id"
    name="user-id"
    pattern="[a-zA-Z0-9]{6,12}"
    required
  />
  <p>영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15자리</p>

</div>
`;
const checkThePassword = /*html */ `

<div class="input-component">
  <label for="user-id"></label>
  <input
    placeholder="비밀번호 확인"
    class="input-component--input"
    type="text"
    id="user-id"
    name="user-id"
    pattern="[a-zA-Z0-9]{6,12}"
    required
  />

</div>
`;
const checkTheEmail = /*html */ `

<div class="input-component">
  <label for="user-id"></label>
  <input
    placeholder="이메일"
    class="input-component--input"
    type="text"
    id="user-id"
    name="user-id"
    pattern="[a-zA-Z0-9]{6,12}"
    required
  />

</div>
`;

insertFirst('.container', idtemplate);
insertFirst('.container', pwtemplate);
insertFirst('.container', checkThePassword);
insertFirst('.container', checkTheEmail);
