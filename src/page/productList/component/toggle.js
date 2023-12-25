/**
 * 상품 페이지(products.html)에서 카드 상품에 대한 스크립트
 */

import {
  cartOverlay,
} from "../../util/cartElemDom.js";

import {slider} from "./render.js";

const modalLayer = document.querySelector(".box__modal-layer");
const cartOverlay = document.querySelector(".box__modal-layer");
// TODO 이미 모달은 여기에서 찾고있는데 버튼도 한곳에서만 쓰이고 있기 때문에 util이 아님, 그리고 그정도의 헤비함이 없음. 분리 불필요함.
// TODO 쓰일것 같으니까 미리 빼는게 아님. 쓰다보니까 중복코드가 생길때 빼는거임.
const closeCartBtn = document.querySelector(".button__close-layer");
const toggleCartBtn = document.querySelector(".button__item-cart");

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
