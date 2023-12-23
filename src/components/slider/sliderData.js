/**
 * 상세상품 페이지(product.html)에서 상품 미리보기 할 수 있는,
 * 상품 슬라이드에 필요한 DOM 정의와 개별 슬라이드를 만드는 함수 정의
 */

export const parentElem = document.querySelector(".box__preview");
export const rightSlider = document.querySelector(".box__preview-image");
export const sliderImageList = document.querySelector(".list__preview-image");
export const previousSlideButton = document.querySelector(
  ".button__previous-slide",
);
export const nextSlideButton = document.querySelector(".button__next-slide");

export const textCurrentSlideNumber = document.querySelector(
  ".text__current-slide",
);
export const textTotalSlideNumber =
  document.querySelector(".text__total-slide");

export const createImageElement = ({src, alt}) => {
  const liElem = document.createElement("li");
  const imageElem = document.createElement("img");
  const divElem = document.createElement("div");
  const buttonElem = document.createElement("button");

  liElem.classList.add("list-item__dot");
  buttonElem.classList.add("button__preview-image");
  divElem.classList.add("box__image");

  imageElem.src = src;
  imageElem.alt = alt;

  divElem.appendChild(imageElem);
  buttonElem.appendChild(divElem);
  liElem.appendChild(buttonElem);

  return liElem;
};

export const createMainImageElement = ({src, alt}) => {
  const liElem = document.createElement("li");
  const imageElem = document.createElement("img");
  const divElem = document.createElement("div");

  liElem.classList.add("list-item__dot");
  divElem.classList.add("box__image");

  imageElem.src = src;
  imageElem.alt = alt;
  imageElem.classList.add("zoom");

  divElem.appendChild(imageElem);
  liElem.appendChild(divElem);

  return liElem;
};
