<template>
  <div id="app">
    <AppHeader />
    <SectionNovelty />
    <OrderSection />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader/index.vue';
import SectionNovelty from './components/Sections/SectionNovelty/index.vue';
import OrderSection from './components/Sections/OrderSection/index.vue';
import AppFooter from './components/AppFooter/index.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    SectionNovelty,
    OrderSection,
    AppFooter,
  },
};
</script>

<style lang="scss" src="./styles/index.scss" />
