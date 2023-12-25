// TODO 관계정의에 대한 주석 불필요함.

import { addToCart } from "../components/cart/updateCart";

// TODO 주석은 정말로 공유할때만 쓰는것이고, 불필요한 설명은 필요없음.
// TODO 함수명을 더 잘쓰는게 중요함.
// TODO renderer는 util이 아님.

export const rendererCreateCartItem = ({
  amount,
  id,
  price,
  thumbnail,
  title,
}) => {
  const singleCartItem = document.createElement("li");
  singleCartItem.classList.add("swiper-slide");
  singleCartItem.setAttribute("data-id", id);
  singleCartItem.innerHTML = /*html*/ `
    <div class="box__item-top">
      <div class="box__cart-image">
        <div class="box__image">
          <img src="${thumbnail}" alt="${title} 이미지" />
        </div>
      </div>
      <button type="button" class="button__remove-item" data-id="${id}">
        <i class="fas fa-trash-alt"></i>
        <span class="offscreen">상품 삭제</span>
      </button>
    </div>
    <div class="box__cartItem-content">
      <div class="box__cartItem-info">
        <strong class="text__cartItem-title">${title}</strong>
        <span class="text__cartItem-price">$${price}</span>
      </div>
      <div class="box__control">
        <button class="button__increase-cartItem" data-id="${id}">
          <span class="offscreen">상품 수량증가</span>
          <i class="fas fa-chevron-up"></i>
        </button>
        <span class="text__cartItem-count" data-id="${id}">
          <span class="offscreen">현재 상품수량</span>${amount}<span class="offscreen">개</span>
        </span>
        <button class="button__decrease-cartItem" data-id="${id}">
          <span class="offscreen">상품 수량감소</span>
          <i class="fas fa-chevron-down"></i>
        </button>
      </div>
    </div>
  `;
  return singleCartItem;
};

// TODO 사용하지 않는 코드는 삭제한다. 어차피 쓰레기가 될거고, 커밋에 남기 때문에 정말로 필요하면 원복하면 됨.

// TODO util은 공용함수이다. 쓰이는곳에서만 쓰인다면 공용이 아님.

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
