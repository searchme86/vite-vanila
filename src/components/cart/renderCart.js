/**
 * 상품 페이지(products.html)에서 카드 상품에 대한 스크립트
 */

import {getItemFromLocalStorage} from "../../store/store";
import {cartItemCount, cartTotal, swiperList} from "../../utils/cartElemDom";
import {createCartItem} from "../../utils/itemTemplate";
import {renderSwiper} from "../../lib/swiper/swiper";

export let slider = renderSwiper();

const updateCartState = () => {
  return getItemFromLocalStorage("cart");
};

// 카드의 숫자를 증감하는 함수
export const displayCartItemCount = () => {
  const cartState = updateCartState();
  const totalCount = cartState.reduce(
    (countNum, cartItem) => countNum + cartItem.amount,
    0,
  );
  cartItemCount.textContent = totalCount;
};

// 카드의 전체 숫자를 계산하는 함수
export const displayCartTotal = () => {
  const cartState = updateCartState();
  const totalPrice = cartState.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.amount,
    0,
  );
  if (cartTotal) {
    cartTotal.textContent = `Total : $${totalPrice} `;
  }
};

// 페이지 하단, 팝업되는 div, 슬라이더에 카트 아이템을 넣어주는 함수
export const displaycartItemsElem = () => {
  let cartState = getItemFromLocalStorage("cart");
  cartState.forEach((item) => {
    const cartItemElement = createCartItem(item);
    if (swiperList) {
      slider.appendSlide(cartItemElement);
      slider.updateSlides();
      slider.update();
    }
  });
};
