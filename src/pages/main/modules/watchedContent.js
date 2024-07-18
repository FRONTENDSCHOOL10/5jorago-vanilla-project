import { getNodes, getNode, insertLast } from 'kind-tiger';
import pb from '/src/api/pocketbase.js';
import getPbImageURL from '/src/api/getPbImageURL';
import defaultAuthData from '/src/api/defaultAuth.js';
import { watchedAnimation } from './animation';

const watchedContainer = getNode('.watched-content__container .swiper-wrapper');
const userName = getNode('.watched-content h2');

// 'auth' 데이터 가져오기
const authData = JSON.parse(localStorage.getItem('auth'));

if (!authData || !authData.isAuth) {
  localStorage.clear();
  localStorage.setItem('auth', JSON.stringify(defaultAuthData));
}

function addWatchedContent(content) {
  const watchedContentList =
    JSON.parse(localStorage.getItem('watchedContentList')) || [];
  const existingIndex = watchedContentList.findIndex(
    (item) => item.title === content.title
  );
  if (existingIndex === -1) {
    watchedContentList.push(content);
    if (watchedContentList.length > 10) watchedContentList.shift();
    localStorage.setItem(
      'watchedContentList',
      JSON.stringify(watchedContentList)
    );
  }
}

function createTemplate(imgURL, title) {
  return `
    <div class="swiper-slide">
      <a href="/src/pages/main/">
        <img src="${imgURL}" alt="${title}"/>
        <span class="watchedContent__videoTitle">${title}</span>
      </a>
    </div>`;
}

async function displayStoredContent() {
  const watchedContentList =
    JSON.parse(localStorage.getItem('watchedContentList')) || [];
  if (watchedContentList.length > 0) {
    const data = await pb.collection('watched').getFullList();
    for (const storedContent of watchedContentList) {
      const content = data.find((item) => item.title === storedContent.title);
      if (content) {
        const imgURL = await getPbImageURL(content);
        const template = createTemplate(imgURL, content.title);
        insertLast(watchedContainer, template);
      }
    }
    if (authData && authData.user) {
      userName.textContent = `${authData.user.name}님이 시청하는 컨텐츠`;
      getNode('.watched-content').style.display = 'block';
    }
  }
  watchedAnimation();
}

async function handleTarget(e, data) {
  const title = e.target.getAttribute('alt');
  const watchedContentList =
    JSON.parse(localStorage.getItem('watchedContentList')) || [];
  if (title && !watchedContentList.some((item) => item.title === title)) {
    const content = data.find((item) => item.title === title);
    if (content) {
      const imgURL = await getPbImageURL(content);
      const template = createTemplate(imgURL, title);
      insertLast(watchedContainer, template);
      addWatchedContent({ title, template });
    }
  }
}

export async function watchedContent() {
  await displayStoredContent();
  const allContents = getNodes('.article a');
  const data = await pb.collection('watched').getFullList();
  allContents.forEach((content) => {
    content.addEventListener('click', (e) => handleTarget(e, data));
  });
}
