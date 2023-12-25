(() => {
  // TODO 패턴을 쓸거면 같이 쓰고 안쓸거면 안쓰는게 맞음
  const getElement = (selector) => document.querySelector(selector);

  const mobileSideBarMenu = getElement(".box__mSideBar");
  const mobileOverlay = getElement(".box__overlay");
  const buttonMobileMenu = getElement(".button__open-subMenu");
  const mobileMenuCloseBtn = getElement(".button__mSidebar-close");

  const showMobileMenu = () => {
    mobileSideBarMenu.classList.add("active");
    mobileOverlay.classList.add("active");
  };

  const hideMobileMenu = () => {
    mobileSideBarMenu.classList.remove("active");
    mobileOverlay.classList.remove("active");
  };

  buttonMobileMenu.addEventListener("click", showMobileMenu);
  mobileMenuCloseBtn.addEventListener("click", hideMobileMenu);
  mobileOverlay.addEventListener("click", hideMobileMenu);
})();
