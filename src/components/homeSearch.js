/**
 * 의존파일 : home.js
 * 컴포넌트 위치 : index.html
 * 기능 : 메뉴 네비게이션 우측, 찾기 아이콘 클릭 시, 숨겨진 인풋박스가 이동하고, x버튼 누르면 사라지는 스크립트
 */

(() => {
  const getElement = (selector) => document.querySelector(selector);

  const searchButton = getElement(".button__search");
  const closeButton = getElement(".button__close");
  const searchBox = getElement(".box__search-box");
  const searchBoxInput = getElement(".box__search-box input");
  const headerTopElem = getElement(".box__header-top");

  const updateSearchBoxSize = () => {
    searchBox.style.width = headerTopElem.clientWidth + "px";
    searchBox.style.height = headerTopElem.clientHeight + "px";
    searchBoxInput.style.height = headerTopElem.clientHeight + "px";
  };

  const activateSearchBox = () => {
    searchBox.classList.add("active");
    closeButton.classList.add("active");
    searchButton.classList.add("active");
  };

  const deactivateSearchBox = () => {
    searchBox.classList.remove("active");
    closeButton.classList.remove("active");
    searchButton.classList.remove("active");
  };

  const resizeHandler = () => {
    updateSearchBoxSize();
  };

  searchButton.onclick = () => {
    updateSearchBoxSize();
    activateSearchBox();
  };

  closeButton.onclick = deactivateSearchBox;

  window.addEventListener("resize", resizeHandler);
})();

(() => {
  const headerElem = document.querySelector("header");
  const searchBox = document.querySelector(".box__search .box__search-box");
  const searchBoxOpenButton = document.querySelector(
    ".box__control-box .button__search",
  );
  const searchBoxCloseButton = document.querySelector(
    ".box__control-box .button__close",
  );

  let treshHold = headerElem.offsetHeight;

  const updateDimensions = () => {
    treshHold = headerElem.offsetHeight;
  };

  const activeElemOnScroll = () => {
    const isScrolledPastHeader = window.scrollY > treshHold;

    if (isScrolledPastHeader) {
      searchBoxOpenButton.classList.remove("active");
      searchBoxCloseButton.classList.remove("active");
      searchBox.classList.remove("active");
    }
  };

  window.addEventListener("scroll", activeElemOnScroll);
  window.addEventListener("resize", updateDimensions);
})();
