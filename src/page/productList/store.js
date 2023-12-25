const getStoreItem = (item) => {
  let result = [];

  if(localStorage.getItem(item) !== "undefined") {
    result = localStorage.getItem(item);
  }

  const singleSavedItem = JSON.parse(result) || [];
  if (typeof singleSavedItem === "undefined"){
    return;
  }

  return singleSavedItem;
};

const setStoreItem = (name, item) => {
  if (typeof item !== "undefined") {
    localStorage.setItem(name, JSON.stringify(item));
  }
};

// TODO 이거 전혀 순수상태가 아님. let 으로 하면 다른 함수 호출될때 변질될 가능성 높음
let storeState = getStoreItem("store");

const setStoreState = (products) => {
  setStoreItem("store", products.map(product => ({
    brand: product.brand,
    category: product.category,
    description: product.description,
    discountPercentage: product.discountPercentage,
    id: product.id,
    price: product.price,
    rating: product.rating,
    stock: product.stock,
    thumbnail: product.thumbnail,
    title: product.title,
  })));
};

const findStoreItemById = (id) => {
  return storeState.find((product) => product.id === Number(id));
};

export {
  findStoreItemById,
  getStoreItem,
  setStoreItem,
  setStoreState,
  storeState,
};
