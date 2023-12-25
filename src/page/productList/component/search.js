import { nameInput } from "../util/cartElemDom.js";
import { addItemsToContainer } from "../../../common/renderer.js";

const productContainer = document.querySelector(".list__card-products");
const inputFormElem = document.querySelector(".box__search-item");
const nameInput = document.querySelector(".search-input");

// TODO entity 미스매치임. name이라고 하는데, product title이면 말이 안됨. title 이면 title, name이면 name.
const filterProductsByName = (store, name) => store
  .filter((product) => product.title.toLowerCase().startsWith(name));

// TODO 지금 방식이 잘못될수있음. store의 변경될수있는 값을 상위에서 받고 있기 때문에 변질의 가능성이 있음.
// TODO 만약 store를 따로 관리하는거면 js에서 직접 만들어 보는 store best practice를 찾아보기 바람.
export const renderSearchComponent = (store) => {
  inputFormElem.addEventListener("keyup", () => {
    const productName = nameInput.value.toLowerCase();
    const products = productName ? filterProductsByName(productName) : store;

    if (products.length < 1) {
      container.innerHTML = `<strong class="filter-error">검색결과가 존재하지 않습니다.</strong>`;
    } else {
      addItemsToContainer(products, productContainer);
    }
  });
};
