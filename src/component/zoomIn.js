/**
 * 상품상세 페이지(product.html)에서,
 * 상품 돋보기 스크립트
 */

export const zoomInElem = (elemID) => {
  const hoveredImageElem = document.querySelector(elemID);

  const lensTool = document.querySelector(".box__lens");
  const ratio = 3;

  if (hoveredImageElem) {
    lensTool.style.backgroundImage = `url(${hoveredImageElem.src})`;
    lensTool.style.backgroundSize = `${hoveredImageElem.width * ratio}px ${
      hoveredImageElem.height * ratio
    }px`;
  }

  const calcValueBound = (value, min, max) =>
    Math.max(min, Math.min(value, max));

  const getMousePosition = (event) => {
    const {pageX, pageY} = event;
    const {left, top} = hoveredImageElem.getBoundingClientRect();
    const howFarFromLeft = calcValueBound(
      pageX - left - (window.scrollX || window.pageXOffset),
      0,
      hoveredImageElem.width,
    );
    const howFarFromTop = calcValueBound(
      pageY - top - (window.pageYOffset || window.scrollY),
      0,
      hoveredImageElem.height,
    );
    return {x: howFarFromLeft, y: howFarFromTop};
  };

  const moveLensTool = (event) => {
    const {x, y} = getMousePosition(event);

    const centerXOfLensTool = calcValueBound(
      x - lensTool.offsetWidth / 2,
      0,
      hoveredImageElem.width - lensTool.offsetWidth / 3,
    );
    const centerYOfLensTool = calcValueBound(
      y - lensTool.offsetHeight / 2,
      0,
      hoveredImageElem.height - lensTool.offsetHeight / 3,
    );

    lensTool.style.left = `${centerXOfLensTool}px`;
    lensTool.style.top = `${centerYOfLensTool}px`;
    lensTool.style.backgroundPosition = `-${x * ratio}px -${y * ratio}px`;
  };

  if (hoveredImageElem) {
    hoveredImageElem.addEventListener("mousemove", moveLensTool);
    hoveredImageElem.addEventListener("touchmove", moveLensTool);
    lensTool.addEventListener("mousemove", moveLensTool);
  }
};
