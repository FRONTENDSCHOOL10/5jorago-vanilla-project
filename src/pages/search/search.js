import '/src/pages/search/_search.scss';
import { Header } from '/src/components/header/header.js';
import { getNode, insertLast } from 'kind-tiger';
import pb from '/src/api/pocketbase.js';
import getPbImageURL from '/src/api/getPbImageURL';
import './modules/recentSearch';
import './modules/ranking';
import './modules/renderInput';

const searchInput = getNode('.search-input');

window.addEventListener('resize', function () {
  const windowWidth = window.innerWidth;
  if (windowWidth < 768) {
    searchInput.placeholder = '검색';
  } else {
    searchInput.placeholder =
      'TV프로그램, 영화 제목 및 출연진으로 검색해보세요.'; // 원래 placeholder로 되돌림
  }
});
