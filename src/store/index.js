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
  },
  getters: {
    totalCountOfProducts:
      (state) => state.productsToOrder.reduce((total, product) => total + product.total, 0),
  },
  mutations: {
    SET_PRODUCTS_TO_ORDER(state, product) {
      const index = state.productsToOrder.findIndex((item) => item.id === product.id);
      Vue.set(state.productsToOrder, index, product);
    },
  },
});
