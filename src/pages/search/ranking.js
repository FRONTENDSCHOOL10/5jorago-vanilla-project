import pb from '/src/api/pocketbase.js';
import { getNode, insertLast } from 'kind-tiger';

async function renderDate() {
  const data = await pb.collection('main_ranking').getFullList({
    sort: 'rank',
  });
  const rankingContainer = getNode('.search__popular-searches--list');

  for (let i = 0; i < data.length; i++) {
    const dataObj = data[i];
    console.log(dataObj);

    const template = `
  <span class="search__popular-searches--rank">${dataObj.rank}</span>
  <a href="/src/pages/search/" class="search__popular-searches--content-title">
    <h3>${dataObj.title}</h3>
  </a>`;

    const elem = document.createElement('li');
    elem.className = `search__popular-searches--content`;
    rankingContainer.appendChild(elem);

    insertLast(elem, template);
  }
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let hours = today.getHours().toString().padStart(2,'0');
  let minutes = today.getMinutes().toString().padStart(2, '0');

  const dateElement = document.createElement('span');
  dateElement.className = 'search__date';
  dateElement.textContent = `${year + '.' + month + '.' + date + ' 오전 ' + hours + ':' + minutes + ' 기준'}`;
  rankingContainer.appendChild(dateElement);
}

renderDate();
