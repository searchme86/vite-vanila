/**
 * index.html의 슬라이더 스크립트
 */

const slider = document.querySelector(".box__home-slider");
const sliderContainer = document.querySelector(".list__home-slider");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");

let totalSliderVisibleItems = 3;
let totalSlidableItems =
  sliderContainer.childElementCount - totalSliderVisibleItems;

let currentSlidePos = 0;

const moveSliderItem = () => {
  sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
};

const slideNext = () => {
  const slideEnd = currentSlidePos >= totalSlidableItems;
  if (slideEnd) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }
  moveSliderItem();
};

const slidePrev = () => {
  if (currentSlidePos <= 0) {
    currentSlidePos = totalSlidableItems;
  } else {
    currentSlidePos--;
  }

  moveSliderItem();
};

sliderNextBtn.addEventListener("click", slideNext);
sliderPrevBtn.addEventListener("click", slidePrev);

window.addEventListener("resize", () => {
  totalSliderVisibleItems = 3;

  totalSlidableItems =
    sliderContainer.childElementCount - totalSliderVisibleItems;

  moveSliderItem();
});
