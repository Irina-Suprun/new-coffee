import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productsToOrder: [
      {
        id: 1,
        total: 0,
      },
      {
        id: 2,
        total: 0,
      },
      {
        id: 3,
        total: 0,
      },
    ],
    products: [
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
  },
  getters: {
    getProductsToOrder:
      (state) => state.productsToOrder.reduce((total, product) => total + product.total, 0),
    getProducts: (state) => state.products,
  },
  mutations: {
    SET_PRODUCTS_TO_ORDER(state, product) {
      const index = state.productsToOrder.findIndex((item) => item.id === product.id);
      Vue.set(state.productsToOrder, index, product);
    },
  },
});
