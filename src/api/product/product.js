/**
 * 페이지, 상품 페이지 및 단일 상품의 아이템 정보를 fetch 하는 스크립트
 */


// TODO: env 에 추가 필요
const DEFAULT_PATH = 'https://dummyjson.com/';

// TODO: 단일 get, list get의 naming은 어떻게 하는지 숙지 필요.
export const api = {
    product: {
        list: `${DEFAULT_PATH}/products`,
        one: `${DEFAULT_PATH}/products`,
    }
}

export const fetchProducts = async () => {
  try {
    const response = await fetch(FetchProductsApi);
    const {products} = await response.json();

    return products;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

export const fetchSingleProducts = async (value) => {
  const fetchSingle = `https://dummyjson.com/products/${value}`;

  try {
    const response = await fetch(fetchSingle);
    const res = await response.json();

    return res;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};
