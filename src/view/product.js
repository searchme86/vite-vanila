import "../asset/style/component/footer.scss";
import "../asset/style/component/header.scss";
import "../asset/style/media/headerMedia.scss";
import "../asset/style/pages/product.scss";

import "../component/bannerSlider";
import "../component/cart/toggleCart";
import "../component/cart/updateCart";
import "../component/youTube";

import { addToCart } from "../component/cart/updateCart";
import { slider } from "../component/slider/sliderComponent";
import { fetchSingleProducts } from "../api/fetchProducts";
import {
  rendererDetailItem,
  rendererInfoDescription,
  rendererInfoTDescription,
  rendererInfoSingleDescription,
  rendererTable,
} from "../util/itemTemplate";

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

    const itemDetailDOM = rendererDetailItem(item);
    document.querySelector(".box__item-arrange").innerHTML = itemDetailDOM;

    const imageList = item.images;

    if (imageList.length > 3) {
      some.innerHTML = rendererInfoDescription(item);
    }
    if (imageList.length === 3) {
      some.innerHTML = rendererInfoTDescription(item);
    }

    if (imageList.length === 1) {
      some.innerHTML = rendererInfoSingleDescription(item);
    }

    itemTable.innerHTML = rendererTable(item);

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
