import { getNodes, getNode, insertLast } from 'kind-tiger';
import pb from '/src/api/pocketbase.js';
import getPbImageURL from '/src/api/getPbImageURL';
import { watchedAnimation } from './animation';

const watchedContainer = getNode('.watched-content__container .swiper-wrapper');
const userName = getNode('.watched-content h2');

// localStorage에서 'auth' 데이터 가져오기
const { user } = JSON.parse(localStorage.getItem('auth'));
const watchedContentList =
  JSON.parse(localStorage.getItem('watchedContentList')) || [];

// 컨텐츠 로컬에 저장 함수
function addWatchedContent(content) {
  const existing = watchedContentList.find(
    (item) => item.title === content.title
  );

  if (!existing) {
    watchedContentList.push(content);

    if (watchedContentList.length > 10) watchedContentList.shift();
    localStorage.setItem(
      'watchedContentList',
      JSON.stringify(watchedContentList)
    );
  }
}

// 템플릿 형성 함수
function createTemplate(imgURL, title) {
  return `
    <div class="swiper-slide">
      <a href="/src/pages/main/">
        <img src="${imgURL}" alt="${title}"/>
        <span class="watchedContent__videoTitle">${title}</span>
      </a>
    </div>`;
}

async function renderWatchedContents() {
  if (watchedContentList.length > 0) {
    for (const content of watchedContentList) {
      const selectedData = await pb.collection('watched').getFullList({
        filter: `title = '${content.title}'`,
      });

      if (selectedData) {
        const imgURL = await getPbImageURL(selectedData[0]);
        const template = createTemplate(imgURL, selectedData[0].title);
        insertLast(watchedContainer, template);
      }
    }

    userName.textContent = `${user.name}님이 시청하는 컨텐츠`;
    getNode('.watched-content').style.display = 'block';
  }
  watchedAnimation(); // 랜더링 후 애니메이션 실행
}

async function renderNewContent(e, data) {
  const title = e.target.getAttribute('alt');

  if (title) {
    const content = data.find((item) => item.title === title);
    if (content) {
      const imgURL = await getPbImageURL(content);
      const template = createTemplate(imgURL, title);
      insertLast(watchedContainer, template);
      addWatchedContent({ title });
    }
  } else {
    throw new Error('해당하는 제목의 컨텐츠가 없습니다.');
  }
}

export async function watchedContent() {
  await renderWatchedContents();
  const allContents = getNodes('.article a');
  const data = await pb.collection('watched').getFullList();
  allContents.forEach((content) => {
    content.addEventListener('click', (e) => renderNewContent(e, data));
  });
}
