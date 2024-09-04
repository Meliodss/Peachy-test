import Swiper, { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const debounce = (func, delay) => {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
};

const FeaturedProducts = {
  onLoad() {
    this._init();
    this._debouncedCheckScreenWidth = debounce(this._checkScreenWidth.bind(this), 200);
    window.addEventListener("resize", this._debouncedCheckScreenWidth);
  },

  _init() {
    this.sliderWrapper = this.container.querySelector(".swiper");
    if (!this.sliderWrapper) return;

    this._checkScreenWidth();
  },

  _checkScreenWidth() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 767 && !this.slider) {
      this._initSlider();
    } else if (screenWidth > 767 && this.slider) {
      this._destroySlider();
    }
  },

  _initSlider() {
    this.slider = new Swiper(this.sliderWrapper, {
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      modules: [Pagination],
    });
  },

  _destroySlider() {
    if (this.slider) {
      this.slider.destroy(true, true);
      this.slider = null;
    }
  },
};

export default FeaturedProducts;