import gsap from 'gsap';
import { getNodes } from 'kind-tiger';

export function animation() {
  const contents = getNodes('.article img:not(.scrap)');

  for (let content of contents) {
    content.addEventListener('mouseenter', function () {
      gsap.to(content, { scale: 0.9, stagger: 0.3 });
    });

    content.addEventListener('mouseleave', function () {
      gsap.to(content, { scale: 1, stagger: 0.3 });
    });
  }
}

export function watchedAnimation() {
  const contents = getNodes('.watched-content__container img');
  for (let content of contents) {
    gsap.to(content, { y: 0.9, stagger: 0.3 });
    content.addEventListener('mouseenter', function () {
      gsap.to(content, { scale: 0.9, stagger: 0.3 });
    });

    content.addEventListener('mouseleave', function () {
      gsap.to(content, { scale: 1, stagger: 0.3 });
    });
  }
}
