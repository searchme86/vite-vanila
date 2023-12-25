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

// TODO 이것도 왠만하면 상태가 아니라 값을 받는식이 좋긴함.
export const totalAmount = () => {
  const cartState = getStoreItem("cart");
  const totalCount = cartState.reduce(
    (countNum, cartItem) => countNum + cartItem.amount,
    0,
  );
  return totalCount;
}


// TODO 이것도 왠만하면 상태가 아니라 값을 받는식이 좋긴함.
const totalPrice = () => {
  const cartState = getStoreItem("cart");
  const totalPrice = cartState.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.amount,
    0,
  );
  return totalPrice;
}

export {
  findStoreItemById,
  getStoreItem,
  setStoreItem,
  setStoreState,
  storeState,
  totalAmount,
  totalPrice,
};
