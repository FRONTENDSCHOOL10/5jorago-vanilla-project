import { getNode, insertLast } from 'kind-tiger';
import cancelIcon from '/public/assets/cancel_1_default.png';

const searchInput = getNode('.search-input');
const searchButton = getNode('.search-bar button');
const recentSearchesContainer = getNode('.search-box');
const noResultElement = getNode('.search__recent-searches--no-result-content');

// 서치기록 렌더링
function renderRecentSearch() {
  const recentSearches =
    JSON.parse(localStorage.getItem('recentSearches')) || [];

  recentSearchesContainer.innerHTML = '';

  if (recentSearches.length > 0) {
    noResultElement.style.display = 'none';
    recentSearches.forEach((search, index) => {
      const template = `
      <div class="search-list-group" data-index="${index}">
        <li>${search}</li>
        <button type="button" class="delete-btn">
          <img src="${cancelIcon}" alt="검색어 삭제 버튼">
        </button>
      </div>`;
      insertLast(recentSearchesContainer, template);
    });

    document.querySelectorAll('.delete-btn').forEach((button) => {
      button.addEventListener('click', handleDeleteSearch);
    });
  } else {
    noResultElement.style.display = 'block';
  }
}

// 로컬스토리지에 데이터 추가
function addSearchTerm(text) {
  const recentSearches =
    JSON.parse(localStorage.getItem('recentSearches')) || [];
  // 중복 거르기
  if (!recentSearches.includes(text)) {
    recentSearches.push(text);
    // 검색어 10개로 제한
    if (recentSearches.length > 10) {
      recentSearches.shift();
    }
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
  }
}

// 최근검색어 추가 이벤트 함수
export function handleRecentSearch() {
  const searchText = searchInput.value.trim();
  if (searchText) {
    addSearchTerm(searchText);
    searchInput.value = '';
    renderRecentSearch();
  }
}

function renderDeleteRecent(index) {
  const recentSearches =
    JSON.parse(localStorage.getItem('recentSearches')) || [];
  recentSearches.splice(index, 1);
  if (recentSearches.length === 0) {
    localStorage.removeItem('recentSearches');
  } else {
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
  }
  renderRecentSearch();
}

function handleDeleteSearch(event) {
  const index = event.target.closest('.search-list-group').dataset.index;
  renderDeleteRecent(index);
}

searchButton.addEventListener('click', handleRecentSearch);
renderRecentSearch();
