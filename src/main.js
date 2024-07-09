import "/styles/style.scss";
import "/styles/scss/_reset.scss";
import pb from '/api/pocketbase.js';
import './components/webcomponents/webcomponents.js';


// *** 공부해보는게 좋을 것 같아서 주석으로 해설 달아놨습니당
// 배포 전에는 주석 삭제할거고 코드 가져가셔서 안보고 만들어보세용!!!***

// 웹 컴포넌트 불러오기
async function loadTemplate() { // loadTemplate()을 비동기로 정의
  // fetch()로 webcomponents.html 파일을 가져온 후에야(await) 응답으로 온 webcomponents.html 파일을 response에 저장
  const response = await fetch('./components/webcomponents/webcomponents.html');

  // response에 저장된 객체를 text()를 통해 텍스트로 변환한 후에야(await) 그 결과를 text에 저장
  const text = await response.text();

  // <template> 태그를 만듦 
  const template = document.createElement('template');
  // <template> 태그 안을 response 객체(= webcomponents.html에서 만들어놓은 사용자 정의 태그)로 채움
  template.innerHTML = text;

  // <template> 태그의 내용을 노드로 복사해서 <body> 태그의 자식 요소로 넣음
  // cloneNode(true) 메서드는 template.content를 깊은 복사(모든 자식 요소를 포함하여 복사)해서 새로운 Node를 생성함
  document.body.appendChild(template.content.cloneNode(true));

  // 위의 과정이 모두 실행된 후에야(await) webcomponents.js를 가져옴
  await import('./components/webcomponents/webcomponents.js');
}

// 문서가 완전히 로드되고 DOM 트리가 완성되면(= DOMContentLoaded: 문서가 완전히 로드되고 파싱된 후에 발생) loadTemplate()를 실행함
document.addEventListener('DOMContentLoaded', loadTemplate);
