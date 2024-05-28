<template>
  <section class="order-section section">
    <div class="container">
      <div class="order-section__title-box">
        <strong class="title">Check our sales for popular products</strong>
        <a href="" class="order-section__all-sales link">All sales</a>
      </div>
      <OrderList :listData="listData" />
    </div>
  </section>
</template>

<script>
import OrderList from '../../OrderList/index.vue';

export default {
  name: 'OrderSection',
  components: {
    OrderList,
  },

  data() {
    return {
      listData: [
        {
          id: 1,
          discount: '-30%',
          productName: 'Coffee Retail Packs',
          productWeight: '500 g',
          priceBeforeSale: '$ 14.99',
          priceCurrent: '$ 10.49',
        },
        {
          id: 2,
          discount: '-15%',
          productName: 'Brazil Blend Arabia',
          productWeight: '500 g',
          priceBeforeSale: '$ 13.99',
          priceCurrent: '$ 11.89',
        },
        {
          id: 3,
          discount: '-25%',
          productName: 'Unicorn Blood Dark',
          productWeight: '500 g',
          priceBeforeSale: '$ 16.50',
          priceCurrent: '$ 12.38',
        },
      ],
    };
  },
};
</script>

<style lang="scss" src="./index.scss" />
