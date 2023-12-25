/**
 * 페이지 헤더, 우측에 자동으로 스크롤업 되는 스크립트 함수
 */

(() => {
  let initialSliderPosition = 0;
  let setIntervalValue;
  let waitTimeValue = 1500;
  let positionLastItem;
  const listItemHeight = document.querySelector(".list-item__bestSeller");
  const listItemNumber = document.querySelectorAll(
    ".list-item__bestSeller",
  ).length;
  const slideMoveSize = parseInt(listItemHeight.clientHeight);

  const verticalSliderTitle = document.querySelector(
    ".box__bestSeller .text__module-title ",
  );
  const verticalSliderContainer = document.querySelector(
    ".box__bestSeller-contents",
  );
  const verticalSlide = document.querySelector(
    ".box__bestSeller .list__bestSeller",
  );
  const textContainer = document.querySelector(".text__product-number");
  const startButton = document.querySelector(
    ".box__bestSeller .button__slide-start",
  );
  const stopButton = document.querySelector(
    ".box__bestSeller .button__slide-stop",
  );

  verticalSliderContainer.style.left = `${
    verticalSliderTitle.clientWidth + 17
  }px`;

  textContainer.textContent = listItemNumber;
  positionLastItem = (listItemNumber - 1) * slideMoveSize;

  verticalSlide.setAttribute("style", "top:0px");

  const moveLiItem = () => {
    initialSliderPosition -= slideMoveSize;
    verticalSlide.style.top = `${initialSliderPosition}px`;
    verticalSlide.style.transition = "top 0.5s ease-in-out";

    if (initialSliderPosition === -positionLastItem) {
      setTimeout(() => {
        verticalSlide.style.transition = "none";
        verticalSlide.style.top = "0";
        initialSliderPosition = 0;
      }, waitTimeValue);
    }
  };

  setIntervalValue = setInterval(moveLiItem, waitTimeValue);

  startButton.addEventListener("click", () => {
    if (setIntervalValue) {
      clearInterval(setIntervalValue);
    }
    setIntervalValue = setInterval(moveLiItem, 3000);
  });

  stopButton.addEventListener("click", () => {
    clearInterval(setIntervalValue);
  });
})();
