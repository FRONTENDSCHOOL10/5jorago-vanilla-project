import { insertLast, getNode } from 'kind-tiger';
import '/src/components/loading/_loading.scss';
const template = `
<div class="mask">
  <img class="loadingImg" src="/assets/loading.gif" alt="로딩 이미지">
</div>`;

insertLast('.loading', template);

const loading = getNode('.loading');
const html = getNode('html');

html.style.overflow = 'hidden';
window.addEventListener('load', () => {
  loading.style.opacity = '0';
  loading.style.transition = 'opacity 0.7s ease';
  setTimeout(() => {
    html.style.overflow = 'auto';
    loading.style.display = 'none';
  }, 500);
});
