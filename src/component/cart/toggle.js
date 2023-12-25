/**
 * 상품 페이지(products.html)에서 카드 상품에 대한 스크립트
 */

import {
  cartOverlay,
  closeCartBtn,
  toggleCartBtn,
} from "../../util/cartElemDom.js";

import {slider} from "./render.js";

const modalLayer = document.querySelector(".box__modal-layer");

// 상품의 카트 버튼을 클릭 시, 페이지 하단 모달을 열어주는 함수
const showCartOverlay = () => {
  if (modalLayer) {
    cartOverlay.classList.add("show");
  }
  slider.init(document.querySelector(".swiper"));
};

// 모달을 제거하는 함수
const hideCartOverlay = () => {
  if (modalLayer) {
    cartOverlay.classList.remove("show");
  }
};

if (closeCartBtn) {
  toggleCartBtn.addEventListener("click", showCartOverlay);
  closeCartBtn.addEventListener("click", hideCartOverlay);
}

export const openCart = showCartOverlay;
