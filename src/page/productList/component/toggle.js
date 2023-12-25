import { slider } from "./render.js";

const modalLayer = document.querySelector(".box__modal-layer");
const cartOverlay = document.querySelector(".box__modal-layer");
// TODO 이미 모달은 여기에서 찾고있는데 버튼도 한곳에서만 쓰이고 있기 때문에 util이 아님, 그리고 그정도의 헤비함이 없음. 분리 불필요함.
// TODO 쓰일것 같으니까 미리 빼는게 아님. 쓰다보니까 중복코드가 생길때 빼는거임.
const closeButton = document.querySelector(".button__close-layer");
const toggleButton = document.querySelector(".button__item-cart");

const showCartOverlay = () => {
  if (modalLayer) {
    cartOverlay.classList.add("show");
  }
  slider.init(document.querySelector(".swiper"));
};

const hideCartOverlay = () => {
  if (modalLayer) {
    cartOverlay.classList.remove("show");
  }
};

if (closeButton) {
  toggleButton.addEventListener("click", showCartOverlay);
  closeButton.addEventListener("click", hideCartOverlay);
}

export const openCart = showCartOverlay;
