/**
 * 상품 페이지(products.html)에서,
 * 카테고리 별로 생성 된 메뉴를 만드는 스크립트
 * 해당 텍스트 클릭 시, 해당 메뉴 필터링
 */

import {addItemsToContainer} from "../utils/render.js";
import {companiesDOM, productContainer} from "../utils/cartElemDom.js";

const filterStoreByCompany = (category, store) => {
  return category === "all"
    ? [...store]
    : store.filter((product) => product.category === category);
};

const getAllUniqueCompanies = (store) => {
  return ["all", ...new Set(store.map((product) => product.category))];
};

const renderCompanyButtons = (categories) => {
  const createCompanyList = (category) => {
    return /*html*/ `
      <li role="presentation" class="list-item__company">
        <button type="button" class="button__item-company">${category}</button>
      </li>
    `;
  };
  companiesDOM.innerHTML = categories.map(createCompanyList).join("");
};

const handleCompanyButtonClick = (event, store) => {
  const element = event.target;

  const items = document.querySelectorAll(".list-item__company");

  items.forEach((item) => {
    item.classList.remove("active");
  });

  element.parentElement.classList.add("active");

  if (element.classList.contains("button__item-company")) {
    addItemsToContainer(
      filterStoreByCompany(element.textContent, store),
      productContainer,
    );
  }
};

const addCompanyButtonClickHandler = (store) => {
  companiesDOM.addEventListener("click", (e) =>
    handleCompanyButtonClick(e, store),
  );
};

export const renderCompanyComponent = (store) => {
  const companies = getAllUniqueCompanies(store);
  renderCompanyButtons(companies);
  addCompanyButtonClickHandler(store);
};
