<template>
  <header class="app-header container">
    <div class="app-header__logo">
      <strong>
        <a href="" class="app-header__logo link">
          <img src="../../assets/logo.svg" alt="picture-logo" class="app-header__icon">
        </a>
      </strong>
    </div>
    <AppNavigation />
    <div class="app-header__login">
      <button class="app-header__login-btn button">Sign in</button>
    </div>
    <div class="app-header__actions">
      <button class="app-header__button-action button">
        <img src="../../assets/search1.svg" alt="search_icon">
      </button>
      <button class="app-header__button-action button">
        <img src="../../assets/basket.svg" alt="basket_icon">
      </button>
    </div>
  </header>
</template>

<script>
import AppNavigation from '../AppNavigation/index.vue';

export default {
  name: 'AppHeader',
  components: {
    AppNavigation,
  },
};
</script>

<style lang="scss" src="./index.scss" />
