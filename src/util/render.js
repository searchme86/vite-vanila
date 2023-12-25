// TODO 관계정의에 대한 주석 불필요함.

import { addToCart } from "../components/cart/updateCart";

const rendererProductItem = ({
  brand,
  description,
  discountPercentage,
  id,
  price,
  rating,
  stock,
  thumbnail,
  title,
}) => {
  return /*html*/ `
    <li class="list-item__card-products">
      <a href="product.html?id=${id}" class="">
        <div class="box__item-image">
          <div class="box__image">
            <img src="${thumbnail}" alt="${title}" />
          </div>
        </div>
      </a>
      <div class="box__item-contents">
        <div class="box__item-info">
          <strong class="text__item-brand">${brand}</strong>
          <p class="text__item-description">${description}</p>
          <div class="box__item-price">
            <span class="text__price-discount">
              ${discountPercentage}%
            </span>
            <span class="text__cart-price">$${price}</span>
          </div>
          <div class="box__item-comment">
            <span class="text__item-rating">
              <i class="fas fa-star"></i>
              ${rating}
            </span>
            <span class="text__item-stock">재고 ${stock}</span>
          </div>
          <strong class="text__item-name">${title}</strong>
          <div class="box__badge">
            <ul class="list__badge">
              <li>
                <span class="text__badge text__special-discount">특가</span>
              </li>
              <li>
                <span class="text__badge text__free-delivery">무료배송</span>
              </li>
            </ul>
          </div>
        </div>
        <button type="button" class="button__add-cart" data-id="${id}">
          <i class="fas fa-shopping-cart"></i>
          <span class="offscreen">장바구니 넣기</span>
        </button>
      </div>
    </li>
  `;
};

export const addItemsToContainer = (items, container, filters) => {
  container.innerHTML = items.map(rendererProductItem).join("");

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
