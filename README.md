## 프로젝트 미리보기

#### 데스크탑

[![포트폴리오 데스크탑 버전 미리보기](https://img.youtube.com/vi/6onRTOI-L7o/0.jpg)](https://www.youtube.com/watch?v=6onRTOI-L7o)

#### 모바일

[![포트폴리오 모바일 버전 미리보기](https://img.youtube.com/vi/z4l7uYjj4Vs/0.jpg)](https://www.youtube.com/watch?v=z4l7uYjj4Vs)

## 목차

1. 프로젝트 개요
2. 포트폴리오의 목적 및 의의
3. 배운점
4. 경험한 에러 및 해결
5. 웹접근성
6. 반응형
7. 페이지 미리보기
8. 프로젝트 컴포넌트(기능,script) 소개
9. 아쉬운점
10. 애로사항이 많았던 작업
11. 버그 & 보완사항 & 향후계획

---

## 1. 프로젝트 개요

- 포트폴리오명: vite-vanila
- 포트폴리오 컨셉

  - vanilaJs를 통해 DOM을 조작하고 생성함
  - fetch()통해 얻은 dummy data로 view를 렌더링함
  - @media을 통해 다양한 뷰포트의 화면을 구현함
  - 컴포넌트 구현(슬라이더(Slider), 아코디언(Accordion), 탭(Tab) 스크롤 애니메이션)
  - localStorage를 통해 데이터 전역으로 관리

- 웹 링크 : [https://searchme86.github.io/vite-vanila/index.html](https://searchme86.github.io/vite-vanila/index.html)
- 작업 기간: 2개월 (10/30,2023 ~ 12/31,2023)
- 작업 기여도 : 100%
- 언어: HTML, SCSS, VanilaJs
- 사용 라이브러리 : [Swiper](https://swiperjs.com/)
- 번들러/배포 : [Vite](https://vitejs.dev/) / [GitHub Pages](https://pages.github.com/)
- 웹접근성 속성 추가

  - 숨김 텍스트(클래스 .offscreen)

    ```css
    .offscreen {
      display: inline-block;
      position: absolute;
      overflow: hidden;
      border: 0;
      width: 1px;
      height: 1px;
      clip: rect(1px, 1px, 1px, 1px);
      clip-path: inset(50%);
    }
    ```

- skipNavigation

```html
<!-- skip navigation -->
<div id="skip-navigation">
  <ul>
    <li><a href="#main">본문 바로가기</a></li>
    <li><a href="#section__a">Neque porro quisquam est qui dolorem</a></li>
    <li><a href="#section__b">What is Lorem Ipsum?</a></li>
    <li><a href="#section__c">Where does it come from?</a></li>
    <li><a href="#section__d">Why do we use it?</a></li>
    <li><a href="#section__e">Where can I get some?</a></li>
    <li><a href="#blog-slide">이미지 슬라이드</a></li>
    <li><a href="#footer">푸터</a></li>
  </ul>
</div>
```

```css
#skip-navigation {
  position: absolute;
  width: 100%;
  height: 0;
  left: 0;
  ul {
    li {
      a {
        display: block;
        position: absolute;
        top: 0;
        overflow: hidden;
        text-indent: -9999px;
        text-align: center;
        padding: 10px 0;

        &:focus,
        &:active {
          display: block;
          width: 100%;
          color: #fff;
          text-align: center;
          text-indent: 0px;
          padding: 10px 0;
          line-height: 1;
          white-space: nowrap;
          font-size: 14px;
          font-weight: bold;
          background: #3c404b;
          z-index: 1000;
        }
      }
    }
  }
}
```

- aria 속성(aria-xxxx)
- tabindex

- 반응형 : 데스크톱/모바일 뷰 기능 추가(뷰포트 사이즈 : 360 / 760 / 861 / 1170)
  - 카트(cart.html) 페이지는 반응형 적용하지 못함

## 2. 포트폴리오의 목적 및 의의

- 자바스크립트(vanilaJS)를 경험하고, 자바스크립트의 특징(동적타입, 이벤트 기반, DOM핸들링)을 이해
- 무지성으로 React를 사용하지 않고, 왜 React가 필요한지 장점을 이해하려고 함
- 반응형 특징이 적용된 페이지 구현
- 프로젝트 기획 부터 배포까지, 작업의 전체 사이클을 경험

## 3. 배운점

#### 3-1. [기획] 선 프로젝트 기획 및 기능 정의 후, 작업진행

- 새로운 기능을 계속 추가하는 방식으로 작업하여 작업에 애로사항 경험
  - 폴더명이 중복되거나 폴더 depth 관리
  - 이미 작성된 JS코드들과 충돌문제로 공통된 모듈로 만들기 어렵고, 중복된 코드 작성함

#### 3-2. [자바스크립트] 컴포넌트 단위 개발의 장점(재활용)을 경험

- HTML을 단위별로 가져다 사용할 수 없어, 헤더(header)와 푸터(footer)를 모든 페이지에 작성함
- HTML에 변경사항이 있을 경우, 수정내역을 모든 페이지에서 검색하여 찾기 때문에, 휴먼에러가 자주 발생

#### 3-3. [자바스크립트] 자바스크립트는 동적타입이기 때문에, 컴파일 되기 전에는 해당 타입이 어떤 타입으로 사용될지 알 수 없다.

- 상품 삭제 및 상품 보기 할 경우, 상품의 id를 사용해야함
- id는 코드에서 number 타입을 요구하지만, 함수가 값을 인식할때는 string 타입으로 인식하여 모든 코드를 number 타입으로 변경하여 사용함
- 해당 관련 코드를 작성함

#### 3-4. [자바스크립트] 자바스크립트는 이벤트(Event)에 기반한 언어이다, 이벤트는 HTML의 구조 안에서 값을 캡쳐((capture)하여 사용한다.

- 카트 상품 미리보기 모달 & 상품 카드 (src/utils/itemTemplate.js)
- 상품 갯수를 증가/감소/삭제 하기 위해, 클릭 이벤트가 발생하고, 이벤트가 각 카드 상품의 data-id 값을 캡쳐하여, 아이템을 구별하여 작동할 수 있음

#### 3-5. [자바스크립트] 돔(DOM)을 직접 조작해 사용하는 것은, 코드 가독성 이슈와, 값이 null/undefined인 가능성을 내포함

#### 3-6. [자바스크립트 / 퍼블리싱] 돔(DOM)요소의 사이즈를 구할 때는,엘리먼트에 Margin(마진)이 아닌, Padding(패딩)을 사용해야, 해당 돔의 정확한 사이즈를 구할 수 있음

#### 3-7. [자바스크립트] 돔 요소 사이즈(scrollTopBlog.js)

- 특정 위치에서 마우스 스크롤에 따른 애니메이션을 구현하는 중, 개발자 도구에서 희망하는 엘리먼트의 높이가 나오지 않음
- Margin(마진) 공백으로 된 엘리먼트를 처리할 경우, 브라우저 개발자 도구에서 해당 마진만큼 제외하고 요소의 값이 인식됨
- Margin(마진) 공백을 Padding(패딩)으로 변경하여 해결함
- CSS의 박스모델(BOX MODEL)에서 패딩은 나의 요소의 것, 마진은 그 외부의 영역인 것으로 이해함

#### 3-8. [퍼블리싱] 이미지 사이즈는 모두 동일한 이후에, 사용해야한다

- product(상품 미리보기 슬라이더)
- dummy 이미지([PRODUCTS - Dummy REST API of JSON data for development](https://dummyjson.com/docs/products))로 슬라이더를 구현하여, 각 이미지들의 height가 다양함, 비율에 맞게 통일성 있게 이미지 관리가 어려웠다.
- 이미지는 가로/세로 비율에 맞게 사용해야하는데, height를 강제 변경할 경우, 찌그러지는 경우가 발생함

## 4. 경험한 에러 및 해결

#### 4-1. youtube, yt is undefined

- YT.Player is not a constructor
  - [Youtube iFrame API - YT.Player is not a constructor](https://dev.to/dance2die/youtube-iframe-api-yt-player-is-not-a-constructor-pa6)

#### 4-2. 상품 삭제 후, 해당 아이템을 갖는 swiper slide와 sync 이슈

- 상품 삭제(.remove()) 후, swiper slide를 update하지 않아서 빈 화면이 출력됐음

  <img width="361" alt="에러_products_상품변경_swiper와sync이슈" src="https://github.com/searchme86/vite-vanila/assets/47154709/6ba13970-0a15-424a-9a4e-bb0fb9c2f0a6">

- 상품을 삭제(.remove())한 이후, swiper slide를 update 하지 않아 발생한 이슈

  - remove 후에 swiper를 update 해야함

    ```javascript
    targetParent.parentElement.remove();
    if (slider) {
      slider.updateSlides();
      slider.update();
    }

    cartContents.remove();
    if (slider) {
      slider.updateSlides();
      slider.update();
    }
    ```

  - 상품 추가(add)후, 매번 swiper를 초기화 및 업데이트 하지 않아 모달을 재시작하여 변경사항을 적용해야함

    - swiper slide를 추가(append)이후에 update를 해야함

      ```javascript
      if (swiperList) {
        slider.appendSlide(cartItemElement);
        slider.updateSlides();
        slider.update();
      }
      ```

  > appendSlide(), updateSlides(), update()는 swiper가 제공하는 Methods & Properties 섹션에서 확인 가능합니다.

## 5. 웹접근성

- 다음의 웹접근성 속성들이 프로젝트에 포함되어 있습니다.
  - 프리뷰 이미지를 클릭 시, 관련 코드를 확인 가능합니다.

#### 5-1. skipNavigation

- mobile
  [![skipNavigation_mobile](https://i.vimeocdn.com/video/900782280.jpg)](https://vimeo.com/900782280)

- desktop
  [![skipNavigation_desktop](https://vimeo.com/900781681)](https://vimeo.com/900781681)

#### 5-2. 모바일 아코디언 메뉴

[![웹접근성_모바일 아코디언 메뉴](https://img.youtube.com/vi/JJCFjy7hTnk/0.jpg)](https://www.youtube.com/watch?v=JJCFjy7hTnk)

- aria-selected="true/false"
- arai-expanded="true/false"

#### 5-3. 상품 메뉴

[![웹접근성_상품 메뉴](https://img.youtube.com/vi/S7nsH0v6uBk/0.jpg)](https://www.youtube.com/watch?v=S7nsH0v6uBk)

<img width="1314" alt="aria_상품메뉴" src="https://github.com/searchme86/vite-vanila/assets/47154709/93ba9c5c-4d15-46b6-abd8-2f0746b6bce4">

- aria-pressed="true/false"
- tabindex="-1/0"

#### 5-4. Swiper

[![웹접근성_Swiper](https://vimeo.com/900780322)](https://vimeo.com/900780322)

<img width="1239" alt="aria_swiper" src="https://github.com/searchme86/vite-vanila/assets/47154709/efce0335-31b8-4990-be85-baa5fc2e69ff">

- aria-roledescription
- aria-label
- role=""
- aria-hidden="true/false"
- tabindex="-1/0"
- swiper 코드

  ```javascript
  imageSwiper = new Swiper(".swiper", {
    on: {
      slideChange: (swiper) => {
        const setA11yAttributes = (slide, isVisible) => {
          const ariaHiddenValue = isVisible ? "false" : "true";
          const tabIndexValue = isVisible ? "0" : "-1";

          slide.setAttribute("aria-hidden", ariaHiddenValue);
          slide.setAttribute("tabindex", tabIndexValue);
        };

        const updateA11yAttributes = (swiper) => {
          const {slides, realIndex} = swiper;

          slides.forEach((slide, index) => {
            const isVisible = index === realIndex;
            setA11yAttributes(slide, isVisible);
          });
        };

        updateA11yAttributes(swiper);
      },
    },

    a11y: {
      enabled: true,
      containerMessage: "카트 등록상품 미리보기 슬라이더",
      containerRoleDescriptionMessage: "carousel",
      slideRole: "group",

      prevSlideMessage: "이전 슬라이드",
      nextSlideMessage: "다음 슬라이드",
      slideLabelMessage:
        "현재 {{index}}번째 슬라이드 / 총 {{slidesLength}}개의 슬라이드",
      firstSlideMessage: "첫번째 슬라이드 입니다",
      lastSlideMessage: "마지막 슬라이드 입니다.",
    },

    allowTouchMove: true,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    slidesPerView: 3,
    spaceBetween: 15,

    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      760: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      861: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    },
  });
  ```

> on, slideChange는 swiper가 기본 제공하는 함수이며, 해당 함수가 받는 인자 "swiper"는 현재 swiper가 갖는 모든 정보를 포함하고 있습니다.

#### 5-5. 모달(Modal)

[![웹접근성_모달](https://img.youtube.com/vi/PMXcgVUNjDg/0.jpg)](https://www.youtube.com/watch?v=PMXcgVUNjDg)

<img width="1242" alt="aria_modal" src="https://github.com/searchme86/vite-vanila/assets/47154709/410db577-8bd4-4d8a-b38e-bdd0e5157f56">

- role=“dialog”
- aria-modal=“true/false”
- tabindex=“-1/0”
- arai-labelledby=“”

```javascript
const showCartOverlay = () => {
  if (modalLayer) {
    cartOverlay.classList.add("show");
    cartOverlay.removeAttribute("aria-modal", "false");
    cartOverlay.removeAttribute("tabindex");
    cartOverlay.setAttribute("aria-modal", "true");
    cartOverlay.setAttribute("tabindex", "0");
  }
  slider.init(document.querySelector(".swiper"));
};

const hideCartOverlay = () => {
  if (modalLayer) {
    cartOverlay.classList.remove("show");
    cartOverlay.removeAttribute("aria-modal", "true");
    cartOverlay.removeAttribute("tabindex");
    cartOverlay.setAttribute("aria-modal", "false");
    cartOverlay.setAttribute("tabindex", "-1");
  }
};
```

#### 5-6. 탭(Tab)

[![웹접근성_탭(Tab)](https://img.youtube.com/vi/aAngDnSvlU8/0.jpg)](https://www.youtube.com/watch?v=aAngDnSvlU8)

<img width="1415" alt="aria_탭" src="https://github.com/searchme86/vite-vanila/assets/47154709/8fe17c33-6f53-4dc2-a03f-d6ae055dadb2">

- role=“tablist”
- role=“tab”
- role=“tabpanel”
- aria-selected=“true/false”
- tabindex=“-1/0”
- aria-controls="tabpanel1"
- aria-hidden=“true/false”

## 6. 반응형

- 뷰포트 변경에 따른 브라우저 화면을 확인 가능합니다.
  [![반응형 과정](https://img.youtube.com/vi/Gfj7H5YWOaQ/0.jpg)](https://www.youtube.com/watch?v=Gfj7H5YWOaQ)

- 종단점

  - 360 / 760 / 861 / 1170

- 뷰포트 360
  <img width="360" alt="반응형_360" src="https://github.com/searchme86/vite-vanila/assets/47154709/999586d2-57b1-452f-8b14-031e27b486f0">

- 뷰포트 760
  <img width="570" alt="반응형_760" src="https://github.com/searchme86/vite-vanila/assets/47154709/0bfcc649-c50e-43e0-b981-649b4205d928">

- 뷰포트 861
  <img width="603" alt="반응형_861" src="https://github.com/searchme86/vite-vanila/assets/47154709/53abb23e-52df-4abb-8226-0e46419015e3">

- 뷰포트 1170
  <img width="1177" alt="반응형_1170" src="https://github.com/searchme86/vite-vanila/assets/47154709/44f7d078-4470-40a0-9ded-e40fb60fbd27">

  - 카트(cart.html) 페이지는 모바일 반응형 적용하지 못함

## 7. 페이지 미리보기

#### 7-1. 블로그 페이지(blog.html)

- mobile
  [![blog_mobile](https://img.youtube.com/vi/Lgb7zKQjCcc/0.jpg)](https://youtube.com/shorts/Lgb7zKQjCcc)
- desktop
  [![blog_desktop](https://img.youtube.com/vi/rRgyb1avNYQ/0.jpg)](https://www.youtube.com/watch?v=rRgyb1avNYQ)

#### 7-2. 상품 상세 페이지(product.html)

- mobile
  [![product_mobile](https://img.youtube.com/vi/Fn6ADSWOyH0/0.jpg)](https://youtube.com/shorts/Fn6ADSWOyH0)

<img width="165" alt="스크린샷_모바일_카트상품" src="https://github.com/searchme86/vite-vanila/assets/47154709/f4b2114e-fee5-4828-9db5-576d58e1ecb1">

<img width="361" alt="스크린샷_카트" src="https://github.com/searchme86/vite-vanila/assets/47154709/58da3512-8713-4adc-ab26-67a47c271da8">

- desktop
  [![product_desktop](https://img.youtube.com/vi/ZmAUiGrP-mw/0.jpg)](https://youtu.be/ZmAUiGrP-mw)

#### 7-3. 상품 페이지(products.html)

- mobile
  [![products_mobile](https://img.youtube.com/vi/L2knciHepas/0.jpg)](https://youtu.be/L2knciHepas)

## 8. 프로젝트 컴포넌트(기능,script) 소개

#### 8-1. 홈(index.html / home.js)

- 햄버거 메뉴(모바일 , homeSideBar.js , homeAccordion.js)
- 모바일 사이즈에서 해당 아이콘을 클릭 시, 좌측에서 메뉴가 생성되고, 메뉴는 아코디언 형식으로 작동된다.
- 키워드 검색 (homeSearch.js)
- 헤더 우측에 위치한, 돋보기 아이콘을 클릭 시, 우측에서부터 입력가능한 인풋창이 생성
- 슬라이더(MainSlider.js)

#### 8-2. 블로그(blog.html / blog.js)- 마우스 스크롤 애니메이션

- 페이지 상단에, 스크롤을 얼마나 했는지를 보여주는 인디케이터(scrollIndicator.js)
- (데스크탑/모바일) 페이지 상단에 위치
- 페이지 우측 하단에 생성되는 sticky 메뉴가, 마우스 스크롤 되면서 현재 어떤 제목의 내용인지 알려줌(scrollMenu.js)
- 데스크탑 : 페이지 우측 하단
- 모바일: 페이지 하단
- 페이지 스크롤 다운 할 경우, 페이지 제목의 엘리먼트가 생성되고 사라짐(scrollTopBlock.js)
- (데스크탑/모바일) 페이지 상단에 위치

#### 8-3. 상품(products.html / products.js)

- 카트

  - updateCart.js
    - 상품등록
    - 상품수량 변경(swiper 기능과 연결됨)
  - toggleCart.js
    - 상품 미리보기 모달 생성/삭제(swiper 기능과 연결됨)
  - renderCart.js

    - 카트 아이콘에 로컬 스토리지에 저장된 아이템 수를 보여줌
    - 카트 아이템의 숫자를 계산하고 변경
    - 카트 아이템을 상품 미리보기 모달에 추가(swiper 기능과 연결됨)

- swiper.js

  - swiper를 초기화 하고 생성
  - swiper의 속성을 정의

- companies.js

  - 등록된 상품에 관련된 제조회사를 filter 해서 메뉴를 생성

- search.js

  - 대소문자 구분없이 상품 검색기능

- cartElemDom.js

  - 페이지(products.html)에 사용되는 DOM을 모두 정의

- render.js
  - fetch로 가져온 상품 데이터를 상품 레이아웃에 넣어주는 기능

#### 8-4. 상품상세(product.html / product.js)

- youTube.js

  - 유튜브 실행

- sliderComponent.js / sliderData.js(상품 미리보기 슬라이더)

  - 슬라이더 (sliderComponent.js)
  - 슬라이더 아이템 템플릿 및 데이터 (sliderData.js)

- zoomIn.js

  - 상품 확대 돋보기 기능

- productTab.js
  - 탭(Tab)

#### 8-5 그외(유틸)

- itemTemplate.js

  - fetch로 가져온 데이터를 js로 받아, html로 렌더링해주는 재활용 가능한 템플릿 모음

## 9. 아쉬운점

- 의미단위의 깃(git) 커밋과 및 이슈 관리를 체계적으로 못함
- 반응형(@media) 코드를 분산하여 작성하여, 이후 코드가 서로 꼬이는 상황이 발생함
- 선 기획/계획 후 작업이 아닌, 필요한 기능을 계속 추가하는 방향으로 작업하여 기능의 일관성을 유지하지 못함

- 카트 아이템의 숫자가 products.html에서만 작동함
- 상품 미리보기 슬라이더
  – aria-xxx 속성을 이후 추가하여, 코드 전체를 모두 변경해야하는 이슈 발생

- 폴더 구조
- 퍼블리싱 폴더구조와 리액트 폴더구조를 혼재해 사용하여, 페이지 관련 폴더가 중복으로 사용됨
- 리액트로 작성할 경우, js로 html을 렌더링 할 수 있어, pages폴더와 views 폴더를 합쳐 사용할 수 있을 것으로 기대
  - pages와 views 폴더
    - pages 폴더
      - 각 페이지의 html 파일을 포함
    - views 폴더
      – 각 페이지가 사용하는 모든 스크립트를 import해 사용하는 js 스크립트 파일을 포함
- SASS의 MIXIN 기능을 사용하지 않고, 공통된 스타일을 중복하여 사용함
- 어떤 기능을 공통으로 정의해야 할 지 몰라, mixin 을 사용하지 않기로 결정
- 중복된 코드를 여기저기 사용
  - 카드 미리보기 슬라이더
    - 상품 삭제 코드와 swiper slide의 변경사항을 적용 sync하는 코드를 중복하여 작성
      – 예시 코드 작성함, 여기에

## 10. 애로사항이 많았던 작업

- prodcuts.html

  - 카트 미리보기 슬라이더
  - 상품 삭제에 따른 Swiper slide 변경 사항 Sync 이슈
  - 상품 갯수 차감 버튼 및 삭제 아이콘 클릭으로 상품 삭제 할 경우, 상품은 삭제 되지만 Swiper slide는 그대로 유지
  - 상품 삭제하는 코드와 Swiper도 변경되도록 코드 추가하여 해결

- product.html

  - script로 렌더링 하는 HTML DOM에서 이미지의 src 링크가 배포 페이지에서 깨지는 이슈
    – 해결못함

- blog.html
  - 스크롤 값을 구하기 위한, 엘리먼트 요소 값을 구하기

## 11. 버그 & 보완사항 & 향후계획

전체

- 리액트와 타입스크립트로 코드 마이그레이션
- 뷰 관련 폴더(pages폴더와 views 폴더)를 일원화
  - 모든 HTML페이지에 작성된 헤더(header)와 푸터(footer)를 재활용하여 사용
- 컴파일 시점에 코드 에러를 미리 파악하여, 탄탄한 코드를 작성할 수 있음
  - .(점연산자)으로 값을 호출하는 코드가 undefined/null 가 될 수 있는 문제를 미리 방지
- 파일명과 폴더구조를 변경
- 카멜케이스
- 의미에 맞게 폴더 위치 및 depth 재조정
- 현재 fetch로 가져오는 코드를 Axios (Interceptor)로 변경
- CSS 모듈로 관리
  - 공통의미별로 mixin 정의 후 파일 분할
  - 반응형(@media) 코드 일원화
- 번들러, vite를 webpack으로 변경
- 슬라이더(swiper를 제외한)에 터치(touch)로, 구동되도록 기능 수정
- 상품 등록 페이지 구현
  - 현재는 dummy 데이터를 fetch해서 보여주는 기능만 존재함
- "innerHTML"로 DOM을 생성한 코드에 "DOMPurify.sanitize()"기능을 추가

  - innerHTML로 DOM을 생성했음

    ```javascript
    export const createCartItem = ({id, title, price, thumbnail, amount}) => {
      const singleCartItem = document.createElement("li");
      singleCartItem.classList.add("swiper-slide");
      singleCartItem.setAttribute("data-id", id);
      singleCartItem.innerHTML = /*html*/ `
        <div class="box__item-top">
          <div class="box__cart-image">
            <div class="box__image">
              <img src="${thumbnail}" alt="${title} 이미지" />
            </div>
          </div>
          <button type="button" class="button__remove-item" data-id="${id}">
            <i class="fas fa-trash-alt"></i>
            <span class="offscreen">상품 삭제</span>
          </button>
        </div>
        <div class="box__cartItem-content">
          <div class="box__cartItem-info">
            <strong class="text__cartItem-title">${title}</strong>
            <span class="text__cartItem-price">$${price}</span>
          </div>
          <div class="box__control">
            <button class="button__increase-cartItem" data-id="${id}">
              <span class="offscreen">상품 수량증가</span>
              <i class="fas fa-chevron-up"></i>
            </button>
            <span class="text__cartItem-count" data-id="${id}">
              <span class="offscreen">현재 상품수량</span>${amount}<span class="offscreen">개</span>
            </span>
            <button class="button__decrease-cartItem" data-id="${id}">
              <span class="offscreen">상품 수량감소</span>
              <i class="fas fa-chevron-down"></i>
            </button>
          </div>
        </div>
        `;
      return singleCartItem;
    };
    ```

  - XSS(Cross-Site Scripting Attacks)을 사전에 방지함

페이지 별

- 헤더(header)

- 상품 찾기 기능
  - 아이콘 돋보기 버튼 클릭 시, input과 input placeholder가 보이도록 변경
    - 배포된 경우만, input placeholder가 보이지 않음
  - input에 텍스트 입력시, 해당 검색 결과 페이지 추가
  - 아이콘 돋보기 버튼 클릭 후, fixed&hidden 엘리먼트가 생성될때, 페이지에서 그림자가 생기는 이슈 해결
- UNTITLED 메뉴, 새로운 페이지 추가

- 텍스트 슬라이더(bannerSlider.js)

  - 텍스트를 감싸는 링크를 추가하여, 클릭한 텍스트 아이템 페이지로 이동하도록 기능 추가

- 홈(index.html)

  - 카테고리 아코디언

    - 웹접근성, aria-expanded, aria-pressed 속성 추가(스크립트 기능)

- 블로그(blog.html)

  - 스크롤을 빠르게 할 경우, 새로 생성/삭제되는 텍스트 블록이 보여지고 숨겨지는 속도가 달라짐

- 상품 페이지 (products.html)

  - 카트상품 미리보기 슬라이더(Swiper)

  - 삭제 아이콘 클릭해도, localStorage에 숫자 초기화 되지 않음

- 상품상세 페이지(product.html)

- 상품 미리보기 슬라이더
  - 슬라이더
    – touch로 다음 슬라이드 이동하도록 변경
  - 웹접근성 기능 추가
    – aria 속성 추가
    – 현재 슬라이드, 이전/이후 슬라이드 알림, 스크린 리더에서 읽힐 수 있도록 처리
  - 상품 (확대) 돋보기 기능
    - 2번째 이후 슬라이드에서도 작동 할 수 있도록 처리
      - 슬라이드가 변경될 때마다, 돋보기의 속성값이 초기화 되도록 버그 수정
- 유튜브 영상
  - 배포 페이지에서는 유튜브 영상 자동실행되는 이슈
    - 웹접근성 관점에서 영상은 자동재생 되지 않도록 변경
      - autoplay:false; 했음에도 자동 실행됨
- 자바스크립트로 생성한 DOM에서 올바른 이미지 링크를 가져오지 못함

  - itemTemplate.js
    - 로컬에서는 이미지 링크가 작동하지만, 배포 사이트에서는 이미지가 꺠져서 출력됨

- 카트 페이지(cart.html)
- 모바일 반응형 추가
- 헤더에 있는 모든 카트 아이콘 클릭 시, 카트 페이지로 이동하도록 기능 일원화
  - 상품 페이지(products.html) 경우, 카트 아이콘 클릭 시, 하단 모달이 생성됨
    - 초기 프로젝트 계획에서는 카트 페이지를 만들 계획이 없었음
- 헤더에 있는 카트 아이콘의 숫자를, 모든 페이지에서 동일하게 일치하도록 전체 기능 수정
  - 카트 아이콘의 숫자는 상품 페이지(products.html)에서만 작동하도록 초기 계획하였음
