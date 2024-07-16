import { getNode, insertLast } from 'kind-tiger';
import cancelIcon from '/public/assets/cancel_1_default.png';

const searchInput = getNode('.search-input');
const searchButton = getNode('.search-bar button');
const recentSearchesContainer = getNode('.search__recent-searches--list');

console.log(recentSearchesContainer);

insertLast(recentSearchesContainer, '안녕');
