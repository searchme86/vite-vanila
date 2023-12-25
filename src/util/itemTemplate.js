/**
 * 상품 페이지(products.html)
 * 하단 모달에 생성되는 개별 아이템을 렌더링해주는 함수
 * */
export const createCartItem = ({
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

/**
 * cart 페이지(products.html)
 * 사용보류
 * */
export const createCartTRItem = ({
  amount,
  id,
  price,
  thumbnail,
  title,
}) => {
  const singleCartItem = document.createElement("tr");
  singleCartItem.setAttribute("data-id", id);

  singleCartItem.innerHTML = /*html*/ `
    <td>
      <div class="box__user-item">
        <div class="box__image">
          <img
            src="${thumbnail}"
            alt="${title}"
          />
        </div>
        <div class="form__input-box">
          <input type="checkbox" id="${title}" />
          <label for="${title}">
            <span class="offscreen">상품이미지</span>
          </label>
        </div>
      </div>
    </td>
    <td>
      <div class="box__cart-title">
        <strong class="text__item-title">${title}</strong>
        <p class="text__item-description">${description}</p>
        <div class="box__item-button">
          <ul class="list__option-button">
            <li>
              <strong class="text__option-title"
                >옵션1/옵션2</strong
              >
              <button type="button" class="button__cart-option">
                옵션변경
              </button>
            </li>
            <li>
              <strong class="text__option-title">사은품</strong>
              <button type="button" class="button__cart-option">
                사은품 변경
              </button>
            </li>
          </ul>
        </div>
      </div>
    </td>
    <td>
      <div class="box__cart-price">
        <strong class="text__item-price">
          <span class="text__item-amount">${price}</span>
          원</strong
        >
        <div class="box__amount-control">
          <button type="button" class="button__amount-reduce button__increase-cartItem" data-id="${id}">
            <i class="fas fa-plus"></i>
            <span class="offscreen">상품 1개씩 증가</span>
          </button>
          <span class="text__cart-amount">
            <span class="offscreen">현재 수량</span>
            ${amount}
            <span className="offscreen">개</span>
          </span>
          <button type="button" class="button__amount-add button__decrease-cartItem" data-id="${id}">
            <i class="fas fa-minus"></i>
            <span class="offscreen">상품 1개씩 감소</span>
          </button>
        </div>
      </div>
    </td>
    <td>
      <div class="box__item-discount">
        <ul class="list__discount">
          <li>
            <span class="text__discount-amount"
              ><span class="text__discount-value"
                >999,999,999</span
              >원</span
            >
            <span class="text__discount-condition"
              >(정기배송할인 5%)</span
            >
          </li>
          <li>
            <span class="text__discount-amount"
              ><span class="text__discount-value"
                >999,999,999</span
              >원</span
            >
            <span class="text__discount-condition"
              >(즉시배송할인 5%)</span
            >
          </li>
        </ul>
        <div class="box__discount-coupon">
          <ul class="list__discount-option">
            <li>
              <button type="button" class="button__item-discount">
                10% 할인쿠폰
              </button>
            </li>
            <li>
              <button type="button" class="button__item-discount">
                10% 더블할인 쿠폰
              </button>
            </li>
          </ul>
        </div>
      </div>
    </td>
    <td>
      <div class="box__item-charge">
        <span class="text__item-charge"
          ><strong class="text__charge-amount">${price}</strong
          >원</span
        >
      </div>
    </td>
    <td>
      <div class="box__item-delivery">
        <strong class="text__delivery-charge"
          >2,500<span class="text__amount-unit">원</span></strong
        >
        <p class="text__delivery-condition">
          50,000원 이상<br />
          무료배송
        </p>
      </div>
    </td>
    <td>
      <div class="box__delivery-button">
        <button
          type="button"
          class="button__item-order button__item-wish"
        >
          위시
        </button>
        <button
          type="button"
          class="button__item-order button__item-togo"
        >
          바로주문
        </button>
        <button
          type="button"
          class="button__item-order button__item-delete button__remove-item"
          data-id="${id}"
        >
          삭제
        </button>
      </div>
    </td>
`;

  return singleCartItem;
};

/**
 * 상품 페이지(products.html)
 * 의존 파일 : render.js
 * 상품 페이지에 단일 상품을 렌더링해주는 함수
 * */

export const createProductItem = ({
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

/**
 * 상품 상세 페이지(product.html)
 * 의존 파일 : product.js
 * 상품 상세 페이지에서 개별 상품의 상세 정보를 렌더링 해주는 함수
 * */

export const createDetailItem = ({
  amount,
  brand,
  description,
  discountPercentage,
  id,
  price,
  rating,
  stock,
  title,
}) => {
  return /*html*/ `
    <strong class="text__item-origin">${brand}</strong>
    <p class="text__item-introduction">${description}</p>
    <strong class="text__item-title">${title}</strong>
    <div class="box__item-opinion">
      <span class="text__item-rating">
        <i class="fas fa-star"></i>
        ${rating}
      </span>
      <div class="box__item-value">
        <span class="text__item-discount">
          ${discountPercentage}<span class="text__valaue-unit">%</span>
        </span>
        <strong class="text__cart-price">$${price}</strong>
      </div>
      <div class="box__item-info">
        <span class="text__item-quantity">재고 수량 ${stock}</span>
        <span class="text__badge-discount">특가</span>
      </div>
    </div>
    <div class="box__item-store">
      <span class="text__item-home">
        <i class="fas fa-store"></i>${brand}
      </span>
      <button type="button" class="button__brand-store">
        <span>${brand}</span><i class="fas fa-chevron-right"></i>
      </button>
    </div>
    <button type="button" class="button__add-item" data-id="${id}">
      <i class="fas fa-cart-plus"></i>
      <span class="text__add-cart" data-id="${id}">장바구니</span>
    </button>
  `;
};

/**
 * 상품 상세 페이지(product.html)
 * 의존 파일 : product.js
 * 상품 상세 페이지에서 하단 탭 안에 개별 상품의 상세 정보를 렌더링 해주는 함수
 * 상품의 이미지가 3개 이상인 경우에 사용
 * */

export const createInfoDescription = ({
  description,
  images,
  title,
}) => {
  return /*html*/ `
    <section class="box__main-detail">
      <h3 class="text__section-title">${title}</h3>
      <p class="text__section-description">${description}</p>
      <div class="box__section-image">
        <div class="box__image">
          <img src="${images[0]}" alt="${title} 첫번째 이미지"/>
        </div>
      </div>
    </section>

    <div class="section__item-description">
      <div class="box__item-feature">
        <div class="box__card">
          <div class="box__card-image">
            <div class="box__image">
              <img src="${images[1]}" alt="${title} 두번째 이미지"/>
            </div>
          </div>
          <div class="box__card-contents">
            <strong class="text__cart-title">Lorem ipsum<br/>sit amet</strong>
            <p class="text__card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span class="text__card-keyword">lorem</span>
            <button type="button" class="button__item-more">상세정보<i class="fas fa-plus"></i></button>
          </div>
        </div>

        <div class="box__card">
          <div class="box__card-image">
            <div class="box__image">
              <img src="${images[2]}" alt="${title} 세번째 이미지"/>
            </div>
          </div>
          <div class="box__card-contents">
            <strong class="text__cart-title">Lorem ipsum<br/>sit amet</strong>
            <p class="text__card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span class="text__card-keyword">lorem</span>
            <button type="button" class="button__item-more">상세정보<i class="fas fa-plus"></i></button>
          </div>
        </div>
      </div>
    </div>

    <div class="section__item-description">
      <strong class="text__section-title">Lorem ipsum</strong>
      <p class="text__section-description">Velit incidunt nobis iste fuga eligendi veritatis ducimus dicta modi</p>
      <div class="box__section-image">
        <div class="box__image">
          <img src="${images[3]}" alt="${title} 네번째 이미지"/>
        </div>
      </div>
    </div>

    <div class="section__item-info">
      <div class="box__item-notice">
        <div class="box__notice-image">
          <div class="box__image">
            <img src="../../assets/images/cart/dummyImage01.png" alt="lego batman"/>
          </div>
        </div>
        <p class="text__notice-contents">Lorem ipsum <br/>elit. Corrupti error</p>
        <button type="button" class="button__info-more">
          <span class="text__info-more">자세히 보기</span><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="box__item-notice">
        <div class="box__notice-image">
          <div class="box__image">
            <img src="../../assets/images/cart/dummyImage02.png" alt="lego batman"/>
          </div>
        </div>
        <p class="text__notice-contents">Lorem ipsum <br/>elit. Corrupti error</p>
        <button type="button" class="button__info-more">
          <span class="text__info-more">자세히 보기</span><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="box__item-notice">
        <div class="box__notice-image">
          <div class="box__image">
            <img src="../../assets/images/cart/dummyImage03.png" alt="lego batman"/>
          </div>
        </div>
        <p class="text__notice-contents">Lorem ipsum <br/>elit. Corrupti error</p>
        <button type="button" class="button__info-more">
          <span class="text__info-more">자세히 보기</span><i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
  `;
};

/**
 * 상품 상세 페이지(product.html)
 * 의존 파일 : product.js
 * 상품 상세 페이지에서 하단 탭 안에 개별 상품의 상세 정보를 렌더링 해주는 함수
 * 상품의 이미지가 3개에 사용
 * */

export const createInfoTDescription = ({
  description,
  images,
  title,
}) => {
  return /*html*/ `
    <section class="box__main-detail">
      <h3 class="text__section-title">${title}</h3>
      <p class="text__section-description">${description}</p>
      <div class="box__section-image">
        <div class="box__image">
          <img src="${images[0]}" alt="${title} 첫번째 이미지"/>
        </div>
      </div>
    </section>

    <div class="section__item-description">
      <div class="box__item-feature">
        <div class="box__card">
          <div class="box__card-image">
            <div class="box__image">
              <img src="${images[1]}" alt="${title} 두번째 이미지"/>
            </div>
          </div>
          <div class="box__card-contents">
            <strong class="text__cart-title">Lorem ipsum<br/>sit amet</strong>
            <p class="text__card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span class="text__card-keyword">lorem</span>
            <button type="button" class="button__item-more">상세정보<i class="fas fa-plus"></i></button>
          </div>
        </div>

        <div class="box__card">
          <div class="box__card-image">
            <div class="box__image">
              <img src="${images[2]}" alt="${title} 세번째 이미지"/>
            </div>
          </div>
          <div class="box__card-contents">
            <strong class="text__cart-title">Lorem ipsum<br/>sit amet</strong>
            <p class="text__card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span class="text__card-keyword">lorem</span>
            <button type="button" class="button__item-more">상세정보<i class="fas fa-plus"></i></button>
          </div>
        </div>
      </div>
    </div>

    <div class="section__item-info">
      <div class="box__item-notice">
        <div class="box__notice-image">
          <div class="box__image">
            <img src="../../assets/images/cart/alert.png" alt=""/>
          </div>
        </div>
        <p class="text__notice-contents">Lorem ipsum <br/>elit. Corrupti error</p>
        <button type="button" class="button__info-more">
          <span class="text__info-more">자세히 보기</span><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="box__item-notice">
        <div class="box__notice-image">
          <div class="box__image">
            <img src="../../assets/images/cart/management.png" alt=""/>
          </div>
        </div>
        <p class="text__notice-contents">Lorem ipsum <br/>elit. Corrupti error</p>
        <button type="button" class="button__info-more">
          <span class="text__info-more">자세히 보기</span><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="box__item-notice">
        <div class="box__notice-image">
          <div class="box__image">
            <img src="../../assets/images/cart/management.png" alt=""/>
          </div>
        </div>
        <p class="text__notice-contents">Lorem ipsum <br/>elit. Corrupti error</p>
        <button type="button" class="button__info-more">
          <span class="text__info-more">자세히 보기</span><i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
  `;
};

/**
 * 상품 상세 페이지(product.html)
 * 의존 파일 : product.js
 * 상품 상세 페이지에서 하단 탭 안에 개별 상품의 상세 정보를 렌더링 해주는 함수
 * 상품의 이미지가 1개에 사용
 * */
export const createInfoSingleDescription = ({
  description,
  images,
  title,
}) => {
  return /*html*/ `
    <section class="box__main-detail">
      <h3 class="text__section-title">${title}</h3>
      <p class="text__section-description">${description}</p>
      <div class="box__section-image">
        <div class="box__image">
          <img src="${images[0]}" alt="${title} 첫번째 이미지"/>
        </div>
      </div>
    </section>

    <div class="section__item-info">
      <div class="box__item-notice">
        <div class="box__notice-image">
          <div class="box__image">
            <img src="../../assets/images/cart/alert.png" alt=""/>
          </div>
        </div>
        <p class="text__notice-contents">Lorem ipsum <br/>elit. Corrupti error</p>
        <button type="button" class="button__info-more">
          <span class="text__info-more">자세히 보기</span><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="box__item-notice">
        <div class="box__notice-image">
          <div class="box__image">
            <img src="../../assets/images/cart/management.png" alt=""/>
          </div>
        </div>
        <p class="text__notice-contents">Lorem ipsum <br/>elit. Corrupti error</p>
        <button type="button" class="button__info-more">
          <span class="text__info-more">자세히 보기</span><i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="box__item-notice">
        <div class="box__notice-image">
          <div class="box__image">
            <img src="../../assets/images/cart/management.png" alt=""/>
          </div>
        </div>
        <p class="text__notice-contents">Lorem ipsum <br/>elit. Corrupti error</p>
        <button type="button" class="button__info-more">
          <span class="text__info-more">자세히 보기</span><i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
  `;
};

/**
 * 상품 상세 페이지(product.html)
 * 의존 파일 : product.js
 * 상품 상세 페이지에서 하단 탭 안에서 개별 아이템 정보를 테이블로 렌더링 함수
 * */
export const createTable = ({
  brand,
  category,
  description,
  discountPercentage,
  price,
  rating,
  stock,
  title,
}) => {
  return /*html*/ `
    <strong class="offscreen">제품 상세 스펙을 정리하는 테이블</strong>
    <table>
      <colgroup>
        <col style="width:20%">
        <col style="width:30%">
        <col style="width:20%">
        <col class="width:30%">
      </colgroup>
      <tbody>
        <tr class="table-row">
          <th scope="row" class="table-head">제조회사</th>
          <td>${brand}</td>
          <th scope="row" class="table-head">카테고리</th>
          <td>${category}</td>
        </tr>
        <tr class="table-row">
          <th scope="row" class="table-head">제품명</th>
          <td colspan="3">${title}</td>
        </tr>
        <tr class="table-row">
          <th scope="row" class="table-head">제품설명</th>
          <td colspan="3">${description}</td>
        </tr>
        <tr class="table-row">
          <th scope="row" class="table-head">가격</th>
          <td>${price}</td>
          <th scope="row" class="table-head">할인율</th>
          <td>${discountPercentage}%</td>
        </tr>
        <tr class="table-row">
          <th scope="row" class="table-head">재고수</th>
          <td>${stock}</td>
          <th scope="row" class="table-head">평점</th>
          <td>${rating}</td>
        </tr>
      </tbody>
    </table>
  `;
};
