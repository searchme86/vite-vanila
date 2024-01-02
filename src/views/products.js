import "../assets/style/components/header.scss";
import "../assets/style/components/footer.scss";
import "../assets/style/pages/products.scss";
import "../assets/style/media/headerMedia.scss";
import "../assets/style/media/productsMedia.scss";
import "../assets/style/media/footerMedia.scss";

import "../components/cart/toggleCart";
import "../components/cart/updateCart";
import "../components/bannerSlider";

import {productContainer} from "../utils/cartElemDom";
import {fetchProducts} from "../api/fetchProducts";
import {storeState, setStoreState} from "../store/store";
import {addItemsToContainer} from "../utils/render";
import renderSearchComponent from "../components/search";
import {renderCompanyComponent} from "../components/companies";

const initializeApp = async () => {
  if (storeState.length < 1) {
    const products = await fetchProducts();
    setStoreState(products);
  }
  addItemsToContainer(storeState, productContainer);
  renderSearchComponent(storeState);
  renderCompanyComponent(storeState);
};

initializeApp();
