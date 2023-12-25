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

