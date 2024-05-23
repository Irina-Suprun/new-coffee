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
              <button
              @click='increaseClickHandlerAdd' class="order-section__counter-active">+</button>
              <span class="order-section__counter-number">{{ counter }}</span>
              <button
              @click='increaseClickHandlerReduce' class="order-section__counter-active">-</button>
            </div>
            <button class="order-section__btn-add button">Add to card</button>
        </div>
    </li>
</template>

<script>
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
    increaseClickHandlerAdd() {
      this.counter += 1;
    },
    increaseClickHandlerReduce() {
      if (this.counter > 0) {
        this.counter -= 1;
      }
    },
  },
};
</script>
