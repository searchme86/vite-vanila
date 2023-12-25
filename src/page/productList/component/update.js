import { findStoreItemById, getStoreItem, setStoreItem } from "../store.js";

import { rendererCreateCartItem } from "../../../common/renderer.js";
import { openCart } from "./toggle.js";
import {
  changeCartItemCount,
  changeCartTotal,
  changeCartItems,
  slider,
} from "./render.js";


const swiperWrapper = document.querySelector(".swiper-wrapper");
const cartItems = document.querySelector(".box__cartItem-container");

// TODO 초기화 상태를 하나 만들어서 constant로 관리해야함. ts가 아닌이상 타입 깨질가능성 높음.
// TODO 대문자로 시작하는것에 대한 rule 숙지 필요.
let renewState;

const rerenderCartPage = () => {
  setStoreItem("cart", renewState);
  changeCartItemCount();
  changeCartTotal();
};

// TODO operation을 보내서 또 내부에서 값을 받아서 또 처리해서 하는 복잡한 방식 불필요.
const updateCartAmount = (domDataSetId, amount) => {
  // TODO 초기화는 무조건 값을 주고서 하는게 좋음.
  let newAmount = 0;
  let cartState = getStoreItem("cart");

  // TODO renewState 는 지금 let으로 되어있어서 굳이 map 돌릴 필요없음.
  renewState = cartState.map((cartItem) => {
    if (cartItem.id === Number(domDataSetId)) {
      newAmount = cartItem.amount + amount;

      cartItem = {
        ...cartItem,
        amount: newAmount
      };
    }
    return cartItem;
  });

  // TODO side effect 가능성 높음.
  if (slider) {
    slider.update();
    slider.updateSlides();
  }

  return newAmount;
};

const increaseAmount = (domDataSetId) => updateCartAmount(domDataSetId, 1);

const removeItem = (domDataSetId) => {
  let cartState = getStoreItem("cart");
  renewState = cartState.filter(
    (cartItem) => cartItem.id !== Number(domDataSetId),
  );
};

const decreaseAmount = (domDataSetId) => {
  let newAmount = updateCartAmount(Number(domDataSetId), -1);

  // TODO side effect 가능성 높음, 계산로직 과 처리 로직 분리 필요
  if (newAmount === 0) {
    removeItem(Number(domDataSetId));
  }
  return newAmount;
};

const processCart = () => {

  if (cartItems) {
    cartItems.addEventListener("click", (e) => {
      const target = e.target;
      const targetParent = target.parentElement;
      const clickItemID = target.dataset.id || targetParent.dataset.id;

      // TODO 대문자는 무조건 컴포넌트,함수,클래스 임. 변수는 절대 대문자아님. 이거 몇번 했던 피드백임.
      const itemCount = targetParent.nextElementSibling;
      const cartContents =
        targetParent.parentElement.parentElement.parentElement;

      // TODO 이거 동시에 발생가능성이 없으면 굳이 else if 할 필요없을것 같음.
      // TODO 그리고 각자 처리로직이 다르면 로직을 분리하는게 맞다고 판단됨.
      if (target.classList.contains("button__remove-item")) {
        removeItem(clickItemID);
        targetParent.parentElement.remove();
      } else if (targetParent.classList.contains("button__increase-cartItem")) {
        itemCount.textContent = increaseAmount(clickItemID);
      } else if (targetParent.classList.contains("button__decrease-cartItem")) {
        let amountLeftDecreased = decreaseAmount(clickItemID);
        if (amountLeftDecreased === 0) {
          cartContents.remove();
        } else {
          targetParent.previousElementSibling.textContent = amountLeftDecreased;
        }
      }

      rerenderCartPage();
      // TODO document.querySelector 쓸거면 최상단에 정의 필요.
      if (document.querySelector(".swiper-wrapper").children.length === 0) {
        document.querySelector(".box__modal-layer").classList.remove("show");
      }
    });
  }
};

export const addItemById = (id) => {
  let state = getStoreItem("cart");

  // TODO let을 쓸때가 아니면 const를 써야함.
  const found = state.find((cartItem) => cartItem.id === Number(id));

  // TODO 일반적으로 긍정형이 앞에 나오는게 더 좋은 패턴.
  if (!found) {
    // TODO let을 쓸때가 아니면 const를 써야함.
    const item = findStoreItemById(id);
    const newItem = {
      ...item,
      amount: 1,
    }
    // TODO immer 와 같은 방식 혹은 순수하게 값을 업데이트하는 로직 구글링필요. object spread는 좋지않음. 사이드이펙트 터질수이음. ts가 아닌이상.
    setStoreItem("cart", [...state, newItem]);
    const cartItemElement = rendererCreateCartItem(newItem);

    swiperWrapper.appendChild(cartItemElement);

    if (slider) {
      slider.updateSlides();
      slider.update();
    }
  } else {
    let increasedAmount = increaseAmount(Number(id));
    const newAmountElement = cartItems.querySelector(
      `[data-id="${id}"].text__cartItem-count`,
    );
    newAmountElement.textContent = increasedAmount;
  }

  rerenderCartPage();
  slider.init();
  openCart();
};

const init = () => {
  changeCartItemCount();
  changeCartTotal();
  changeCartItems();
  processCart();
};

init();
