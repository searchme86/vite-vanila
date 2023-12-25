import { getStoreItem, totalAmount, totalPrice } from "../store";
import { rendererCreateCartItem } from "../../util/render";
import { renderSwiper } from "../../../lib/swiper/swiper";

export let slider = renderSwiper();

// TODO 로직 과 랜더는 분리하는게 좋음.
export const changeCartItemCount = () => {
  cartItemCount = document.querySelector(".text__count")
  cartItemCount.textContent = totalAmount();
};

export const changeCartTotal = () => {
  const cartTotal = document.querySelector(".text__total-price");
  if (cartTotal) {
    cartTotal.textContent = `Total : $${totalPrice()} `;
  }
};

export const changeCartItems = () => {
  const swiperList = document.querySelector(".swiper-wrapper");
  let cartState = getStoreItem("cart");

  cartState.forEach((item) => {
    const cartItemElement = rendererCreateCartItem(item);
    if (swiperList) {
      slider.appendSlide(cartItemElement);
      slider.updateSlides();
      slider.update();
    }
  });
};
