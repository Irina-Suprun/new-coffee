<template>
  <footer class="app-footer">
    <div class="app-footer__content container">
      <div class="app-footer__logo-box">
        <strong>
          <a href="" class="link">
          <img src="../../assets/footer-logo.svg" alt="picture-logo" class="app-footer__icon">
          </a>
        </strong>
        <a href="" class="app-footer__after-logo link">Coffee shop</a>
      </div>
      <div class="app-footer__nav">
        <ul class="app-footer__nav-list">
          <li class="app-footer__item list">
            <router-link to="/" class="app-footer__link link">Catalogue</router-link>
          </li>
          <li class="app-footer__item list">
            <router-link :to="{ name: 'Gift-page' }" class="app-footer__link link">Gift cards</router-link>
          </li>
          <li class="app-footer__item list">
            <router-link to="/delivery" class="app-footer__link link">Delivery</router-link>
          </li>
        </ul>
        <ul class="app-footer__nav-list">
          <li class="app-footer__item list">
            <router-link to="/about" class="app-footer__link link">About company</router-link>
          </li>
          <li class="app-footer__item list">
            <a href="" class="app-footer__link link">Job opportunities</a>
          </li>
          <li class="app-footer__item list">
            <a href="" class="app-footer__link link">Privacy Policy</a>
          </li>
          <li class="app-footer__item list">
            <a href="" class="app-footer__link link">Terms of Use</a>
          </li>
          <li class="app-footer__item list">
            <a href="" class="app-footer__link link">Contact Us</a>
          </li>
        </ul>
        <div class="app-footer__social">
          <p>Follow us</p>
          <ul class="app-footer__social-list">
            <li class="app-footer__item list">
              <a href="" class="app-footer__social-link link">
                <img src="../../assets/facebook.svg" alt="facebook" class="app-footer__social-icon">
              </a>
            </li>
            <li class="app-footer__item list">
              <a href="" class="app-footer__social-link link">
                <img src="../../assets/instagram.svg" alt="instagram"
                class="app-footer__social-icon">
              </a>
            </li>
            <li class="app-footer__item list">
              <a href="" class="app-footer__social-link link">
                <img src="../../assets/twitter.svg" alt="twitter" class="app-footer__social-icon">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <p class="app-footer__copyright">
      &#169; 2023 CoffeeBuy. All rights reserved.
    </p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style lang="scss" src="./index.scss" />
