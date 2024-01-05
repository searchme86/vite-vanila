/**
 * 상품 페이지(products.html)에서 카트 이미지 버튼 클릭시, 초기 start 스크립트
 */

import {cartItems} from "../../utils/cartElemDom.js";
import {
  getItemFromLocalStorage,
  saveItemToLocalStorage,
} from "../../store/store.js";
import {searchObjInfoByKey} from "../../store/store.js";

import {createCartItem} from "../../utils/itemTemplate.js";
import {openCart} from "./toggleCart.js";
import {
  displayCartItemCount,
  displayCartTotal,
  displaycartItemsElem,
} from "./renderCart.js";
import {slider} from "./renderCart.js";

let StateChanged;
const swiperWrapper = document.querySelector(".swiper-wrapper");

// 최신 상품 정보를 보여주는 함수
const updateCartAndDisplay = () => {
  saveItemToLocalStorage("cart", StateChanged);
  displayCartItemCount();
  displayCartTotal();
};

// 클릭 한 domDataSetId에 따라 아이템의 숫자를 update 하는 함수
const updateCartItem = (domDataSetId, operationFunction) => {
  let newAmount;
  let cartState = getItemFromLocalStorage("cart");
  StateChanged = cartState.map((cartItem) => {
    if (cartItem.id === Number(domDataSetId)) {
      newAmount = operationFunction(cartItem.amount);
      cartItem = {...cartItem, amount: newAmount};
    }
    return cartItem;
  });

  if (slider) {
    slider.update();
    slider.updateSlides();
  }

  return newAmount;
};

const increaseAmount = (domDataSetId) =>
  updateCartItem(domDataSetId, (amount) => amount + 1);

const removeItem = (domDataSetId) => {
  let cartState = getItemFromLocalStorage("cart");
  StateChanged = cartState.filter(
    (cartItem) => cartItem.id !== Number(domDataSetId),
  );
};

const decreaseAmount = (domDataSetId) => {
  let newAmount = updateCartItem(Number(domDataSetId), (amount) => amount - 1);
  if (newAmount === 0) {
    removeItem(Number(domDataSetId));
  }
  return newAmount;
};

// 페이지 하단, 모달안에 개별 상품의 화살표(증감)을 클릭 시, 활성화 함수
const processCart = () => {
  if (cartItems) {
    cartItems.addEventListener("click", (e) => {
      const target = e.target;
      const targetParent = target.parentElement;
      const clickItemID = target.dataset.id || targetParent.dataset.id;
      const ItemCount = targetParent.nextElementSibling;
      const cartContents =
        targetParent.parentElement.parentElement.parentElement;

      if (target.classList.contains("button__remove-item")) {
        removeItem(clickItemID);
        targetParent.parentElement.remove();
        if (slider) {
          slider.updateSlides();
          slider.update();
        }
      } else if (targetParent.classList.contains("button__increase-cartItem")) {
        ItemCount.textContent = increaseAmount(clickItemID);
      } else if (targetParent.classList.contains("button__decrease-cartItem")) {
        let amountLeftDecreased = decreaseAmount(clickItemID);
        if (amountLeftDecreased === 0) {
          cartContents.remove();
          if (slider) {
            slider.updateSlides();
            slider.update();
          }
        } else {
          targetParent.previousElementSibling.textContent = amountLeftDecreased;
        }
      }

      updateCartAndDisplay();
      if (document.querySelector(".swiper-wrapper").children.length === 0) {
        document.querySelector(".box__modal-layer").classList.remove("show");
      }
    });
  }
};

// 상품 페이지, 개별 상품의 카트 이미지 버튼을 클릭 시, 활성함수
export const addToCart = (domDataSetId) => {
  let cartState = getItemFromLocalStorage("cart");

  let filteredItemByKey = cartState.find(
    (cartItem) => cartItem.id === Number(domDataSetId),
  );

  if (!filteredItemByKey) {
    let itemInfoObjByKey = searchObjInfoByKey(domDataSetId);
    itemInfoObjByKey = {...itemInfoObjByKey, amount: 1};
    StateChanged = [...cartState, itemInfoObjByKey];
    saveItemToLocalStorage("cart", StateChanged);
    const cartItemElement = createCartItem(itemInfoObjByKey);

    swiperWrapper.appendChild(cartItemElement);

    if (slider) {
      slider.updateSlides();
      slider.update();
    }
  } else {
    let increasedAmount = increaseAmount(Number(domDataSetId));
    const newAmountElement = cartItems.querySelector(
      `[data-id="${domDataSetId}"].text__cartItem-count`,
    );
    newAmountElement.textContent = increasedAmount;
  }

  updateCartAndDisplay();
  slider.init();
  openCart();
};

const init = () => {
  displayCartItemCount();
  displayCartTotal();
  displaycartItemsElem();
  processCart();
};

init();
