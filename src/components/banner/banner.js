import '/src/components/banner/_banner.scss';
import { insertLast } from 'kind-tiger';
import logo from '/public/assets/baekpacker_logo.webp';
import img from '/public/assets/baekpacker_img.webp';

const template = `
<section class="banner">
      <a href="/" class="banner__link">
        <div class="banner__link--container">
          <img
            class="banner__link__container--img"
            src="${img}"
            alt="백패커 이미지"
          />
          <div class="banner__link__container--group">
            <img
              class="banner__link__container__group--logo"
              src="${logo}"
              alt="백패커 로고"
            />

            <p class="banner__link__container__group--desc">
              우리가 가는 곳이 곧 주방!
            </p>
            <p class="banner__link__container__group--desc">
              극한의 출장 요리단이 간다!
            </p>
          </div>
        </div>
      </a>
    </section>`;

insertLast('.top-banner__swiper--slide1', template);
insertLast('.top-banner__swiper--slide2', template);
