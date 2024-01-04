/**
 * 의존파일 : home.js
 * 컴포넌트 위치 : index.html
 * 기능 : 모바일 사이드바 스크립트
 */
(() => {
  const mobileSideBarMenu = document.querySelector(".box__mSideBar");
  const mobileOverlay = document.querySelector(".box__overlay");
  const buttonMobileMenu = document.querySelector(".button__open-subMenu");
  const mobileMenuCloseBtn = document.querySelector(".button__mSidebar-close");

  const showMobileMenu = () => {
    mobileSideBarMenu.classList.add("active");
    mobileOverlay.classList.add("active");
    mobileOverlay.removeAttribute("aria-modal", "false");
    mobileOverlay.removeAttribute("tabindex");
    mobileOverlay.setAttribute("aria-modal", "true");
    mobileOverlay.setAttribute("tabindex", "0");
  };

  const hideMobileMenu = () => {
    mobileSideBarMenu.classList.remove("active");
    mobileOverlay.classList.remove("active");
    mobileOverlay.removeAttribute("aria-modal", "true");
    mobileOverlay.removeAttribute("tabindex");
    mobileOverlay.setAttribute("aria-modal", "false");
    mobileOverlay.setAttribute("tabindex", "-1");
  };

  buttonMobileMenu.addEventListener("click", showMobileMenu);
  mobileMenuCloseBtn.addEventListener("click", hideMobileMenu);
  mobileOverlay.addEventListener("click", hideMobileMenu);
})();
