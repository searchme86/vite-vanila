(() => {
  const getElement = (selector) => document.querySelector(selector);

  const searchButton = getElement(".button__search");
  const closeButton = getElement(".button__close");
  const searchBox = getElement(".box__search-box");
  const searchBoxInput = getElement(".box__search-box input");
  const mainSliderElement = getElement(".box__main-item");
  const headerTopElement = getElement(".box__header-top");
  const headerBottomElement = getElement(".box__header-bottom");

  const updateSearchBoxSize = () => {
    searchBox.style.width = mainSliderElement.clientWidth + "px";
    searchBox.style.height = headerTopElement.clientHeight + "px";
    searchBoxInput.style.height = headerTopElement.clientHeight + "px";
  };

  const activateSearchBox = () => {
    searchBox.classList.add("active");
    closeButton.classList.add("active");
    searchButton.classList.add("active");
  };

  const deactivateSearchBox = () => {
    searchBox.classList.remove("active");
    closeButton.classList.remove("active");
    searchButton.classList.remove("active");
  };

  const resizeHandler = () => {
    updateSearchBoxSize();
  };

  headerBottomElement.style.height = headerTopElement.clientHeight + "px";

  searchButton.onclick = () => {
    updateSearchBoxSize();
    activateSearchBox();
  };

  closeButton.onclick = deactivateSearchBox;

  window.addEventListener("resize", resizeHandler);
})();
