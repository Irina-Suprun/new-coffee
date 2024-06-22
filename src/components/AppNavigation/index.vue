<template>
  <nav class="app-navigation">
    <ul class="app-navigation__list list">
      <li class="app-navigation__item">
        <router-link to="/" class="link"
          >Catalogue</router-link
        >
      </li>
      <li class="app-navigation__item">
        <router-link to="/delivery" class="link">Delivery</router-link>
      </li>
      <li class="app-navigation__item">
        <router-link to="/gift" class="link">Gift cards</router-link>
      </li>
      <li class="app-navigation__item">
        <router-link to="/about" class="link">About us</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppNavigation',
};
</script>

<style lang="scss" src="./index.scss">
</style>
