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
        <li class="order-section__price-sale">{{ product.priceBeforeSale | formatPrice }}</li>
        <li>{{ product.priceCurrent | formatPrice }}</li>
      </ul>
      <div class="order-section__counter">
        <button @click="increaseClickHandler" v-if="canAddProductToOrder"
          class="order-section__counter-active">+</button>
        <button class="disabled order-section__counter-active" v-else>+</button>
        <span class="order-section__counter-number"> {{ counter }} </span>
        <button @click="decreaseClickHandler" class="order-section__counter-active">-</button>
      </div>
      <div>
        <transition name="bounce" mode="out-in">
          <span v-if="product.availableInventory - counter === 0" key="0" class="order-section__counter-number">All Out!
          </span>
          <span v-else-if="product.availableInventory - counter < 5" key="1" class="order-section__counter-number">
            Only {{ product.availableInventory - counter }} left!
          </span>
          <span v-else key="0" class="order-section__counter-number">Buy Now!
          </span>
        </transition>
      </div>

      <button @click="addProductToOrder" class="order-section__btn-add button">Add to cart</button>
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
  filters: {
    formatPrice(price) {
      if (!parseInt(price, 10)) { return ''; }
      return `$  ${price}`;
    },
  },
  computed: {
    canAddProductToOrder() {
      return this.counter < this.product.availableInventory;
    },
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
<style scoped>
.bounce-enter-active {
  animation: shake 0.72s cubic-bezier(.37, .07, .19, .97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}

@keyframes shake {

  10%,
  90% {
    color: red;
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    color: red;
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
