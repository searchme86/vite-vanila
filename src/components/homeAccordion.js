/**
 * 의존파일 : home.js
 * 컴포넌트 위치 : index.html
 * 기능 : 아코디언 스크립트
 */

(() => {
  const getButtonsAndMenus = () => {
    const buttons = document.querySelectorAll("[data-button-accordion]");
    const menus = document.querySelectorAll("[data-menu-accordion]");
    return {buttons, menus};
  };

  const resetButtonsAndMenus = (buttons, menus) => {
    buttons.forEach((button) => {
      button.removeAttribute("aria-selected", "true");
      button.setAttribute("aria-selected", "false");
      button.classList.remove("active");
    });
    menus.forEach((menu) => {
      menu.removeAttribute("aria-expanded", "true");
      menu.setAttribute("aria-expanded", "false");
      menu.classList.remove("active");
    });
  };

  const buttonClickHandler = function () {
    const isClicked = this.nextElementSibling.classList.contains("active");
    const {buttons, menus} = getButtonsAndMenus();

    resetButtonsAndMenus(buttons, menus);

    if (!isClicked) {
      this.nextElementSibling.classList.add("active");
      this.nextElementSibling.setAttribute("aria-expanded", "true");
      this.classList.add("active");
      this.setAttribute("aria-selected", "true");
    }
  };

  const addEventListenersToButtons = () => {
    const {buttons} = getButtonsAndMenus();
    buttons.forEach((button) =>
      button.addEventListener("click", buttonClickHandler),
    );
  };

  const initializeAccordion = () => {
    const {buttons, menus} = getButtonsAndMenus();
    resetButtonsAndMenus(buttons, menus);
    addEventListenersToButtons();
  };

  initializeAccordion();
})();
