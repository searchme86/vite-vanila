export const selectElement = (selector) => {
  const element = document.querySelector(selector);
  return element;
};

export const cartItemsElem = selectElement(".box__cartItem-container");
export const cartItemCount = selectElement(".text__count");
export const cartItems = selectElement(".box__cartItem-container");
export const cartTotal = selectElement(".text__total-price");
export const cartOverlay = selectElement(".box__modal-layer");
export const closeCartBtn = selectElement(".button__close-layer");
export const toggleCartBtn = selectElement(".button__item-cart");

export const productContainer = selectElement(".list__card-products");
export const swiperList = document.querySelector(".swiper-wrapper");
export const companiesDOM = selectElement(".list__companies");
export const featuredProductsContainer = selectElement(".featured-center");
export const inputformElem = selectElement(".box__search-item");
export const priceInput = selectElement(
  ".box__price-filter .box__input-box input",
);
export const nameInput = selectElement(".search-input");
