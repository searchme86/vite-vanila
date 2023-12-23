/**
 * 의존 파일 :
 * products.js
 * itemTemplate.js
 *
 * 상품 페이지(products.html)에 상품 레이아웃을 구성하고,
 * 유저가 카트 이미지 버튼 클릭 시, localStorage에 해당 아이템이 추가되는 init 스크립트
 */

import {createProductItem} from "./itemTemplate";
import {addToCart} from "../components/cart/updateCart";

export const addItemsToContainer = (items, container, filters) => {
  container.innerHTML = items.map(createProductItem).join("");

  if (filters) return;

  // 유저가 카트 이미지 버튼 클릭 시, localStorage에 해당 아이템이 추가되는 init 스크립트
  const handleAddToCartClick = (event) => {
    const target = event.target.closest(".button__add-cart");
    if (target) {
      const productId = target.dataset.id;
      addToCart(productId);
    }
  };

  container.addEventListener("click", handleAddToCartClick);
};
