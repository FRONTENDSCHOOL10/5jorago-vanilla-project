import '/src/components/input/_input.scss';
import { insertBefore } from 'kind-tiger';
import { getNode } from 'kind-tiger';

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
  <label for="user-pw"></label>
  <input
    placeholder="비밀번호"
    class="input-component--input"
    type="password"
    id="user-pw"
    name="user-pw"
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
    type="password"
    id="user-pw"
    name="user-id"
    pattern="[a-zA-Z0-9]{6,12}"
    required
  />
  <p class = 'input--component__checkedpw display-none'>비밀번호 와 일치 하지 않습니다.</p>

</div>

`;
const checkTheEmail = /*html */ `

<div class="input-component">
  <label for="user-email"></label>
  <input
    placeholder="이메일"
    class="input-component--input"
    type="email"
    id="user-email"
    name="user-id"
    pattern="[a-zA-Z0-9]{6,12}"
    required
  />

  <p class='input--component__email'>이메일 형식으로 입력해주세요</p>
</div>

`;

insertBefore('.container', idtemplate);
insertBefore('.container', pwtemplate);
insertBefore('.container', checkThePassword);
insertBefore('.container', checkTheEmail);
