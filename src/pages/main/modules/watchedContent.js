import { getNodes } from 'kind-tiger';
import './index';

const allContent = getNodes('.article a');

console.log(allContent);

for (let content of allContent) {
  content.addEventListener('click', (e) => {
    console.log(e);
  });
}
