/**
 * 상품상세 페이지(product.html)에서 tab 스크립트
 */

const tabMenuList = document.querySelectorAll(
  ".list__tab-menu .list-item__tab-menu",
);
const tabContentList = document.querySelectorAll(".list__tab-content li");

const resetTab = () => {
  tabMenuList.forEach((singleTabMenu, index) => {
    singleTabMenu.classList.remove("list-item__tab-box--active");
    singleTabMenu.setAttribute("aria-selected", "false");
    singleTabMenu.setAttribute("tabindex", "-1");

    const tabContent = tabContentList[index];
    singleTabMenu.setAttribute("aria-controls", tabContent.id);
    tabContent.setAttribute("aria-labelledby", singleTabMenu.id);
  });

  tabContentList.forEach((tabContent) => {
    tabContent.classList.remove("list-item__tab-box--active");
    tabContent.setAttribute("hidden", "true");
  });
};

const setActiveTab = (currentTabIndex) => {
  tabMenuList.forEach((singleTabMenu, tabMenuIndex) => {
    const isMenuMatched = tabMenuIndex === currentTabIndex;
    singleTabMenu.classList.toggle("list-item__tab-box--active", isMenuMatched);
    singleTabMenu.setAttribute(
      "aria-selected",
      isMenuMatched ? "true" : "false",
    );
    singleTabMenu.setAttribute("tabindex", isMenuMatched ? "0" : "-1");

    const currentTabContent = tabContentList[tabMenuIndex];
    singleTabMenu.setAttribute("aria-controls", currentTabContent.id);
    currentTabContent.setAttribute("aria-labelledby", singleTabMenu.id);
    currentTabContent.classList.toggle(
      "list-item__tab-box--active",
      isMenuMatched,
    );
    currentTabContent.setAttribute("hidden", !isMenuMatched);
  });
};

tabMenuList.forEach((singleTabMenu, index) => {
  singleTabMenu.addEventListener("click", (e) => {
    e.preventDefault();
    resetTab();
    setActiveTab(index);
  });
});
