<template>
  <ul class="order-section__list list">
    <OrderListItem v-for="(item, index) in listData" :key="index" :itemData="item" />
  </ul>
</template>

<script>
import OrderListItem from './item.vue';

export default {
  name: 'OrderList',
  components: {
    OrderListItem,
  },
  props: {
    listData: {
      type: Array,
      required: true,
    },
  },
};
</script>
