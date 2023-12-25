import "../asset/style/component/footer.scss";
import "../asset/style/component/header.scss";
import "../asset/style/media/headerMedia.scss";
import "../asset/style/page/product.scss";

import "../../component/bannerSlider";
import "../../component/cart/toggle";
import "../../component/cart/update";
import "../../component/youTube";

import { addToCart } from "../../component/cart/update";
import { slider } from "../../component/slider/component";
import { getProduct } from "../../api/product/product";
import {
  rendererDetailItem,
  rendererInfoDescription,
  rendererInfoTDescription,
  rendererInfoSingleDescription,
  rendererTable,
} from "./renderer";

const description = document.querySelector(".box__info-description");
const itemTable = document.querySelector(".box__item-table");
const productArrange = document.querySelector(".box__item-arrange");
const cartButton = document.querySelector(".box__item-detail");

const init = async () => {
  const match = window.location.search.match(/\d+/);
  if (!match) {
    return;
  }

  const result = parseInt(match[0], 10);
  try {
    const item = await getProduct(result);
    const itemDetailDOM = rendererDetailItem(item);
    productArrange.innerHTML = itemDetailDOM;

    if (item.images.length > 3) {
      description.innerHTML = rendererInfoDescription(item);
    }
    if (item.images.length === 3) {
      description.innerHTML = rendererInfoTDescription(item);
    }
    if (item.images.length === 1) {
      description.innerHTML = rendererInfoSingleDescription(item);
    }

    itemTable.innerHTML = rendererTable(item);

    // TODO 이거 쓰이는 코드인지 확인필요
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
