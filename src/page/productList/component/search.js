/**
 * 상품 페이지(products.html)에서,
 * 상품 검색 스크립트
 */

import {nameInput} from "../util/cartElemDom.js";
import {addItemsToContainer} from "../util/render.js";

const inputFormElem = document.querySelector(".box__search-item");
const nameInput = document.querySelector(".search-input");

export const renderSearchComponent = (store) => {
  const filterProductsByName = (value) =>
    store.filter((product) => product.title.toLowerCase().startsWith(value));

  const displayFilterError = (container) => {
    container.innerHTML = `<strong class="filter-error">검색결과가 존재하지 않습니다.</strong>`;
  };

  const displayFilteredProducts = (newStore) => {
    const productContainer = document.querySelector(".list__card-products");

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
