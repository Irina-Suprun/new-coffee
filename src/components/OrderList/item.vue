<template>
  <li class="order-section__item">
    <div class="order-section__discount">
      <span> {{ product.discount }} </span>
    </div>
    <img src="../../assets/product1.png" alt="product photo" class="order-section__image" />
    <div>
      <strong class="order-section__title-product"> {{ product.productName }} </strong>
      <p>{{ product.productWeight }}</p>
      <ul class="order-section__price list">
        <li class="order-section__price-sale">{{ product.priceBeforeSale }}</li>
        <li>{{ product.priceCurrent }}</li>
      </ul>
      <div class="order-section__counter">
        <button @click="increaseClickHandler" class="order-section__counter-active">+</button>
        <span class="order-section__counter-number"> {{ counter }} </span>
        <button @click="decreaseClickHandler" class="order-section__counter-active">-</button>
      </div>
      <button @click="addProductToOrder" class="order-section__btn-add button">Add to card</button>
    </div>
  </li>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'OrderItem',
  props: {
    product: {
      type: Object,
    },
  },
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    ...mapMutations(['SET_PRODUCTS_TO_ORDER']),
    increaseClickHandler() {
      this.counter += 1;
    },
    decreaseClickHandler() {
      if (this.counter > 0) {
        this.counter -= 1;
      }
    },
    addProductToOrder() {
      this.$emit('update-product', {
        id: this.product.id,
        total: this.counter,
      });
      this.counter = 0;
    },
  },
};
</script>
