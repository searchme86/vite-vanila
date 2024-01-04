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
    on: {
      slideChange: (swiper) => {
        const setA11yAttributes = (slide, isVisible) => {
          const ariaHiddenValue = isVisible ? "false" : "true";
          const tabIndexValue = isVisible ? "0" : "-1";

          slide.setAttribute("aria-hidden", ariaHiddenValue);
          slide.setAttribute("tabindex", tabIndexValue);
        };

        const updateA11yAttributes = (swiper) => {
          const {slides, realIndex} = swiper;

          slides.forEach((slide, index) => {
            const isVisible = index === realIndex;
            setA11yAttributes(slide, isVisible);
          });
        };

        updateA11yAttributes(swiper);
      },
    },

    a11y: {
      enabled: true,
      containerMessage: "카트 등록상품 미리보기 슬라이더",
      containerRoleDescriptionMessage: "carousel",
      slideRole: "group",

      prevSlideMessage: "이전 슬라이드",
      nextSlideMessage: "다음 슬라이드",
      slideLabelMessage:
        "현재 {{index}}번째 슬라이드 / 총 {{slidesLength}}개의 슬라이드",
      firstSlideMessage: "첫번째 슬라이드 입니다",
      lastSlideMessage: "마지막 슬라이드 입니다.",
    },

    allowTouchMove: true,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    slidesPerView: 3,
    spaceBetween: 15,

    breakpoints: {
      360: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      760: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      861: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    },
  });

  return imageSwiper;
};
