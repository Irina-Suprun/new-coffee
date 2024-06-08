<template>
  <section class="order-section section">
    <div class="container">
      <div class="order-section__title-box">
        <strong class="title">Check our sales for popular products</strong>
        <a href="" class="order-section__all-sales link">All sales</a>
      </div>
      <OrderList :listData="getProducts" />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import OrderList from '../../OrderList/index.vue';

export default {
  name: 'OrderSection',
  components: {
    OrderList,
  },
  computed: {
    ...mapGetters(['getProducts']),
  },
};
</script>

<style lang="scss" src="./index.scss" />
