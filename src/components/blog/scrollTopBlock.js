/**
 * 스크롤 할 경우, 페이지 상단에 fixed 되는 엘리먼트 애니메이션 스크립트,
 */

const headerElem = document.querySelector("header");
const mainTitle = document.querySelector(".text__blog-title");
const mainFixedElem = document.querySelector(".box__fixed-scrollbar");
const mainFixedElemTitle = document.querySelector(
  ".box__fixed-scrollbar .text__fixed-title",
);
const mainBlogImage = document.querySelector(".box__blog-image");
const blogMenu = document.querySelector(".box__blog-menu");
const searchBox = document.querySelector(".box__search .box__search-box");
const searchBoxOpenButton = document.querySelector(
  ".box__control-box .button__search",
);
const searchBoxCloseButton = document.querySelector(
  ".box__control-box .button__close",
);

mainFixedElemTitle.textContent = mainTitle.textContent;
let headerOffsetHeight = headerElem.offsetHeight;

let treshHold =
  headerElem.offsetHeight +
  mainBlogImage.offsetTop +
  mainBlogImage.offsetHeight;

const updateDimensions = () => {
  headerOffsetHeight = headerElem.offsetHeight;
  treshHold =
    headerOffsetHeight + mainBlogImage.offsetTop + mainBlogImage.offsetHeight;
};

const activeElemOnScroll = () => {
  const isScrolledPastHeader = window.scrollY > headerOffsetHeight;
  const isPastTreshHold = window.scrollY > treshHold;

  if (isScrolledPastHeader) {
    mainFixedElem.classList.add("scroll");
    searchBoxOpenButton.classList.remove("active");
    searchBoxCloseButton.classList.remove("active");
    searchBox.classList.remove("active");
  } else {
    mainFixedElem.classList.remove("scroll");
  }
  if (isPastTreshHold) {
    mainFixedElem.classList.add("textUp");
    blogMenu.classList.add("show");
  } else {
    mainFixedElem.classList.remove("textUp");
    blogMenu.classList.remove("show");
  }
};

window.addEventListener("scroll", activeElemOnScroll);
window.addEventListener("resize", updateDimensions);
