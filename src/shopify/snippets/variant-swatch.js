class VariantSwatch extends HTMLElement {
  constructor() {
    super();
    this._init();
  }

  _init() {
    this.selectElement = this.querySelector(".custom-select__wrapper");
    this.priceElement = this.querySelector(".product-card__price");

    if (this.selectElement) {
      this.selectElement.addEventListener("change", this._onVariantChange.bind(this));
    }
  }

  _onVariantChange(event) {
    const selectedOption = event.target.selectedOptions[0];
    const newPrice = selectedOption.dataset.price;

    if (this.priceElement) {
      this.priceElement.textContent = newPrice;
    }
  }
}

customElements.define("variant-swatch", VariantSwatch);