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

mainFixedElemTitle.textContent = mainTitle.textContent;
let headerOffsetHeight = headerElem.offsetHeight;

let treshHold =
  headerElem.offsetHeight +
  mainBlogImage.offsetTop +
  mainBlogImage.offsetHeight;

const addEventOnElem = (elem, type, callback) => {
  if (elem.length) {
    elem.forEach((item) => item.addEventListener(type, callback));
  } else {
    elem.addEventListener(type, callback);
  }
};

const updateDimensions = () => {
  headerOffsetHeight = headerElem.offsetHeight;
  treshHold =
    headerOffsetHeight + mainBlogImage.offsetTop + mainBlogImage.offsetHeight;
};

const activeElemOnScroll = () => {
  const isScrolledPastHeader = window.scrollY > headerOffsetHeight;
  headerElem.classList.toggle("hide", isScrolledPastHeader);
  mainFixedElem.classList.toggle("scroll", isScrolledPastHeader);
};

const hideText = () => {
  mainFixedElem.classList.toggle("textUp", window.scrollY > treshHold);
};

addEventOnElem(window, "scroll", activeElemOnScroll);
addEventOnElem(window, "scroll", hideText);
addEventOnElem(window, "resize", updateDimensions);
