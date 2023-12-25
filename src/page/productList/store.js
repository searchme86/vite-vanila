/**
 * 상품 페이지(products.html)에서
 * 사용되는 상품 아이템을 localStorage에 저장하는 스크립트
 * */

const getItemFromLocalStorage = (item) => {
  let result =
    localStorage.getItem(item) === "undefined"
      ? []
      : localStorage.getItem(item);
  const singleSavedItem = JSON.parse(result) || [];
  if (typeof singleSavedItem === "undefined") return;
  return singleSavedItem;
};

const saveItemToLocalStorage = (name, item) => {
  if (typeof item === "undefined") return;
  localStorage.setItem(name, JSON.stringify(item));
};

let storeState = getItemFromLocalStorage("store");

const mapBindProdctField = (product) => {
  const {
    id,
    title,
    price,
    category,
    thumbnail,
    description,
    discountPercentage,
    rating,
    stock,
    brand,
  } = product;

  return {
    id,
    title,
    price,
    category,
    thumbnail,
    description,
    discountPercentage,
    rating,
    stock,
    brand,
  };
};

const setStoreState = (products) => {
  saveItemToLocalStorage("store", products.map(mapBindProdctField));
};

const searchObjInfoByKey = (id) => {
  const numberTypeId = Number(id);
  const result = storeState.find((product) => {
    return product.id === numberTypeId;
  });
  return result;
};

export {
  getItemFromLocalStorage,
  saveItemToLocalStorage,
  storeState,
  setStoreState,
  searchObjInfoByKey,
};
