import '/src/components/rendingbutton/_rendingbutton.scss';
import logo from '/public/assets/icon.png';

const template = `
<div class="rending">
<button class="rending__button">
  <img src="${logo}" alt="" srcset="" />
  <span>새로워진 티빙을 만나보세요!</span>
</button>
</div>
`;


document.querySelector('.button1 .rendingbutton').innerHTML = template;
document.querySelector('.button2 .rendingbutton').innerHTML = template;