## 프로젝트 미리보기

### desktop 버전

[![포트폴리오 데스크탑 버전 미리보기](https://img.youtube.com/vi/6onRTOI-L7o/0.jpg)](https://www.youtube.com/watch?v=6onRTOI-L7o)

### mobile 버전

[![포트폴리오 모바일 버전 미리보기](https://img.youtube.com/vi/z4l7uYjj4Vs/0.jpg)](https://www.youtube.com/watch?v=z4l7uYjj4Vs)

## 프로젝트 개요

- 포트폴리오명: vite-vanila
- 웹 주소 : [vite-vanila 웹 사이트 주소](https://searchme86.github.io/vite-vanila/index.html, vite-vanila 웹 사이트 주소 )
- 작업 기간: 2개월
- 작업 기여도 : 100%(본인)
- 언어: HTML, SCSS, VanilaJs
- 사용한 라이브러리 : Swiper
- 번들러/배포 : Vite / github pages
- 웹접근성 속성 추가
  – 숨김 텍스트(클래스 .offscreen)
  – skipNavigation
  – aria-xxx
  – tabindex
- 반응형 : 모바일/데스크탑 뷰 기능 추가(뷰포트 사이즈 : 360 / 760 / 861 /1170)

## 포트폴리오의 목적 및 의의

- React를 익히기 전에 자바스크립트(vanilaJS)를 경험하고, 자바스크립트의 특징(동적타입, 이벤트 기반, DOM핸들링)을 이해
- 무지성으로 React를 사용하지 않고, 왜 React가 필요한지 장점을 이해
- 반응형 특징이 적용된 페이지 구현
- 프로젝트 기획 부터 배포까지, 작업의 전체 사이클을 경험

## 배운점

### [기획] 선 프로젝트 기획 및 기능 정의의 필요성

- 핵심기능이 구현되고, 이후 새로운 기능을 계속 추가하는 방식으로 작업하여, 폴더관리, 코드 모듈별 관리가 매번 변경하였음
- 반응형 관련 코드가 혼재가 되어 있어, 이전 코드를 overwrite 해야하는 상황 발생하였음

### [자바스크립트] 컴포넌트 단위 개발의 장점(재활용)을 경험

- HTML을 단위별로 가져다 사용할 수 없어, 헤더(header)와 푸터(footer)를 모든 페이지에 작성함
- HTML에 변경사항이 있을 경우, 수정내역을 모든 페이지에서 검색하여 찾기 때문에, 휴먼에러가 자주 발생

### [자바스크립트] 자바스크립트는 동적타입이기 때문에, 컴파일 되기 전에는 해당 타입이 어떤 타입으로 사용될지 알 수 없다.

- 상품 삭제 및 상품 보기 할 경우, 상품의 id를 사용해야함
- id는 코드에서 number 타입을 요구하지만, 함수가 값을 인식할때는 string 타입으로 인식하여 모든 코드를 number 타입으로 변경하여 사용함
- 해당 관련 코드를 작성함

### [자바스크립트] 자바스크립트는 이벤트(Event)에 기반한 언어이다, 이벤트는 HTML의 구조 안에서 값을 캡쳐((capture)하여 사용한다.

- 카트 상품 미리보기 모달 & 상품 카드 (src/utils/itemTemplate.js)
- 상품 갯수를 증가/감소/삭제 하기 위해, 클릭 이벤트가 발생하고, 이벤트가 각 카드 상품의 data-id 값을 캡쳐하여, 아이템을 구별하여 작동할 수 있음

### [자바스크립트] 돔(DOM)을 직접 조작해 사용하는 것은, 코드 가독성 이슈와, 값이 null/undefined인 가능성을 내포함

### [자바스크립트 / 퍼블리싱] 돔(DOM)요소의 사이즈를 구할 때는,엘리먼트에 Margin(마진)이 아닌, Padding(패딩)을 사용해야, 해당 돔의 정확한 사이즈를 구할 수 있음

#### blog(scrollTopBlog.js)

- 특정 위치에서 마우스 스크롤에 따른 애니메이션을 구현하는 중, 개발자 도구에서 희망하는 엘리먼트의 높이가 나오지 않음
- Margin(마진) 공백으로 된 엘리먼트를 처리할 경우, 브라우저 개발자 도구에서 해당 마진만큼 제외하고 요소의 값이 인식됨
- Margin(마진) 공백을 Padding(패딩)으로 변경하여 해결함
- CSS의 박스모델(BOX MODEL)에서 패딩은 나의 요소의 것, 마진은 그 외부의 영역인 것으로 이해함

### [퍼블리싱] 이미지 사이즈는 모두 동일한 이후에, 사용해야한다

- product(상품 미리보기 슬라이더)
- dummy 이미지([PRODUCTS - Dummy REST API of JSON data for development](https://dummyjson.com/docs/products))로 슬라이더를 구현하여, 각 이미지들의 height가 다양함, 비율에 맞게 통일성 있게 이미지 관리가 어려웠다.
- 이미지는 가로/세로 비율에 맞게 사용해야하는데, height를 강제 변경할 경우, 찌그러지는 경우가 발생함

## 경험한 에러 및 해결

### youtube, yt is undefined

- YT.Player is not a constructor
- [Youtube iFrame API - YT.Player is not a constructor](https://dev.to/dance2die/youtube-iframe-api-yt-player-is-not-a-constructor-pa6)

### 상품 삭제 후, 해당 아이템을 갖는 swiper slide와 sync 이슈

- 상품 삭제(.remove()) 후, swiper slide를 update하지 않아서 빈 화면이 출력됐음
- 예시 이미지 (에러*products*상품변경\_swiper와sync이슈.png)
- 예시 코드(vscode 추가)

## 웹접근성

### skipNavigation

- mobile
- desktop

### 모바일 아코디언 메뉴

- aria-selected=true/false
- arai-expanded=true/false

### 상품 메뉴

- aria-pressed=true/false
- tabindex="-1/0"

### Swiper

- aria-roledescription
- aria-label
- role
- aria-hidden=true/false
- tabindex=-1/0
- swiper 코드

### 모달

- role=“dialog”
- aria-modal=“true/false”
- tabindex=“-1/0”
- arai-labelledby=“”

### 탭

- role=“tablist”
- role=“tab”
- role=“tabpanel”
- aria-selected=“true/false”
- tabindex=“-1/0”
- aria-controls="tabpanel1"
- aria-hidden=“true/false”

## 반응형

### 다음의 종단점(breakpoints)으로 반응형 구현함

- 360 / 760 /861 /1170
- 카트(cart.html) 페이지는 모바일 반응형 적용하지 못함

## 페이지 미리보기

## 프로젝트 컴포넌트(기능,script) 소개

### 홈(index.html / home.js)

- 햄버거 메뉴(모바일 , homeSideBar.js , homeAccordion.js)
- 모바일 사이즈에서 해당 아이콘을 클릭 시, 좌측에서 메뉴가 생성되고, 메뉴는 아코디언 형식으로 작동된다.
- 키워드 검색 (homeSearch.js)
- 헤더 우측에 위치한, 돋보기 아이콘을 클릭 시, 우측에서부터 입력가능한 인풋창이 생성
- 슬라이더(MainSlider.js)

### 블로그(blog.html / blog.js)- 마우스 스크롤 애니메이션

- 페이지 상단에, 스크롤을 얼마나 했는지를 보여주는 인디케이터(scrollIndicator.js)
- (데스크탑/모바일) 페이지 상단에 위치
- 페이지 우측 하단에 생성되는 sticky 메뉴가, 마우스 스크롤 되면서 현재 어떤 제목의 내용인지 알려줌(scrollMenu.js)
- 데스크탑 : 페이지 우측 하단
- 모바일: 페이지 하단
- 페이지 스크롤 다운 할 경우, 페이지 제목의 엘리먼트가 생성되고 사라짐(scrollTopBlock.js)
- (데스크탑/모바일) 페이지 상단에 위치

### 상품(products.html / products.js)

#### 카트

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

### 상품상세(product.html / product.js)

- youTube.js

  - 유튜브 실행

- sliderComponent.js / sliderData.js(상품 미리보기 슬라이더)

  - 슬라이더 (sliderComponent.js)
  - 슬라이더 아이템 템플릿 및 데이터 (sliderData.js)

- zoomIn.js

  - 상품 확대 돋보기 기능

- productTab.js
  - 탭(Tab)

### 그외(유틸)

- itemTemplate.js

  - fetch로 가져온 데이터를 js로 받아, html로 렌더링해주는 재활용 가능한 템플릿 모음

## 아쉬운점

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

## 애로사항이 많았던 작업

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

## 버그 & 보완사항 & 향후계획

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
- CSS
  - 공통의미별로 mixin 정의 후 파일 분할
  - 반응형(@media) 코드 일원화
- 번들러, vite를 webpack으로 변경
- 슬라이더(swiper를 제외한)에 터치(touch)로, 구동되도록 기능 수정
- 상품 등록 페이지 구현

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

  - 상품 미리보기 슬라이더()
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
