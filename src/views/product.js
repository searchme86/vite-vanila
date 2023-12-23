import "../assets/style/components/header.scss";
import "../assets/style/components/footer.scss";
import "../assets/style/pages/product.scss";
import "../assets/style/media/headerMedia.scss";

import "../components/cart/toggleCart";
import "../components/cart/updateCart";
import "../components/bannerSlider";
import "../components/youTube";

import {addToCart} from "../components/cart/updateCart";
import {slider} from "../components/slider/sliderComponent";
import {fetchSingleProducts} from "../api/fetchProducts";
import {
  createDetailItem,
  createInfoDescription,
  createInfoTDescription,
  createInfoSingleDescription,
  createTable,
} from "../utils/itemTemplate";

const init = async () => {
  const match = window.location.search.match(/\d+/);
  if (!match) {
    return;
  }

  const result = parseInt(match[0], 10);

  try {
    const some = document.querySelector(".box__info-description");
    const itemTable = document.querySelector(".box__item-table");

    const item = await fetchSingleProducts(result);

    const itemDetailDOM = createDetailItem(item);
    document.querySelector(".box__item-arrange").innerHTML = itemDetailDOM;

    const imageList = item.images;

    if (imageList.length > 3) {
      some.innerHTML = createInfoDescription(item);
    }
    if (imageList.length === 3) {
      some.innerHTML = createInfoTDescription(item);
    }

    if (imageList.length === 1) {
      some.innerHTML = createInfoSingleDescription(item);
    }

    itemTable.innerHTML = createTable(item);

    const cartButton = document.querySelector(".box__item-detail");

    cartButton.querySelector(".button__add-item");
    cartButton.addEventListener("click", function (e) {
      const dataId = e.target.dataset.id;
      if (dataId) {
        addToCart(dataId);
      }
    });
  } catch (error) {
    console.error(error);
  }
};

window.addEventListener("DOMContentLoaded", () => {
  init();
  slider();
});
