import Vue from 'vue';
import Vuex from 'vuex';
import Data from '../data.json';
import HeroData from '../heroData.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isBurgerActive: false,
    heroData: {},
    products: [],
    productsToOrder: [],
  },
  getters: {
    isBurgerActive: (state) => state.isBurgerActive,
    getHeroData: (state) => state.heroData,
    getProducts: (state) => state.products,
    getTotalOrder: (state) => state.productsToOrder.reduce((total, current) => total + current.total, 0),
  },
  mutations: {
    SET_BURGER_ACTIVE(state) {
      state.isBurgerActive = !state.isBurgerActive;
    },
    SET_HERO_DATA(state, heroData) {
      state.heroData = heroData;
    },
    SET_PRODUCTS(state, data) {
      state.products = data;
      state.productsToOrder = data.map((item) => ({
        id: item.id,
        total: 0,
      }));
    },
    SET_PRODUCTS_TO_ORDER(state, product) {
      const index = state.productsToOrder.findIndex((item) => item.id === product.id);
      state.productsToOrder[index].total += product.total;
    },
  },
  actions: {
    setBurgerActive({ commit }) {
      commit('SET_BURGER_ACTIVE');
    },
    fetchHeroData({ commit }) {
      commit('SET_HERO_DATA', HeroData);
    },
    fetchProducts({ commit }) {
      commit('SET_PRODUCTS', Data);
    },
  },
});
