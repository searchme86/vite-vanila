/**
 * 상세상품 페이지(product.html)에서 상품 미리보기 할 수 있는,
 * 상품 슬라이드
 */

import {
  parentElem,
  rightSlider,
  sliderImageList,
  previousSlideButton,
  nextSlideButton,
  textCurrentSlideNumber,
  textTotalSlideNumber,
} from "./sliderData";

import {fetchSingleProducts} from "../../api/fetchProducts";
import {createImageElement, createMainImageElement} from "./sliderData";
import {zoomInElem} from "../zoomIn";

export const slider = async () => {
  const match = window.location.search.match(/\d+/);

  if (!match) {
    return;
  }
  const searchParam = parseInt(match[0], 10);

  const {images, title} = await fetchSingleProducts(searchParam);

  const state = {
    currentSlideIndex: 0,
    slidesTotalNumber: 0,
    lastSlideIndex: 0,
  };

  const createImageObj = images.map((item) => {
    return {
      src: item,
      alt: title,
    };
  });

  const renderImageElem = (imageArray) => {
    return imageArray.map(createImageElement);
  };
  const renderMainImageElem = (imageArray) => {
    return imageArray.map(createMainImageElement);
  };

  const leftImageArray = renderImageElem(createImageObj);
  const topImageArray = renderMainImageElem(createImageObj);

  const createSlideMain = () => {
    const sliderTopSection = document.querySelector(".list__preview-image");
    const childrenLength = parseInt(sliderTopSection.children.length);
    sliderTopSection.append(...topImageArray);
    textTotalSlideNumber.textContent = childrenLength;
  };

  const calcSliderValue = () => {
    const {currentSlideIndex} = state;
    const sliderImageWidth = document.querySelector(
      ".list__preview-image li",
    ).offsetWidth;
    let currentSlideStartPosition = currentSlideIndex * sliderImageWidth;
    sliderImageList.style.transform = `translateX(-${currentSlideStartPosition}px)`;
    textCurrentSlideNumber.textContent = state.currentSlideIndex + 1;
  };

  const calcCurrentIndex = (direction) => {
    const {currentSlideIndex, lastSlideIndex} = state;
    if (direction === "next") {
      return currentSlideIndex >= lastSlideIndex ? 0 : currentSlideIndex + 1;
    } else if (direction === "previous") {
      return currentSlideIndex <= 0 ? lastSlideIndex : currentSlideIndex - 1;
    }
    return currentSlideIndex;
  };

  const moveSlideTo = (direction) => {
    state.currentSlideIndex = calcCurrentIndex(direction);
    calcSliderValue();
  };

  const buttonNextSlide = () => moveSlideTo("next");
  const buttonPreviousSlide = () => moveSlideTo("previous");

  const handleSliderItemIndex = (i) => () => {
    state.currentSlideIndex = i;

    const leftSliderItem = document.querySelectorAll(
      ".box__left-slider .list-item__dot",
    );
    leftSliderItem.forEach((item) => item.classList.remove("active"));
    leftSliderItem[i].classList.add("active");
    calcSliderValue();
  };

  const addClickEventTo = (singleLeftImageElem, i) => {
    singleLeftImageElem.addEventListener("click", handleSliderItemIndex(i));
    return singleLeftImageElem;
  };

  const createLeftSlide = () => {
    const slidebottomUlList = document.createElement("ul");
    slidebottomUlList.classList.add("list__dot");

    const leftSlideArray = leftImageArray;
    leftSlideArray.forEach((item, i) => {
      const singleLiItem = addClickEventTo(item, i);
      slidebottomUlList.appendChild(singleLiItem);
    });

    return slidebottomUlList;
  };

  const generateLeftSlider = (slider) => {
    const sliderLeftContainer = document.createElement("div");
    sliderLeftContainer.classList.add("box__left-slider");
    sliderLeftContainer.appendChild(createLeftSlide());

    parentElem.insertBefore(sliderLeftContainer, slider);
  };

  const handleClickButton = () => {
    nextSlideButton.addEventListener("click", buttonNextSlide);
    previousSlideButton.addEventListener("click", buttonPreviousSlide);
    zoomInElem(".list__preview-image .zoom");
  };

  const initializeState = () => {
    if (!parentElem) {
      throw new Error(
        "slider의 컨테이너,box__preview DOM이 존재하지 않습니다. ",
      );
    }

    const slideBottomContainer = document.querySelector(".box__left-slider");

    if (!slideBottomContainer) {
      generateLeftSlider(rightSlider);
    }
    createSlideMain();
    state.slidesTotalNumber = document.querySelectorAll(
      ".list__preview-image li",
    ).length;
    state.lastSlideIndex = state.slidesTotalNumber - 1;
    textTotalSlideNumber.textContent = state.slidesTotalNumber;
  };

  const createSlider = () => {
    initializeState();
    handleClickButton();
    calcSliderValue();
  };

  createSlider();
};
