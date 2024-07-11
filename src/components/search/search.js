import '/src/components/search/_search.scss';
import { insertLast } from 'kind-tiger';

const recentSearch = /*html*/ `
<div class="search__recent-searches">
 <!-- 최근 검색어 X (no-result) -->
<div class="search__recent-searches--no-result">
<h2 class="search__recent-searches--no-result-title">최근 검색어</h2>
<span class="search__recent-searches--no-result-content"> 검색 내역이 없습니다.</span>
</div> 
</div>
</div>
`;

const popularSearch = /*html*/ `
<div class="search__popular-searches">
<h2 class="search__popular-searches--title">
  실시간 인기 검색어</h2>

<ul class="search__popular-searches--list">
  <li class="search__popular-searches--content">
    <span class="search__popular-searches--rank">1</span>
    <a href="/" class="search__popular-searches--content-title">
      <h3 class="">재벌집 막내 아들</h3>
    </a>
  </li>

  <li class="search__popular-searches--content">
    <span class="search__popular-searches--rank">2</span>
    <a href="/" class="search__popular-searches--content-title">
      <h3 class="">미스터트롯2: 새로운 전설의 시작</h3>
    </a>
  </li>

  <span class="search__date">실시간 날짜</span>
</ul>
</div>
`;
