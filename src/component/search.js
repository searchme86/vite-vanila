/**
 * 상품 페이지(products.html)에서,
 * 상품 검색 스크립트
 */

import {inputFormElem, nameInput} from "../utils/cartElemDom.js";
import {addItemsToContainer} from "../utils/render.js";
import {productContainer} from "../utils/cartElemDom.js";

const renderSearchComponent = (store) => {
  const filterProductsByName = (value) =>
    store.filter((product) => product.title.toLowerCase().startsWith(value));

  const displayFilterError = (container) => {
    container.innerHTML = `<strong class="filter-error">검색결과가 존재하지 않습니다.</strong>`;
  };

  const displayFilteredProducts = (newStore) => {
    if (newStore.length < 1) {
      displayFilterError(productContainer);
    } else {
      addItemsToContainer(newStore, productContainer);
    }
  };

  inputFormElem.addEventListener("keyup", () => {
    const value = nameInput.value.toLowerCase();
    const newStore = value ? filterProductsByName(value) : store;
    displayFilteredProducts(newStore);
  });
};

export default renderSearchComponent;
