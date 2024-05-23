<template>
  <section class="order-section section">
    <div class="container">
      <div class="order-section__title-box">
        <strong class="title">Check our sales for popular products</strong>
        <a href="" class="order-section__all-sales link">All sales</a>
      </div>
      <OrderList :listData="listData"/>
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
          discount: '-30%',
          imageSrc: '../../../assets/product1.png',
          imageAlt: 'product photo',
          productName: 'Coffee Retail Packs',
          productWeight: '500 g',
          priceBeforeSale: '$ 14.99',
          priceCurrent: '$ 10.49',
        },
        {
          discount: '-15%',
          imageScr: '../../../assets/product2.png',
          imageAlt: 'product photo',
          productName: 'Brazil Blend Arabia',
          productWeight: '500 g',
          priceBeforeSale: '$ 13.99',
          priceCurrent: '$ 11.89',
        },
        {
          discount: '-25%',
          imageScr: '../../../assets/product3.png',
          imageAlt: 'product photo',
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
