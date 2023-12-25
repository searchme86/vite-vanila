const tabMenuList = document.querySelectorAll(
  ".list__tab-menu .list-item__tab-menu",
);
const tabContentList = document.querySelectorAll(".list__tab-content li");

// TODO 단순실수 줄이기 위해서 이런것도 좋은듯.
function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

const resetTab = () => {
  tabMenuList.forEach((singleTabMenu, index) => {
    singleTabMenu.classList.remove("list-item__tab-box--active");

    const tabContent = tabContentList[index];
    tabContent.setAttribute("aria-labelledby", singleTabMenu.id);

    setAttributes(singleTabMenu, {
      "aria-selected": "false",
      "tabindex": "-1",
      "aria-controls": tabContent.id,
    });
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
    setAttributes(singleTabMenu, {
      "aria-selected": isMenuMatched ? "true" : "false",
      "tabindex": isMenuMatched ? "0" : "-1",
      "aria-controls": currentTabContent.id,
    });

    const currentTabContent = tabContentList[tabMenuIndex];
    currentTabContent.classList.toggle(
      "list-item__tab-box--active",
      isMenuMatched,
    );
    setAttributes(currentTabContent, {
      "aria-labelledby": singleTabMenu.id,
      "hidden": !isMenuMatched,
    });
  });
};

tabMenuList.forEach((singleTabMenu, index) => {
  singleTabMenu.addEventListener("click", (e) => {
    e.preventDefault();
    resetTab();
    setActiveTab(index);
  });
});
