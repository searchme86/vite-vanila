/**
 * 페이지, 상품 페이지 및 단일 상품의 아이템 정보를 fetch 하는 스크립트
 */

const FetchProductsApi = "https://dummyjson.com/products";

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
