<template>
  <li class="order-section__item">
    <div class="order-section__discount">
      <span>{{ itemData.discount }}</span>
    </div>
    <img src="../../assets/product1.png" alt="product photo" class="order-section__image" />
    <div>
      <strong class="order-section__title-product">{{ itemData.productName }}</strong>
      <p>{{ itemData.productWeight }}</p>
      <ul class="order-section__price list">
        <li class="order-section__price-sale">{{ itemData.priceBeforeSale }}</li>
        <li>{{ itemData.priceCurrent }}</li>
      </ul>
      <div class="order-section__counter">
        <button @click="increaseClickHandler" class="order-section__counter-active">+</button>
        <span class="order-section__counter-number">{{ counter }}</span>
        <button @click="decreaseClickHandler" class="order-section__counter-active">-</button>
      </div>
      <button @click="handlerAndClick" class="order-section__btn-add button">Add to card</button>
    </div>
  </li>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'OrderListItem',
  props: {
    itemData: {
      type: Object,
      required: true,
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
    handlerAndClick() {
      this.SET_PRODUCTS_TO_ORDER({
        id: this.itemData.id,
        total: this.counter,
      });
    },
  },
};
</script>
