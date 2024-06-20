<template>
  <header class="app-header">
    <div class="app-header__box container">
      <strong>
        <a href="" class="app-header__logo link">
          <img src="../../assets/logo.svg" alt="picture-logo" class="app-header__icon" />
        </a>
      </strong>
      <div class="app-header__position-box">
        <div v-show="isBurgerActive || shouldActivateMenu" class="app-header__burger-box">
          <AppNavigation />
          <div class="app-header__login">
            <button class="app-header__login-btn button">Sign in</button>
          </div>
        </div>
        <div class="app-header__actions">
          <button class="app-header__button-action button">
            <img src="../../assets/search1.svg" alt="search_icon" />
          </button>
          <button class="app-header__button-action button">
            <img src="../../assets/basket.svg" alt="basket_icon" />
            <span class="app-header__total-count"> {{ getTotalOrder }} </span>
          </button>
          <button @click="activateBurger" class="app-header__burger">
            <img src="../../assets/burger1.svg" alt="burger-menu" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AppNavigation from '../AppNavigation/index.vue';

export default {
  name: 'AppHeader',
  components: {
    AppNavigation,
  },
  data() {
    return {
      windowWidth: 0,
    };
  },
  computed: {
    ...mapGetters(['isBurgerActive']),
    ...mapGetters(['getTotalOrder']),
    shouldActivateMenu() {
      return this.windowWidth > 1024;
    },
  },
  methods: {
    ...mapActions(['setBurgerActive']),
    activateBurger() {
      this.setBurgerActive();
    },
    updateWindowSize() {
      this.windowWidth = window.innerWidth;
    },
  },
  mounted() {
    window.addEventListener('resize', this.updateWindowSize);
  },
};
</script>

<style lang="scss" src="./index.scss" />
