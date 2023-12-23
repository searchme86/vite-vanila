/**
 * 상품 페이지(products.html)에서
 * 모달에 사용되는 swiper 슬라이드 스크립트
 * */

import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

let imageSwiper;

export const destroySwiper = () => {
  if (imageSwiper) {
    imageSwiper.destroy();
  }
};

export const renderSwiper = () => {
  destroySwiper();

  imageSwiper = new Swiper(".swiper", {
    a11y: {
      prevSlideMessage: "이전 슬라이드",
      nextSlideMessage: "다음 슬라이드",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    slidesPerView: 3,
    spaceBetween: 15,
  });

  return imageSwiper;
};
