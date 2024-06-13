<template>
  <section class="order-section section">
    <div class="container">
      <div class="order-section__title-box">
        <strong class="title">Check our sales for popular products</strong>
        <a href="" class="order-section__all-sales link">All sales</a>
      </div>
      <OrderList :ListProducts="getProducts" />
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import OrderList from '../../OrderList/index.vue';

export default {
  name: 'OrderSection',
  components: {
    OrderList,
  },
  computed: {
    ...mapGetters(['getProducts']),
  },
  methods: {
    ...mapActions(['fetchProducts']),
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

<style lang="scss" src="./index.scss" />
