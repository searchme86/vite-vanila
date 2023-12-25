// TODO 무조건 약어 금지. 재사용되는곳에서는 약어를 쓰면 안됨. 파일명도 마찬가지.
// TODO 불필요한 export 양산 금지
const selectElement = (selector) => {
  const element = document.querySelector(selector);
  return element;
};

export const cartItemCount = selectElement(".text__count");
export const cartItems = selectElement(".box__cartItem-container");
export const cartTotal = selectElement(".text__total-price");
export const cartOverlay = selectElement(".box__modal-layer");
export const closeCartBtn = selectElement(".button__close-layer");
export const toggleCartBtn = selectElement(".button__item-cart");

export const productContainer = selectElement(".list__card-products");
export const swiperList = document.querySelector(".swiper-wrapper");
export const companiesDOM = selectElement(".list__companies");
export const inputFormElem = selectElement(".box__search-item");

export const nameInput = selectElement(".search-input");
