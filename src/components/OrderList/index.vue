<template>
  <ul class="order-section__list list">
    <OrderItem v-for="item in ListProducts" :key="item.id" :product="item" @update-product="updateProduct" />
  </ul>
</template>

<script>
import { mapMutations } from 'vuex';
import OrderItem from './item.vue';

export default {
  name: 'OrderList',
  components: {
    OrderItem,
  },
  props: {
    ListProducts: {
      type: Array,
    },
  },
  methods: {
    ...mapMutations(['SET_PRODUCTS_TO_ORDER']),
    updateProduct(product) {
      this.SET_PRODUCTS_TO_ORDER(product);
    },
  },
};
</script>
