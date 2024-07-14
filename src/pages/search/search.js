import '/src/pages/search/_search.scss';
import { Header } from '/src/components/header/header.js';
import { getNode } from 'kind-tiger';
import pb from '/src/api/pocketbase.js';
import getPbImageURL from '/api/getPbImageURL';


// debounce 함수
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const later = () => {
      clearTimeout(timeout);
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}


// 인풋값 

async function handleInput(event) {
  const collections = [
    'main_must_watch',
    'main_only_taing',
    'main_ranking',
    'main_vod',
  ];

  for (const collection of collections) {
    const data = await pb.collection(collection).getFullList();

    for (let i = 0; i < data.length; i++) {
      const dataObj = data[i];
      if (data.title === event.target.value) {
        console.log(getPbImageURL(dataObj));
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = getNode('.search-input');
  const debouncedInput = debounce(handleInput, 300);

  searchInput.addEventListener('input', debouncedInput);
});
