import '/src/components/rendingbutton/_rendingbutton.scss';
import logo from '/assets/icon.png';

const template = `
    <div class="rending">
    <button class="rending__button">
      <img src="${logo}" alt="로그인 페이지로 이동하는 버튼" width="100%" height="100%"/>
      <span>새로워진 티빙을 만나보세요!</span>
    </button>
    </div>
`;

document.querySelector('.button1 .rendingbutton').innerHTML = template;
document.querySelector('.button2 .rendingbutton').innerHTML = template;
