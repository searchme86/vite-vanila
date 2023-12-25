import "../asset/style/component/footer.scss";
import "../asset/style/component/header.scss";
import "../asset/style/media/headerMedia.scss";
import "../asset/style/pages/products.scss";

import "../component/bannerSlider";
import "../component/cart/toggle";
import "../component/cart/update";

import { fetchProducts } from "../api/fetchProducts";
import { storeState, setStoreState } from "../store/store";
import { addItemsToContainer } from "../util/render";
import renderSearchComponent from "../component/search";
import { renderCompanyComponent } from "../component/companies";

const initializeApp = async () => {
  const productContainer = document.querySelector(".list__card-products");

  if (storeState.length < 1) {
    const products = await fetchProducts();
    setStoreState(products);
  }
  addItemsToContainer(storeState, productContainer);
  renderSearchComponent(storeState);
  renderCompanyComponent(storeState);
};

initializeApp();
