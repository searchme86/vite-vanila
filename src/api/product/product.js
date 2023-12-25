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

// TODO: 로직별로 handling을 하는게 아니라면 굳이 따로 만들필요가 없음.
// TODO: 단 혹시 모르니 분리를 하는것이 필요. 비지니스 로직이 필요할수있기 때문.

export const getProducts = async () => {
  try {
    const response = await fetch(api.product);
    // TODO lint setting 필요. 대부분 {}을 띄우는게 일반적임.
    const { products } = await response.json();
    return products;
  } catch (error) {
    // TODO js에서 일반적으로 throw를 어떤식으로 provider 관리하는지 적용필요.
    console.error(error.message);
    return null;
  }
};

export const getProduct = async (value) => {
  const path = `${api.product.one}/${value}`;

  try {
    const response = await fetch(path);
    const res = await response.json();
    return res;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};
