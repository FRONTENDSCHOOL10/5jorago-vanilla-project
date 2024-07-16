import { getNode, insertLast } from 'kind-tiger';
import pb from '/src/api/pocketbase.js';
import getPbImageURL from '/src/api/getPbImageURL';

const renderBox = getNode('.render-input');
const inputSearch = getNode('.search-input');
const searchButton = getNode('.search-btn');

(async function () {
  const dataList = await pb.collection('watched').getFullList();

  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }

  function renderSearchImg(e) {
    const input = e.target.value;
    renderBox.innerText = input;

    if (!input) {
      renderBox.innerHTML = '';
      renderBox.style.display = 'none';
      return;
    }

    renderBox.style.display = 'flex';
    renderBox.innerHTML = '';

    let found = false;
    for (let data of dataList) {
      if (data.title.startsWith(input)) {
        found = true;
        const imgURL = getPbImageURL(data);
        const template = `
      <a href="/src/pages/main/">
        <img src="${imgURL}" alt="${data.title}"/>
        <h3>${data.title}</h3>
      </a>`;

        insertLast(renderBox, template);
      }
    }

    if (!found) {
      renderBox.innerHTML = '<p>검색결과가 존재하지 않습니다</p>';
    }
  }

  const debouncedRenderImg = debounce(renderSearchImg, 500);

  inputSearch.addEventListener('input', debouncedRenderImg);
  searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    renderSearchImg();
  });
})();
